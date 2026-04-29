"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-32 pb-20 sm:px-10 sm:pt-40">
      <div className="mx-auto max-w-7xl">
        {/* Top meta strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mb-12 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-bone-mute"
        >
          <span>Delhi NCR, IN</span>
          <span className="h-px w-12 bg-ink-line" />
          <span>28.61° N</span>
          <span className="h-px w-6 bg-ink-line" />
          <span>77.21° E</span>
          <div className="ml-auto hidden items-center gap-2 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-rust animate-pulse" />
            <span>available · q3 ′26</span>
          </div>
        </motion.div>

        {/* Main title — asymmetric grid */}
        <div className="grid grid-cols-12 gap-x-4">
          {/* Big serif name */}
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <motion.h1
              className="font-display text-bone leading-[0.95] tracking-tight"
              style={{
                fontSize: "clamp(56px, 12vw, 180px)",
                fontVariationSettings: '"opsz" 144, "SOFT" 50',
              }}
            >
              {/* First name */}
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease }}
              >
                Prakhar
              </motion.span>
              {/* Second name with italic accent */}
              <motion.span
                className="block pl-[8%] text-bone"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease }}
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
              >
                <span className="serif-italic text-rust">Sh</span>arma
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="ml-3 align-top font-mono text-[0.18em] font-normal not-italic text-bone-mute"
                >
                  *
                </motion.span>
              </motion.span>
            </motion.h1>
          </div>

          {/* Right side small label */}
          <motion.div
            className="col-span-12 mt-8 flex items-start gap-3 md:col-span-3 md:col-start-10 md:mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <span className="font-mono text-[10px] text-rust mt-1.5">→</span>
            <p className="text-sm text-bone-dim leading-relaxed max-w-xs">
              Building <span className="serif-italic text-bone">machine learning</span> systems,
              RAG pipelines, and{" "}
              <span className="serif-italic text-bone">agentic</span> workflows.
            </p>
          </motion.div>
        </div>

        {/* Bottom meta block */}
        <div className="mt-20 grid grid-cols-12 gap-x-4 gap-y-8 md:mt-32">
          <motion.div
            className="col-span-12 md:col-span-3 md:col-start-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease }}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-mute mb-3">
              ◇ Currently
            </div>
            <p className="text-bone leading-snug">
              Final-year B.Tech CSE
              <br />
              <span className="text-bone-dim">Manipal University Jaipur</span>
            </p>
          </motion.div>

          <motion.div
            className="col-span-12 md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease }}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-mute mb-3">
              ◇ Open to
            </div>
            <p className="text-bone leading-snug">
              ML / GenAI roles
              <br />
              <span className="text-bone-dim">starting 2026</span>
            </p>
          </motion.div>

          <motion.div
            className="col-span-12 md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease }}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-mute mb-3">
              ◇ Recently
            </div>
            <p className="text-bone leading-snug">
              IBM RAG &amp; Agentic AI
              <br />
              <span className="text-bone-dim">Professional Certificate</span>
            </p>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="mt-24 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-mute"
          >
            ↓ Scroll
          </motion.div>
          <span className="h-px w-16 bg-ink-line" />
          <span className="font-mono text-[10px] text-bone-mute">
            04 sections
          </span>
        </motion.div>
      </div>

      {/* Decorative large background number */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-20 select-none font-display text-[40vw] leading-none text-bone-mute opacity-[0.03] sm:-bottom-40"
        style={{ fontVariationSettings: '"opsz" 144' }}
      >
        00
      </div>
    </section>
  );
}
