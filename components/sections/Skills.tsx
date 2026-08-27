"use client";

import { motion } from "motion/react";
import { skillCategories, certifications } from "@/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import SectionHeading from "@/components/ui/SectionHeading";
import CredentialChip from "@/components/ui/CredentialChip";
import GlassPanel from "@/components/ui/GlassPanel";

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="stack" title="Skills" />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-5 sm:grid-cols-2"
        >
          {skillCategories.map((group) => (
            <motion.div key={group.category} variants={fadeUp}>
              <GlassPanel className="h-full p-6">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-dim" />
                  <span className="font-mono text-xs tracking-wide text-dim">
                    {group.category}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-accent/40 bg-surface/60 px-3 py-1.5 font-mono text-xs text-ink/85 transition-colors hover:border-accent/70 hover:text-ink"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16">
          <div className="mb-6 flex items-center gap-4">
            <span className="font-mono text-xs text-dim">{"// certifications"}</span>
            <span className="h-px flex-1 bg-line" />
          </div>
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-wrap justify-center gap-4"
          >
            {certifications.map((cert, i) => (
              <CredentialChip key={cert.name + i} cert={cert} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
