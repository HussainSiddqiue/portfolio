import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { StackScene } from "@/components/ui/StackScene";
import {
  Container,
  Cloud,
  GitBranch,
  Boxes,
  Activity,
  Terminal,
} from "lucide-react";

const caps = [
  {
    icon: Container,
    title: "Containerization",
    text: "Dockerized apps with reproducible builds and consistent environments.",
  },
  {
    icon: Boxes,
    title: "Infrastructure as Code",
    text: "Terraform-provisioned AWS infra — VPC, EC2, RDS, S3 and CloudFront.",
  },
  {
    icon: GitBranch,
    title: "CI/CD pipelines",
    text: "Automated build, test and deploy with GitHub Actions and GitLab CI.",
  },
  {
    icon: Cloud,
    title: "Cloud & hosting",
    text: "AWS, Azure, Cloudflare, Vercel and Railway — plus cPanel / VPS via SSH.",
  },
  {
    icon: Activity,
    title: "Monitoring & uptime",
    text: "Logs, alerts and health checks to keep production stable and observable.",
  },
  {
    icon: Terminal,
    title: "Server operations",
    text: "Linux, Nginx, PM2, IAM access and secure remote administration.",
  },
];

export default function DevOps() {
  return (
    <Section
      id="devops"
      index="03"
      label="DevOps"
      title="Most developers stop at code. I ship and run it."
      intro="Deployment and operations are not an afterthought — they are half the job. This is the part of my work that sets it apart."
    >
      <Reveal>
        <div className="relative mb-8 h-72 w-full overflow-hidden rounded-xl border border-line bg-bg-elev/60 sm:h-80">
          <div className="bg-grid bg-grid-fade absolute inset-0 opacity-50" />
          <StackScene />
          <div className="pointer-events-none absolute left-4 top-4 font-mono text-xs text-fg-dim">
            <span className="text-accent">$</span> infra --layers
          </div>
          <div className="pointer-events-none absolute bottom-4 right-4 hidden font-mono text-[10px] uppercase tracking-[0.2em] text-fg-dim sm:block">
            edge → app → data → infra
          </div>
        </div>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {caps.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.05} tilt>
            <div className="group h-full rounded-xl border border-line bg-surface/30 p-5 transition-colors hover:border-accent/40">
              <c.icon className="h-6 w-6 text-accent" />
              <div className="mt-4 font-display text-base font-semibold text-fg">
                {c.title}
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{c.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
