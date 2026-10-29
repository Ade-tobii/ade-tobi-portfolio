# Ade Tobi: Automation Solutions Architect

Personal portfolio of **Adegboyega Precious (Ade Tobi)**. It's a static site:
no server, no database, nothing to patch, and free to host.

## Stack

| Layer     | Choice                               | Why                                                                                       |
| --------- | ------------------------------------ | ----------------------------------------------------------------------------------------- |
| Framework | [Astro 5](https://astro.build)       | Outputs plain HTML, so it loads fast and ranks well. Ships almost no JavaScript.          |
| Content   | Markdown + typed content collections | Each case study is one `.md` file. The build fails if a required field is missing.        |
| Styling   | Plain CSS with design tokens         | One file (`src/styles/global.css`), no framework to learn.                                |
| Code      | Shiki (built into Astro)             | Syntax highlighting at build time. No client-side Prism.                                  |
| Contact   | Your own **n8n** webhook             | The form posts JSON to your workflow, so the portfolio itself shows your automation work. |
| Hosting   | Vercel, Netlify or Cloudflare Pages  | Free tier, deploys on every push, HTTPS and custom domain included.                       |

## Run it locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
```

Requires Node 18.20+ (Node 22 recommended).

## Editing content

| What                                                                                                    | Where                                           |
| ------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| Name, headline, intro, links, hero card, metrics, services, about, experience, side projects, education | `src/config/site.ts`                            |
| Case studies                                                                                            | `src/content/work/*.md`                         |
| Your photo                                                                                              | `public/images/`, then set `photo` in `site.ts` |
| Diagrams                                                                                                | `public/images/work/`                           |
| Colours (light and dark), fonts, spacing                                                                | top of `src/styles/global.css`                  |

The first three case studies (by `order`) appear as large cards on the home
page; the rest appear in the smaller "More case studies" grid. A case study
without a `diagram` shows its headline result on a blue panel instead.

**Employer / business cards, contact options and tool filters** are also in
`site.ts` (`audiences`, `contactIntents`, `toolFilters`). A filter appears only
when at least one case study or side project uses a matching tool, and filtered
views can be shared as links like `/?tool=n8n#work`.

**Add a case study:** copy one of the files in `src/content/work/`, rename it
(the filename becomes the URL, e.g. `my-build.md` → `/work/my-build/`), and
edit the frontmatter and body. `order` controls its position. Set
`draft: true` to hide it.

**Add your CV:** put the PDF at `public/resume.pdf`, set
`resumeUrl: '/resume.pdf'` in `src/config/site.ts`, and commit it with
`git add -f public/resume.pdf`. PDFs are gitignored by default so nothing
personal gets committed by accident.

## Contact form → n8n

1. In n8n, create a workflow with a **Webhook** node (POST).
2. In the Webhook node options, allow your site's origin under **Allowed Origins (CORS)**.
3. Set `PUBLIC_CONTACT_WEBHOOK_URL` to the production webhook URL in your host's
   environment variables (and in `.env` locally).

The payload is
`{ intent, intent_label, name, company, email, bottleneck, submitted_at, source }`,
where `intent` is `project`, `hiring` or `other` (from "I'm getting in touch about").

### Optional: instant reply

If the workflow responds with JSON like this, the page shows it under the form:

```json
{ "reply": "Thanks Sam, this sounds like…", "related_case": "ai-invoice-extraction" }
```

- `reply` (or `output`, the AI Agent node's default) is shown as plain text, max 1,500 characters.
- `related_case` is optional and must be a case study slug (a filename in
  `src/content/work/` without `.md`). Unknown slugs are ignored.
- To use it, set the Webhook node's **Respond** option to _Using 'Respond to Webhook' node_.
  Any other response (e.g. "Workflow was started") shows the normal thank-you message.
- The page waits up to 30 seconds for a reply.
  The URL is visible in the page source, so use a webhook dedicated to this form
  and add rate limiting or a spam check in the workflow. A hidden honeypot field
  already drops most bots.

Without the variable, the form opens the visitor's email client instead.

## Deploy

1. Push this repo to GitHub.
2. Import it in Vercel, Netlify or Cloudflare Pages. The framework is detected
   automatically: build command `npm run build`, output folder `dist`.
3. Set environment variables:
   - `SITE_URL`: your domain, e.g. `https://adetobi.dev` (enables canonical URLs and `sitemap.xml`)
   - `PUBLIC_CONTACT_WEBHOOK_URL`: your n8n webhook
4. Add your custom domain in the host's dashboard.

## Layout

```
src/
  config/site.ts          All personal content except case studies
  content/work/*.md       Case studies (one file = one page)
  content.config.ts       Case-study schema
  components/             Page sections (Hero, Work, Contact, CommandPalette, …)
  layouts/Base.astro      <head>, SEO, structured data, nav, footer
  pages/                  index, work/[slug], 404
  styles/global.css       Design system
public/                   Static files (diagrams, favicon, robots.txt)
```
