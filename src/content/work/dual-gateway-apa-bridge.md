---
title: 'One AI-assisted pipeline for structured data and chat messages'
subtitle: 'Dual-Gateway APA Bridge'
summary: 'Requests arrived both as structured data and as free-text Slack and Teams messages, and the old system choked on the messy half. I built a pipeline where AI reads the messages and strict checks keep the data clean.'
category: AI workflows
order: 8
impact: '99.8% of inputs handled automatically'
challenge: "The existing system couldn't handle free-text messages alongside structured data, so 40% of inputs failed."
solution: "An n8n workflow where an AI agent reads the free text, then the same validation rules apply to everything before it's saved."
result: '99.8% of inputs handled automatically across 5 channels, in under 2 seconds each.'
metrics:
  - value: '60% → 99.8%'
    label: payload validation success rate
  - value: '< 2s'
    label: processing latency per message
  - value: '5'
    label: concurrent input channels unified
stack:
  - n8n
  - LLM Orchestration
  - Gemini
  - Grok
  - JavaScript
  - BigQuery
diagram: /images/work/dual-gateway-apa-bridge.png
diagramAlt: 'Two gateways: Slack/Teams text flows through Gateway 2 to an LLM agent (Gemini with Grok fallback) and entity extraction; webhooks flow through Gateway 1, a schema validator and a canonical schema. Both merge into a unified output in Airtable and BigQuery.'
---

## The challenge

Legacy enterprise systems couldn't handle mixed input types: structured JSON from webhooks **and** unstructured conversational messages from Slack and Teams. Payload validation failed 40% of the time because of format inconsistency, and messages were lost.

## The solution

A dual-gateway n8n pipeline:

- **Gateway 1** takes structured webhooks and validates them against a schema.
- **Gateway 2** sends unstructured text through a multi-model LLM agent (Gemini for the heavy lifting, Grok as fallback) that extracts entities and normalises them to the same canonical schema.
- A JavaScript fail-safe layer re-validates everything before it reaches the tracking layer, so model output is never trusted blindly.

<details>
<summary>See the code</summary>

```javascript
// Validate structured input first; fall back to LLM normalisation, then
// re-validate so nothing unverified reaches the tracking layer.
async function safeDeserialize(payload, schema) {
  try {
    return { success: true, data: validateAgainstSchema(payload, schema) };
  } catch {
    const normalized = await normalizeWithLLM(payload);
    return {
      success: true,
      data: validateAgainstSchema(normalized, schema),
      normalized: true
    };
  }
}

// const result = await safeDeserialize(input, canonicalSchema);
```

</details>

## The impact

99% uptime across 5 concurrent input channels. Validation success rose from 60% to 99.8%, with latency under 2 seconds per message and no security incidents despite processing PII-laden conversational data. All inputs now land in a single tracking layer (Airtable + BigQuery).

## What made it work

A dual-path pattern where LLM agents _augment_ deterministic validation rather than replace it, letting legacy systems absorb unstructured data without a redesign.
