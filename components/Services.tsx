"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    n: "01",
    title: "AI Animation",
    subtitle: "for Novels, Comics & Webtoons",
    body: "We adapt compelling IP into high-quality animation. From storyboarding to final output, AI accelerates creativity without compromising emotion.",
  },
  {
    n: "02",
    title: "Virtual Celeb",
    subtitle: "Studio & Agency",
    body: "We create, grow, and manage virtual celebrities. From concept to content, we build IP, produce videos, and operate as a full-service talent agency.",
  },
  {
    n: "03",
    title: "AI Advertising",
    subtitle: "Agency",
    body: "We craft AI-native campaigns, branded content, and commercials that are data-driven, visually stunning, and built to perform.",
  },
] as const;

export default function Services() {
  return (
    <section id="services" className="py-32 md:py-56 container-x">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-16 md:mb-24">
        <span className="section-label">Our Services</span>
        <span className="block flex-1 h-px bg-line" />
        <span className="section-label">02 / 04</span>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {SERVICES.map((service, index) => (
          <motion.article
            key={service.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.19, 1, 0.22, 1] }}
            className="group relative p-8 md:p-10 border border-line rounded-lg hover:border-ink transition-colors duration-300"
          >
            {/* Number */}
            <span className="font-display font-black text-[80px] md:text-[100px] leading-none text-line group-hover:text-accent/20 transition-colors duration-300">
              {service.n}
            </span>

            {/* Content */}
            <div className="mt-4">
              <h3 className="font-display font-bold text-2xl md:text-3xl text-ink leading-tight">
                {service.title}
              </h3>
              <p className="font-serif italic text-xl md:text-2xl text-ink-muted mt-1">
                {service.subtitle}
              </p>
              <p className="mt-6 text-ink-muted text-base leading-relaxed">
                {service.body}
              </p>
            </div>

            {/* Arrow */}
            <div className="mt-8 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-ink-muted group-hover:text-accent transition-colors duration-300">
                Learn More
              </span>
              <span className="w-10 h-10 rounded-full border border-line group-hover:border-ink group-hover:bg-ink grid place-items-center transition-all duration-300">
                <svg 
                  width="14" 
                  height="14" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  className="text-ink group-hover:text-bg transition-colors duration-300"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
