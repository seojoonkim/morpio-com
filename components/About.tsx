"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "100%", label: "Story-First" },
  { value: "100%", label: "AI-Native" },
  { value: "50+", label: "Global Projects" },
  { value: "10×", label: "Faster Production" },
] as const;

export default function About() {
  return (
    <section id="about" className="py-32 md:py-56 container-x">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-16 md:mb-24">
        <span className="section-label">About</span>
        <span className="block flex-1 h-px bg-line" />
        <span className="section-label">04 / 04</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
        {/* Left: Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] tracking-tight">
            A new-generation AI media company at the intersection of IP, virtual talent, and advertising.
          </h2>

          <p className="mt-8 text-ink-muted text-lg md:text-xl leading-relaxed max-w-lg">
            We believe great stories deserve new forms — and AI helps us create them faster, better, and bolder.
          </p>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 text-ink font-medium link-underline"
          >
            Learn more about us
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        {/* Right: Stats */}
        <div className="grid grid-cols-2 gap-6 md:gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.19, 1, 0.22, 1] }}
              className="group"
            >
              {/* Giant Number */}
              <span 
                className="font-display font-black text-ink leading-none block"
                style={{ fontSize: "clamp(80px, 15vw, 160px)" }}
              >
                {stat.value}
              </span>
              
              {/* Label */}
              <span className="mt-2 block font-mono text-xs uppercase tracking-widest text-ink-muted">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
