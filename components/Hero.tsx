"use client";

import { motion } from "framer-motion";

/**
 * Hero — fullscreen centered.
 * - Big "MORPIO" wordmark (massive)
 * - "FROM FRAME TO FAME." accent tag in lime
 * - Sub-copy in grey
 * - Scroll cue at bottom-center (above ShowreelThumb / SoundButton)
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 pt-24"
    >
      {/* Tag above */}
      <motion.div
        className="flex items-center gap-3 mb-8"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
      >
        <span className="w-6 h-px bg-accent" />
        <span
          className="text-[11px] uppercase tracking-[0.32em] text-accent"
          style={{ fontFamily: "var(--font-display), system-ui" }}
        >
          AI Video Studio · Seoul × Worldwide
        </span>
        <span className="w-6 h-px bg-accent" />
      </motion.div>

      {/* MORPIO wordmark */}
      <motion.h1
        className="breathe text-center font-display font-medium leading-[0.85] tracking-[-0.04em]"
        style={{
          fontFamily: "var(--font-display), system-ui",
          fontSize: "clamp(72px, 16vw, 220px)",
          fontWeight: 600,
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] }}
      >
        MORPIO
      </motion.h1>

      {/* Tagline accent */}
      <motion.div
        className="mt-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <p
          className="text-accent text-[20px] sm:text-[24px] tracking-[0.16em] uppercase font-medium"
          style={{ fontFamily: "var(--font-display), system-ui" }}
        >
          From Frame to Fame.
        </p>
      </motion.div>

      {/* Sub-copy */}
      <motion.p
        className="mt-6 max-w-[640px] text-center text-[15px] sm:text-[16px] leading-relaxed text-white/55"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        AI-powered image-to-video & virtual celebrity creation.
        <br className="hidden sm:block" />
        이미지를 영상으로, 상상을 존재로.
      </motion.p>

      {/* CTA pills */}
      <motion.div
        className="mt-10 flex flex-wrap items-center justify-center gap-3"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.5 }}
      >
        <a
          href="#services"
          className="px-6 py-3 rounded-full bg-accent text-black text-[13px] font-medium uppercase tracking-[0.08em] hover:bg-white transition-colors duration-500"
          style={{ fontFamily: "var(--font-display), system-ui" }}
        >
          Explore services
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-full border border-white/20 text-[13px] font-medium uppercase tracking-[0.08em] hover:border-accent hover:text-accent transition-colors duration-500"
          style={{ fontFamily: "var(--font-display), system-ui" }}
        >
          Start a project →
        </a>
      </motion.div>

      {/* Scroll cue */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span
          className="text-[10px] uppercase tracking-[0.3em]"
          style={{ fontFamily: "var(--font-display), system-ui" }}
        >
          scroll
        </span>
        <div className="w-px h-6 bg-white/20 relative overflow-hidden">
          <span className="absolute top-0 left-0 w-px h-2 bg-white scrolldown" />
        </div>
      </div>
    </section>
  );
}
