"use client";

import { motion } from "framer-motion";

const ease = [0.19, 1, 0.22, 1] as const;

const STEPS = [
  {
    n: "I",
    label: "Discover",
    italic: "the brief",
    body: "We dive deep into your IP, brand, and audience to uncover the core story and the right opportunity.",
  },
  {
    n: "II",
    label: "Design",
    italic: "the world",
    body: "We build characters, worlds, and concepts, then prototype, iterate, and bring direction to life.",
  },
  {
    n: "III",
    label: "Generate",
    italic: "the work",
    body: "We leverage frontier AI tools and in-house pipelines to produce stunning visuals, video, and audio.",
  },
  {
    n: "IV",
    label: "Launch",
    italic: "to the world",
    body: "We deliver optimized assets and scale your content across channels for maximum cultural impact.",
  },
] as const;

export default function Process() {
  return (
    <section id="process" className="relative py-32 md:py-56 container-wide">
      {/* Section opener */}
      <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
        <span className="col-span-6 md:col-span-3 meta">[ III — Method ]</span>
        <span className="hidden md:block col-span-6 meta tabular">
          Four movements · From brief to release
        </span>
        <span className="hidden md:block col-span-3 meta text-right">
          03 / 04
        </span>
      </div>

      {/* Section headline */}
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease }}
        className="font-display font-black text-ink mb-20 md:mb-32 max-w-5xl"
        style={{
          fontSize: "clamp(40px, 7.5vw, 116px)",
          lineHeight: "0.92",
          letterSpacing: "-0.035em",
        }}
      >
        A method,{" "}
        <span className="serif-em font-normal">not a formula.</span>
      </motion.h2>

      {/* Steps grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {STEPS.map((step, index) => (
          <motion.div
            key={step.n}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: index * 0.08, ease }}
            className="group"
          >
            {/* Roman numeral */}
            <div
              className="font-serif italic text-ink-muted leading-none mb-8"
              style={{ fontSize: "clamp(56px, 7vw, 88px)" }}
            >
              {step.n}
            </div>

            {/* Hairline */}
            <div className="h-px bg-ink/20 group-hover:bg-ink transition-colors duration-700 mb-8" />

            {/* Label */}
            <h4 className="font-display font-black text-ink text-2xl md:text-3xl tracking-tight">
              {step.label}{" "}
              <span className="serif-em font-normal text-ink-muted text-xl md:text-2xl">
                {step.italic}
              </span>
            </h4>

            {/* Body */}
            <p className="mt-5 text-ink-muted text-[15px] leading-[1.65]">
              {step.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
