"use client";

import { motion } from "framer-motion";

/**
 * Contact — large "GET IN TOUCH" with email link, like the project list big title.
 */
export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full px-6 sm:px-10 lg:px-20 py-32"
    >
      <div className="max-w-[1400px] mx-auto">
        <span
          className="text-[11px] uppercase tracking-[0.3em] text-white/40"
          style={{ fontFamily: "var(--font-display), system-ui" }}
        >
          (contact / 03)
        </span>

        <motion.h2
          className="mt-4 font-display font-medium tracking-[-0.03em] leading-[0.95]"
          style={{
            fontFamily: "var(--font-display), system-ui",
            fontSize: "clamp(56px, 11vw, 160px)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          Get in <span className="text-accent">touch.</span>
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1100px]">
          <a
            href="mailto:hello@morpio.com"
            className="group block p-8 rounded-2xl border border-white/10 hover:border-accent transition-colors duration-500"
          >
            <span className="text-[11px] uppercase tracking-[0.22em] text-white/40">
              email
            </span>
            <div
              className="mt-3 text-[28px] sm:text-[34px] font-medium tracking-[-0.02em] group-hover:text-accent transition-colors duration-500"
              style={{ fontFamily: "var(--font-display), system-ui" }}
            >
              hello@morpio.com →
            </div>
            <p className="mt-3 text-[14px] text-white/45">
              Briefs, partnerships, talent rosters — write us anytime.
            </p>
          </a>

          <div className="p-8 rounded-2xl border border-white/10">
            <span className="text-[11px] uppercase tracking-[0.22em] text-white/40">
              studio
            </span>
            <div
              className="mt-3 text-[28px] sm:text-[34px] font-medium tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-display), system-ui" }}
            >
              Seoul · Remote
            </div>
            <p className="mt-3 text-[14px] text-white/45">
              We work async with creators, brands, and studios across 8+ time
              zones.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Instagram", "X", "Behance", "LinkedIn"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="px-4 py-2 rounded-full border border-white/15 text-[12px] tracking-wide hover:bg-white hover:text-black transition-colors duration-500"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
