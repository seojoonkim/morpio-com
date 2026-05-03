"use client";
const TAGS = [
  "IMAGE → VIDEO",
  "VIRTUAL CELEBRITY",
  "AI MOTION",
  "FRAME → FAME",
  "STYLE TRANSFER",
  "CHARACTER CONSISTENCY",
  "PROMPT TO SCENE",
  "REAL-TIME RENDER",
];
export default function Marquee() {
  const items = [...TAGS, ...TAGS];
  return (
    <div className="border-y border-white/10 bg-bg2/60 overflow-hidden py-6">
      <div className="marquee font-display text-2xl md:text-3xl tracking-tight">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-16">
            <span className={i % 3 === 0 ? "text-accent" : "text-white/80"}>{t}</span>
            <span className="text-white/20">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
