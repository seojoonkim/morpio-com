"use client";

import { motion } from "framer-motion";
import type { Lang } from "./i18n";
import { copy } from "./i18n";

export default function Hero({ lang }: { lang: Lang }) {
  const t = copy[lang].hero;

  return (
    <section
      id="top"
      className="relative h-[100svh] w-full grid-bg overflow-hidden flex items-center justify-center"
    >
      {/* center stack */}
      <div className="relative z-10 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.175, 0.885, 0.32, 1.275] }}
          className="hero-title text-white glow-accent"
        >
          {t.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-4 md:mt-6"
        >
          <span
            className="font-display font-medium tracking-tight text-[#CCFF00]"
            style={{ fontSize: "clamp(18px, 2.4vw, 28px)" }}
          >
            {t.tagline}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-3 text-sm md:text-base text-white/55 max-w-xl mx-auto"
        >
          {t.sub}
        </motion.p>
      </div>

      {/* marquee strip */}
      <div className="absolute bottom-28 left-0 right-0 overflow-hidden border-y border-white/10 py-3 bg-black/40">
        <div className="marquee text-white/50">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex-shrink-0">
              {t.marquee} • {t.marquee}
            </span>
          ))}
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-display text-[10px] tracking-[0.3em] text-white/50">
          {t.scroll}
        </span>
        <div className="w-px h-10 bg-white/15 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-3 bg-[#CCFF00] scrolldown" />
        </div>
      </div>

      {/* corner ticks */}
      <div className="absolute top-24 left-6 font-display text-[10px] tracking-[0.3em] text-white/40">
        STUDIO / SEOUL
      </div>
      <div className="absolute top-24 right-6 font-display text-[10px] tracking-[0.3em] text-white/40">
        EST. 2026
      </div>
    </section>
  );
}
