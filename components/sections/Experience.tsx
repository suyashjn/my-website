"use client";

import { motion } from "motion/react";
import { experience } from "@/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassPanel from "@/components/ui/GlassPanel";

export default function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="log" title="Work Experience" />

        <motion.ol
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative border-l border-line pl-8 sm:pl-10"
        >
          {experience.map((entry, i) => (
            <motion.li key={entry.company + i} variants={fadeUp} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[calc(2rem+3px)] sm:-left-[calc(2.5rem+3px)] top-2 h-2.5 w-2.5 rounded-full bg-dim" />

              <GlassPanel className="p-6">
                <div className="flex flex-col items-start gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-2">
                  <h3 className="font-display text-lg text-accent">{entry.company}</h3>
                  <span className="font-mono text-[11px] text-dim">{entry.period}</span>
                </div>
                <p className="mt-1 font-body text-sm font-medium text-ink">{entry.role}</p>
                {entry.description && (
                  <p className="mt-3 font-body text-sm text-ink/70">{entry.description}</p>
                )}
                <ul className="mt-4 space-y-1.5">
                  {entry.points.map((point, j) => (
                    <li key={j} className="flex gap-2 text-sm text-ink/85">
                      <span className="font-mono text-flare">+</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </GlassPanel>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
