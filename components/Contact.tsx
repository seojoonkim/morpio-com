"use client";

import { motion } from "framer-motion";
import type { Lang } from "./i18n";
import { copy } from "./i18n";

export default function Contact({ lang }: { lang: Lang }) {
  const t = copy[lang].contact;

  return (
    <section
      id="contact"
      className="relative py-32 md:py-40 px-6 md:px-12 border-t border-white/10"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-baseline gap-4 mb-16 md:mb-24">
          <span className="font-display text-xs tracking-[0.3em] text-white/40">
            ◉ {t.eyebrow}
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8 }}
          className="big-title text-white max-w-3xl mb-12"
        >
          {t.heading}
        </motion.h2>

        <motion.a
          href={`mailto:${t.email}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="inline-block project-row text-[#CCFF00] hover:text-white underline underline-offset-[10px] decoration-[#CCFF00]/40 hover:decoration-white transition-colors"
        >
          {t.email}
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-12 flex flex-wrap items-center gap-3"
        >
          <a href={`mailto:${t.email}`} className="pill pill-accent">
            ✦ {t.ctaEmail}
          </a>
          <a href="#services" className="pill text-white/85">
            {t.ctaPortfolio} →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-16 flex items-center gap-3"
        >
          {t.socials.map((s) => (
            <a
              key={s.k}
              href={s.href}
              className="w-12 h-12 rounded-full border border-white/15 hover:border-[#CCFF00] hover:text-[#CCFF00] flex items-center justify-center text-xs font-display tracking-widest"
            >
              {s.k}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
