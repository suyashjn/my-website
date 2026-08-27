"use client";

import { motion } from "motion/react";
import { contact, profile } from "@/data/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassPanel from "@/components/ui/GlassPanel";

const FIELDS: { label: string; value: string }[] = [
  { label: "Email", value: contact.email },
  { label: "Phone", value: contact.phone },
  { label: "Location", value: contact.location },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="contact" title="Get in Touch" />

        <GlassPanel className="p-6 sm:p-10">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-6 sm:grid-cols-3"
          >
            {FIELDS.map((field) => (
              <motion.div key={field.label} variants={fadeUp}>
                <p className="font-mono text-[11px] text-dim">{field.label}</p>
                <p className="mt-1 font-body text-ink break-words">{field.value}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8 h-px w-full bg-line" />

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-8 flex flex-wrap gap-3"
          >
            <motion.a
              variants={fadeUp}
              href={`mailto:${contact.email}`}
              className="rounded-lg bg-accent px-5 py-2.5 font-mono text-xs tracking-wide text-ink transition-transform hover:scale-[1.03]"
            >
              Send a message
            </motion.a>
            {contact.links.map((link) => (
              <motion.a
                key={link.label}
                variants={fadeUp}
                href={link.url}
                className="rounded-lg border border-line px-5 py-2.5 font-mono text-xs tracking-wide text-ink/90 transition-colors hover:border-ink/40 hover:text-ink"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </GlassPanel>

        <p className="mt-8 text-center font-mono text-[11px] text-dim/70">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </section>
  );
}
