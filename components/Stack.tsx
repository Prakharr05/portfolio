"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const stack = [
  {
    category: "ML & AI",
    items: ["Python", "PyTorch", "Scikit-learn", "XGBoost", "Pandas", "NumPy"],
  },
  {
    category: "Generative AI",
    items: [
      "LangChain",
      "LangGraph",
      "RAG",
      "ChromaDB",
      "FAISS",
      "Embeddings",
      "Prompt Eng.",
      "GPT-4o",
      "Gemini",
    ],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Flask", "Node.js", "REST", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    category: "Mobile",
    items: ["Flutter", "Dart", "Kotlin"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Linux", "Vercel"],
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Stack() {
  return (
    <section id="stack" className="relative px-6 py-32 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="03"
          eyebrow="Stack"
          title={
            <>
              Tools of the <span className="serif-italic text-rust">trade</span>.
            </>
          }
          description="An evolving collection — what I reach for daily, what I'm learning, what I trust in production."
        />

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((g, i) => (
            <motion.div
              key={g.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease }}
            >
              <div className="mb-5 flex items-baseline justify-between border-b border-ink-line pb-3">
                <h3 className="font-display text-2xl text-bone serif-italic">
                  {g.category}
                </h3>
                <span className="font-mono text-[11px] text-bone-mute">
                  {String(g.items.length).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-wrap gap-x-1 gap-y-2">
                {g.items.map((it, idx) => (
                  <span key={it} className="font-mono text-xs text-bone-dim">
                    {it}
                    {idx < g.items.length - 1 && (
                      <span className="text-bone-mute mx-1.5">·</span>
                    )}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mt-20 grid grid-cols-12 gap-x-4 border-t border-ink-line pt-12"
        >
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone-mute mb-4 md:mb-0">
              ◇ Certified
            </div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h3
              className="font-display leading-[1.2] tracking-tight mb-2"
              style={{
                fontSize: "clamp(22px, 2.5vw, 28px)",
                fontVariationSettings: '"opsz" 144, "SOFT" 50',
              }}
            >
              <span className="text-bone">RAG &amp; </span>
              <span className="serif-italic text-rust">Agentic AI</span>
              <span className="text-bone"> Professional Certificate</span>
            </h3>
            <p className="font-mono text-xs text-bone-dim">
              IBM · 8-course series · 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
