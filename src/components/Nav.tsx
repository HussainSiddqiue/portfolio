"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site, nav } from "@/lib/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    nav.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-md border border-line bg-surface font-mono text-sm font-semibold text-accent">
            {site.initials}
          </span>
          <span className="font-mono text-sm text-fg-muted">
            {site.name}
            <span className="text-fg-dim">/</span>
            <span className="text-fg">portfolio</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n, i) => {
            const isActive = active === n.id;
            return (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`group flex items-center gap-1.5 text-sm transition-colors ${
                  isActive ? "text-fg" : "text-fg-muted hover:text-fg"
                }`}
              >
                <span
                  className={`font-mono text-[11px] transition-colors ${
                    isActive ? "text-accent" : "text-fg-dim group-hover:text-accent"
                  }`}
                >
                  0{i + 1}
                </span>
                {n.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1.5 font-mono text-[11px] text-accent sm:flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            AVAILABLE
          </span>
          <a
            href="#contact"
            className="hidden rounded-md bg-accent px-4 py-2 text-sm font-medium text-[#05130c] transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            Start a project
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="grid h-9 w-9 place-items-center rounded-md border border-line text-fg-muted md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-bg px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="text-sm text-fg-muted"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-accent px-4 py-2 text-center text-sm font-medium text-[#05130c]"
            >
              Start a project
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
