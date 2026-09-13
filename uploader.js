const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const crypto = require('crypto');

const envPath = fs.existsSync(path.join(__dirname, '.env')) 
    ? path.join(__dirname, '.env') 
    : path.join(__dirname, '../.env');

require('dotenv').config({ path: envPath });

// Конфигурация
const CLI_PATH = path.join(__dirname, '../0g-storage-client/0g-storage-client');
const RPC_URL = process.env.RPC_URL || 'https://evmrpc-testnet.0g.ai';
const INDEXER_URL = process.env.INDEXER_URL || 'https://indexer-storage-testnet-turbo.0g.ai';
const CHUNK_SIZE_MB = 350;

// Цвета для консоли
const C = {
    cyan: (s) => `\x1b[36m${s}\x1b[0m`,
    green: (s) => `\x1b[32m${s}\x1b[0m`,
    yellow: (s) => `\x1b[33m${s}\x1b[0m`,
    red: (s) => `\x1b[31m${s}\x1b[0m`,
    gray: (s) => `\x1b[90m${s}\x1b[0m`,
    bold: (s) => `\x1b[1m${s}\x1b[0m`
};

// Загрузка приватных ключей воркеров
const privateKeys = Object.keys(process.env)
    .filter(key => key.startsWith('PRIVATE_KEY_'))
    .map(key => process.env[key].replace(/['"\r\n\s]/g, '').trim())
    .map(pk => pk.startsWith('0x') ? pk.slice(2) : pk)
    .filter(pk => pk.length === 64);

const sleep = (ms) => new Promise(res => setTimeout(res, ms));

// Выделяем 350 МБ в RAM один раз для экономии CPU и исключения ошибок записи
console.log(C.gray(`⚡ Allocating 350MB base RAM buffer...`));
const BASE_350MB_BUFFER = Buffer.alloc(CHUNK_SIZE_MB * 1024 * 1024, '0G_PHASE_3_DATA_MULTIPLIER_BASE_SWARM_');

function generateMutatedFile(filePath) {
    const fd = fs.openSync(filePath, 'w');
    fs.writeSync(fd, BASE_350MB_BUFFER, 0, BASE_350MB_BUFFER.length);
    fs.writeSync(fd, crypto.randomBytes(16));
    fs.closeSync(fd);
}

const benchmarkReport = {
    timestamp: new Date().toISOString(),
    framework_phase: "Phase-3 (Direct DA Ingestion Marathon)",
    chunk_size_mb: CHUNK_SIZE_MB,
    summary: {
        total_success_txs: 0,
        total_failed_txs: 0,
        total_payload_uploaded_mb: 0
    },
    epochs: []
};

async function uploadBatchAsync(workerIndex, key, tag) {
    const workerId = workerIndex + 1;
    const fileName = `dummy_w${workerId}_t${tag}.tmp`;
    const filePath = path.join(__dirname, fileName);

    try {
        generateMutatedFile(filePath);
        const cmd = `${CLI_PATH} upload --url ${RPC_URL} --indexer ${INDEXER_URL} --key ${key} --file ${filePath} --skip-tx`;

        return new Promise((resolve) => {
            const start = Date.now();
            exec(cmd, (error, stdout, stderr) => {
                if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
                const timeSec = parseFloat(((Date.now() - start) / 1000).toFixed(2));

                if (error) {
                    const errLine = (stderr || error.message).split('\n')[0];
                    console.log(C.red(`   [Worker #${workerId} | Tag ${tag}] Failed: ${errLine}`));
                    resolve({ success: false, workerId, timeSec, error: errLine });
                } else {
                    console.log(C.green(`   [Worker #${workerId} | Tag ${tag}] Ingested 350MB in ${timeSec}s`));
                    resolve({ success: true, workerId, timeSec });
                }
            });
        });
    } catch (e) {
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
        return { success: false, workerId, error: e.message };
    }
}

async function startLiveSwarm() {
    console.log(C.bold(C.cyan(`\n🚀 [Phase 3] Starting Kessler Cascade (Direct Ingestion Marathon)`)));
    console.log(C.cyan(`📊 Configuration: ${privateKeys.length} Workers | 350MB per chunk | Replicating Phase 2 Cascade\n`));
    
    if (privateKeys.length === 0) {
        console.log(C.red('❌ No valid 64-character private keys found in .env!'));
        return;
    }

    const multiplier = 10;

    for (let epoch = 1; epoch <= 10; epoch++) {
        const totalChunksInEpoch = epoch * multiplier; 
        console.log(C.bold(C.yellow(`\n➔ 🧭 Running Epoch x${epoch} [Target: ${totalChunksInEpoch} Chunks (${(totalChunksInEpoch * CHUNK_SIZE_MB / 1024).toFixed(1)} GB) | Simultaneity Burst]`)));
        
        const epochStart = Date.now();
        let successfulChunks = 0;
        let failedChunks = 0;
        const epochResults = [];

        for (let chunkIndex = 0; chunkIndex < totalChunksInEpoch; chunkIndex += privateKeys.length) {
            const tasks = [];
            const activeWorkers = Math.min(privateKeys.length, totalChunksInEpoch - chunkIndex);

            for (let i = 0; i < activeWorkers; i++) {
                tasks.push(uploadBatchAsync(i, privateKeys[i], `${epoch}_c${chunkIndex + i}`));
                await sleep(300);
            }

            const batchResults = await Promise.all(tasks);
            
            batchResults.forEach(r => {
                epochResults.push(r);
                if (r.success) successfulChunks++;
                else failedChunks++;
            });

            if (totalChunksInEpoch > privateKeys.length) {
                console.log(C.gray(`   [Progress] Ingested ${successfulChunks}/${totalChunksInEpoch} chunks...`));
            }
        }

        const epochTimeSec = parseFloat(((Date.now() - epochStart) / 1000).toFixed(2));
        const dropRate = parseFloat(((failedChunks / totalChunksInEpoch) * 100).toFixed(1));

        benchmarkReport.epochs.push({
            epoch: epoch,
            total_chunks: totalChunksInEpoch,
            duration_sec: epochTimeSec,
            successful: successfulChunks,
            failed: failedChunks,
            drop_rate_percent: dropRate,
            details: epochResults
        });

        benchmarkReport.summary.total_success_txs += successfulChunks;
        benchmarkReport.summary.total_failed_txs += failedChunks;
        benchmarkReport.summary.total_payload_uploaded_mb += (successfulChunks * CHUNK_SIZE_MB);

        console.log(C.bold(`📈 Epoch x${epoch} Finished: ${successfulChunks} OK / ${failedChunks} Failed | Duration: ${epochTimeSec}s | Drop Rate: ${dropRate}%`));

        if (dropRate > 30.0) {
            console.log(C.bold(C.red(`\n🛑 [Circuit Breaker] Drop Rate reached ${dropRate}%! Triggering emergency shutdown...`)));
            break;
        }
    }

    const reportPathLocal = path.join(__dirname, 'benchmark_detailed_report.json');
    const reportPathRoot = path.join(__dirname, '../benchmark_detailed_report.json');
    const reportData = JSON.stringify(benchmarkReport, null, 4);
    
    fs.writeFileSync(reportPathLocal, reportData);
    fs.writeFileSync(reportPathRoot, reportData);
    
    console.log(C.bold(C.cyan(`\n💾 Benchmarking complete. Telemetry saved to:`)));
    console.log(C.gray(`   - ${reportPathLocal}`));
    console.log(C.gray(`   - ${reportPathRoot}`));
    console.log(C.bold(C.green(`🏁 Total Data Successfully Ingested to 0G DA: ${benchmarkReport.summary.total_payload_uploaded_mb} MB\n`)));
}

startLiveSwarm();
