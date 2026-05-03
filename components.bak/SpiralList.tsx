"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { PROJECTS } from "@/constants/projects";

/**
 * SpiralList — pacomepertant "list" mode.
 * Centered vertical list of project titles. On hover, others fade out.
 */
export default function SpiralList({ visible = true }: { visible?: boolean }) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div
      className={`fixed inset-0 z-[10] flex items-center justify-center px-6 transition-opacity duration-700 ${
        visible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <ul className="pointer-events-auto flex w-full max-w-[920px] flex-col items-center gap-1 sm:gap-2">
        {PROJECTS.map((p, i) => {
          const dim = hovered && hovered !== p.slug;
          return (
            <motion.li
              key={p.slug}
              initial={false}
              animate={visible ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              onMouseEnter={() => setHovered(p.slug)}
              onMouseLeave={() => setHovered(null)}
              className="w-full text-center"
            >
              <a
                href={`#${p.slug}`}
                className={`block w-full select-none transition-all duration-500 ${
                  dim ? "opacity-30" : "opacity-95"
                } hover:text-accent`}
                style={{
                  fontFamily: "var(--font-display), system-ui",
                  fontSize: "clamp(28px, 6.4vw, 60px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  fontWeight: 500,
                }}
              >
                <span>{p.title}</span>
                <sup className="ml-2 align-super text-[0.32em] tracking-[0.18em] text-white/55">
                  {p.year}
                </sup>
              </a>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
