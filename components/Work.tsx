import SectionLabel from "./SectionLabel";

const WORK = [
  {
    title: "Webtoon to Animation",
    sub: "Action Fantasy Series",
    meta: "AI Animation · 12 EP",
    year: "2025",
    grad: "from-violet-700 via-violet-500 to-accent-pink",
    art: "anime",
    img: "/gen/work-anime.webp",
  },
  {
    title: "Virtual Idol Campaign",
    sub: "Music Video & Social",
    meta: "Virtual Talent · 8M views",
    year: "2025",
    grad: "from-accent-pink via-violet-500 to-accent-blue",
    art: "idol",
    img: "/gen/work-idol.webp",
  },
  {
    title: "AI Brand Film",
    sub: "Cinematic Commercial",
    meta: "AI Advertising · 60s",
    year: "2024",
    grad: "from-accent-blue via-violet-500 to-violet-700",
    art: "film",
    img: "/gen/work-film.webp",
  },
  {
    title: "Character IP Launch",
    sub: "Visual Identity & Teaser",
    meta: "IP Development",
    year: "2024",
    grad: "from-violet-500 via-accent-pink to-accent-blue",
    art: "ip",
    img: "/gen/work-ip.webp",
  },
  {
    title: "AI Product Ad",
    sub: "Digital Campaign",
    meta: "Performance Creative",
    year: "2024",
    grad: "from-violet-700 via-accent-blue to-violet-500",
    art: "product",
    img: "/gen/work-product.webp",
  },
  {
    title: "Virtual Talent",
    sub: "Short Form Series",
    meta: "Episodic Content · 24 EP",
    year: "2025",
    grad: "from-accent-pink via-accent-blue to-violet-700",
    art: "shorts",
    img: "/gen/work-shorts.webp",
  },
] as const;

