"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { profile } from "@/data/content";
import { fadeUp, staggerContainer, EASE_OUT } from "@/lib/motion";
import { usePrefersReducedMotion, useIsCompact } from "@/lib/hooks";
import StaticTerminal from "@/components/StaticTerminal";

const Terminal3D = dynamic(() => import("@/components/Terminal3D"), {
  ssr: false,
  loading: () => <StaticTerminal />,
});

export default function Hero() {
  const reducedMotion = usePrefersReducedMotion();
  const isCompact = useIsCompact();
  const use3D = !reducedMotion && !isCompact;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-4 pt-28 pb-16"
    >
      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:max-w-6xl">
        <motion.div
          variants={staggerContainer(0.14)}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left"
        >
          <motion.div
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span
                className={`absolute inline-flex h-full w-full rounded-full bg-flare opacity-75 ${
                  reducedMotion ? "" : "animate-ping"
                }`}
              />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-flare" />
            </span>
            <span className="font-mono text-[11px] tracking-wide text-dim">
              Available for work
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-ink"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-3 font-display text-xl sm:text-2xl text-accent"
          >
            {profile.role}
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-md mx-auto md:mx-0 text-base sm:text-lg text-ink/70"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start"
          >
            <a
              href="#experience"
              className="rounded-lg bg-accent px-5 py-2.5 font-mono text-xs tracking-wide text-ink transition-transform hover:scale-[1.03]"
            >
              View work
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-line px-5 py-2.5 font-mono text-xs tracking-wide text-ink/85 transition-colors hover:border-ink/40 hover:text-ink"
            >
              Contact
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: EASE_OUT }}
          className="relative mx-auto aspect-[4/3] w-full max-w-lg lg:max-w-xl"
        >
          {use3D ? <Terminal3D /> : <StaticTerminal />}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-[0.2em] text-dim">
          SCROLL
        </span>
        <motion.span
          animate={reducedMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-4 w-px bg-dim/60"
        />
      </motion.div>
    </section>
  );
}
