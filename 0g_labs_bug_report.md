# 🚨 0G STORAGE DA INGESTION BENCHMARK REPORT
**Target Network:** `evmrpc-testnet.0g.ai`
**Timestamp (UTC):** 2026-09-07 19:55:07
**Tester Experience:** Infrastructure Stress-Test Simulation (Phase 2)

---

## 📊 1. BENCHMARK EXECUTIVE SUMMARY
* **Total Sectors Pushed:** `280`
* **Successful Ingestions:** `211`
* **Network Drops (Failed):** `69`
* **Overall Failure Rate:** `24.64%`

### 💥 CRITICAL NETWORK DEGRADATION POINT
> **Status:** ❌ Множитель x7 (Drop Rate в эпохе: 98.57%)

---

## 🔍 2. ERROR SPECTRUM ANALYTICS (Top unique logs)
Ниже приведены уникальные ошибки, зафиксированные при падении ноды:

* **[4 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:27:01Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[4 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:25:08Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[2 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:46:08Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[2 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:44:25Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[2 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:40:53Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[2 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:39:00Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[2 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:37:18Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[2 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:35:32Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[2 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:33:38Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[2 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:31:56Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[2 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:30:32Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[2 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:28:51Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:54:10Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:53:39Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:53:08Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:53:07Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:52:32Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:51:53Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:51:25Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:51:16Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:51:00Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:50:11Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:49:45Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:49:32Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:49:14Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:48:27Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:47:57Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:47:48Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:47:30Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:46:46Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:45:49Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:45:04Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:44:08Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:43:29Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:42:40Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:42:39Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:42:25Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:41:49Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:40:54Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:40:10Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:39:12Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:38:29Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:37:29Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:36:52Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:35:49Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:35:19Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:34:09Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:33:47Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:32:24Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:32:04Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:31:02Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:29:54Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`
* **[1 occurrences]** `"\u001b[36mINFO\u001b[0m[2026-09-07T19:28:31Z] Selecting nodes ...                           \u001b[36mINFO\u001b[0m[202...`

---

## 🛰️ 3. CONCURRENT OPERATORS STATE MATRICES
Распределение нагрузки по параллельным кошелькам (спутникам):

| Satellite ID | Total Attempts | Success | Failed | Status |
|--------------|----------------|---------|--------|--------|
| Sat #01 | 28 | 22 | 6 | 🟡 DROPPING |
| Sat #02 | 28 | 21 | 7 | 🟡 DROPPING |
| Sat #03 | 28 | 21 | 7 | 🟡 DROPPING |
| Sat #04 | 28 | 21 | 7 | 🟡 DROPPING |
| Sat #05 | 28 | 21 | 7 | 🟡 DROPPING |
| Sat #06 | 28 | 21 | 7 | 🟡 DROPPING |
| Sat #07 | 28 | 21 | 7 | 🟡 DROPPING |
| Sat #08 | 28 | 21 | 7 | 🟡 DROPPING |
| Sat #09 | 28 | 21 | 7 | 🟡 DROPPING |
| Sat #10 | 28 | 21 | 7 | 🟡 DROPPING |
