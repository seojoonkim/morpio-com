"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { PROJECTS } from "@/constants/projects";

/**
 * SpiralGallery — pacomepertant-style floating thumbnail spiral.
 * - 10 real project thumbnails arranged in a 2D spiral around the viewport center.
 * - Each tile floats (sin-wave y/rotate) with its own phase.
 * - Hover: scale up, rotate to 0deg, remove blur.
 * - Mobile: tighter radius + smaller tiles so everything stays in frame.
 */

type Placement = {
  xPct: number; // % from left
  yPct: number; // % from top
  rotate: number; // deg
  z: number;
  yAmp: number; // px floating amplitude
  rotAmp: number; // deg floating amplitude
  duration: number; // s
  delay: number; // s
};

function buildPlacements(count: number, scale: number): Placement[] {
  // spiral parameters; tuned so tiles spread across viewport without clipping
  return Array.from({ length: count }, (_, i) => {
    const t = i / Math.max(1, count - 1); // 0..1
    const angle = t * Math.PI * 3.4 + 0.3; // ~1.7 turns
    const radius = (10 + t * 30) * scale; // grows outward
    const aspectSquish = 0.78; // shorter on Y so spiral fits viewport
    const xPct = 50 + Math.cos(angle) * radius;
    const yPct = 50 + Math.sin(angle) * radius * aspectSquish;
    // gentle randomization driven by index (deterministic)
    const seed = (i * 9301 + 49297) % 233280;
    const rand = seed / 233280;
    const rotate = (rand - 0.5) * 30; // -15..+15
    return {
      xPct,
      yPct,
      rotate,
      z: i, // z stack
      yAmp: 10 + (rand * 12), // 10..22 px
      rotAmp: 1.2 + rand * 1.8, // 1.2..3 deg
      duration: 4 + rand * 3.5, // 4..7.5 s
      delay: rand * 2, // 0..2 s
    };
  });
}

export default function SpiralGallery({ visible = true }: { visible?: boolean }) {
  const [hovered, setHovered] = useState<string | null>(null);

  // Two layouts: desktop (wider radius), mobile (tighter)
  const desktop = useMemo(() => buildPlacements(PROJECTS.length, 1.0), []);
  const mobile = useMemo(() => buildPlacements(PROJECTS.length, 0.78), []);

  return (
    <div
      className={`fixed inset-0 z-[10] overflow-hidden transition-opacity duration-700 ${
        visible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!visible}
    >
      {PROJECTS.map((p, i) => {
        const d = desktop[i];
        const m = mobile[i];
        const isHover = hovered === p.slug;
        return (
          <motion.a
            key={p.slug}
            href={`#${p.slug}`}
            onMouseEnter={() => setHovered(p.slug)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(p.slug)}
            onBlur={() => setHovered(null)}
            className="spiral-tile pointer-events-auto absolute block"
            style={{
              // CSS vars consumed by media queries below
              ["--x-d" as any]: `${d.xPct}%`,
              ["--y-d" as any]: `${d.yPct}%`,
              ["--x-m" as any]: `${m.xPct}%`,
              ["--y-m" as any]: `${m.yPct}%`,
              ["--rot" as any]: `${d.rotate}deg`,
              zIndex: d.z,
            }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={
              visible
                ? {
                    opacity: isHover ? 1 : 0.92,
                    scale: isHover ? 1.12 : 1,
                    y: isHover ? 0 : [0, -d.yAmp, 0, d.yAmp * 0.8, 0],
                    rotate: isHover ? 0 : [
                      d.rotate - d.rotAmp,
                      d.rotate + d.rotAmp,
                      d.rotate - d.rotAmp * 0.6,
                      d.rotate,
                    ],
                  }
                : { opacity: 0, scale: 0.6 }
            }
            transition={{
              opacity: { duration: 0.5, delay: 0.2 + i * 0.05 },
              scale: isHover
                ? { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
                : { duration: 0.6, delay: 0.2 + i * 0.05 },
              y: {
                duration: d.duration,
                delay: d.delay,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: d.duration * 1.15,
                delay: d.delay,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <div
              className={`relative aspect-[16/9] overflow-hidden rounded-[14px] border border-white/10 transition-[filter,box-shadow] duration-500 ${
                isHover
                  ? "shadow-[0_30px_70px_rgba(0,0,0,0.55)]"
                  : "shadow-[0_18px_50px_rgba(0,0,0,0.45)]"
              }`}
              style={{
                width: "var(--tile-w)",
                filter: isHover ? "blur(0px) saturate(1.1)" : "blur(0.3px) saturate(0.95)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.thumb}
                alt={p.title}
                loading="lazy"
                draggable={false}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/5" />
              {/* Caption */}
              <div className="absolute bottom-1.5 left-2 right-2 flex items-baseline justify-between gap-2 text-[10px] uppercase tracking-[0.22em] text-white/85">
                <span className="truncate" style={{ fontFamily: "var(--font-display), system-ui" }}>
                  {p.title}
                </span>
                <span className="text-white/55">{p.year}</span>
              </div>
            </div>
          </motion.a>
        );
      })}

      {/* Local styles: responsive position + tile size */}
      <style jsx>{`
        .spiral-tile {
          left: var(--x-d);
          top: var(--y-d);
          transform: translate(-50%, -50%);
          --tile-w: clamp(150px, 17vw, 230px);
        }
        @media (max-width: 768px) {
          .spiral-tile {
            left: var(--x-m);
            top: var(--y-m);
            --tile-w: clamp(108px, 32vw, 168px);
          }
        }
      `}</style>
    </div>
  );
}
