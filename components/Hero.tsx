"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-32 container-x">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          <p className="section-label mb-6 flex items-center gap-3">
            <span className="font-mono">01 / 04</span>
            <span className="block w-8 h-px bg-line" />
            <span>INDEX</span>
          </p>

          <h1 className="font-display font-black tracking-tight leading-[0.9] text-ink"
              style={{ fontSize: "clamp(48px, 12vw, 120px)", letterSpacing: "-0.04em" }}>
            We turn IP into
            <br />
            <span className="font-serif italic font-normal">intelligent</span> media.
          </h1>

          <p className="mt-8 md:mt-10 max-w-md text-ink-muted text-lg md:text-xl leading-relaxed">
            AI animation, virtual celebrities, and next-generation advertising — 
            built with creativity, technology, and precision.
          </p>

          <div className="mt-10 md:mt-12 flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-3 px-7 h-14 rounded-full bg-ink text-bg text-sm font-medium hover:bg-accent transition-colors duration-300"
            >
              Explore Services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 h-14 rounded-full border border-line text-ink text-sm font-medium hover:border-ink transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* Editorial detail */}
          <div className="mt-16 md:mt-20 flex items-center gap-4 text-ink-muted">
            <span className="font-mono text-xs uppercase tracking-widest">MORPIO — 2026</span>
            <span className="block w-px h-4 bg-line" />
            <span className="font-mono text-xs uppercase tracking-widest">Seoul</span>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          className="relative aspect-[4/5] lg:aspect-square w-full max-w-lg mx-auto lg:mx-0"
        >
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              src="/gen/hero_v6.webp"
              alt="morpio AI media studio"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Minimal border accent */}
          <div className="absolute -bottom-3 -right-3 w-full h-full border border-line rounded-lg -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
