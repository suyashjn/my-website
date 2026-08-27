import { motion } from "motion/react";
import { fadeUp, viewportOnce } from "@/lib/motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

export default function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="mb-10"
    >
      <p className="font-mono text-xs text-dim">{`// ${eyebrow}`}</p>
      <h2 className="mt-2 font-display text-2xl sm:text-3xl tracking-tight text-ink">
        {title}
      </h2>
    </motion.div>
  );
}
