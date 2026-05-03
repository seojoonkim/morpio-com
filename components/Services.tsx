import SectionLabel from "./SectionLabel";

const SERVICES = [
  {
    n: "01",
    title: "AI Animation for",
    title2: "Novels, Comics & Webtoons",
    body:
      "We adapt compelling IP into high-quality animation and moving content. From storyboarding to final output, AI accelerates creativity without compromising emotion.",
    art: "anim",
    tags: ["Animation", "IP Adaptation", "Storyboard"],
    accent: "#ff00ff", // neon-pink
  },
  {
    n: "02",
    title: "Virtual Celeb",
    title2: "Studio & Agency",
    body:
      "We create, grow, and manage virtual celebrities. From concept to content, we build IP, produce videos, and operate as a full-service talent agency.",
    art: "celeb",
    tags: ["Virtual Talent", "IP Building", "Agency"],
    accent: "#00ffff", // neon-cyan
  },
  {
    n: "03",
    title: "AI Advertising",
    title2: "Agency",
    body:
      "We craft AI-native campaigns, branded content, and commercials that are data-driven, visually stunning, and built to perform.",
    art: "ads",
    tags: ["Campaigns", "Brand Films", "Performance"],
    accent: "#bf00ff", // neon-violet
  },
] as const;

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-32 container-x">
      <SectionLabel>Our Core Businesses</SectionLabel>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {SERVICES.map((s, idx) => (
          <article
            key={s.n}
            className="group relative rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.02]"
            style={{
              background: `linear-gradient(165deg, rgba(25,20,45,0.98) 0%, rgba(10,8,18,0.99) 100%)`,
              border: `2px solid ${s.accent}33`,
              boxShadow: `0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)`,
            }}
          >
            {/* Hover explosion glow */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 50% 30%, ${s.accent}40 0%, transparent 60%)`,
                filter: 'blur(30px)',
              }}
            />
            
            {/* Neon border on hover */}
            <div 
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
              style={{
                boxShadow: `0 0 30px ${s.accent}60, 0 0 60px ${s.accent}30, inset 0 0 20px ${s.accent}10`,
              }}
            />

            {/* Visual top with rainbow gradient overlay */}
            <div className="relative aspect-[16/10] overflow-hidden">
              {/* Base image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={"/gen/services/" + (s.art === "anim" ? "video-v2.webp" : s.art === "celeb" ? "talent-v2.webp" : "ads-v2.webp")}
                alt={s.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Ultra bright vignette only */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent" />
              
              {/* Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0812] via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0a0812]/30 to-transparent" />
              
              {/* Big number watermark with glow */}
              <span
                className="absolute -bottom-2 right-3 font-display font-black leading-none select-none transition-all duration-500 group-hover:text-white/20"
                style={{ 
                  fontSize: "clamp(60px, 14vw, 110px)",
                  color: 'rgba(255,255,255,0.08)',
                  textShadow: `0 0 40px ${s.accent}40`,
                }}
              >
                {s.n}
              </span>
              
              {/* Brutalist corner accent */}
              <div 
                className="absolute top-0 left-0 w-16 h-16 opacity-80"
                style={{
                  background: `linear-gradient(135deg, ${s.accent}40 0%, transparent 70%)`,
                }}
              />
            </div>

            {/* Body */}
            <div className="relative p-6 md:p-7">
              <div className="flex items-center gap-3 mb-4">
                <span 
                  className="inline-flex items-center px-3 py-1.5 rounded-full font-mono text-[10px] tracking-widest transition-all duration-300"
                  style={{
                    background: `${s.accent}20`,
                    border: `1px solid ${s.accent}60`,
                    color: s.accent,
                    boxShadow: `0 0 20px ${s.accent}20`,
                  }}
                >
                  {s.n}
                </span>
                <span 
                  className="block h-px flex-1 transition-all duration-500 group-hover:h-[2px]"
                  style={{
                    background: `linear-gradient(90deg, ${s.accent}60 0%, transparent 100%)`,
                  }}
                />
              </div>

              <h3
                className="font-display font-bold text-ink-primary leading-[1.15]"
                style={{ fontSize: "clamp(22px, 5.5vw, 26px)" }}
              >
                {s.title}
                <br />
                <span 
                  className="font-serif italic font-normal transition-all duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${s.accent}, #fff, ${s.accent})`,
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {s.title2}
                </span>
              </h3>

              <p
                className="mt-4 text-ink-secondary leading-relaxed"
                style={{ fontSize: "clamp(13px, 3.4vw, 15px)" }}
              >
                {s.body}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium transition-all duration-300 group-hover:border-opacity-80"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: `1px solid ${s.accent}30`,
                      color: '#B0B4C0',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div 
                className="mt-6 flex items-center justify-between pt-5 transition-all duration-300"
                style={{
                  borderTop: `1px solid ${s.accent}20`,
                }}
              >
                <span 
                  className="font-mono text-[11px] uppercase tracking-[0.2em] transition-all duration-300"
                  style={{ color: s.accent }}
                >
                  Learn More
                </span>
                <span
                  className="w-10 h-10 md:w-11 md:h-11 rounded-full grid place-items-center text-ink-primary transition-all duration-300 group-hover:scale-110"
                  style={{
                    border: `1px solid ${s.accent}50`,
                    background: `${s.accent}10`,
                    boxShadow: `0 0 20px ${s.accent}00`,
                  }}
                  aria-hidden
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
            
            {/* Bottom glow bar */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(90deg, transparent, ${s.accent}, transparent)`,
                boxShadow: `0 0 30px ${s.accent}`,
              }}
            />
          </article>
        ))}
      </div>
    </section>
  );
}
