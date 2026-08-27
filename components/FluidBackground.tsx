"use client";

import { motion } from "motion/react";
import { usePrefersReducedMotion } from "@/lib/hooks";

type Blob = {
  color: string;
  size: number;
  initial: { top: string; left: string };
  animate: { x: number[]; y: number[]; scale: number[] };
  duration: number;
};

const blobs: Blob[] = [
  {
    color: "var(--accent)",
    size: 480,
    initial: { top: "10%", left: "60%" },
    animate: { x: [0, -50, 20, 0], y: [0, 35, -25, 0], scale: [1, 1.1, 0.95, 1] },
    duration: 28,
  },
  {
    color: "var(--flare)",
    size: 360,
    initial: { top: "60%", left: "8%" },
    animate: { x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 0.92, 1.06, 1] },
    duration: 34,
  },
];

export default function FluidBackground() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl opacity-[0.09]"
          style={{
            width: blob.size,
            height: blob.size,
            top: blob.initial.top,
            left: blob.initial.left,
            background: blob.color,
          }}
          animate={reduced ? undefined : blob.animate}
          transition={
            reduced
              ? undefined
              : { duration: blob.duration, repeat: Infinity, ease: "easeInOut" }
          }
        />
      ))}
    </div>
  );
}
