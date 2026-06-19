import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  index,
  label,
  title,
  intro,
  children,
  bgImage,
}: {
  id: string;
  index: string;
  label: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  bgImage?: string;
}) {
  return (
    <section
      id={id}
      className="relative overflow-hidden border-t border-line/60 py-20 sm:py-28"
    >
      {bgImage && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-full bg-contain bg-right bg-no-repeat opacity-[0.08] sm:w-2/3"
          style={{ backgroundImage: `url('${bgImage}')` }}
        />
      )}
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-xs text-fg-dim">
            <span className="text-accent">{index}</span>
            <span className="h-px w-8 bg-line-strong" />
            <span className="uppercase tracking-[0.2em]">{label}</span>
          </div>
          {title && (
            <h2 className="mt-5 max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
              {title}
            </h2>
          )}
          {intro && (
            <p className="mt-4 max-w-2xl leading-relaxed text-fg-muted">{intro}</p>
          )}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
