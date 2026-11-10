/**
 * Everything personal on the site lives here (case studies live in
 * src/content/work/). Edit this file to update the portfolio.
 */

export const profile = {
  name: 'Adegboyega Precious',
  alias: 'Ade Tobi',
  role: 'AI Automation Specialist & Automation Solutions Architect',
  shortRole: 'Automation Solutions Architect',
  headline: 'I automate the slow, error-prone work that holds finance and operations teams back.',
  intro:
    "I design bots and AI-assisted workflows that take repetitive work off people's desks, from payroll and bank reconciliations to HR documents and vendor invoices, and I build them to keep running when things go wrong.",
  location: 'Lagos, Nigeria (GMT+1)',
  availability: 'Open to global remote roles and B2B contracts',
  email: 'adeprecious62@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/ade-tobi',
    github: 'https://github.com/Ade-tobii'
  },
  /**
   * Square head-and-shoulders photo for the round avatars (nav, hero).
   * Leave empty to show your initials instead.
   */
  photo: '/images/ade-avatar.jpg',
  /** Taller portrait for the About section. Leave empty to use the round photo. */
  portrait: '/images/ade-portrait.jpg',
  /** Path or URL to your CV. Leave empty to hide the CV button. e.g. '/resume.pdf' */
  resumeUrl: '/Resume.pdf',
  seo: {
    title: 'Adegboyega Precious | AI Automation Specialist & Solutions Architect',
    description:
      'Adegboyega Precious (Ade Tobi) builds automation for finance, HR and operations teams: RPA, AI document processing and n8n workflows that save hours every week. Based in Lagos, open to remote work.',
    /** Optional 1200x630 image in /public for link previews, e.g. '/og.png' */
    ogImage: '/og.png'
  }
};

/** The before/after card in the hero. Pick your most relatable win. */
export const heroStory = {
  kicker: 'Recent result',
  title: 'Business unit reporting',
  context: '32 facilities, one bot',
  before: { label: 'Before (manual)', value: '48 hours', ratio: 1 },
  after: { label: 'After (automated)', value: '96 minutes', ratio: 96 / (48 * 60) },
  notes: ['About 3 minutes per facility', 'Picks up new business units automatically']
};

/** Headline numbers under the hero. All taken from the CV. */
export const metrics = [
  { value: '₦100M+', label: 'in monthly enterprise transactions run through bots I maintain' },
  { value: '99%', label: 'bot uptime across production automations' },
  { value: '3,000+', label: 'employee loan requests processed automatically' },
  { value: '15+', label: 'commercial banks reconciled without manual work' }
];

export const services = [
  {
    icon: 'bot',
    title: 'Automate repetitive back-office work',
    body: 'Bots that handle reporting, reconciliation, payroll schedules and data entry, with safeguards so nothing is processed twice and every exception is flagged.',
    tools: ['Automation Anywhere A360', 'UiPath', 'Power Platform', 'Python']
  },
  {
    icon: 'sparkles',
    title: 'Put AI to work on messy documents',
    body: 'Invoices, emails and chat messages: AI reads the unstructured material, and strict schemas make sure only clean, validated data reaches your systems.',
    tools: ['LangGraph', 'LangChain', 'Gemini', 'Pydantic', 'n8n']
  },
  {
    icon: 'flow',
    title: 'Connect the systems you already use',
    body: 'SAP, SuccessFactors, SharePoint, banking portals and email, joined up through APIs so information flows without anyone copying it across.',
    tools: ['SAP GUI', 'SuccessFactors', 'Microsoft Graph API', 'Oracle SQL']
  }
] as const;

/** How you work, in plain language. */
export const principles = [
  {
    title: 'Safe to run twice',
    body: 'If a process stops halfway, it can simply run again. Nothing gets duplicated and nothing gets lost.'
  },
  {
    title: 'AI where it helps, rules where it matters',
    body: 'AI handles the messy, human input. Clear rules decide what actually reaches your records.'
  },
  {
    title: 'Fail loudly, recover quietly',
    body: 'Anything unexpected is flagged straight away, never guessed at. Everything else retries and picks up where it left off.'
  },
  {
    title: 'Measured in time saved',
    body: 'Every project starts with what the manual process costs today, and ends when that number has clearly moved.'
  }
];

