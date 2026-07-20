"use client";

import { useRef, type ReactNode, type PointerEvent } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";

/**
 * Pointer-tracked 3D tilt with an accent glare sweep.
 * Reduced-motion & touch users get a static card: the pointer handler
 * no-ops, so the motion values never leave center (0deg) — render output
 * is identical on server and client (no hydration mismatch).
 */
export function TiltCard({
  children,
  className,
  max = 7,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion(); // used only inside event handlers

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 160, damping: 20, mass: 0.3 });
  const sy = useSpring(py, { stiffness: 160, damping: 20, mass: 0.3 });

  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const glareX = useTransform(sx, [0, 1], ["18%", "82%"]);
  const glareY = useTransform(sy, [0, 1], ["18%", "82%"]);
  const glareBg = useMotionTemplate`radial-gradient(340px circle at ${glareX} ${glareY}, rgba(62, 207, 142, 0.09), rgba(255, 255, 255, 0.03) 45%, transparent 70%)`;

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (reduce || e.pointerType === "touch") return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  }

  function onPointerLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <div style={{ perspective: 900 }} className="h-full">
      <motion.div
        ref={ref}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`relative h-full ${className ?? ""}`}
      >
        {children}
        {glare && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 rounded-xl opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100 motion-reduce:hidden"
            style={{ background: glareBg }}
          />
        )}
      </motion.div>
    </div>
  );
}
