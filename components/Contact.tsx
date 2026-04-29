"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const channels = [
  { num: "i", name: "Email", value: "prakhar@example.com", href: "mailto:prakhar@example.com" },
  { num: "ii", name: "GitHub", value: "github.com/prakhar", href: "https://github.com/" },
  { num: "iii", name: "LinkedIn", value: "linkedin.com/in/prakhar", href: "https://linkedin.com/" },
  { num: "iv", name: "Twitter", value: "@prakhar", href: "https://twitter.com/" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32 sm:px-10 bg-ink-deep">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="04"
          eyebrow="Contact"
          title={
            <>
              Say <span className="serif-italic text-rust">hello</span>.
            </>
          }
        />

        <div className="grid grid-cols-12 gap-x-4">
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease }}
              className="font-display text-bone leading-tight tracking-tight mb-12"
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontVariationSettings: '"opsz" 144, "SOFT" 50',
              }}
            >
              Open to{" "}
              <span className="serif-italic text-rust">ML / GenAI</span>{" "}
              engineering roles, interesting collaborations, and quiet
              conversations about agentic systems.
            </motion.p>

            <div>
              {channels.map((c, i) => (
                <motion.a
                  key={c.name}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="hover"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.06, ease }}
                  whileHover={{ paddingLeft: 16 }}
                  className="group grid grid-cols-12 items-center gap-4 border-t border-ink-line py-6 last:border-b transition-colors"
                >
                  <span className="col-span-2 font-mono text-[11px] text-bone-mute">
                    — {c.num}
                  </span>
                  <span className="col-span-4 font-display serif-italic text-bone text-xl group-hover:text-rust transition-colors duration-500">
                    {c.name}
                  </span>
                  <span className="col-span-5 font-mono text-xs text-bone-dim truncate">
                    {c.value}
                  </span>
                  <motion.span
                    initial={{ opacity: 0, x: -12 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="col-span-1 text-right text-rust opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
                  >
                    →
                  </motion.span>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-16 flex flex-wrap items-center gap-4 font-mono text-[11px] text-bone-mute"
            >
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-rust animate-pulse" />
                avg response &lt; 24h
              </span>
              <span>·</span>
              <span>Delhi NCR, IN (UTC+5:30)</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
