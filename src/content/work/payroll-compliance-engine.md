---
title: 'Payroll compliance in seconds, not hours'
subtitle: 'Autonomous Payroll & Statutory Compliance Engine · Tolaram Group'
summary: 'Every payroll cycle, someone spent four hours building six statutory schedules by hand. A Python engine now generates all of them in seconds.'
category: Payroll & HR
order: 2
impact: '4 hours → seconds per cycle'
challenge: 'Six statutory schedules (ITF, NSITF, PAYE and Pension) were prepared manually for 100+ staff each cycle, taking about four hours.'
solution: 'A Python processing engine that reads the payroll data, separates contract and permanent staff, and produces every schedule automatically.'
result: 'Reconciliation now takes seconds per cycle, with consistent output every time.'
metrics:
  - value: '4h → secs'
    label: reconciliation time per cycle
  - value: '6'
    label: statutory schedules generated
  - value: '100+'
    label: contract and permanent staff
stack:
  - Python
  - openpyxl
  - Regex
---

## The problem

Every payroll cycle, the team had to produce six statutory compliance schedules (ITF, NSITF, PAYE and Pension) for more than 100 contract and permanent staff. It was careful, repetitive spreadsheet work that took around four hours, and a single slip could mean a compliance issue.

## What I built

An end-to-end Python processing wrapper that:

- reads the payroll workbook and identifies each employee's category,
- uses pattern matching to pick out the right fields reliably, and
- writes all six schedules in the required format.

## The result

Reconciliation went from **about four hours to seconds per cycle**. The schedules come out the same way every time, which makes them easier to check and audit.
