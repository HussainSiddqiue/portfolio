"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useReducedMotionSafe } from "./useReducedMotionSafe";

/**
 * CSS-3D isometric infrastructure stack — the visual centerpiece of the
 * DevOps section. Pure transforms (no WebGL) so it costs nothing on load,
 * floats gently, and spreads apart on hover. Decorative only (aria-hidden);
 * the capability cards below carry the real content.
 */
const layers = [
  {
    label: "edge / cdn",
    sub: "Cloudflare · Vercel",
    accent: true,
  },
  {
    label: "app / services",
    sub: "Next.js · Node · APIs",
    accent: false,
  },
  {
    label: "data",
    sub: "PostgreSQL · Redis · S3",
    accent: false,
  },
  {
    label: "infra as code",
    sub: "Docker · Terraform · AWS",
    accent: false,
  },
];

export function StackScene() {
  const reduce = useReducedMotionSafe();
  const count = layers.length;

  // Scroll-scrubbed rotation: the stack slowly turns as the section
  // moves through the viewport, selling the 3D without any WebGL.
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotateZraw = useTransform(scrollYProgress, [0, 1], [-32, -52]);
  const rotateZ = useSpring(rotateZraw, { stiffness: 60, damping: 20 });

  return (
    <div
      ref={ref}
      aria-hidden
      className="group/stack relative flex h-full w-full items-center justify-center"
      style={{ perspective: 1400 }}
    >
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <motion.div
          className="relative h-44 w-44 sm:h-52 sm:w-52"
          style={{
            transformStyle: "preserve-3d",
            rotateX: 56,
            rotateZ: reduce ? -42 : rotateZ,
          }}
        >
          {layers.map((l, i) => {
            const z = (count - 1 - i) * 42;
            return (
              <motion.div
                key={l.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.15 * (count - i) }}
                style={
                  {
                    "--tz": `${z}px`,
                    transform: "translateZ(calc(var(--tz) * var(--spread, 1)))",
                  } as React.CSSProperties
                }
                className={`absolute inset-0 rounded-lg border backdrop-blur-sm transition-transform duration-500 ease-out group-hover/stack:[--spread:1.45] ${
                  l.accent
                    ? "border-accent/50 bg-accent-soft/80 shadow-[0_0_40px_rgba(62,207,142,0.15)]"
                    : "border-line-strong bg-surface/70"
                }`}
              >
                <div className="flex h-full flex-col justify-between p-3">
                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.15em] ${
                      l.accent ? "text-accent" : "text-fg-muted"
                    }`}
                  >
                    {l.label}
                  </span>
                  <span className="font-mono text-[9px] leading-tight text-fg-dim">
                    {l.sub}
                  </span>
                </div>
                {/* corner node dot */}
                <span
                  className={`absolute right-2 top-2 h-1.5 w-1.5 rounded-full ${
                    l.accent ? "bg-accent" : "bg-fg-dim/60"
                  }`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* soft ground glow beneath the stack */}
      <div className="absolute bottom-6 left-1/2 h-10 w-56 -translate-x-1/2 rounded-full bg-accent/10 blur-2xl" />
    </div>
  );
}
