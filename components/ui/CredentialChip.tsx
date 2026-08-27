"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Certification } from "@/data/content";
import { fadeUp } from "@/lib/motion";
import GlassPanel from "@/components/ui/GlassPanel";

type CredentialChipProps = {
  cert: Certification;
};

export default function CredentialChip({ cert }: CredentialChipProps) {
  return (
    <motion.div variants={fadeUp} className="w-full sm:w-[220px]">
      <GlassPanel className="flex flex-row items-center gap-4 px-5 py-4 text-left transition-colors hover:border-ink/20 sm:h-56 sm:flex-col sm:justify-center sm:gap-3 sm:px-6 sm:py-6 sm:text-center">
        <div className="relative h-16 w-16 shrink-0">
          <Image
            src={cert.image}
            alt={`${cert.issuer} logo`}
            fill
            className="object-contain"
          />
        </div>
        <div className="min-w-0 flex-1 sm:flex-none">
          <p className="font-body text-xs text-dim leading-snug">{cert.issuer}</p>
          <p className="mt-2 line-clamp-3 font-body text-sm text-ink font-medium leading-snug">
            {cert.name}
          </p>
          <p className="mt-1 font-mono text-[11px] text-dim">
            {cert.year}
          </p>
        </div>
      </GlassPanel>
    </motion.div>
  );
}
