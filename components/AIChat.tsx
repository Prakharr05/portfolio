"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function AIChat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setOpen(!open)}
        data-cursor="hover"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full border border-ink-line bg-ink-panel px-5 py-3 font-display text-sm serif-italic text-bone shadow-2xl shadow-black/40 hover:border-rust hover:text-rust transition-colors"
        aria-label="Open AI chat"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-rust animate-pulse" />
        <span>Ask me anything</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-[380px] overflow-hidden border border-ink-line bg-ink-panel shadow-2xl shadow-black/50"
          >
            <div className="flex items-center justify-between border-b border-ink-line px-5 py-4">
              <div className="flex items-baseline gap-2">
                <span className="font-display serif-italic text-base text-bone">
                  prakhar_ai
                </span>
                <span className="font-mono text-[10px] text-bone-mute">
                  v0.1
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-bone-mute hover:text-bone"
                aria-label="Close"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-5">
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-rust">
                ◇ Coming soon
              </div>
              <p className="text-sm text-bone-dim leading-relaxed">
                A small{" "}
                <em className="serif-italic text-bone">RAG-powered agent</em>{" "}
                trained on my CV and projects. Ask about my work, my fit for a
                role, or just say hi.
              </p>
              <div className="mt-4 border-t border-ink-line pt-4 font-mono text-[11px] text-bone-mute">
                <div>// planned</div>
                <ul className="mt-1.5 space-y-0.5">
                  <li>
                    <span className="text-rust mr-1.5">▸</span>Project deep-dives
                  </li>
                  <li>
                    <span className="text-rust mr-1.5">▸</span>Skill-fit for a JD
                  </li>
                  <li>
                    <span className="text-rust mr-1.5">▸</span>Schedule a call
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-ink-line px-5 py-3">
              <input
                type="text"
                disabled
                placeholder="ships in v1.1..."
                className="w-full bg-transparent text-sm text-bone outline-none placeholder:italic placeholder:text-bone-mute"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
