"use client";

import { motion } from "framer-motion";
import type { Lang } from "./i18n";
import { copy } from "./i18n";

export default function Studio({ lang }: { lang: Lang }) {
  const t = copy[lang].studio;

  return (
    <section
      id="studio"
      className="relative py-32 md:py-40 px-6 md:px-12 border-t border-white/10 overflow-hidden"
    >
      {/* moody backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 20%, rgba(204,255,0,0.08), transparent 70%), radial-gradient(50% 50% at 10% 90%, rgba(0,212,255,0.06), transparent 70%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-baseline gap-4 mb-16 md:mb-24">
          <span className="font-display text-xs tracking-[0.3em] text-white/40">
            ◉ {t.eyebrow}
          </span>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          {/* heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7"
          >
            <h2 className="big-title text-white mb-10">{t.heading}</h2>
            <div className="flex flex-col gap-5 text-base md:text-lg text-white/70 leading-relaxed max-w-2xl">
              {t.body.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* pillars */}
          <div className="md:col-span-5 grid grid-cols-2 gap-px bg-white/10 border border-white/10 self-start rounded-lg overflow-hidden">
            {t.pillars.map((p, i) => (
              <motion.div
                key={p.k}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + i * 0.07,
                  ease: [0.175, 0.885, 0.32, 1.275],
                }}
                className="bg-[#0A0A0A] p-6 md:p-7 flex flex-col gap-3 min-h-[160px] hover:bg-[#0f0f0f] transition-colors"
              >
                <span className="font-display text-[10px] tracking-[0.3em] text-[#CCFF00]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="font-display text-lg md:text-xl text-white leading-tight">
                  {p.k}
                </h4>
                <p className="text-xs md:text-sm text-white/55 leading-relaxed">
                  {p.v}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
