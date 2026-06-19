import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <Section
      id="stack"
      index="02"
      label="Stack"
      title="The tools I build and ship with."
      intro="A full-stack and infrastructure toolkit — from the UI down to the servers it runs on."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.label} delay={i * 0.05}>
            <div className="h-full rounded-xl border border-line bg-surface/30 p-5">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-accent">
                <span className="text-fg-dim">{String(i + 1).padStart(2, "0")}</span>
                {g.label}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-md border border-line bg-bg-elev px-2.5 py-1 font-mono text-xs text-fg-muted"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
