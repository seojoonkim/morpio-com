"use client";

import { motion } from "framer-motion";

const ease = [0.19, 1, 0.22, 1] as const;

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 md:py-56 container-wide border-t border-line"
    >
      {/* Opener */}
      <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
        <span className="col-span-6 md:col-span-3 meta">[ V — Letter ]</span>
        <span className="hidden md:block col-span-6 meta tabular">
          To prospective collaborators
        </span>
        <span className="hidden md:block col-span-3 meta text-right">
          Closing
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease }}
        className="grid grid-cols-12 gap-6 md:gap-10"
      >
        {/* Headline */}
        <h2
          className="col-span-12 lg:col-span-10 lg:col-start-2 font-display font-black text-ink"
          style={{
            fontSize: "clamp(56px, 11vw, 168px)",
            lineHeight: "0.88",
            letterSpacing: "-0.045em",
          }}
        >
          Build the next
          <br />
          <span className="serif-em font-normal">media universe.</span>
        </h2>
      </motion.div>

      {/* Body row */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.15, ease }}
        className="grid grid-cols-12 gap-6 md:gap-10 mt-20 md:mt-28 pt-10 border-t border-line"
      >
        {/* Lead */}
        <p className="col-span-12 md:col-span-7 lg:col-span-6 text-ink text-xl md:text-2xl leading-[1.4]">
          Let&apos;s create world-class AI media, virtual talent, and campaigns
          that move <span className="serif-em">culture</span>.
        </p>

        {/* CTAs + email */}
        <div className="col-span-12 md:col-span-5 lg:col-span-5 lg:col-start-8 flex flex-col gap-6 md:items-end md:text-right">
          <a
            href="mailto:hello@morpio.com?subject=Start%20a%20Project"
            className="inline-flex items-baseline gap-3 text-ink text-base md:text-lg font-medium link-underline"
          >
            <span>Start a project</span>
            <span aria-hidden>↗</span>
          </a>
          <a
            href="mailto:hello@morpio.com"
            className="font-serif italic text-ink text-3xl md:text-5xl tracking-tight link-underline"
          >
            hello@morpio.com
          </a>
          <p className="meta">Reply within one business day · Seoul, KST</p>
        </div>
      </motion.div>
    </section>
  );
}
