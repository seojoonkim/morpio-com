"use client";

import Headline from "./Headline";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

/**
 * Hero — full-bleed cinematic stage.
 * 100svh background image with slow zoom-in, triple dark overlay,
 * lime spot + rotating ring, oversized H1 overlay, bottom-left poster layout.
 * Nav (fixed, z-100) overlays this section naturally — no Nav changes needed.
 */
export default function Hero() {
  return (
    <section
      id="top"
      className="hero-fullbleed relative w-full overflow-hidden bg-bg-base"
      style={{ minHeight: "100svh" }}
    >
      {/* Full-bleed background image with kinetic zoom-in + continuous breathe */}
      <div className="hero-bg" aria-hidden />

      {/* Tech scan beam — thin lime light sweeps vertically */}
      <div className="hero-scan" aria-hidden />

      {/* Triple dark cinematic overlay (left + bottom weighted for legibility) */}
      <div className="hero-overlay" aria-hidden />

      {/* Soft lime stage spot behind H1 */}
      <div className="hero-spot" aria-hidden />

      {/* Lime thin rotating ring — kinetic accent */}
      <div className="hero-ring" aria-hidden />

      {/* Content — bottom-left cinematic poster layout */}
      <div
        className="relative z-[5] flex flex-col justify-center mx-auto w-full"
        style={{
          minHeight: "100svh",
          maxWidth: 1640,
          paddingInline: "clamp(20px, 5vw, 80px)",
          paddingTop: "clamp(48px, 7vh, 96px)",
          paddingBottom: "clamp(40px, 9vh, 120px)",
        }}
      >
        <Reveal>
          <p className="eyebrow" style={{ textShadow: "0 1px 10px rgba(0,0,0,0.95), 0 0 20px rgba(0,0,0,0.6)" }}>
            <span className="dash" />
            <span>Three Core Businesses · Endless Possibilities</span>
          </p>
        </Reveal>

        <Headline
          as="h1"
          text="We Turn IP Into Intelligent Media."
          limeIndices={[4]}
          className="display hero-headline"
          style={{
            fontSize: "clamp(48px, 9vw, 152px)",
            lineHeight: 0.9,
            letterSpacing: "-0.035em",
            marginTop: "clamp(28px, 4vh, 56px)",
            marginBottom: "clamp(28px, 4vh, 48px)",
            maxWidth: "18ch",
            textShadow:
              "0 2px 40px rgba(0,0,0,0.9), 0 0 80px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,1)",
          }}
        />

        <Reveal>
          <p
            className="text-ink-secondary"
            style={{
              fontSize: "clamp(15px, 1.9vw, 19px)",
              lineHeight: 1.6,
              maxWidth: "54ch",
              marginBottom: "clamp(28px, 4vh, 44px)",
              textShadow:
                "0 1px 20px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,1)",
            }}
          >
            A studio for IP that wants a{" "}
            <strong className="font-semibold text-ink-primary">
              second life
            </strong>
            . We take stories that already have fans — novels, comics, webtoons —
            and rebuild them as living media. Animation that breathes.
            Celebrities that don&apos;t sleep. Advertising that remembers your
            name.
          </p>
        </Reveal>

        <Reveal>
          <div className="flex flex-nowrap items-center gap-2 sm:gap-4">
            <Magnetic
              href="#services"
              className="btn-tech inline-flex items-center h-12 px-5 sm:h-14 sm:px-7 rounded-none bg-accent-lime text-bg-base font-semibold text-[0.8rem] sm:text-[0.95rem] tracking-[0.04em] uppercase whitespace-nowrap transition-shadow duration-300 hover:shadow-[0_0_48px_rgba(197,255,61,0.5)]"
            >
              Explore Services
            </Magnetic>
            <a
              href="#contact"
              className="inline-flex items-center h-12 px-5 sm:h-14 sm:px-7 rounded-none border border-line-strong text-ink-primary font-medium text-[0.8rem] sm:text-[0.95rem] tracking-[0.04em] uppercase whitespace-nowrap transition-colors duration-300 hover:border-accent-lime hover:text-accent-lime"
            >
              Get in Touch
            </a>
          </div>
        </Reveal>
      </div>

      {/* Bottom-right studio signature */}
      <div className="hero-meta" aria-hidden>
        <div>Morpio — AI Media Studio</div>
        <div>
          Seoul <span className="lime">·</span> Est. 2025
        </div>
      </div>
    </section>
  );
}
