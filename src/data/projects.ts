export type Disclosure = "full" | "generic" | "company" | "client";
export type Tier = "Featured" | "Enterprise" | "Client" | "Automation";

export type Project = {
  slug: string;
  name: string; // shown name OR anonymized label
  category: string;
  tier: Tier;
  disclosure: Disclosure;
  blurb: string;
  highlights: string[];
  stack: string[];
  region?: string;
  status?: string;
  link?: string; // only for fully-public / owned projects
  confidential?: boolean;
};

export const projects: Project[] = [
  // ---- Featured (owned) ----
  {
    slug: "xpert-finance",
    name: "Xpert Finance",
    category: "Finance & Immigration Website",
    tier: "Featured",
    disclosure: "full",
    region: "United Kingdom",
    status: "Live · my own venture",
    blurb:
      "A polished marketing site for a UK tax, payroll and immigration consultancy — built, styled and animated end to end.",
    highlights: [
      "Multi-page services site with custom interactions",
      "Built and maintained independently",
      "SEO-focused, fast and responsive",
    ],
    stack: ["WordPress", "Custom HTML/CSS/JS", "GSAP"],
    link: "https://xpertfinance.co.uk/",
  },
  {
    slug: "whatsbloom",
    name: "WhatsBloom",
    category: "AI WhatsApp Commerce SaaS",
    tier: "Featured",
    disclosure: "full",
    status: "In progress · my product",
    blurb:
      "My own SaaS in the making — AI-powered WhatsApp marketing, chatbot, inventory and commerce for small and medium businesses.",
    highlights: [
      "Multi-industry, multi-tenant architecture",
      "Real-time chat, broadcasts and analytics",
      "AI assistant + background job pipelines",
    ],
    stack: [
      "Next.js",
      "Fastify",
      "tRPC",
      "Drizzle",
      "PostgreSQL",
      "Redis (Upstash)",
      "Cloudflare R2",
      "Anthropic Claude",
    ],
  },

  {
    slug: "sells-expert",
    name: "Sells Expert",
    category: "AI Lead-Gen & Outreach Suite",
    tier: "Featured",
    disclosure: "full",
    status: "Running · my product",
    blurb:
      "A self-hosted sales engine under my Fusion Deployment brand — scrapes and enriches leads, AI-personalizes pitches, runs autopilot cold-email and WhatsApp sequences, and reads replies with an AI deal brain. Also licensed to a client as a white-label build.",
    highlights: [
      "Autopilot sequencer: warmup ramps, daily caps, stop-on-reply",
      "AI reply classification + auto-drafted responses over IMAP",
      "Deliverability stack: SMTP verification, suppression, bounce auto-pause",
      "White-label client copies protected by Ed25519 licensing",
    ],
    stack: [
      "Node.js",
      "Playwright",
      "Anthropic Claude",
      "OpenAI",
      "IMAP / SMTP",
      "Twilio",
      "WhatsApp Cloud API",
    ],
  },

  // ---- Enterprise (company, confidential — purpose only) ----
  {
    slug: "municipal-health",
    name: "Municipal Health & Citizen-Services Platform",
    category: "Enterprise SaaS",
    tier: "Enterprise",
    disclosure: "company",
    region: "Brazil",
    status: "Confidential",
    confidential: true,
    blurb:
      "A multi-tenant platform for cities: health appointments, citizen requests, staff attendance and AI copilots — serving multiple municipalities.",
    highlights: [
      "Multi-tenant, role-based access control",
      "Face-recognition staff attendance",
      "AI copilots + WhatsApp integration",
    ],
    stack: [
      "Next.js",
      "React",
      "Fastify",
      "Prisma / MySQL",
      "Python (face recognition)",
      "AWS",
    ],
  },
  {
    slug: "edu-platform",
    name: "School & Education Management Platform",
    category: "Enterprise SaaS",
    tier: "Enterprise",
    disclosure: "company",
    region: "Brazil",
    status: "Confidential",
    confidential: true,
    blurb:
      "An education platform for schools: lesson planning, evaluations, grading, attendance, reporting and AI tutoring.",
    highlights: [
      "AI tutoring with RAG over course material",
      "Grading, attendance and reporting modules",
      "Parent / student access via WhatsApp portal",
    ],
    stack: ["Next.js", "Express", "Prisma / PostgreSQL", "AWS S3", "OpenAI"],
  },
  {
    slug: "doc-generation",
    name: "AI Document Generation Platform",
    category: "Enterprise SaaS",
    tier: "Enterprise",
    disclosure: "company",
    region: "Brazil",
    status: "Confidential",
    confidential: true,
    blurb:
      "An AI-assisted platform that generates sector-specific documents at scale — turning structured input into ready, compliant documents for organizations.",
    highlights: [
      "AI-assisted document generation",
      "Sector-specific templates and rules",
      "Automated, high-volume output",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "OpenAI", "AWS"],
  },

  // ---- Client work (confidential / generic) ----
  {
    slug: "construction-crm",
    name: "Construction PM CRM + Chatbot",
    category: "Client SaaS · NDA",
    tier: "Client",
    disclosure: "client",
    region: "Pakistan",
    status: "Under NDA",
    confidential: true,
    blurb:
      "A construction project-management CRM with a 3-portal structure, real-time updates and an AI chatbot — deployed on cloud infrastructure provisioned as code.",
    highlights: [
      "3-portal CRM, 18+ modules, real-time PWA",
      "AI chatbot assistant",
      "AWS infra via Docker + Terraform + CI/CD",
    ],
    stack: [
      "React / Vite",
      "NestJS",
      "Prisma / PostgreSQL",
      "Socket.io",
      "Redis",
      "AWS",
      "Docker",
      "Terraform",
    ],
  },
  {
    slug: "agency-saas-de",
    name: "GoHighLevel ↔ Magicline Integration Platform",
    category: "Integration · International Client · NDA",
    tier: "Client",
    disclosure: "client",
    region: "Germany",
    status: "Under NDA",
    confidential: true,
    blurb:
      "A multi-tenant integration bridge connecting GoHighLevel (CRM/marketing) with Magicline (fitness-studio management) — keeping members, contacts and contracts in sync automatically, with an agency dashboard on top.",
    highlights: [
      "Two-way member & contact sync (GoHighLevel ↔ Magicline)",
      "Automated contract creation with custom field mapping",
      "Queue-driven, webhook-based automation engine",
      "Multi-tenant: per-client API keys & configuration",
    ],
    stack: ["Vue 3", "React", "Laravel", "Express", "MySQL", "Queues / Webhooks"],
  },
  {
    slug: "ai-chatbot-saas",
    name: "AI-Chatbot SaaS Platform",
    category: "AI Automation · Client",
    tier: "Client",
    disclosure: "generic",
    status: "Client work",
    blurb:
      "A polished product site for an AI-chatbot and automation platform aimed at service businesses — fast, animated and conversion-focused.",
    highlights: [
      "High-end animations and motion design",
      "SEO and performance optimized",
      "Conversion-focused marketing flow",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
  },
  {
    slug: "ui-component-library",
    name: "React Component Library / Design System",
    category: "UI Engineering",
    tier: "Client",
    disclosure: "generic",
    status: "Work sample",
    blurb:
      "A reusable React component library and design system — dozens of accessible, composable UI primitives.",
    highlights: [
      "60+ composable components",
      "Accessible primitives (Radix-based)",
      "Consistent, themeable design tokens",
    ],
    stack: ["React", "Vite", "Radix UI", "Tailwind CSS"],
  },
  {
    slug: "vega-noir",
    name: "Vega Noir",
    category: "E-commerce Storefront · Client",
    tier: "Client",
    disclosure: "full",
    region: "Pakistan",
    status: "Live",
    blurb:
      "A premium activewear storefront for a Karachi fashion brand — custom-built commerce with WhatsApp and cash-on-delivery checkout, 3D product showcases and an order-management dashboard.",
    highlights: [
      "WhatsApp + COD checkout with server-side price recomputation",
      "Admin orders dashboard backed by Upstash Redis",
      "Three.js 3D showcases, GSAP motion and full SEO (JSON-LD, sitemap)",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Three.js",
      "GSAP",
      "Upstash Redis",
    ],
    link: "https://www.veganoir.shop/",
  },
  {
    slug: "construction-site-chatbot",
    name: "Construction Brand Website + AI Assistant",
    category: "Website + AI · Client · NDA",
    tier: "Client",
    disclosure: "client",
    region: "Pakistan",
    status: "Under NDA",
    confidential: true,
    blurb:
      "The public website for a real-estate & construction brand, with one AI bot brain serving four channels — website chat, WhatsApp, Messenger and Instagram — plus a construction cost calculator with admin-managed rates.",
    highlights: [
      "Single bot engine across 4 messaging channels via thin adapters",
      "Cost calculator backed by admin-managed rate tables",
      "Hardened public routes: rate limits, input caps, PII-safe logging",
    ],
    stack: [
      "Next.js",
      "Vercel AI SDK",
      "OpenAI",
      "Drizzle / PostgreSQL",
      "WhatsApp Cloud API",
      "Meta APIs",
    ],
  },
  {
    slug: "wordpress-client-work",
    name: "European WordPress Client Sites",
    category: "WordPress · Client",
    tier: "Client",
    disclosure: "generic",
    region: "Netherlands",
    status: "Client work",
    blurb:
      "Ongoing WordPress engagements for two Dutch businesses — a real-estate agency relaunch with full Dutch localization and a custom REST bridge plugin, plus Elementor build-out for a recruitment agency.",
    highlights: [
      "Custom REST plugin: clones listings and writes meta the stock API can't",
      "Full EN→NL localization engine, including unit conversion",
      "Automated cross-device QA: 86 checks with screenshot evidence",
    ],
    stack: ["WordPress", "PHP", "Elementor", "Houzez", "REST API", "GoHighLevel"],
  },
  {
    slug: "law-firm-site",
    name: "UK Law Firm Website",
    category: "Website · Client",
    tier: "Client",
    disclosure: "generic",
    region: "United Kingdom",
    status: "Client work",
    blurb:
      "A professional website for a UK law firm — custom theme, content structure and a refined, trustworthy presentation.",
    highlights: [
      "Custom WordPress theme",
      "Clean, professional content layout",
      "Responsive and SEO-ready",
    ],
    stack: ["WordPress", "PHP", "Custom theme"],
  },

  // ---- Automation (personal systems) ----
  {
    slug: "whatsapp-assistant",
    name: "WhatsApp Personal Manager",
    category: "Conversational Automation",
    tier: "Automation",
    disclosure: "full",
    status: "Running · my system",
    blurb:
      "A personal manager that lives inside WhatsApp, so there is no app to open. Expenses, notes and reminders are captured by typing, speaking, photographing a bill or forwarding a PDF — in everyday Roman Urdu — and reviewed on an installable dashboard.",
    highlights: [
      "Meta Cloud API webhook hardened with HMAC-SHA256 signature checks, a sender allow-list and idempotent delivery",
      "Voice notes, photos and PDFs read natively by the model — no transcription, OCR or file storage in the path",
      "Automatic failover to a second LLM provider when the primary is rate-limited, holding running cost at zero",
      "Cloudflare Worker cron delivers reminders to the minute, with an atomic claim that rules out double sends",
      "Installable PWA dashboard behind a fail-closed session gate and login rate limiting",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Supabase (PostgreSQL)",
      "WhatsApp Cloud API",
      "Gemini",
      "OpenAI",
      "Cloudflare Workers",
      "Vercel",
    ],
  },
  {
    slug: "wireguard-vpn",
    name: "Single-Command WireGuard VPN",
    category: "Infrastructure Automation",
    tier: "Automation",
    disclosure: "full",
    status: "Running · my system",
    blurb:
      "One idempotent script that stands up a private WireGuard VPN on a free-tier cloud box and can be re-run safely any time. Provider-agnostic across Oracle Cloud, Hetzner, DigitalOcean and RackNerd.",
    highlights: [
      "Idempotent provisioning — reruns converge instead of duplicating firewall rules or swap entries",
      "Two firewall layers reconciled: the cloud security list and Ubuntu's preloaded iptables rules",
      "Automatic 2 GB swapfile with tuned swappiness, so Docker survives on ~1 GB Always Free instances",
      "Containerised wg-easy pinned to a known version, with its admin UI bound to localhost only",
    ],
    stack: [
      "WireGuard",
      "Docker Compose",
      "Bash",
      "Ubuntu 24.04",
      "Oracle Cloud",
      "iptables",
    ],
  },
  {
    slug: "youtube-pipeline",
    name: "Faceless YouTube Content Pipeline",
    category: "Content Automation",
    tier: "Automation",
    disclosure: "full",
    status: "Running · my system",
    blurb:
      "A zero-edit video factory: picks a dataset, writes the script, synthesizes voiceover, renders a long-form video, a Short and a thumbnail with Remotion, masters audio and uploads to YouTube — all on free CI runners.",
    highlights: [
      "Remotion (React) renders video, Short and thumbnail from JSON data",
      "Multi-provider TTS with a coverage gate that fails the build",
      "Scheduled cron publishing with no-repeat rotation and webhook alerts",
    ],
    stack: [
      "Node.js",
      "Remotion",
      "React",
      "YouTube Data API",
      "Piper TTS",
      "ffmpeg",
      "GitHub Actions",
    ],
  },
  {
    slug: "trading-automation",
    name: "Funded-Account Trading Automation",
    category: "Fintech Automation",
    tier: "Automation",
    disclosure: "full",
    status: "Running · my system",
    blurb:
      "A semi-automated desk for a funded forex account: a multi-instrument setup scanner with news and crisis guards, prop-firm-aware risk sizing, automatic trade journaling and weekly performance reports — strictly human-in-the-loop.",
    highlights: [
      "Real-time scanner across 5 instruments with alert popups",
      "Risk guard models prop-firm drawdown limits and broker-accurate lot sizes",
      "Auto journal import from MT5 with R-multiples and session tags",
    ],
    stack: ["Python", "MetaTrader 5", "pandas", "Tkinter", "Task Scheduler"],
  },
  {
    slug: "marketing-automation",
    name: "Marketing Automation Suite",
    category: "AI Marketing Toolkit",
    tier: "Automation",
    disclosure: "full",
    status: "Working demo · launching soon",
    blurb:
      "An agency-in-a-box marketing toolkit: an offline-first dashboard for content creation, scheduling and client reporting, plus an automation layer that publishes to Meta, triages ads and qualifies leads with AI.",
    highlights: [
      "Zero-dependency Node backend + single-file offline dashboard",
      "Publishes to Facebook/Instagram with AI ad triage and lead scoring",
      "Dry-run-safe by default; Anthropic, OpenAI, Gemini and DeepSeek support",
    ],
    stack: ["Node.js", "Vanilla JS", "Meta APIs", "WhatsApp Cloud API", "Multi-LLM"],
  },
];
