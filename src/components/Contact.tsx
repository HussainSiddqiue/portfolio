import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import type { ComponentType } from "react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}

const links: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
}[] = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: site.whatsapp,
    href: site.whatsappLink,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "in/hussain-siddique",
    href: site.linkedin,
  },
  { icon: GithubIcon, label: "GitHub", value: site.githubUser, href: site.github },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      index="05"
      label="Contact"
      title="Let us build something."
      intro="Available for freelance projects, full SaaS builds, AI automation and remote roles. Tell me what you are working on."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {links.map((l, i) => (
          <Reveal key={l.label} delay={i * 0.05}>
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-line bg-surface/30 p-5 transition-colors hover:border-accent/40"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-bg-elev text-accent">
                  <l.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-fg-dim">
                    {l.label}
                  </div>
                  <div className="mt-0.5 text-sm text-fg">{l.value}</div>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-fg-dim transition-colors group-hover:text-accent" />
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-accent/30 bg-accent-soft/40 p-7 sm:flex-row sm:items-center">
          <div>
            <div className="font-display text-xl font-semibold text-fg">
              Ready to start?
            </div>
            <div className="mt-1 text-sm text-fg-muted">
              Send a message and I will get back to you quickly.
            </div>
          </div>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-[#05130c] transition-transform hover:-translate-y-0.5"
          >
            Start a project <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
