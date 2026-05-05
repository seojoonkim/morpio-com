"use client";

import { motion } from "framer-motion";

const ease = [0.19, 1, 0.22, 1] as const;

const SERVICES = [
  {
    n: "01",
    label: "01 / Kinetic IP",
    title: "Animation",
    italic: "that doesn’t sit still.",
    body: "Novels, comics, and webtoons reborn as motion. Your IP, finally rendered at the speed of imagination.",
  },
  {
    n: "02",
    label: "02 / Synthetic Talent",
    title: "Virtual Celebs",
    italic: "built to be loved.",
    body: "We design characters who tour, post, perform, and never miss a comeback. Studio, agency, and faithful fanbase included.",
  },
  {
    n: "03",
    label: "03 / Intelligent Reach",
    title: "Advertising",
    italic: "that learns who’s watching.",
    body: "AI-native ad creative that adapts in the wild — by audience, channel, and mood. Made for brands that refuse to send the same ad twice.",
  },
] as const;

export default function Services() {
  return (
    <section id="services" className="relative py-32 md:py-56 container-wide">
      {/* Section opener */}
      <div className="grid grid-cols-12 gap-6 mb-16 md:mb-28">
        <span className="col-span-6 md:col-span-3 meta">[ II — Practice ]</span>
        <span className="hidden md:block col-span-6 meta tabular">
          Three core businesses · 2026
        </span>
        <span className="hidden md:block col-span-3 meta text-right">
          02 / 04
        </span>
      </div>

      {/* Section headline */}
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease }}
        className="font-display font-black text-ink mb-20 md:mb-32 max-w-5xl"
        style={{
          fontSize: "clamp(40px, 7.5vw, 116px)",
          lineHeight: "0.92",
          letterSpacing: "-0.035em",
        }}
      >
        Three businesses.{" "}
        <span className="serif-em font-normal">One creative engine.</span>
      </motion.h2>

      {/* Cards row */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-ink">
        {SERVICES.map((service, index) => (
          <motion.article
            key={service.n}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: index * 0.08, ease }}
            className={`group relative pt-10 md:pt-14 pb-12 md:pb-16 px-2 md:px-8 border-b md:border-b-0 ${
              index !== 0 ? "md:border-l" : ""
            } border-ink/15 hover:bg-ink/[0.02] transition-colors duration-500`}
          >
            {/* Top meta */}
            <div className="flex items-baseline justify-between mb-12 md:mb-20">
              <span className="meta-ink">{service.label}</span>
              <span className="font-mono text-xs text-ink-muted tabular">
                {service.n} / 04
              </span>
            </div>

            {/* Giant editorial numeral */}
            <div
              className="font-display font-black text-ink leading-[0.78] tracking-[-0.05em] mb-8"
              style={{ fontSize: "clamp(80px, 14vw, 168px)" }}
            >
              {service.n}
            </div>

            {/* Title */}
            <h3 className="font-display font-black text-ink text-2xl md:text-[28px] leading-[1.05] tracking-tight">
              {service.title}
            </h3>
            <p className="serif-em text-ink-muted text-lg md:text-xl mt-1.5">
              {service.italic}
            </p>

            {/* Body */}
            <p className="mt-6 md:mt-8 text-ink-muted text-[15px] leading-[1.65] max-w-sm">
              {service.body}
            </p>

            {/* Footer link */}
            <div className="mt-10 md:mt-12 flex items-center justify-between">
              <a
                href="#about"
                className="inline-flex items-baseline gap-2 text-ink text-[13px] link-underline"
              >
                <span>Read on</span>
                <span aria-hidden>→</span>
              </a>
              <span className="font-serif italic text-ink-muted text-sm">
                §{service.n}
              </span>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Closing accent */}
      <p className="mt-16 md:mt-24 max-w-2xl serif-em text-ink-muted text-xl md:text-2xl leading-[1.4]">
        § Three businesses. One creative engine. Built in Seoul, deployed everywhere.
      </p>
    </section>
  );
}
