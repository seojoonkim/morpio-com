"use client";

import { motion } from "framer-motion";

type Mode = "spiral" | "list";

interface Props {
  mode: Mode;
  setMode: (m: Mode) => void;
}

/**
 * Mode switch (top-center fixed) — like pacomepertant's .switch
 * Two buttons separated by a center dot. Active button has stronger weight.
 * In morpio context: "services" / "about"
 */
export default function ModeSwitch({ mode, setMode }: Props) {
  return (
    <div className="hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-30 items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] backdrop-blur-md border border-white/10">
      <button
        onClick={() => setMode("spiral")}
        className={`relative px-3 py-1 text-[13px] tracking-[0.04em] transition-colors duration-500 ${
          mode === "spiral" ? "text-white" : "text-white/45 hover:text-white/80"
        }`}
        style={{ fontFamily: "var(--font-display), system-ui" }}
      >
        services
        {mode === "spiral" && (
          <motion.span
            layoutId="mode-pill"
            className="absolute inset-0 rounded-full bg-white/10 -z-10"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </button>

      <span className="w-1 h-1 rounded-full bg-white/40" />

      <button
        onClick={() => setMode("list")}
        className={`relative px-3 py-1 text-[13px] tracking-[0.04em] transition-colors duration-500 ${
          mode === "list" ? "text-white" : "text-white/45 hover:text-white/80"
        }`}
        style={{ fontFamily: "var(--font-display), system-ui" }}
      >
        about
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
