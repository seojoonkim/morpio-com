"use client";

import HeroArt from "./HeroArt";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-24 md:pt-32 pb-12 md:pb-20 container-x overflow-hidden"
    >
      {/* Ambient bg glows */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[60vw] h-[60vw] rounded-full bg-violet-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-40 w-[70vw] h-[70vw] rounded-full bg-accent-pink/5 blur-3xl" />

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Copy block */}
        <div className="lg:col-span-7 relative z-10">
          <p className="section-label mb-5 md:mb-6 inline-flex items-center gap-3">
            <span className="block w-6 h-px bg-violet-500/60" />
            Three Core Businesses · Endless Possibilities
          </p>

          <h1
            className="font-display font-black tracking-tight leading-[0.95] text-ink-primary"
            style={{ fontSize: "clamp(40px, 11vw, 96px)", lineHeight: 1.02 }}
          >
            <span className="block">We Turn IP Into</span>
            <span className="block font-serif italic font-normal text-gradient-violet">
              Intelligent Media.
            </span>
          </h1>

          <p
            className="mt-7 md:mt-9 max-w-xl text-ink-secondary leading-[1.7]"
            style={{ fontSize: "clamp(14px, 3.6vw, 17px)" }}
          >
            morpio transforms stories, talent, and brands through AI-powered
            content production — we combine creativity, technology, and strategy
            to build the next generation of entertainment and advertising.
          </p>

          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row flex-wrap gap-4 md:gap-5">
            <a
              href="#services"
              className="flex items-center justify-center gap-3 h-20 min-h-[80px] py-5 px-8 md:px-10 rounded-full bg-violet-gradient text-white text-base font-semibold shadow-glow-xl hover:shadow-glow-2xl transition-all duration-300 flex-1 sm:flex-none"
              Explore Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 h-12 md:h-13 px-6 md:px-7 rounded-full border border-line-strong text-ink-primary text-sm md:text-base font-medium hover:border-violet-500 hover:bg-white/5 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-3 h-20 min-h-[80px] py-5 px-8 md:px-10 rounded-full border-3 border-violet-500/50 text-ink-primary text-base font-semibold hover:border-violet-400 hover:bg-white/20 shadow-glow-md hover:shadow-glow-lg transition-all duration-300 flex-1 sm:flex-none"
            >
              Contact Us
            </a>
          </div>

          {/* Scroll cue */}
          <div className="mt-12 md:mt-16 flex items-center gap-3 text-ink-muted">
            <span className="block w-px h-8 bg-gradient-to-b from-violet-500/60 to-transparent" />
            <span
              className="font-mono uppercase tracking-[0.3em]"
              style={{ fontSize: "clamp(9px, 2vw, 11px)" }}
            >
              Scroll to Explore
            </span>
          </div>
        </div>

        {/* Hero artwork */}
        <div className="lg:col-span-5 relative">
          <HeroArt />
        </div>
      </div>
    </section>
  );
}
