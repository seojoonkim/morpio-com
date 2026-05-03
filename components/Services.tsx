"use client";

import { motion } from "framer-motion";
import type { Lang } from "./i18n";
import { copy } from "./i18n";

export default function Services({ lang }: { lang: Lang }) {
  const t = copy[lang].services;

  return (
    <section
      id="services"
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
          transition={{ duration: 0.7 }}
          className="big-title text-white mb-16 md:mb-24"
        >
          {t.heading}
        </motion.h2>

        <ul className="projects-list flex flex-col">
          {t.items.map((item, i) => (
            <motion.li
              key={item.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.6,
                delay: i * 0.06,
                ease: [0.175, 0.885, 0.32, 1.275],
              }}
              className="group border-t border-white/10 last:border-b py-6 md:py-8"
            >
              <div className="flex items-start md:items-center gap-6 md:gap-10">
                <span className="font-display text-xs tracking-[0.3em] text-white/40 pt-3 md:pt-0 w-10 flex-shrink-0">
                  {item.n}
                </span>
                <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-10">
                  <h3 className="project-row text-white">{item.title}</h3>
                  <p className="text-sm md:text-base text-white/55 max-w-md md:text-right">
                    {item.desc}
                  </p>
                </div>
                <span
                  className="hidden md:flex w-10 h-10 rounded-full border border-white/15 items-center justify-center text-white/40 group-hover:border-[#CCFF00] group-hover:text-[#CCFF00] group-hover:rotate-45 transition-all duration-500 flex-shrink-0"
                  aria-hidden
                >
                  →
                </span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
