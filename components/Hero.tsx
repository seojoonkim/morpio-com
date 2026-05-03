"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] grid-bg overflow-hidden flex items-center">
      {/* Animated blobs */}
      <div className="blob bg-accent/40 w-[480px] h-[480px] -top-40 -left-32" />
      <div
        className="blob bg-neon/30 w-[520px] h-[520px] top-1/3 -right-40"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="blob bg-fuchsia-500/20 w-[420px] h-[420px] bottom-0 left-1/3"
        style={{ animationDelay: "-12s" }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/60 mb-8"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
          Now in private beta · v0.1
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
          className="font-display font-bold leading-[0.92] tracking-[-0.04em] text-[clamp(3.5rem,12vw,11rem)]"
        >
          MORPIO
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-4 md:mt-6"
        >
          <p className="font-display text-[clamp(1.6rem,4.2vw,3.4rem)] tracking-[-0.02em] glow text-accent">
            FROM FRAME TO FAME.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="mt-8 md:mt-10 max-w-2xl space-y-2"
        >
          <p className="text-lg md:text-xl text-white/85">
            AI-powered image-to-video &amp; virtual celebrity creation.
          </p>
          <p className="text-base md:text-lg text-white/55">
            이미지를 영상으로, 상상을 존재로.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#waitlist" className="btn-accent">
            Join the waitlist →
          </a>
          <a href="#showcase" className="btn-ghost">
            Watch the showcase
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-[0.3em] flex flex-col items-center gap-2"
        >
          <span>SCROLL</span>
          <span className="scrolldown w-px h-8 bg-white/40" />
        </motion.div>
      </div>
    </section>
  );
}
