---
title: '3,000+ employee loan requests, filed automatically'
subtitle: 'HR Document Orchestration with SuccessFactors & Microsoft Graph API · Tolaram Group'
summary: 'Loan documents had to be found in SharePoint and attached to the right record in SuccessFactors, one by one. A pipeline now does it in 60–90 seconds each, and flags anything that does not match.'
category: HR operations
order: 4
impact: '3,000+ requests · 100% audit integrity'
challenge: 'HR staff manually matched loan documents in SharePoint to employee records in SuccessFactors, at 2+ minutes per request.'
solution: 'A pipeline that fetches files through Microsoft Graph API, uploads them to SuccessFactors, and routes each one to a Completed or Exception folder.'
result: '3,000+ requests processed at 60–90 seconds each, with no documents attached to the wrong employee.'
metrics:
  - value: '3,000+'
    label: employee loan requests processed
  - value: '60–90s'
    label: per request, down from 2+ minutes
  - value: '100%'
    label: audit integrity on multi-loan batches
stack:
  - SAP SuccessFactors
  - SharePoint
  - Microsoft Graph API
  - Regex
---

## The problem

For the Dufil operating entity, every employee loan request came with documents stored in SharePoint that had to be attached to the right employee record in SuccessFactors. Done by hand, each one took more than two minutes, and with employees holding several loans at once it was easy to attach a file to the wrong request.

## What I built

A cloud document routing pipeline:

- **Retrieval.** Files are pulled from SharePoint programmatically through Microsoft Graph API.
- **Upload.** Each document is attached to the correct record in SuccessFactors automatically.
- **Routing.** Every file lands in a _Completed_ or _Exception_ folder, so people only look at the cases that need them.
- **Fail-loud checks.** Strict pattern matching isolates employee IDs and loan types, so documents can't collide across batches. Anything ambiguous is stopped and flagged, never guessed.

## The result

The pipeline has processed **3,000+ loan requests** at **60–90 seconds each**, with 100% audit integrity across multi-loan batches.
