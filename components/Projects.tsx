"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    id: "01",
    year: "2026",
    name: "Real Estate Intelligence",
    type: "Full-stack ML platform",
    description:
      "End-to-end system pairing XGBoost price prediction with a RAG-powered Q&A layer over property listings. ChromaDB for retrieval, GPT-4o for synthesis.",
    tech: ["XGBoost", "RAG", "ChromaDB", "GPT-4o", "Python"],
    metrics: [
      { k: "R²", v: "0.91" },
      { k: "RMSE", v: "↓ 23%" },
      { k: "faithfulness", v: "0.87" },
    ],
    status: "Live",
  },
  {
    id: "02",
    year: "2026",
    name: "Vision-aware Assistant",
    type: "Multimodal mobile app",
    description:
      "Real-time accessibility tool for visually impaired users. Voice-activated camera capture with GPT-4o Vision, built natively in Flutter with on-device hotword detection.",
    tech: ["Flutter", "GPT-4o Vision", "Whisper", "Kotlin"],
    metrics: [
      { k: "latency", v: "~3s" },
      { k: "platform", v: "Android" },
      { k: "modes", v: "voice + vision" },
    ],
    status: "Shipped",
  },
  {
    id: "03",
    year: "2026",
    name: "Social-to-Lead Agent",
    type: "Agentic workflow",
    description:
      "LangGraph-powered conversational agent. Intent detection, FAISS retrieval, and tool execution stitched into multi-turn state for automated lead capture.",
    tech: ["LangGraph", "FAISS", "Gemini", "Python"],
    metrics: [
      { k: "turns", v: "5–6" },
      { k: "intents", v: "3 classes" },
      { k: "tools", v: "lead_capture" },
    ],
    status: "Submitted",
  },
  {
    id: "04",
    year: "2025",
    name: "Diabetes Risk Predictor",
    type: "ML pipeline + API",
    description:
      "Modular pipeline from preprocessing to deployment. StandardScaler, Random Forest training, model serialization, and a Flask service for real-time inference.",
    tech: ["Random Forest", "Flask", "Scikit-learn"],
    metrics: [
      { k: "accuracy", v: "78%" },
      { k: "deployment", v: "Flask" },
      { k: "type", v: "tabular ML" },
    ],
    status: "Deployed",
  },
];

function ProjectCard({
  p,
  i,
}: {
  p: (typeof projects)[number];
  i: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), {
    damping: 20,
    stiffness: 150,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-4, 4]), {
    damping: 20,
    stiffness: 150,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      data-cursor="hover"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative grid grid-cols-12 gap-x-4 gap-y-6 border-t border-ink-line py-12 first:border-t-0 first:pt-0"
    >
      {/* Index + year column */}
      <div className="col-span-3 md:col-span-2 md:col-start-1">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-mute">
          {p.id} / {p.year}
        </div>
        <div className="mt-3 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-rust">
          <span className="h-1.5 w-1.5 rounded-full bg-rust" />
          {p.status}
        </div>
      </div>

      {/* Main content */}
      <div className="col-span-9 md:col-span-7 md:col-start-3">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-bone-mute mb-2">
          {p.type}
        </div>
        <h3
          className="font-display text-bone leading-[1.1] tracking-tight mb-5 group-hover:text-rust transition-colors duration-500"
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontVariationSettings: '"opsz" 144, "SOFT" 50',
          }}
        >
          {p.name}
        </h3>
        <p className="text-bone-dim leading-relaxed mb-6 max-w-xl">
          {p.description}
        </p>
        <div className="flex flex-wrap gap-x-1 gap-y-2">
          {p.tech.map((t, idx) => (
            <span key={t} className="font-mono text-[11px] text-bone-dim">
              {t}
              {idx < p.tech.length - 1 && (
                <span className="text-bone-mute mx-2">·</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Metrics column */}
      <div className="col-span-12 md:col-span-3 md:col-start-10">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-mute mb-4">
          ◇ Metrics
        </div>
        <dl className="space-y-3">
          {p.metrics.map((m) => (
            <div key={m.k} className="flex items-baseline justify-between border-b border-ink-line pb-2">
              <dt className="font-mono text-[11px] text-bone-dim">{m.k}</dt>
              <dd className="font-display text-lg text-bone serif-italic">
                {m.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative px-6 py-32 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="01"
          eyebrow="Selected work"
          title={
            <>
              Things I've{" "}
              <span className="serif-italic text-rust">built</span>.
            </>
          }
          description="A handful of projects I'm proud of — production ML systems, agentic workflows, and a multimodal accessibility app. Each shipped, measured, and learned from."
        />

        <div className="grid grid-cols-12 gap-x-4">
          <div className="col-span-12">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} p={p} i={i} />
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-12">
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            <p className="text-bone-dim">
              More on{" "}
              <a
                href="https://github.com/Prakharr05"
                className="link text-bone"
                target="_blank"
                rel="noreferrer"
              >
                github
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
