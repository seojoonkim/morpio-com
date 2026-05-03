"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Lang } from "./i18n";
import { copy } from "./i18n";

export default function Loader({
  lang,
  onEnter,
}: {
  lang: Lang;
  onEnter: (sound: boolean) => void;
}) {
  const [pct, setPct] = useState(0);
  const [ready, setReady] = useState(false);
  const t = copy[lang].loader;

  useEffect(() => {
    const start = performance.now();
    const dur = 2600;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setPct(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setReady(true);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[100] bg-[#0A0A0A] text-white grid-bg overflow-hidden"
    >
      {/* center logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative"
          animate={{
            scale: [1, 1.04, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="font-display font-bold tracking-tight glow-accent"
            style={{ fontSize: "clamp(56px, 12vw, 140px)", lineHeight: 1 }}
          >
            MORPIO
          </div>
          <div
            className="absolute -inset-10 -z-10 rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, rgba(204,255,0,0.18), rgba(204,255,0,0) 70%)",
              filter: "blur(20px)",
            }}
          />
        </motion.div>
      </div>

      {/* loading percentage (bottom-left) */}
      <div className="absolute bottom-8 left-8 flex items-center gap-3">
        <span className="loader-pct text-white/70">{String(pct).padStart(3, "0")}%</span>
        <div className="h-px w-24 bg-white/20 overflow-hidden">
          <motion.div
            className="h-full bg-[#CCFF00]"
            style={{ width: `${pct}%` }}
            transition={{ duration: 0 }}
          />
        </div>
        <span className="loader-pct text-white/40 hidden md:inline">{t.caption}</span>
      </div>

      {/* enter buttons (bottom-right) */}
      <div className="absolute bottom-8 right-8 flex flex-col md:flex-row items-end md:items-center gap-3">
        <motion.button
          disabled={!ready}
          onClick={() => onEnter(false)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: ready ? 1 : 0.3, y: ready ? 0 : 20 }}
          transition={{ duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
          className="pill text-white/80 disabled:cursor-not-allowed"
        >
          {t.withoutSound}
        </motion.button>
        <motion.button
          disabled={!ready}
          onClick={() => onEnter(true)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: ready ? 1 : 0.3, y: ready ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.175, 0.885, 0.32, 1.275] }}
          className="pill pill-accent disabled:cursor-not-allowed"
        >
          ▶ {t.withSound}
        </motion.button>
      </div>

      {/* corner ticks */}
      <div className="absolute top-8 left-8 loader-pct text-white/50">MORPIO</div>
      <div className="absolute top-8 right-8 loader-pct text-white/50">SYS / 01</div>
    </motion.div>
  );
}
