"use client";

/**
 * HeroArt — pure-CSS/SVG sci-fi composition replicating the benchmark's
 * "woman + floating screens + violet portal ring" feel without licensed art.
 * Mobile-first, scales fluidly.
 */
export default function HeroArt() {
  return (
    <div className="relative w-full aspect-square max-w-[360px] sm:max-w-[440px] lg:max-w-[520px] mx-auto">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial-violet" />

      {/* AI-generated hero composition */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/gen/hero.webp"
        alt="morpio AI media studio"
        className="absolute inset-[10%] w-[80%] h-[80%] object-cover rounded-full opacity-90 mix-blend-screen"
      />
      {/* Inner blend layer to keep cosmic feel */}
      <div className="absolute inset-[10%] rounded-full bg-gradient-to-br from-violet-700/30 via-transparent to-accent-pink/20 mix-blend-overlay pointer-events-none" />

      {/* Outer rotating ring with tick marks */}
      <div className="absolute inset-[6%] rounded-full border border-violet-500/30 animate-spin-slow">
        <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-pink shadow-glow" />
        {/* Tick marks */}
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="absolute top-1/2 left-1/2 origin-top w-px h-2 bg-violet-400/40"
            style={{
              transform: `translate(-50%, 0) rotate(${i * 30}deg) translateY(-50%) translateY(calc(-50vw * 0 - 0px))`,
            }}
          />
        ))}
      </div>

      {/* Tick marks on outer ring (using SVG for precision) */}
      <svg viewBox="0 0 100 100" className="absolute inset-[6%] w-[88%] h-[88%] pointer-events-none" aria-hidden>
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          const isMajor = i % 6 === 0;
          return (
            <line
              key={i}
              x1="50"
              y1="2"
              x2="50"
              y2={isMajor ? 6 : 4}
              stroke="#A78BFF"
              strokeOpacity={isMajor ? 0.7 : 0.3}
              strokeWidth={isMajor ? 0.6 : 0.3}
              transform={`rotate(${angle} 50 50)`}
            />
          );
        })}
      </svg>

      {/* Mid ring */}
      <div className="absolute inset-[14%] rounded-full border border-violet-500/20" />

      {/* HUD corners */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" aria-hidden>
        {[
          [4, 4],
          [96, 4],
          [4, 96],
          [96, 96],
        ].map(([cx, cy], i) => (
          <g key={i} stroke="#A78BFF" strokeOpacity="0.5" strokeWidth="0.4" fill="none">
            <path d={`M${cx > 50 ? cx - 6 : cx} ${cy > 50 ? cy - 6 : cy + 6} L${cx} ${cy > 50 ? cy - 6 : cy + 6} L${cx} ${cy > 50 ? cy : cy}`} />
          </g>
        ))}
      </svg>

      {/* Inner gradient orb */}
      <div className="absolute inset-[22%] rounded-full bg-violet-gradient opacity-30 blur-2xl animate-glow" />
      <div className="absolute inset-[28%] rounded-full bg-gradient-to-br from-accent-blue/40 via-violet-500/40 to-accent-pink/40 backdrop-blur-sm border border-violet-400/30 shadow-glow-lg" />

      {/* Centered silhouette (abstract) */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="figGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A78BFF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#4C5BFF" stopOpacity="0.3" />
          </linearGradient>
          <radialGradient id="haze" cx="50%" cy="55%" r="40%">
            <stop offset="0%" stopColor="#C45CFF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0B0D14" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="100" cy="125" rx="60" ry="20" fill="url(#haze)" />
        {/* Standing figure */}
        <g fill="url(#figGrad)">
          <circle cx="100" cy="92" r="6" />
          <path d="M94 100 h12 v18 q0 4 -6 4 q-6 0 -6 -4 z" />
          <rect x="96" y="120" width="3" height="14" rx="1" />
          <rect x="101" y="120" width="3" height="14" rx="1" />
        </g>
      </svg>

      {/* Floating panels */}
      <FloatingPanel className="top-[10%] left-[6%] w-[28%] h-[16%] rotate-[-6deg]" delay={0} />
      <FloatingPanel className="top-[18%] right-[4%] w-[26%] h-[14%] rotate-[8deg]" delay={1.5} />
      <FloatingPanel className="bottom-[18%] left-[2%] w-[24%] h-[12%] rotate-[6deg]" delay={3} />
      <FloatingPanel className="bottom-[10%] right-[8%] w-[30%] h-[14%] rotate-[-4deg]" delay={2} />

      {/* Sparkles */}
      {[
        { top: "12%", left: "30%", size: 4, delay: 0 },
        { top: "26%", left: "78%", size: 3, delay: 1 },
        { top: "55%", left: "8%", size: 2, delay: 2 },
        { top: "70%", left: "88%", size: 3, delay: 0.5 },
        { top: "82%", left: "40%", size: 2, delay: 1.5 },
      ].map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white animate-glow"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            boxShadow: "0 0 8px #A78BFF",
          }}
        />
      ))}

      {/* Bottom portal arc */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-[40%] rounded-[50%] bg-violet-gradient opacity-30 blur-3xl" />
    </div>
  );
}

function FloatingPanel({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`absolute rounded-md bg-white/[0.04] border border-violet-400/30 backdrop-blur-sm shadow-glow-sm overflow-hidden animate-float ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="absolute inset-x-2 top-2 h-1 rounded bg-violet-400/40" />
      <div className="absolute inset-x-2 top-5 h-px bg-violet-400/20" />
      <div className="absolute inset-x-2 top-7 h-px bg-violet-400/15 w-3/5" />
      <div className="absolute inset-x-2 bottom-2 h-1 rounded bg-accent-pink/30" />
    </div>
  );
}
