"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="grid grid-cols-12 gap-x-4 mb-16 md:mb-24">
      {/* Large outline index */}
      <motion.div
        className="col-span-3 md:col-span-2 md:col-start-1"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="index-num text-7xl md:text-8xl">
          {index}
        </div>
      </motion.div>

      {/* Title block */}
      <motion.div
        className="col-span-9 md:col-span-8 md:col-start-3 pt-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-rust" />
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-rust">
            {eyebrow}
          </span>
        </div>
        <h2
          className="font-display text-bone leading-[1.05] tracking-tight"
          style={{
            fontSize: "clamp(36px, 6vw, 72px)",
            fontVariationSettings: '"opsz" 144, "SOFT" 50',
          }}
        >
          {title}
        </h2>
        {description && (
          <p className="mt-6 max-w-xl text-bone-dim leading-relaxed">
            {description}
          </p>
        )}
      </motion.div>
    </div>
  );
}
