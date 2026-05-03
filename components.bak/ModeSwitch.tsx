"use client";

import { motion } from "framer-motion";

type Mode = "spiral" | "list";

interface Props {
  mode: Mode;
  setMode: (m: Mode) => void;
}

/**
 * Mode switch — pacomepertant-style top-center pill.
 * Visible on BOTH desktop and mobile (smaller on mobile).
 * Buttons read: "spiral · list" — toggles SpiralGallery / SpiralList.
 */
export default function ModeSwitch({ mode, setMode }: Props) {
  return (
    <div
      className="fixed left-1/2 -translate-x-1/2 z-30 flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/[0.05] backdrop-blur-md border border-white/10"
      style={{ top: "max(env(safe-area-inset-top), 14px)" }}
      role="tablist"
      aria-label="Gallery view mode"
    >
      <button
        type="button"
        role="tab"
        aria-selected={mode === "spiral"}
        onClick={() => setMode("spiral")}
        className={`relative px-2.5 sm:px-3 py-1 text-[11px] sm:text-[13px] uppercase tracking-[0.18em] sm:tracking-[0.22em] transition-colors duration-500 ${
          mode === "spiral" ? "text-white" : "text-white/45 hover:text-white/80"
        }`}
        style={{ fontFamily: "var(--font-display), system-ui" }}
      >
        spiral
        {mode === "spiral" && (
          <motion.span
            layoutId="mode-pill"
            className="absolute inset-0 rounded-full bg-white/10 -z-10"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </button>

      <span className="w-1 h-1 rounded-full bg-white/40" aria-hidden="true" />

      <button
        type="button"
        role="tab"
        aria-selected={mode === "list"}
        onClick={() => setMode("list")}
        className={`relative px-2.5 sm:px-3 py-1 text-[11px] sm:text-[13px] uppercase tracking-[0.18em] sm:tracking-[0.22em] transition-colors duration-500 ${
          mode === "list" ? "text-white" : "text-white/45 hover:text-white/80"
        }`}
        style={{ fontFamily: "var(--font-display), system-ui" }}
      >
        list
        {mode === "list" && (
          <motion.span
            layoutId="mode-pill"
            className="absolute inset-0 rounded-full bg-white/10 -z-10"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </button>
    </div>
  );
}