/** About section. Written in first person; make it sound like you. */
export const about = [
  'I trained as a mechatronics engineer, so I think in systems: inputs, controls and feedback loops. Today I apply the same thinking to business processes.',
  'At Tolaram Group I work as an RPA Developer in a solutions architect capacity, building automations across finance, HR, procurement and sustainability. I also lead peer code reviews and mentor teammates.',
  'Outside work I build AI agents and self-hosted n8n infrastructure, which keeps me close to what the newest tools can actually do in production.'
];

export const experience = [
  {
    company: 'Tolaram Group',
    role: 'RPA Developer (Automation Solutions Architect capacity)',
    period: 'Jan 2026 – Present',
    highlights: [
      'Optimised the Globus corporate banking batch system to process ₦100M+ ($65,000+) in monthly transactions, cutting manual processing from 2 hours to 5 minutes.',
      'Built a reporting bot for 32 facilities that turned a 48-hour manual workload into 96 minutes, and scales automatically as new units are onboarded.',
      'Scaled an HR document pipeline (SuccessFactors, SharePoint, Microsoft Graph API) to 3,000+ employee loan requests, cutting each from 2+ minutes to 60–90 seconds.',
      'Developed a Python payroll engine for 100+ staff that generates 6 statutory schedules (ITF, NSITF, PAYE, Pension), reducing reconciliation from 4 hours to seconds.',
      'Automated balance and statement extraction across 15+ commercial banks for multiple operating entities, removing daily manual reconciliation.',
      'Designed an AI invoice extraction framework (LangGraph, LangChain, Gemini, Pydantic) that replaced template-based tools and their licensing fees.',
      'Built an ESG reporting pipeline connecting Updapt to SharePoint, reclaiming hundreds of hours a month for the Sustainability team.'
    ]
  },
  {
    company: 'Bincom Development Center',
    role: 'Project Manager (Business Development & Community Growth)',
    period: 'Apr 2024 – Apr 2025',
    highlights: [
      'Led cross-functional community expansion initiatives that achieved 373% growth.',
      'Ran root-cause analysis on operational friction points, improving workflow effectiveness by 25%.'
    ]
  },
  {
    company: 'Independent Automation Developer & Mechatronics Research',
    role: 'Alongside B.Eng. degree',
    period: '2021 – 2024',
    highlights: [
      'Built a hybrid stock market forecasting system combining neural networks and fuzzy logic (TensorFlow, scikit-fuzzy).',
      'Engineered an AI-controlled sensor fusion robot for precision farming and automated irrigation.',
      'Wrote Python data pipelines and scrapers to automate administrative and financial data consolidation.'
    ]
  }
];

/** Smaller builds, mostly personal projects. Shown below the case studies. */
export const projects = [
  {
    title: 'Smart email triage',
    body: 'Sorts incoming email into sales, bugs, billing and general, drafts replies in Gmail and pings Telegram for urgent bugs.',
    tools: ['n8n', 'Gemini', 'Groq', 'Docker']
  },
  {
    title: 'Telegram AI assistant',
    body: 'A personal assistant that manages my calendar and email and fetches market data and weather on request.',
    tools: ['n8n', 'Gemini', 'Groq']
  },
  {
    title: 'Lead intake & scoring',
    body: 'Combines web form submissions and free-text messages into one pipeline and scores each lead out of 100.',
    tools: ['n8n', 'JavaScript']
  },
  {
    title: 'Partnership qualification agent',
    body: 'An AI agent reviews B2B partnership requests, returns a verdict with a score and reasoning, and sends the matching reply.',
    tools: ['n8n', 'Gemini', 'Google Sheets']
  },
  {
    title: 'Market volatility alerts',
    body: 'Watches equity data streams and sends a Telegram alert when price movement crosses a set threshold.',
    tools: ['Python', 'Telegram API']
  },
  {
    title: 'Production-grade n8n server',
    body: 'Self-hosted n8n in queue mode with PostgreSQL, Redis and three workers, health checks and managed secrets.',
    tools: ['Docker Compose', 'PostgreSQL', 'Redis']
  }
];

