"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Scroll-triggered reveal. Default: fade + rise.
 * With `tilt`: a 3D rotateX entrance (card tips up into place).
 * Reduced motion is handled globally by MotionConfig (transform animations
 * are skipped automatically; opacity still fades so content never hides).
 */
export function Reveal({
  children,
  delay = 0,
  className,
  tilt = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  tilt?: boolean;
}) {
  return (
    <motion.div
      className={className}
      style={tilt ? { transformPerspective: 900 } : undefined}
      initial={tilt ? { opacity: 0, y: 32, rotateX: 12 } : { opacity: 0, y: 20 }}
      whileInView={tilt ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: tilt ? 0.7 : 0.6, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
