export type Disclosure = "full" | "generic" | "company" | "client";
export type Tier = "Featured" | "Enterprise" | "Client";

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
];