export const education = [
  {
    title: 'B.Eng. Mechatronics Engineering',
    detail: 'Bells University of Technology · Second Class Upper'
  },
  { title: 'Certified Advanced RPA Professional', detail: 'Automation Anywhere University' },
  {
    title: 'AI Automation Engineering (in progress)',
    detail: 'Automation Anywhere University'
  },
  { title: 'Python Programming', detail: 'Coursera' },
  { title: 'Business Analysis & Project Management', detail: 'Bincom Development Center' },
  { title: 'HSE Levels 1–3', detail: 'World Safety Organization' }
];

/**
 * The two "paths" under the hero: one for employers, one for clients.
 * `intent` preselects the matching option in the contact form.
 */
export const audiences = {
  hiring: {
    eyebrow: 'For employers',
    title: 'Hiring for your automation team?',
    points: [
      'Roles: Automation Solutions Architect, RPA Developer, AI Automation Engineer',
      'Remote from Lagos (GMT+1): full overlap with UK and EU hours, mornings with US East',
      'Full-time remote, or contract through Deel or Remote.com'
    ],
    cta: 'Talk to me about a role',
    intent: 'hiring'
  },
  project: {
    eyebrow: 'For businesses',
    title: 'Have a process that needs automating?',
    points: [
      "Describe it in a few lines and I'll tell you honestly whether it's worth automating",
      'Fixed-scope builds or ongoing support as a B2B contractor',
      'Built on tools you may already own: A360, UiPath, Power Platform or n8n'
    ],
    cta: 'Describe your process',
    intent: 'project'
  }
} as const;

/** Options at the top of the contact form. The id is sent to n8n as `intent`. */
export const contactIntents = [
  {
    id: 'project',
    label: 'A process to automate',
    field: 'What would you like to automate?',
    placeholder:
      'For example: every month we copy bank statements from 10 portals into one spreadsheet…'
  },
  {
    id: 'hiring',
    label: 'A job opportunity',
    field: 'Tell me about the role',
    placeholder: 'Role title, team, location or timezone, and a link to the job description…'
  },
  {
    id: 'other',
    label: 'Something else',
    field: 'Your message',
    placeholder: 'Questions, collaborations, speaking, or just saying hello…'
  }
] as const;

/**
 * Filter buttons above the Work section. An item matches a filter when any of
 * its tools contains one of the `match` words (case-insensitive).
 * Filters with no matching work are hidden automatically.
 */
export const toolFilters = [
  {
    id: 'rpa',
    label: 'RPA',
    match: ['Automation Anywhere', 'A360', 'UiPath', 'Power Platform', 'Power Automate']
  },
  {
    id: 'ai',
    label: 'AI & LLMs',
    match: ['LangGraph', 'LangChain', 'Gemini', 'Groq', 'Grok', 'LLM', 'Pydantic', 'OpenAI']
  },
  { id: 'n8n', label: 'n8n', match: ['n8n'] },
  {
    id: 'web',
    label: 'Web & full-stack',
    match: ['Next.js', 'React', 'TypeScript', 'Web Push']
  },
  { id: 'python', label: 'Python', match: ['Python', 'openpyxl'] },
  {
    id: 'enterprise',
    label: 'SAP & Microsoft 365',
    match: ['SAP', 'SuccessFactors', 'SharePoint', 'Graph API', 'Excel']
  },
  {
    id: 'infra',
    label: 'Data & infrastructure',
    match: ['Docker', 'PostgreSQL', 'Redis', 'SQLite', 'BigQuery', 'Node.js', 'Oracle']
  }
] as const;

/** Returns the filter ids a list of tools belongs to. */
export function filterTags(tools: readonly string[]): string[] {
  const lower = tools.map((t) => t.toLowerCase());
  return toolFilters
    .filter((f) => f.match.some((m) => lower.some((t) => t.includes(m.toLowerCase()))))
    .map((f) => f.id);
}

export const nav = [
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' }
];
