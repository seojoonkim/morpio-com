"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    no: "01",
    name: "Image-to-Video AI",
    desc: "Static frames become living scenes. Text + image guidance.",
    tags: ["i2v", "motion", "cinematic"],
  },
  {
    no: "02",
    name: "Virtual Celebrity",
    desc: "Bespoke virtual humans — face, voice, persona, scheduling.",
    tags: ["persona", "voice", "loops"],
  },
  {
    no: "03",
    name: "AI Studio",
    desc: "Full-service production: ideation, generation, editing, delivery.",
    tags: ["studio", "pipeline", "deliver"],
  },
  {
    no: "04",
    name: "Brand Campaigns",
    desc: "AI-native ad spots and social-first formats at scale.",
    tags: ["ads", "social", "scale"],
  },
];

/**
 * Services list — pacomepertant.com project list pattern.
 * Each row: number + huge name + tags.
 * Hover any row → other rows fade to 0.25 (handled by .projects-list:hover).
 */
export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full px-5 sm:px-10 lg:px-20 py-24 md:py-32"
    >
      {/* Section heading */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12 md:mb-16 max-w-[1400px] mx-auto">
        <div>
          <span
            className="text-[11px] uppercase tracking-[0.3em] text-white/40"
            style={{ fontFamily: "var(--font-display), system-ui" }}
          >
            (services / 01)
          </span>
          <h2 className="title-big mt-3">What we make.</h2>
        </div>
        <span className="hidden md:block text-[12px] tracking-[0.18em] uppercase text-white/30">
          hover to focus →
        </span>
      </div>

      {/* List */}
      <ul className="projects-list max-w-[1400px] mx-auto">
        {SERVICES.map((s, i) => (
          <motion.li
            key={s.no}
            className="project-row group border-t border-white/10 last:border-b py-6 md:py-8 cursor-pointer"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.05, duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-10">
                <span
                  className="text-[12px] tracking-[0.2em] text-white/35 mt-1"
                  style={{ fontFamily: "var(--font-display), system-ui" }}
                >
                  {s.no}
                </span>
                <h3
                  className="font-display font-medium leading-[1] tracking-[-0.02em]"
                  style={{
                    fontFamily: "var(--font-display), system-ui",
                    fontSize: "clamp(32px, 10vw, 60px)",
                  }}
                >
                  {s.name}
                </h3>
              </div>
              <div className="hidden md:flex items-center gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full border border-white/10 text-[11px] tracking-[0.16em] uppercase text-white/55"
                  >
                    {t}
                  </span>
                ))}
                <span className="ml-3 text-accent text-[18px]">→</span>
              </div>
            </div>
            <p className="mt-4 md:mt-3 ml-0 md:ml-[68px] text-[14px] text-white/45 max-w-[520px]">
              {s.desc}
            </p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
