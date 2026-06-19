import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Bot, Boxes, Globe, Server, Workflow } from "lucide-react";

const featured = {
  title: "AI Automation",
  desc: "Put AI to work across your business — chatbots, RAG assistants, and document and workflow automation that handle the repetitive work from A to Z.",
  points: [
    "Custom AI chatbots & assistants",
    "RAG over your own data & documents",
    "Workflow & process automation",
    "WhatsApp, web & CRM integration",
  ],
};

const services = [
  {
    icon: Boxes,
    title: "Full-Stack SaaS",
    desc: "Complete SaaS products from idea to launch — multi-tenant, real-time, secure and scalable.",
    points: ["Product architecture & APIs", "Auth, billing & dashboards", "Real-time features"],
  },
  {
    icon: Globe,
    title: "Websites",
    desc: "Fast, modern marketing and business websites in Next.js or WordPress.",
    points: ["Landing & business sites", "SEO & performance", "CMS & WordPress"],
  },
  {
    icon: Server,
    title: "DevOps & Cloud",
    desc: "Get your product live and keep it healthy — containers, IaC, CI/CD and hosting.",
    points: ["Docker & Terraform", "CI/CD pipelines", "AWS / Cloudflare / VPS"],
  },
  {
    icon: Workflow,
    title: "Funnels & Integrations",
    desc: "Drag-and-drop funnels with custom code, plus automation utilities and integrations.",
    points: ["WordPress & GoHighLevel funnels", "Third-party integrations", "Custom tools & scripts"],
  },
];

export default function Services() {
  return (
    <Section
      id="services"
      index="04"
      label="Services"
      title="What I can build for you."
      intro="Freelance, contract or remote — here is how I help businesses ship and automate."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <Reveal className="lg:col-span-3">
          <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-accent-soft/40 p-7">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-accent/10 blur-3xl"
            />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-bg/40 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                  <Bot className="h-3.5 w-3.5" /> Featured service
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold text-fg">
                  {featured.title}
                </h3>
                <p className="mt-3 leading-relaxed text-fg-muted">{featured.desc}</p>
              </div>
              <ul className="grid shrink-0 gap-2 md:w-72">
                {featured.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 rounded-lg border border-line bg-bg/40 px-3 py-2 text-sm text-fg-muted"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 0.05}>
            <div className="group h-full rounded-xl border border-line bg-surface/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
              <s.icon className="h-6 w-6 text-accent" />
              <h3 className="mt-4 font-display text-lg font-semibold text-fg">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{s.desc}</p>
              <ul className="mt-4 space-y-1.5">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-fg-muted">
                    <span className="text-accent">▸</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
