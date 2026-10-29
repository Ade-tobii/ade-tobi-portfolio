---
title: 'Two days of reporting, done before lunch'
subtitle: 'Scalable Business Unit Reporting Bot · Tolaram Group'
summary: 'Reports for 32 facilities used to take 48 hours of manual work. One bot now produces them in 96 minutes, and adds new business units without being rebuilt.'
category: Operations reporting
order: 1
impact: '48 hours → 96 minutes'
challenge: 'Producing reports for 32 separate facilities took 48 hours of manual work, and every new business unit added more.'
solution: 'One bot that processes each facility in turn, with a retry framework that checks its session and recovers from failures on its own.'
result: 'The whole run takes 96 minutes, about 3 minutes per facility, and new units are picked up automatically.'
metrics:
  - value: '48h → 96m'
    label: total reporting time
  - value: '32'
    label: facilities covered by one bot
  - value: '~3 min'
    label: per facility
stack:
  - Automation Anywhere A360
  - Excel
  - Master Retry Framework
---

## The problem

Each of 32 facilities needed its own report, built by hand from the same set of steps. It added up to 48 hours of manual work per cycle, and every time the business onboarded a new unit, the workload grew.

## What I built

A single reporting bot that loops through every facility dynamically, rather than one hard-coded script per site.

- **Built to grow.** The list of facilities is data, not code, so new business units are included without touching the bot.
- **Built to recover.** A Master Retry Framework verifies the session before each step and breaks out of stuck loops cleanly, so one bad facility doesn't stop the run.

## The result

The full run now takes **96 minutes, about 3 minutes per facility**, down from 48 hours. The bot has needed no structural changes as new locations have come on board.
