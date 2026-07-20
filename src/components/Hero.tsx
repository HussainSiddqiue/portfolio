"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { TiltCard } from "@/components/ui/TiltCard";
import { Counter } from "@/components/ui/Counter";
import { useReducedMotionSafe } from "@/components/ui/useReducedMotionSafe";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const termLines = [
  { p: "$", c: "whoami", out: false },
  { p: "→", c: "full-stack & devops engineer", out: true },
  { p: "$", c: "stack --core", out: false },
  { p: "→", c: "next · node · laravel · python", out: true },
  { p: "$", c: "infra --status", out: false },
  { p: "→", c: "aws · docker · terraform · cloudflare", out: true },
];

const tags = ["Full-Stack", "DevOps / Cloud", "CI/CD & IaC", "Production support"];

export default function Hero() {
  const reduce = useReducedMotionSafe();
  const { scrollY } = useScroll();
  // Layered parallax: background drifts slower than the content above it,
  // while the content itself gently recedes as you scroll past the hero.
  const bgY = useTransform(scrollY, [0, 700], [0, 130]);
  const glowY = useTransform(scrollY, [0, 700], [0, 60]);
  const contentOpacity = useTransform(scrollY, [0, 550], [1, 0.35]);
  const contentScale = useTransform(scrollY, [0, 550], [1, 0.97]);
  const contentY = useTransform(scrollY, [0, 550], [0, 46]);

  return (
    <section id="top" className="relative overflow-hidden">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-y-24 inset-x-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
          y: reduce ? 0 : bgY,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg/30 via-bg/10 to-bg"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
        style={{ y: reduce ? 0 : glowY }}
      />

      <motion.div
        style={
          reduce
            ? undefined
            : { opacity: contentOpacity, scale: contentScale, y: contentY }
        }
        className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-32"
      >
        {/* left column */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1.5 font-mono text-xs text-fg-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for freelance &amp; full-time
          </motion.div>

          <motion.p variants={item} className="mb-4 font-mono text-sm text-accent">
            {site.name} <span className="text-fg-dim">— {site.role}</span>
          </motion.p>

          <motion.h1
            variants={item}
            className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-fg sm:text-5xl lg:text-6xl"
          >
            I build software, then <span className="text-accent">ship</span> &amp;{" "}
            <span className="font-serif font-normal italic text-fg">run</span> it in
            production.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted"
          >
            Full-stack engineer with deep DevOps roots. I take products from the first
            commit to live infrastructure — React &amp; Next.js on the front; Node,
            Laravel &amp; Python on the back; Docker, Terraform &amp; AWS underneath.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-[#05130c] transition-transform hover:-translate-y-0.5"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-md border border-line bg-surface/40 px-5 py-3 text-sm text-fg transition-colors hover:border-line-strong hover:bg-surface"
            >
              View selected work
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-fg-dim"
          >
            {tags.map((t) => (
              <span key={t}>
                <span className="text-accent">▸</span> {t}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* right column: terminal panel */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <TiltCard max={5} className="group/tilt">
          <div className="overflow-hidden rounded-xl border border-line bg-bg-elev/80 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="flex items-center gap-2 border-b border-line bg-surface/40 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-fg-dim">
                ~/portfolio — zsh
              </span>
            </div>
            <div className="space-y-2.5 p-5 font-mono text-sm">
              {termLines.map((l, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.22, duration: 0.4 }}
                  className="flex gap-3"
                >
                  <span className={l.out ? "text-accent" : "text-fg-dim"}>{l.p}</span>
                  <span className={l.out ? "text-fg" : "text-fg-muted"}>{l.c}</span>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + termLines.length * 0.22 }}
                className="flex items-center gap-2 pt-2"
              >
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span className="text-fg-muted">all systems operational</span>
                <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-accent/80" />
              </motion.div>
            </div>
          </div>
            </TiltCard>
          </motion.div>

          <div className="mt-4 grid grid-cols-3 gap-3 font-mono text-xs">
            {site.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-line bg-surface/30 px-3 py-3 text-center transition-colors hover:border-accent/30"
              >
                <div className="text-lg text-accent">
                  <Counter value={s.value} />
                </div>
                <div className="mt-0.5 leading-tight text-fg-dim">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
