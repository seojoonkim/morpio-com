"use client";

import { motion } from "framer-motion";

/**
 * Bottom-left tilted thumbnail — like pacomepertant's .showreel-thumbnail
 * - 16:9, rotated -6deg by default
 * - On hover: rotate to -2deg + scale up + brightness
 * - Marquee text "showreel • 2026" running across
 */
export default function ShowreelThumb() {
  return (
    <motion.div
      className="hidden md:block fixed bottom-5 left-5 z-30 select-none"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      <div className="group cursor-pointer">
        <div
          className="relative w-[200px] aspect-[16/9] overflow-hidden rounded-xl border border-white/10 transition-transform duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:scale-105"
          style={{
            transform: "rotate(-6deg)",
            transformOrigin: "center",
          }}
        >
          {/* Gradient image stand-in */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%), radial-gradient(circle at 30% 40%, rgba(204,255,0,0.18), transparent 55%), radial-gradient(circle at 70% 70%, rgba(40,222,145,0.15), transparent 55%)",
              backgroundBlendMode: "screen",
            }}
          />
          {/* Decorative wireframe shapes */}
          <svg
            className="absolute inset-0 w-full h-full opacity-50"
            viewBox="0 0 320 180"
            fill="none"
          >
            <circle
              cx="160"
              cy="90"
              r="40"
              stroke="#CCFF00"
              strokeWidth="0.6"
              opacity="0.6"
            />
            <circle
              cx="160"
              cy="90"
              r="60"
              stroke="#CCFF00"
              strokeWidth="0.4"
              opacity="0.4"
            />
            <path
              d="M40 140 L160 40 L280 140"
              stroke="white"
              strokeWidth="0.5"
              opacity="0.35"
            />
          </svg>

          {/* Marquee */}
          <div className="absolute bottom-0 left-0 right-0 py-1.5 bg-black/40 backdrop-blur-sm overflow-hidden">
            <div className="marquee-track text-[10px] uppercase tracking-[0.22em] text-white/85">
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={i} className="flex items-center gap-3">
                  <span>showreel</span>
                  <span className="text-accent">●</span>
                  <span>2026</span>
                  <span className="text-accent">●</span>
                </span>
              ))}
            </div>
          </div>

          {/* Play icon hover */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-white/90 text-black flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-500">
              <svg viewBox="0 0 12 12" width="12" height="12" fill="currentColor">
                <path d="M3 2 L10 6 L3 10 Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
