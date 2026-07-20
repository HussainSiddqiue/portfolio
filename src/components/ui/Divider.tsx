"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useReducedMotionSafe } from "./useReducedMotionSafe";

/**
 * Section divider: the artwork stays, but an accent line now draws itself
 * across the page, scrubbed to scroll position.
 */
export function Divider() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "start 40%"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });

  return (
    <div ref={ref} aria-hidden className="mx-auto max-w-6xl px-5 sm:px-8">
      <motion.div
        style={reduce ? undefined : { scaleX }}
        className="h-px origin-left bg-gradient-to-r from-accent/70 via-accent/25 to-transparent"
      />
      <Image
        src="/images/divider.png"
        alt=""
        width={2400}
        height={240}
        className="h-auto w-full opacity-50"
      />
    </div>
  );
}
