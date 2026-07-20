"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Site-wide motion config: every framer-motion animation automatically
 * respects the user's prefers-reduced-motion setting (transform/layout
 * animations are skipped; opacity still fades so content never hides).
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
