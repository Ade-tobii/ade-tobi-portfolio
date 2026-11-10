---
title: 'AI that reads any vendor invoice'
subtitle: 'Intelligent Document Extraction with LangGraph, LangChain & Gemini · Tolaram Group'
summary: 'Template-based tools broke whenever a vendor changed their invoice layout, and they came with licensing fees. An AI extraction framework now reads invoices of any layout and checks every field before it is used.'
category: AI document processing
order: 5
impact: 'Any layout · licensing fees removed'
challenge: 'Invoice extraction relied on fixed templates that failed on new layouts and carried annual licensing costs.'
solution: 'An AI extraction framework where a language model reads the invoice and a strict schema validates every field before it reaches finance systems.'
result: 'Invoices are read regardless of layout, and thousands in annual licensing fees were eliminated.'
metrics:
  - value: 'Any'
    label: invoice layout, no templates needed
  - value: 'Every'
    label: field validated against a schema
  - value: 'Thousands'
    label: saved yearly in licensing fees
stack:
  - LangGraph
  - LangChain
  - Google Gemini
  - Pydantic
  - Python
---

## The problem

Vendor invoices arrive in every format imaginable. The existing approach depended on fixed templates: when a vendor changed their layout, extraction broke and someone had to fix it. The tooling also carried annual licensing fees.

## What I built

An end-to-end intelligent document extraction framework:

- **Reading.** A LangGraph workflow uses Google Gemini to read each invoice the way a person would, whatever its layout.
- **Checking.** Every extracted field is validated against a strict Pydantic schema. If the output doesn't match, it is rejected rather than passed on.

This is the principle I apply to all AI work: let the model handle the messy input, and let clear rules decide what's trusted.

## The result

Invoices are processed **without templates**, new vendor layouts don't need any setup, and the framework **eliminated thousands in annual licensing fees**.
