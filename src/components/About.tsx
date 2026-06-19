import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";
import { GitBranch, Boxes, Bot, ShieldCheck } from "lucide-react";

const principles = [
  {
    icon: GitBranch,
    title: "Build → Ship → Run",
    text: "End-to-end ownership: I do not just write code, I deploy and operate it in production.",
  },
  {
    icon: Boxes,
    title: "Infrastructure as Code",
    text: "Reproducible, automated cloud with Docker, Terraform and AWS — not manual clicking.",
  },
  {
    icon: Bot,
    title: "AI automation",
    text: "Chatbots, RAG assistants and workflows that remove manual, repetitive work.",
  },
  {
    icon: ShieldCheck,
    title: "Production-grade",
    text: "Secure, scalable and monitored systems built to stay healthy under real load.",
  },
];

const experience = [
  {
    role: "Full-Stack Developer",
    org: "Winstons Inteligência — Brazil",
    period: "Remote · Dec 2025 – Present",
    text: "Building and maintaining production web platforms, backend systems, APIs, databases and third-party integrations across multiple company products.",
  },
  {
    role: "Freelance Full-Stack & DevOps Developer",
    org: "Independent — Pakistan & International",
    period: "Ongoing",
    text: "Delivering SaaS products, business websites, AI automation and cloud deployments for clients across Pakistan, the UK and Europe.",
  },
];

export default function About() {
  return (
    <Section
      id="about"
      index="00"
      label="About"
      title="I build software, then ship and run it."
      bgImage="/images/about-abstract.png"
    >
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-fg-muted">
          <p>
            I am a full-stack engineer with deep DevOps roots. I build complete
            products — from the first line of code to the live infrastructure they
            run on: frontend, backend, databases, cloud, CI/CD, and an AI automation
            layer on top.
          </p>
          <p>
            For an international company in Brazil I help build and run production web
            platforms, remotely. On the freelance side I ship SaaS products, business
            websites and AI automation for clients across Pakistan, the UK and Europe.
          </p>
          <p className="text-fg">
            My edge is <span className="text-accent">ownership</span>. Most developers
            stop at code. I containerize it, provision the infrastructure as code,
            deploy it, and keep it healthy in production.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-3 sm:grid-cols-2">
            {principles.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-line bg-surface/30 p-4"
              >
                <p.icon className="h-5 w-5 text-accent" />
                <div className="mt-3 font-display text-sm font-semibold text-fg">
                  {p.title}
                </div>
                <div className="mt-1 text-sm leading-relaxed text-fg-muted">
                  {p.text}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-fg-dim">
            Experience
          </h3>
          <div className="mt-6 space-y-7">
            {experience.map((e) => (
              <div key={e.role} className="relative border-l border-line-strong pl-5">
                <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
                <div className="font-display text-base font-semibold text-fg">
                  {e.role}
                </div>
                <div className="font-mono text-xs text-accent">{e.org}</div>
                <div className="mt-0.5 font-mono text-xs text-fg-dim">{e.period}</div>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{e.text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="space-y-4">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-fg-dim">
              Education
            </h3>
            <div className="mt-4 rounded-xl border border-line bg-surface/30 p-5">
              <div className="font-display text-base font-semibold text-fg">
                {site.education.degree}
              </div>
              <div className="mt-1 font-mono text-xs text-accent">
                {site.education.school}
              </div>
              <div className="mt-0.5 font-mono text-xs text-fg-dim">
                {site.education.note}
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-line bg-surface/30 p-5">
            <div className="flex items-center gap-2 text-sm text-fg">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for freelance &amp; remote roles
            </div>
            <div className="mt-2 font-mono text-xs text-fg-dim">{site.location}</div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
