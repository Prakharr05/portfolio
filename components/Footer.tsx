"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-ink-line px-6 py-12 sm:px-10 relative z-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display serif-italic text-4xl text-bone leading-none"
        >
          Prakhar.
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-2 font-mono text-[11px] text-bone-mute md:text-right"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span>© 2026</span>
            <span>·</span>
            <span>Built with Next.js + Framer Motion</span>
          </div>
          <div>
            Set in{" "}
            <span className="serif-italic text-bone-dim font-display">
              Fraunces
            </span>{" "}
            &amp; IBM Plex
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
