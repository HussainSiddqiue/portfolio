import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <div className="font-mono text-sm text-fg">{site.name}</div>
          <div className="mt-1 font-mono text-xs text-fg-dim">
            Full-stack &amp; DevOps engineer — build · ship · run.
          </div>
        </div>
        <div className="flex items-center gap-5 font-mono text-xs text-fg-muted">
          <a href="#work" className="transition-colors hover:text-accent">
            Work
          </a>
          <a href="#stack" className="transition-colors hover:text-accent">
            Stack
          </a>
          <a href="#contact" className="transition-colors hover:text-accent">
            Contact
          </a>
        </div>
        <div className="font-mono text-xs text-fg-dim">
          © {year} {site.name}. Built with Next.js.
        </div>
      </div>
    </footer>
  );
}
