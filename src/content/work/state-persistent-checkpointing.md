---
title: 'Ending duplicate transactions for KTNL First Bank'
subtitle: 'State-Persistent Checkpointing for KTNL First Bank'
summary: 'A bot extracting bank transactions kept re-processing the same records after errors. I gave it a memory, so it can safely retry without ever recording a transaction twice.'
category: Banking
order: 6
client: KTNL First Bank
impact: 'Zero duplicates · no manual clean-up'
challenge: 'Screen errors made the bot retry transactions, creating three times the records with no way to spot the duplicates.'
solution: 'Gave every transaction a unique fingerprint stored in a small local ledger, so retries skip anything already processed.'
result: 'Zero duplicates across 1.2M+ transactions a month, and 6 hours of daily clean-up removed.'
metrics:
  - value: '1.2M+'
    label: transactions a month, zero duplicates
  - value: '6h → 0'
    label: daily manual recovery work
  - value: '99.8%'
    label: system uptime
stack:
  - Automation Anywhere A360
  - Python
  - SQLite
  - Idempotency
  - State Management
diagram: /images/work/state-persistent-checkpointing.png
diagramAlt: 'Flow: RPA bot to transaction extractor to SHA-256 hash. Duplicates are skipped; new transactions are written to a SQLite checkpoint ledger, then to bank records. A 5-step recovery loop resumes from the last checkpoint.'
---

## The challenge

The bank's legacy UI threw exceptions during transaction extraction, so the RPA bot retried failed transactions with no idempotency guarantee. The result was 3× data duplication with no way to tell duplicates apart, and the ERP had no native queue support to lean on.

## The solution

A state-persistent checkpointing framework using SQLite as a local ledger:

- Every extracted transaction writes a checkpoint: transaction ID, timestamp and a SHA-256 hash of its identifying fields.
- On retry, the hash is checked against the ledger and known transactions are skipped.
- A 5-phase recovery state machine (initialise, state check, re-process, validate, resume) handles partial failures.

<details>
<summary>See the code</summary>

```python
import hashlib
import sqlite3

conn = sqlite3.connect("checkpoints.db")
conn.execute("""
    CREATE TABLE IF NOT EXISTS txn_ledger (
        txn_id    TEXT NOT NULL,
        amount    TEXT NOT NULL,
        tx_hash   TEXT NOT NULL UNIQUE,
        timestamp TEXT NOT NULL
    )
""")

def checkpoint_transaction(txn_id, amount, ref):
    tx_hash = hashlib.sha256(f"{txn_id}|{amount}|{ref}".encode()).hexdigest()

    # The UNIQUE constraint makes the check-and-insert atomic: a retry can
    # never write the same transaction twice, even if two runs overlap.
    cur = conn.execute(
        "INSERT OR IGNORE INTO txn_ledger (txn_id, amount, tx_hash, timestamp) "
        "VALUES (?, ?, ?, datetime('now'))",
        (txn_id, str(amount), tx_hash),
    )
    conn.commit()
    return {"status": "RECORDED" if cur.rowcount else "DUPLICATE", "txn_id": txn_id}
```

</details>

## The impact

Eliminated 100% of duplicate transactions. Manual recovery work dropped from 6 hours a day to zero. System uptime rose to 99.8% with no customer-facing data issues, across 1.2M+ transactions a month.

## What made it work

A checksum-based idempotency pattern that needed **zero changes** to the legacy ERP, letting RPA behave like a stateful service layer on top of deterministic enterprise software.
