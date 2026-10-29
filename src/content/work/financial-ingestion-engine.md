---
title: 'Zero data loss on 200 MB market data feeds'
subtitle: 'High-Volume Financial Ingestion Engine & Container Runtime Optimisation'
summary: 'A financial data pipeline kept crashing on very large market data files, losing records each time. I fixed it at the infrastructure level, so every record now arrives, every day.'
category: Financial market data
order: 6
impact: 'Zero data loss · zero crashes'
challenge: 'Very large market data files crashed the ingestion service, losing data and forcing manual recovery.'
solution: 'Tuned the server environment to accept the larger files, split the data into smaller predictable batches, and added automatic retries.'
result: 'Every record captured across 50+ daily feeds, with no crashes in 180+ days.'
metrics:
  - value: '100%'
    label: data capture across 50+ daily equity feeds
  - value: '180+ days'
    label: production uptime with zero crash events
  - value: '+340%'
    label: processing throughput
stack:
  - Node.js
  - Docker
  - API Architecture
  - Circuit Breaker
diagram: /images/work/financial-ingestion-engine.png
diagramAlt: 'Pipeline: Market API (200 MB+ JSON) into a Docker container with NODE_OPTIONS header-size tuning, then a time-series chunker, a circuit breaker and 100% data capture.'
---

## The challenge

Massive institutional JSON payloads (200 MB+) triggered low-level Node.js HTTP parser crashes with `HPE_HEADER_OVERFLOW` errors. Each crash caused data loss and needed manual recovery, creating a bottleneck in the financial processing pipeline.

## The solution

A three-layer approach:

1. **Runtime tuning.** Configured the Docker container boot with `NODE_OPTIONS` to expand the HTTP header buffer limit from 16 KB to 80 KB.
2. **Algorithmic chunking.** Added dynamic time-series constraints to the API query logic so payloads are split into predictable windows.
3. **Resilience.** Wrapped the upstream calls in a circuit breaker with exponential backoff.

<details>
<summary>See the code</summary>

```bash
#!/bin/bash
# Docker entrypoint
export NODE_OPTIONS="--max-http-header-size=81920"
export NODE_ENV="production"
exec node --enable-source-maps server.js
```

</details>

## The impact

100% data capture reliability across 50+ daily equity market feeds. Zero container crash events in 180+ days of production uptime. Processing throughput increased by 340% thanks to optimised buffer management.

## What made it work

Reverse-engineering the parser constraint and fixing it at the container orchestration layer, instead of patching symptoms in application code. This is now my blueprint for high-throughput financial data pipelines.
