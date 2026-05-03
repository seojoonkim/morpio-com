"use client";

import { motion, AnimatePresence } from "framer-motion";

interface Props {
  open: boolean;
  setOpen: (v: boolean) => void;
}

/**
 * Top-right menu trigger — like pacomepertant's .nav .wrapper.
 * - Closed: round pill that says "menu" letter-by-letter
 * - Open: shows X + "close"
 */
export default function MenuButton({ open, setOpen }: Props) {
  const letters = ["m", "e", "n", "u"];

  return (
    <button
      onClick={() => setOpen(!open)}
      className={`fixed top-5 right-5 z-50 h-[44px] min-w-[88px] px-5 flex items-center justify-center gap-1.5 rounded-full backdrop-blur-md border transition-colors duration-500 ${
        open
          ? "bg-black/[0.04] text-black border-black/15 hover:border-black/40"
          : "bg-white/[0.04] text-white border-white/15 hover:border-white/40"
      }`}
      aria-label={open ? "Close menu" : "Open menu"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {!open ? (
          <motion.div
            key="menu"
            className="flex items-center gap-[2px] overflow-hidden"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
          >
            {letters.map((l, i) => (
              <span
                key={l + i}
                className="menu-letter text-[13px] uppercase tracking-[0.06em] font-medium"
                style={{ fontFamily: "var(--font-display), system-ui" }}
              >
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.05 * i,
                    duration: 0.4,
                    ease: [0.175, 0.885, 0.32, 1.275],
                  }}
                  className="inline-block"
                >
                  {l}
                </motion.span>
              </span>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="close"
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 2 L10 10 M10 2 L2 10"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
            <span
              className="text-[13px] uppercase tracking-[0.06em] font-medium"
              style={{ fontFamily: "var(--font-display), system-ui" }}
            >
              close
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
