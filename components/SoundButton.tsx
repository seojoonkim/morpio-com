"use client";

import { motion } from "framer-motion";

interface Props {
  on: boolean;
  setOn: (v: boolean) => void;
}

/**
 * Bottom-right circular sound toggle — like pacomepertant's .sound-button
 */
export default function SoundButton({ on, setOn }: Props) {
  return (
    <motion.button
      onClick={() => setOn(!on)}
      className="fixed bottom-5 right-5 z-30 w-[52px] h-[52px] rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md flex items-center justify-center hover:border-accent transition-colors duration-500"
      aria-label={on ? "Mute" : "Unmute"}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
    >
      {on ? (
        <div className="flex items-end gap-[2px] h-4">
          <span
            className="wave-bar"
            style={{ animationDelay: "0s" }}
          />
          <span
            className="wave-bar"
            style={{ animationDelay: "0.15s" }}
          />
          <span
            className="wave-bar"
            style={{ animationDelay: "0.3s" }}
          />
        </div>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M2 6 L5 6 L9 3 L9 13 L5 10 L2 10 Z"
            fill="currentColor"
          />
          <path
            d="M11 6 L14 9 M14 6 L11 9"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      )}
    </motion.button>
  );
}
