"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";

const floatingThumbs: Array<{
  id: string;
  label?: string;
  style: CSSProperties;
  gradient: string;
}> = [
  {
    id: "lime-core",
    label: "showreel",
    style: { top: "12%", left: "6%", width: "142px", rotate: "-10deg" },
    gradient:
      "linear-gradient(135deg, #CCFF00 0%, #28DE91 45%, #041C12 100%)",
  },
  {
    id: "pink-orbit",
    style: { top: "18%", right: "-5%", width: "164px", rotate: "13deg" },
    gradient:
      "linear-gradient(135deg, #FF00CC 0%, #9900FF 55%, #180022 100%)",
  },
  {
    id: "cyan-frame",
    style: { top: "36%", left: "-7%", width: "132px", rotate: "8deg" },
    gradient:
      "linear-gradient(135deg, #00CCFF 0%, #236BFF 52%, #001326 100%)",
  },
  {
    id: "orange-fame",
    style: { top: "43%", right: "8%", width: "148px", rotate: "-6deg" },
    gradient:
      "linear-gradient(135deg, #FFCC00 0%, #FF6600 48%, #3A0900 100%)",
  },
  {
    id: "purple-virtual",
    style: { top: "59%", left: "14%", width: "160px", rotate: "-14deg" },
    gradient:
      "linear-gradient(135deg, #9900FF 0%, #FF00CC 52%, #1B002B 100%)",
  },
  {
    id: "emerald-ai",
    style: { bottom: "16%", right: "-3%", width: "136px", rotate: "10deg" },
    gradient:
      "linear-gradient(135deg, #28DE91 0%, #CCFF00 50%, #06301F 100%)",
  },
  {
    id: "hot-cut",
    style: { bottom: "6%", left: "2%", width: "154px", rotate: "6deg" },
    gradient:
      "linear-gradient(135deg, #FF6600 0%, #FF00CC 48%, #2A0018 100%)",
  },
  {
    id: "blue-depth",
    style: { bottom: "2%", right: "22%", width: "120px", rotate: "-9deg" },
    gradient:
      "linear-gradient(135deg, #00CCFF 0%, #9900FF 58%, #050018 100%)",
  },
];

function ThumbArtwork({ label }: { label?: string }) {
  return (
    <>
      <div className="absolute inset-0 opacity-70 mix-blend-screen">
        <div className="absolute left-[16%] top-[18%] h-[48%] w-[48%] rounded-full bg-white/25 blur-lg" />
        <div className="absolute bottom-[10%] right-[8%] h-[42%] w-[42%] rounded-full bg-black/35 blur-md" />
      </div>
      <svg className="absolute inset-0 h-full w-full opacity-45" viewBox="0 0 320 180" fill="none">
        <circle cx="160" cy="90" r="42" stroke="white" strokeWidth="0.7" opacity="0.75" />
        <circle cx="160" cy="90" r="68" stroke="white" strokeWidth="0.45" opacity="0.45" />
        <path d="M28 136 L118 42 L184 104 L292 30" stroke="white" strokeWidth="0.8" opacity="0.38" />
        <path d="M34 48 L286 144" stroke="black" strokeWidth="1.1" opacity="0.28" />
      </svg>
      <div
        className="absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, white 0 1px, transparent 1px), radial-gradient(circle at 70% 60%, black 0 1px, transparent 1px)",
          backgroundSize: "9px 9px, 11px 11px",
        }}
      />
      {label && (
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden bg-black/45 py-1.5 backdrop-blur-sm">
          <div className="marquee-track text-[9px] uppercase tracking-[0.22em] text-white/90">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="flex items-center gap-3">
                <span>showreel</span>
                <span className="text-accent">●</span>
                <span>2025</span>
                <span className="text-accent">●</span>
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

/**
 * Mobile: pacome-style floating showreel gallery.
 * Desktop: original bottom-left tilted thumbnail.
 */
export default function ShowreelThumb() {
  return (
    <>
      <motion.div
        className="fixed inset-0 z-[1] overflow-hidden md:hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.9 }}
        aria-hidden="true"
      >
        {floatingThumbs.map((thumb, index) => (
          <motion.div
            key={thumb.id}
            className="absolute aspect-[16/9] overflow-hidden rounded-2xl border border-white/15 shadow-[0_18px_60px_rgba(0,0,0,0.55)] blur-[0.35px]"
            style={{ ...thumb.style, background: thumb.gradient }}
            initial={{ opacity: 0, y: 18, scale: 0.92 }}
            animate={{ opacity: 0.88, y: [0, -8, 0], scale: 1 }}
            transition={{
              opacity: { delay: 0.42 + index * 0.05, duration: 0.55 },
              scale: { delay: 0.42 + index * 0.05, duration: 0.65 },
              y: {
                delay: index * 0.12,
                duration: 5.2 + index * 0.35,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <ThumbArtwork label={thumb.label} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="showreel-thumbnail fixed bottom-4 left-4 z-30 hidden select-none md:bottom-5 md:left-5 md:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="group cursor-pointer">
          <div className="relative aspect-[16/9] w-[200px] overflow-hidden rounded-xl border border-white/10 rotate-[-6deg] transform-gpu transition-transform duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:scale-105 group-hover:rotate-[-2deg]">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%), radial-gradient(circle at 30% 40%, rgba(204,255,0,0.18), transparent 55%), radial-gradient(circle at 70% 70%, rgba(40,222,145,0.15), transparent 55%)",
                backgroundBlendMode: "screen",
              }}
            />
            <ThumbArtwork label="showreel" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-10 w-10 scale-90 items-center justify-center rounded-full bg-white/90 text-black transition-transform duration-500 group-hover:scale-100">
                <svg viewBox="0 0 12 12" width="12" height="12" fill="currentColor">
                  <path d="M3 2 L10 6 L3 10 Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