export default function Work() {
  return (
    <section id="work" className="relative py-20 md:py-32 container-x">
      <SectionLabel>Selected Work</SectionLabel>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {WORK.map((w, i) => (
          <article
            key={i}
            className="group relative rounded-2xl overflow-hidden bg-bg-card border border-line hover:border-violet-500/50 transition-all hover:-translate-y-1 duration-300"
          >
            {/* Visual */}
            <div className={`relative aspect-[4/3] bg-gradient-to-br ${w.grad} overflow-hidden`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={w.img}
                alt={w.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />

              {/* Subtle overlay gradient for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/40 to-transparent" />
              {/* Soft violet tint to keep brand cohesion */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-900/10 via-transparent to-accent-pink/10 mix-blend-overlay pointer-events-none" />

              {/* Year badge */}
              <span className="absolute top-3 left-3 inline-flex items-center px-2 py-1 rounded-full bg-black/50 backdrop-blur border border-white/15 font-mono text-[10px] tracking-widest text-white/80">
                {w.year}
              </span>

              {/* Play */}
              <div className="absolute bottom-3 right-3 flex items-center gap-2 text-white">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
                  Play
                </span>
                <span className="w-9 h-9 grid place-items-center rounded-full bg-white/10 backdrop-blur border border-white/30 group-hover:bg-violet-gradient group-hover:border-transparent transition-all">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </div>
            </div>

            <div className="p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-violet-400 mb-2">
                {w.meta}
              </p>
              <h4
                className="font-display font-bold text-ink-primary leading-tight"
                style={{ fontSize: "clamp(16px, 4.4vw, 20px)" }}
              >
                {w.title}
              </h4>
              <p className="mt-1 text-ink-secondary text-sm">{w.sub}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function WorkVisual({ kind }: { kind: string }) {
  // Decorative SVG overlays per work type
  const common = "absolute inset-0 w-full h-full";
  if (kind === "anime") {
    return (
      <svg className={common} viewBox="0 0 100 75" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="a1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <rect width="100" height="75" fill="url(#a1)" />
        <circle cx="35" cy="34" r="14" fill="rgba(255,255,255,0.18)" />
        <path d="M28 36 Q35 50 42 36 L42 50 Q35 55 28 50 Z" fill="rgba(255,255,255,0.12)" />
        <circle cx="32" cy="32" r="1.5" fill="#fff" />
        <circle cx="38" cy="32" r="1.5" fill="#fff" />
        <path d="M70 20 L88 20 L88 55 L70 55 Z" fill="rgba(0,0,0,0.25)" />
        <path d="M73 25 L85 25 M73 30 L82 30 M73 35 L85 35 M73 40 L80 40" stroke="#fff" strokeOpacity="0.4" strokeWidth="0.6" />
      </svg>
    );
  }
  if (kind === "idol") {
    return (
      <svg className={common} viewBox="0 0 100 75" preserveAspectRatio="xMidYMid slice">
        <circle cx="50" cy="38" r="18" fill="rgba(255,255,255,0.12)" />
        <circle cx="50" cy="30" r="7" fill="rgba(255,255,255,0.25)" />
        <path d="M38 42 Q50 60 62 42 L62 60 Q50 66 38 60 Z" fill="rgba(255,255,255,0.18)" />
        <g stroke="rgba(255,255,255,0.4)" strokeWidth="0.6" fill="none">
          <path d="M20 20 L25 25 M75 20 L80 15 M15 55 L20 50 M85 55 L80 60" />
        </g>
        <circle cx="20" cy="20" r="1" fill="#fff" />
        <circle cx="80" cy="20" r="1" fill="#fff" />
      </svg>
    );
  }
  if (kind === "film") {
    return (
      <svg className={common} viewBox="0 0 100 75" preserveAspectRatio="xMidYMid slice">
        <rect x="0" y="0" width="100" height="10" fill="rgba(0,0,0,0.5)" />
        <rect x="0" y="65" width="100" height="10" fill="rgba(0,0,0,0.5)" />
        <g fill="rgba(0,0,0,0.6)">
          <rect x="3" y="2" width="3" height="6" />
          <rect x="9" y="2" width="3" height="6" />
          <rect x="15" y="2" width="3" height="6" />
          <rect x="88" y="67" width="3" height="6" />
          <rect x="94" y="67" width="3" height="6" />
        </g>
        <circle cx="50" cy="40" r="14" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
        <polygon points="46,33 60,40 46,47" fill="rgba(255,255,255,0.6)" />
      </svg>
    );
  }
  if (kind === "ip") {
    return (
      <svg className={common} viewBox="0 0 100 75" preserveAspectRatio="xMidYMid slice">
        <g fill="rgba(255,255,255,0.15)">
          <polygon points="30,20 50,35 30,50 10,35" />
          <polygon points="70,25 90,40 70,55 50,40" />
        </g>
        <text x="50" y="68" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="6" fontFamily="monospace" letterSpacing="2">
          MORPIO IP
        </text>
      </svg>
    );
  }
  if (kind === "product") {
    return (
      <svg className={common} viewBox="0 0 100 75" preserveAspectRatio="xMidYMid slice">
        <rect x="30" y="20" width="40" height="40" rx="3" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
        <circle cx="50" cy="40" r="10" fill="rgba(255,255,255,0.25)" />
        <rect x="38" y="55" width="24" height="2" rx="1" fill="rgba(255,255,255,0.4)" />
        <g fill="rgba(255,255,255,0.4)">
          <circle cx="20" cy="15" r="1.5" />
          <circle cx="85" cy="20" r="1.5" />
          <circle cx="15" cy="60" r="1.5" />
          <circle cx="80" cy="65" r="1.5" />
        </g>
      </svg>
    );
  }
  // shorts
  return (
    <svg className={common} viewBox="0 0 100 75" preserveAspectRatio="xMidYMid slice">
      <rect x="20" y="10" width="20" height="55" rx="2" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
      <rect x="42" y="10" width="20" height="55" rx="2" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
      <rect x="64" y="10" width="20" height="55" rx="2" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
      <polygon points="48,32 56,38 48,44" fill="#fff" opacity="0.7" />
    </svg>
  );
}
