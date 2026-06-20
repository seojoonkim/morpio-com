"use client";

import HeroArt from "./HeroArt";
import Headline from "./Headline";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative"
      style={{
        paddingTop: "clamp(120px, 18vh, 220px)",
        paddingBottom: "clamp(48px, 8vh, 96px)",
      }}
    >
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Copy */}
          <div className="lg:col-span-7 relative z-10">
            <Reveal>
              <p className="eyebrow">
                <span className="dash" />
                <span className="num">[ 01 — STAGE ]</span>
                Three Core Businesses · Endless Possibilities
              </p>
            </Reveal>

            <Headline
              as="h1"
              text="We Turn IP Into Intelligent Media."
              limeIndices={[4]}
              className="display mt-5"
              style={{
                fontSize: "clamp(48px, 13vw, 168px)",
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
              }}
            />

            <Reveal>
              <p
                className="mt-8 max-w-[34ch] text-ink-secondary"
                style={{
                  fontSize: "clamp(15px, 3.8vw, 18px)",
                  lineHeight: 1.65,
                }}
              >
                morpio transforms stories, talent, and brands through AI-powered
                content production — we combine creativity, technology, and
                strategy to build the next generation of entertainment and
                advertising.
              </p>
            </Reveal>

            <Reveal>
              <div className="mt-10 flex flex-wrap gap-[14px]">
                <Magnetic
                  href="#services"
                  className="inline-flex items-center gap-[10px] h-14 px-7 rounded-full bg-accent-lime text-bg-base font-bold text-[0.95rem] transition-shadow duration-300 hover:shadow-[0_0_48px_rgba(197,255,61,0.5)]"
                >
                  Explore Services
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Magnetic>
                <a
                  href="#contact"
                  className="inline-flex items-center h-14 px-7 rounded-full border border-line-strong text-ink-primary font-medium text-[0.95rem] transition-colors duration-300 hover:border-accent-lime hover:bg-[rgba(197,255,61,0.05)]"
                >
                  Get in Touch
                </a>
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-16 flex items-center gap-3 text-ink-muted">
                <span className="block w-px h-8 animate-scroll-cue bg-gradient-to-b from-accent-lime to-transparent" />
                <span className="mono text-[0.65rem] uppercase tracking-[0.3em]">
                  Scroll to Explore
                </span>
              </div>
            </Reveal>
          </div>

          {/* Hero artwork */}
          <div className="lg:col-span-5 relative">
            <Reveal>
              <HeroArt />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
