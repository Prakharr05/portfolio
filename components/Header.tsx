"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const links = [
  { id: "work", label: "Work", num: "01" },
  { id: "about", label: "About", num: "02" },
  { id: "stack", label: "Stack", num: "03" },
  { id: "contact", label: "Contact", num: "04" },
];

export default function Header() {
  const { scrollY } = useScroll();
  const bg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(14, 14, 12, 0)", "rgba(14, 14, 12, 0.85)"]
  );
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <motion.header
      style={{ background: bg }}
      className="fixed top-0 left-0 right-0 z-30 backdrop-blur-md"
    >
      <motion.div
        style={{ opacity: borderOpacity }}
        className="absolute bottom-0 left-0 right-0 h-px bg-ink-line"
      />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
        <motion.a
          href="#"
          className="flex items-baseline gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <span className="font-display text-2xl text-bone serif-italic">
            Prakhar
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-mute">
            / portfolio · 26
          </span>
        </motion.a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l, i) => (
            <motion.a
              key={l.id}
              href={`#${l.id}`}
              className="group relative flex items-baseline gap-1.5 rounded-full px-4 py-2 text-sm text-bone-dim transition-colors hover:text-bone"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.05, duration: 0.5 }}
            >
              <span className="font-mono text-[10px] text-bone-mute group-hover:text-rust transition-colors">
                {l.num}
              </span>
              <span>{l.label}</span>
            </motion.a>
          ))}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="ml-3 flex items-center gap-2 rounded-full border border-ink-line px-4 py-2 text-sm text-bone hover:border-rust hover:text-rust transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95, duration: 0.5 }}
          >
            <span>CV</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </motion.a>
        </nav>
      </div>
    </motion.header>
  );
}
