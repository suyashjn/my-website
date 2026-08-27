"use client";

import { usePrefersReducedMotion } from "@/lib/hooks";
import TerminalBody from "@/components/terminal/TerminalBody";

export default function StaticTerminal() {
  const reducedMotion = usePrefersReducedMotion();

  return <TerminalBody reducedMotion={reducedMotion} />;
}
