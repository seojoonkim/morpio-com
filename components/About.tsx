"use client";

import { motion } from "framer-motion";

const ease = [0.19, 1, 0.22, 1] as const;

const STATS = [
  { value: "100", suffix: "%", label: "Story-first" },
  { value: "100", suffix: "%", label: "AI-native" },
  { value: "50", suffix: "+", label: "Global projects" },
  { value: "10", suffix: "×", label: "Faster production" },
] as const;

export default function About() {
  return (
    <section id="about" className="relative py-32 md:py-56 container-wide">
      {/* Section opener */}
      <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
        <span className="col-span-6 md:col-span-3 meta">[ IV — Studio ]</span>
        <span className="hidden md:block col-span-6 meta tabular">
          On story, talent, and machines
        </span>
        <span className="hidden md:block col-span-3 meta text-right">
          04 / 04
        </span>
      </div>

      {/* Manifesto headline */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease }}
        className="grid grid-cols-12 gap-6 md:gap-10 mb-24 md:mb-32"
      >
        <p
          className="col-span-12 lg:col-span-10 lg:col-start-2 font-display font-black text-ink"
          style={{
            fontSize: "clamp(36px, 6.5vw, 96px)",
            lineHeight: "0.98",
            letterSpacing: "-0.03em",
          }}
        >
          A new-generation AI media company at the intersection of{" "}
          <span className="serif-em font-normal">IP</span>, virtual{" "}
          <span className="serif-em font-normal">talent</span>, and{" "}
          <span className="serif-em font-normal">advertising</span>.
        </p>
      </motion.div>

      {/* Belief block */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.1, ease }}
        className="grid grid-cols-12 gap-6 md:gap-10 mb-24 md:mb-40 pt-10 border-t border-line"
      >
        <span className="col-span-12 md:col-span-3 meta">Belief</span>
        <p className="col-span-12 md:col-span-9 lg:col-span-7 text-ink text-xl md:text-2xl leading-[1.45]">
          We believe great stories deserve{" "}
          <span className="serif-em">new forms</span> — and AI helps us create
          them <span className="serif-em">faster, better, and bolder</span>.
        </p>
      </motion.div>

      {/* Stats grid — magazine-grade pull numbers */}
      <div className="border-t border-ink">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: index * 0.08, ease }}
              className={`relative pt-10 md:pt-12 pb-12 md:pb-14 px-2 md:px-6 ${
                index !== 0 ? "md:border-l" : ""
              } ${index >= 2 ? "border-t md:border-t-0" : ""} border-ink/15`}
            >
              <span className="meta-ink mb-8 block">{stat.label}</span>
              <span
                className="font-display font-black text-ink leading-none tabular block"
                style={{
                  fontSize: "clamp(80px, 13vw, 168px)",
                  letterSpacing: "-0.05em",
                }}
              >
                {stat.value}
                <span className="serif-em font-normal text-accent">
                  {stat.suffix}
                </span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
