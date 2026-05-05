"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Discover",
    body: "We dive deep into your IP, brand, and audience to uncover the core story and opportunities.",
  },
  {
    n: "02",
    title: "Design",
    body: "We build characters, worlds, and concepts, then prototype, iterate, and bring direction to life.",
  },
  {
    n: "03",
    title: "Generate",
    body: "We leverage cutting-edge AI tools and in-house pipelines to produce stunning visuals and videos.",
  },
  {
    n: "04",
    title: "Launch",
    body: "We deliver optimized assets and scale your content across channels for maximum impact.",
  },
] as const;

export default function Process() {
  return (
    <section id="process" className="py-32 md:py-56 container-x">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-16 md:mb-24">
        <span className="section-label">Our Process</span>
        <span className="block flex-1 h-px bg-line" />
        <span className="section-label">03 / 04</span>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {STEPS.map((step, index) => (
          <motion.div
            key={step.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.19, 1, 0.22, 1] }}
            className="group"
          >
            {/* Number */}
            <span className="font-mono text-xs text-ink-muted tracking-widest">
              {step.n}
            </span>

            {/* Line */}
            <div className="mt-4 mb-6 h-px bg-line group-hover:bg-ink transition-colors duration-500" />

            {/* Title */}
            <h4 className="font-display font-bold text-2xl md:text-3xl text-ink">
              {step.title}
            </h4>

            {/* Body */}
            <p className="mt-4 text-ink-muted text-base leading-relaxed">
              {step.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
