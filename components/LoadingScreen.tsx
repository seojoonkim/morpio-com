"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  onEnter: () => void;
}

/**
 * LoadingScreen — fullscreen pacomepertant.com-style loader
 * - Dark bg (#0A0A0A)
 * - MORPIO logo center w/ pulse + glow
 * - Loading progress bar (0 → 100)
 * - ENTER pill button (appears at 100%)
 * - Slides out (translateY -100%) when ENTER pressed
 */
export default function LoadingScreen({ onEnter }: Props) {
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    let raf: number;
    let p = 0;
    const tick = () => {
      // ease-out increment, slows near 100
      const step = Math.max(0.4, (100 - p) * 0.012);
      p = Math.min(100, p + step);
      setProgress(p);
      if (p < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setReady(true);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleEnter = () => {
    if (!ready) return;
    setExit(true);
    // delay parent state until slide-out completes
    setTimeout(() => onEnter(), 900);
  };

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          key="loading"
          className="fixed inset-0 z-[100] bg-[#0A0A0A] flex flex-col items-center justify-center overflow-hidden"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
          <div className="absolute inset-0 center-vignette pointer-events-none" />

          {/* MORPIO logo with pulse + glow */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] }}
          >
            <motion.h1
              className="breathe text-white font-medium leading-none tracking-[-0.04em] text-center"
              style={{
                fontFamily: "var(--font-display), system-ui",
                fontSize: "clamp(64px, 14vw, 180px)",
                fontWeight: 600,
                textShadow:
                  "0 0 40px rgba(204,255,0,0.18), 0 0 80px rgba(204,255,0,0.08)",
              }}
              animate={{
                opacity: [0.85, 1, 0.85],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              MORPIO
            </motion.h1>

            {/* Glow halo */}
            <motion.div
              className="absolute inset-0 -z-10 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(204,255,0,0.14) 0%, transparent 60%)",
                filter: "blur(40px)",
              }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="mt-8 text-[11px] uppercase tracking-[0.4em] text-white/50"
            style={{ fontFamily: "var(--font-display), system-ui" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            From Frame to Fame
          </motion.p>

          {/* Progress bar */}
          <motion.div
            className="mt-12 w-[240px] sm:w-[320px] flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="relative w-full h-px bg-white/10 overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full bg-accent"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
            <div className="flex w-full justify-between text-[10px] tracking-[0.3em] uppercase text-white/35"
              style={{ fontFamily: "var(--font-display), system-ui" }}>
              <span>Loading</span>
              <span>{Math.floor(progress).toString().padStart(3, "0")}%</span>
            </div>
          </motion.div>

          {/* ENTER pill button (visible when ready) */}
          <AnimatePresence>
            {ready && (
              <motion.button
                key="enter-btn"
                onClick={handleEnter}
                className="mt-10 px-10 py-4 border border-white/25 text-white text-[12px] uppercase tracking-[0.3em] font-medium hover:bg-accent hover:text-black hover:border-accent transition-colors duration-500"
                style={{
                  fontFamily: "var(--font-display), system-ui",
                  borderRadius: "100rem",
                }}
                initial={{ opacity: 0, scale: 0.9, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.6,
                  ease: [0.175, 0.885, 0.32, 1.275],
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Enter
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
