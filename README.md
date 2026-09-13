⚡ 0G DA Kessler Cascade Benchmark & Adaptive Profiler

An open-source, high-fidelity stress-testing framework designed to isolate off-chain performance limitations of the 0G Data Availability (DA) storage layer.
By bypassing EVM execution gas constraints (`--skip-tx`), this harness replicates a geometric Kessler Cascade workload using a multi-worker asynchronous swarm to evaluate true storage layer throughput and node allocation behavior under extreme parallel load.

---

## 📂 Repository Structure

* `uploader.js` — **Phase 3 Baseline Engine**: Direct ingestion mode (`--skip-tx`) with per-chunk Merkle Root suffix mutation to isolate storage indexer timeouts from EVM/gas limits.
* `uploader_phase4.js` — **Phase 4 Adaptive Dynamic Profiler**: Scalable payload engine (50MB → 500MB) with full-buffer high-entropy noise generation (`crypto.randomBytes`) and automated Circuit Breaker protection.
* `benchmark_detailed_report.json` — Raw telemetry report for Phase 3 baseline testing.
* `benchmark_phase4_report.json` — Raw telemetry report for Phase 4 adaptive profiling.
* `0g_labs_bug_report.md` — Comprehensive technical analysis report for 0G Labs.
* `assets/` — Terminal execution screenshots and visual evidence of Circuit Breaker triggers.

---

## 🛠️ Key Features

* **EVM Bypass Mode**: Direct DA storage ingestion removing EVM gas limitations (`--skip-tx`).
* **Asynchronous Multi-Worker Swarm**: Parallel processing with worker isolation and state tracking.
* **Anti-Compression & Anti-Deduplication (Phase 4)**: Full RAM buffer high-entropy noise (`crypto.randomBytes`) and Merkle Root mutations to prevent client-side or indexer-side data compression/caching false-positives.
* **Circuit Breaker Safety Net**: Automated process termination when network failure rate exceeds safety thresholds (30%–70% drop rate triggers).
* **Automated Telemetry**: Generates structured JSON reports containing exact worker execution timelines, error spectra, and chunk hashes.

---

## 📊 Phase 3 Baseline Findings

Phase 3 focused on direct DA ingestion bypassing EVM mempool and gas constraints. Key takeaways:
* Bypassed gas bottlenecks entirely, reaching peak storage throughput of ~3.8 MB/s up to 56 GB ingested.
* Isolated network failure mode under cascading load (60 parallel chunks at Epoch x6) to Indexer storage node allocation timeouts (`Selecting nodes ...`).
* Triggered Circuit Breaker at a 70% drop rate.

👉 **Read the Full Phase 3 Bug Report**: `0g_labs_bug_report.md`

---

## ⚡ Phase 4: Dynamic Adaptive Ingestion Profiling Results

### Methodology & Anti-Optimization Guards
To eliminate any potential background data compression (such as `gzip`/`zstd`) or hash-matching deduplication false-positives, Phase 4 enforced strict payload constraints:
1. **Full-Buffer Cryptographic Entropy**: switched the entire RAM buffer to pure `crypto.randomBytes` per chunk, forcing honest, uncompressible physical disk and network processing.
2. **Per-Chunk Merkle Mutation**: maintained unique Merkle Root suffix generation for every chunk request.
3. **Adaptive Circuit Breaker**: automatically halts profiling when chunk drop rate exceeds **30%**.

### Empirical Findings
* **Swarm Configuration**: 10 Concurrent Workers (20 Parallel Chunks).
* **Failure Threshold Isolated**: The 0G Storage Indexer strictly hits its allocation ceiling at **50MB per chunk** (~1.0 GB total simultaneous burst).
* **Degradation Profile**: At this 50MB/chunk threshold, response failure peaked at a **50% Drop Rate**, consistently freezing at the `Selecting nodes ...` dispatcher stage.
* **Conclusion**: Node selection timeouts are directly tied to uncompressible payload volume per concurrent request, rather than EVM gas constraints or RPC limits.

---

## 🚀 Quick Start & Reproduction

### Prerequisites & Dependencies

- **Node.js** (v18+)
- **0G Storage Client Binary**: Compiled `0g-storage-client` executable must be present at `../0g-storage-client/0g-storage-client` (or added to your system `PATH`).

### 1. Installation

```bash
git clone https://github.com
cd 0g-da-phase3-kessler-benchmark
npm install
```

### 2. Configuration

Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

### 3. Execution

Run Phase 3 Baseline Benchmark:
```bash
node uploader.js
```

Run Phase 4 Adaptive Profiler:
```bash
node uploader_phase4.js
```

---
*Disclaimer: This benchmark is conducted purely for infrastructure research and performance audit purposes on the 0G Galileo Testnet.*

