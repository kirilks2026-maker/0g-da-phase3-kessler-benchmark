Markdown
# ⚡ 0G DA Phase 3 Kessler Cascade Benchmark

An open-source, high-fidelity stress-testing framework designed to isolate off-chain performance limitations of the **0G Data Availability (DA)** storage layer.

By bypassing EVM execution gas constraints (`--skip-tx`), this harness replicates a geometric **Kessler Cascade** workload using a multi-worker asynchronous swarm to evaluate true storage layer throughput and node allocation behavior under extreme parallel load.

---

## 🛠️ Key Features

* **EVM Bypass Mode:** Direct DA storage ingestion removing EVM gas limitations.
* **Asynchronous Multi-Worker Swarm:** Parallel processing with worker isolation and state tracking.
* **Circuit Breaker Safety Net:** Automated process termination when network failure rate exceeds standard threshold (70% drop rate trigger).
* **Automated Telemetry:** Generates structured JSON reports containing exact worker execution timelines, error spectra, and chunk hashes.

---

## 📂 Repository Structure

- `0g_labs_bug_report.md` — Comprehensive technical analysis report for 0G Labs
- `benchmark_detailed_report.json` — Raw benchmark telemetry and execution metrics
- `uploader.js` — Core multi-worker Kessler Cascade stress harness
- `package.json` — Dependencies (dotenv)
- `.env.example` — Environment configuration template
- `.gitignore` — Git exclusion rules
* assets/ — Terminal execution screenshots and visual evidence of Circuit Breaker triggers.
---

## 🚀 Quick Start & Reproduction

### 1. Installation

```bash
git clone https://github.com/kirilks2026-maker/0g-da-phase3-kessler-benchmark.git
cd 0g-da-phase3-kessler-benchmark
npm install
```

### 2. Configuration
Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```
Populate your worker private keys in `.env`.

### 3. Execution
Run the benchmark harness:

```bash
node uploader.js
```

### 📊 Benchmark Summary & Bug Report
Detailed telemetry, comparative analysis against Phase 2 (EVM-bound), and root-cause isolation logs are available in the official report:

👉 [Read the Full 0G Labs Bug Report (0g_labs_bug_report.md)](0g_labs_bug_report.md)

*Disclaimer: This benchmark is conducted purely for infrastructure research and performance audit purposes on the 0G Galileo Testnet.*
