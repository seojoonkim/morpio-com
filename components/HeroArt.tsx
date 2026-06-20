"use client";

/**
 * HeroArt — Kinetic Stage lime stage-spot replacement for the old neon orb.
 * Soft lime glow + two counter-rotating thin rings + gridded FRAME/LIVE viewport.
 */
export default function HeroArt() {
  return (
    <div className="relative w-full aspect-square max-w-[400px] mx-auto">
      {/* Lime stage glow */}
      <div
        className="absolute rounded-full animate-orb-breathe"
        style={{
          inset: "-20%",
          background:
            "radial-gradient(circle, rgba(197,255,61,0.35) 0%, rgba(197,255,61,0.08) 35%, transparent 65%)",
          filter: "blur(50px)",
        }}
      />

      {/* Outer rotating ring (lime) */}
      <div
        className="absolute rounded-full animate-ring-spin"
        style={{
          inset: "8%",
          border: "1px solid rgba(197,255,61,0.3)",
        }}
      />

      {/* Inner rotating ring (off-white, reverse) */}
      <div
        className="absolute rounded-full"
        style={{
          inset: "22%",
          border: "1px solid rgba(244,244,242,0.1)",
          animation: "ring-spin 30s linear infinite reverse",
        }}
      />

      {/* FRAME / LIVE viewport */}
      <div
        className="absolute overflow-hidden grid place-items-center"
        style={{
          inset: "28%",
          border: "1px solid var(--line-strong)",
          background:
            "linear-gradient(135deg, var(--bg-surface), var(--bg-surface-2))",
        }}
      >
        {/* Generated media visual */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/gen/hero-art.png"
          alt="morpio media studio visual"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.85 }}
        />
        {/* Darkening overlay for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.65) 100%)",
          }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent 0 11.11%, var(--line) 11.11% 11.3%), repeating-linear-gradient(0deg, transparent 0 16.66%, var(--line) 16.66% 16.8%)",
          }}
        />
        {/* Corner brackets */}
        <span className="corner tl" />
        <span className="corner tr" />
        <span className="corner bl" />
        <span className="corner br" />
        <span className="relative mono text-[0.6rem] tracking-[0.3em] uppercase lime">
          FRAME / LIVE
        </span>
      </div>

      {/* Lime pinpoints */}
      <span
        className="absolute w-1 h-1 rounded-full bg-accent-lime"
        style={{ top: "14%", left: "80%", boxShadow: "0 0 12px #C5FF3D" }}
      />
      <span
        className="absolute w-1 h-1 rounded-full bg-accent-lime"
        style={{ top: "70%", left: "12%", boxShadow: "0 0 12px #C5FF3D" }}
      />
      <span
        className="absolute w-1 h-1 rounded-full bg-accent-lime"
        style={{ top: "40%", left: "92%", boxShadow: "0 0 12px #C5FF3D" }}
      />

      <style jsx>{`
        .corner {
          position: absolute;
          width: 18px;
          height: 18px;
          border: 1px solid var(--accent-lime);
        }
        .corner.tl {
          top: -1px;
          left: -1px;
          border-right: none;
          border-bottom: none;
        }
        .corner.tr {
          top: -1px;
          right: -1px;
          border-left: none;
          border-bottom: none;
        }
        .corner.bl {
          bottom: -1px;
          left: -1px;
          border-right: none;
          border-top: none;
        }
        .corner.br {
          bottom: -1px;
          right: -1px;
          border-left: none;
          border-top: none;
        }
      `}</style>
    </div>
  );
}
