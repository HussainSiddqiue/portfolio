import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { projects, type Project } from "@/data/projects";
import { Lock, ArrowUpRight } from "lucide-react";

const groups: { tier: Project["tier"]; label: string; note: string }[] = [
  { tier: "Featured", label: "Featured", note: "My own products & ventures" },
  {
    tier: "Enterprise",
    label: "Enterprise",
    note: "Production platforms — details confidential",
  },
  { tier: "Client", label: "Client Work", note: "Selected freelance & contract projects" },
  {
    tier: "Automation",
    label: "Automation",
    note: "Systems I built to run my own operations",
  },
];

// Abstract cover art mapped by theme (no real screenshots — keeps confidential work safe).
const coverFor: Record<string, string> = {
  whatsbloom: "/images/ui-chatbot.png",
  "xpert-finance": "/images/proj-web.png",
  "municipal-health": "/images/ui-dashboard.png",
  "edu-platform": "/images/proj-saas.png",
  "doc-generation": "/images/proj-ai.png",
  "construction-crm": "/images/infra-iso.png",
  "agency-saas-de": "/images/proj-integration.png",
  "ai-chatbot-saas": "/images/proj-ai.png",
  "ui-component-library": "/images/ui-mobile.png",
  "law-firm-site": "/images/proj-web.png",
  "sells-expert": "/images/proj-leadgen.jpg",
  "vega-noir": "/images/proj-ecommerce.jpg",
  "construction-site-chatbot": "/images/ui-chatbot.png",
  "wordpress-client-work": "/images/proj-wordpress.jpg",
  "youtube-pipeline": "/images/proj-video.jpg",
  "trading-automation": "/images/proj-trading.jpg",
  "marketing-automation": "/images/proj-marketing.jpg",
};

function Card({ p }: { p: Project }) {
  const cover = coverFor[p.slug];
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface/30 transition-all duration-300 hover:border-accent/40 hover:shadow-xl hover:shadow-black/30">
      {cover && (
        <div className="relative h-32 w-full overflow-hidden border-b border-line">
          <Image
            src={cover}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
          {p.confidential && (
            <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-line bg-bg/80 px-2 py-0.5 font-mono text-[10px] text-fg-dim backdrop-blur">
              <Lock className="h-3 w-3" /> {p.status}
            </span>
          )}
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
            {p.category}
          </span>
          {!cover && p.confidential ? (
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-line bg-bg-elev px-2 py-0.5 font-mono text-[10px] text-fg-dim">
              <Lock className="h-3 w-3" /> {p.status}
            </span>
          ) : !cover && p.status ? (
            <span className="shrink-0 rounded-full border border-accent/30 bg-accent-soft px-2 py-0.5 font-mono text-[10px] text-accent">
              {p.status}
            </span>
          ) : null}
        </div>

        <h3 className="mt-3 font-display text-xl font-semibold text-fg">{p.name}</h3>
        {p.region && (
          <div className="mt-1 font-mono text-xs text-fg-dim">{p.region}</div>
        )}
        <p className="mt-3 text-sm leading-relaxed text-fg-muted">{p.blurb}</p>

        <ul className="mt-4 space-y-1.5">
          {p.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-sm text-fg-muted">
              <span className="text-accent">▸</span> {h}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <span
              key={s}
              className="rounded border border-line bg-bg-elev px-2 py-0.5 font-mono text-[11px] text-fg-dim"
            >
              {s}
            </span>
          ))}
        </div>

        {p.link && (
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1 font-mono text-xs text-accent hover:underline"
          >
            Visit <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Section
      id="work"
      index="01"
      label="Work"
      title="Selected work."
      intro="From my own products to enterprise platforms and client builds. Some details are kept confidential — purpose and stack are shown instead."
    >
      <div className="space-y-12">
        {groups.map((g) => {
          const items = projects.filter((p) => p.tier === g.tier);
          if (!items.length) return null;
          return (
            <div key={g.tier}>
              <div className="mb-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  {g.label}
                </h3>
                <span className="font-mono text-xs text-fg-dim">— {g.note}</span>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {items.map((p, i) => (
                  <Reveal key={p.slug} delay={(i % 3) * 0.06} className="h-full" tilt>
                    <TiltCard className="group/tilt">
                      <Card p={p} />
                    </TiltCard>
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
