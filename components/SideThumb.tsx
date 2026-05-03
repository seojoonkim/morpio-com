"use client";

import { motion } from "framer-motion";

export default function SideThumb() {
  return (
    <motion.button
      initial={{ opacity: 0, y: 30, rotate: -10 }}
      animate={{ opacity: 1, y: 0, rotate: -6 }}
      transition={{ duration: 0.9, delay: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
      whileHover={{ rotate: -2, scale: 1.05 }}
      onClick={() => {
        const el = document.getElementById("services");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }}
      aria-label="showreel"
      className="hidden md:flex fixed bottom-8 left-8 z-40 showreel-thumb items-center justify-center"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-white/95 text-black flex items-center justify-center text-sm">
          ▶
        </div>
      </div>
      <span className="absolute -top-7 left-2 font-display text-[10px] tracking-[0.3em] text-white/60">
        SHOWREEL ✲ 2026
      </span>
    </motion.button>
  );
}
