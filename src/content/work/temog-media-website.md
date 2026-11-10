---
title: 'A brand studio website that alerts the team the moment a lead lands'
subtitle: 'Agency Website, Installable Admin App & Real-Time Lead Alerts · Temog Media'
summary: 'A Lagos branding agency had no website and was easy to miss on enquiries. I built their full site, plus a phone-friendly admin app that alerts staff the second someone sends a project brief.'
category: Web & lead capture
order: 3
impact: 'New enquiry → phone alert in ~1 second'
challenge: 'Temog Media relied on referrals and social media. There was nowhere to send people to see their work, and enquiries sent by message were easy to miss.'
solution: 'A fast, search-ready website with a project brief form, and an installable admin app that sends push alerts to staff phones and laptops.'
result: 'The team hears about every new enquiry in about a second, on whichever device is nearby, and updates go live automatically.'
metrics:
  - value: '~1s'
    label: from enquiry to phone alert
  - value: '8'
    label: service pages with their own FAQs and search data
  - value: '3'
    label: platforms for alerts (iPhone, Android, desktop)
stack:
  - Next.js
  - TypeScript
  - Turso (SQLite)
  - Web Push
  - Drizzle ORM
  - Tailwind CSS
  - Render
liveUrl: https://temog-web.onrender.com
diagram: /images/work/temog-media-website.png
diagramAlt: 'Temog Media homepage: a dark page with the headline "Brands that refuse to be copied." and buttons to start a project or see their work.'
diagramCaption: 'The live Temog Media homepage (click to enlarge)'
---

## The problem

Temog Media is a branding and creative agency in Lagos. Their clients came through referrals and social media only. There was no single place to show their work, explain their services, or take a proper brief, and enquiries arriving by message were easy to lose. On a branding project, a slow reply often means the client goes elsewhere.

## What I built

A complete website and the tools behind it:

- **A fast, search-ready website** with portfolio, services, about, contact and FAQ pages. Every page tells search engines exactly what Temog does and where, using structured data, page-specific titles, a sitemap and a summary for AI search tools.
- **A project brief form** that saves every enquiry to a database and emails a backup copy.
- **A private admin app** the team installs on their phones like any other app. They manage enquiries, newsletter subscribers and portfolio projects from it.
- **Instant push alerts.** A new enquiry pings every phone or laptop that has alerts turned on, even when the app is closed. Each person chooses what they want to be alerted about.
- **A built-in setup guide** with separate steps for iPhone, Android and computer, so non-technical staff can turn on alerts without help.

## The result

The team now hears about a new enquiry in **about one second**, on whichever device they have nearby. Every update goes live automatically when it's pushed to GitHub. It's also built to move to a new domain without rebuilding anything.
