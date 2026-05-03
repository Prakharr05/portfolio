"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const facts = [
  { k: "Located", v: "Delhi NCR, India" },
  { k: "Studying", v: "B.Tech CSE — Manipal University Jaipur" },
  { k: "Graduating", v: "Q2 2026" },
  { k: "Interests", v: "Agentic systems · multimodal AI · clean APIs" },
  { k: "Off-screen", v: "Football, Reading, walking, fitness" },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-32 sm:px-10 bg-ink-deep">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="02"
          eyebrow="About"
          title={
            <>
              A short <span className="serif-italic text-rust">prologue</span>.
            </>
          }
        />

        <div className="grid grid-cols-12 gap-x-4 gap-y-12">
          {/* Bio prose */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-7 md:col-start-3"
          >
            <p className="font-display text-2xl md:text-3xl text-bone leading-snug mb-8 tracking-tight">
              I build <span className="serif-italic text-rust">machine learning</span> systems
              that ship — with measurable impact and{" "}
              <span className="serif-italic">honest</span> evaluation.
            </p>

            <div className="space-y-5 text-bone-dim leading-[1.8]">
              <p>
                I'm a final-year Computer Science student at Manipal University
                Jaipur. Most of my work sits at the intersection of LLMs, RAG
                pipelines, and classical machine learning
                <span className="fn-num">1</span> — from a Real Estate
                Intelligence Platform combining XGBoost with GPT-4o, to a
                real-time multimodal accessibility assistant for visually
                impaired users built in Flutter.
              </p>
              <p>
                I care about <em className="text-bone serif-italic">measurable impact</em> —
                R² scores, latency budgets, faithfulness metrics
                <span className="fn-num">2</span> — and shipping things people
                actually use. I'd rather have a small system that works in
                production than a clever one that lives in a notebook.
              </p>
              <p>
                Recently completed IBM's RAG and Agentic AI Professional
                Certificate (8-course series). Currently exploring agentic
                workflows with LangGraph and looking for full-time roles
                starting 2026.
              </p>
            </div>

            {/* Footnotes */}
            <div className="mt-12 border-t border-ink-line pt-6 space-y-2 font-mono text-xs text-bone-mute">
              <p>
                <span className="text-rust">¹</span> Generative AI sits on top
                of classical ML, not in place of it.
              </p>
              <p>
                <span className="text-rust">²</span> If you can't measure it,
                you're guessing — and guessing scales badly.
              </p>
            </div>
          </motion.div>

          {/* Right side facts */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-2 md:col-start-11"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone-mute mb-5">
              ◇ Particulars
            </div>
            <dl className="space-y-5">
              {facts.map((f) => (
                <div key={f.k}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-mute mb-1">
                    {f.k}
                  </dt>
                  <dd className="text-sm text-bone leading-snug">{f.v}</dd>
                </div>
              ))}
            </dl>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
