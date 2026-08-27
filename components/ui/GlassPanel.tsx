"use client";

import { useRef } from "react";
import type { PointerEvent, ReactNode } from "react";
import { motion, useSpring } from "motion/react";
import { usePrefersReducedMotion, useIsCompact } from "@/lib/hooks";

type GlassPanelProps = {
  children: ReactNode;
  className?: string;
};

export default function GlassPanel({ children, className = "" }: GlassPanelProps) {
  const reducedMotion = usePrefersReducedMotion();
  const isCompact = useIsCompact();
  const tiltEnabled = !reducedMotion && !isCompact;

  const rotateX = useSpring(0, { stiffness: 220, damping: 22, mass: 0.4 });
  const rotateY = useSpring(0, { stiffness: 220, damping: 22, mass: 0.4 });
  const ref = useRef<HTMLDivElement>(null);

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    if (!tiltEnabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 8);
    rotateX.set(py * -8);
  }

  function handlePointerLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={tiltEnabled ? { rotateX, rotateY, transformPerspective: 800 } : undefined}
      className={`glass-panel rounded-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
}
