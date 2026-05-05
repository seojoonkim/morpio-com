"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-56 container-x">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className="max-w-3xl"
      >
        <p className="section-label mb-6">Get in Touch</p>

        <h2 
          className="font-display font-black text-ink leading-[0.95] tracking-tight"
          style={{ fontSize: "clamp(48px, 10vw, 96px)" }}
        >
          Build the next
          <br />
          <span className="font-serif italic font-normal">media universe.</span>
        </h2>

        <p className="mt-8 text-ink-muted text-lg md:text-xl leading-relaxed max-w-lg">
          Let's create world-class AI media, virtual talent, and campaigns that inspire the world.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="mailto:hello@morpio.com?subject=Start%20a%20Project"
            className="inline-flex items-center gap-3 px-8 h-14 rounded-full bg-ink text-bg text-sm font-medium hover:bg-accent transition-colors duration-300"
          >
            Start a Project
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="mailto:hello@morpio.com"
            className="inline-flex items-center gap-2 px-8 h-14 rounded-full border border-line text-ink text-sm font-medium hover:border-ink transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>

        <p className="mt-16 font-mono text-sm text-ink-muted">
          hello@morpio.com
        </p>
      </motion.div>
    </section>
  );
}
