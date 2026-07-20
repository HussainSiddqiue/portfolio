"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/**
 * Counts a stat value up when it scrolls into view.
 * Accepts strings like "15+", "3", "100%" — the numeric part animates,
 * the suffix stays fixed. Server-renders the FINAL value (SEO / no-JS safe),
 * then plays 0 → target once in view. Non-numeric values render as-is.
 */
export function Counter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();

  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  const [display, setDisplay] = useState(target);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || target === null || started.current) return;
    started.current = true;
    if (reduce) {
      setDisplay(target);
      return;
    }
    const controls = animate(0, target, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target, reduce]);

  if (target === null) return <span className={className}>{value}</span>;

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
