"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion, useIsCompact } from "@/lib/hooks";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const isCompact = useIsCompact();
  const disabled = reducedMotion || isCompact;

  useEffect(() => {
    if (disabled) return;

    function handlePointerMove(e: PointerEvent) {
      const el = ref.current;
      if (!el) return;
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [disabled]);

  if (disabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed left-0 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.10] blur-3xl pointer-events-none"
      style={{ background: "var(--accent)" }}
    />
  );
}
