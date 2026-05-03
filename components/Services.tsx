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
  },
  {
    n: "02",
    title: "Virtual Celeb",
    title2: "Studio & Agency",
    body:
      "We create, grow, and manage virtual celebrities. From concept to content, we build IP, produce videos, and operate as a full-service talent agency.",
    art: "celeb",
    tags: ["Virtual Talent", "IP Building", "Agency"],
  },
  {
    n: "03",
    title: "AI Advertising",
    title2: "Agency",
    body:
      "We craft AI-native campaigns, branded content, and commercials that are data-driven, visually stunning, and built to perform.",
    art: "ads",
    tags: ["Campaigns", "Brand Films", "Performance"],
  },
] as const;

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-32 container-x">
      <SectionLabel>Our Core Businesses</SectionLabel>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {SERVICES.map((s) => (
          <article
            key={s.n}
            className="group relative rounded-2xl bg-bg-card border border-line overflow-hidden hover:border-violet-500/50 hover:-translate-y-1 transition-all duration-300"
          >
            {/* Visual top */}
            <div className="relative aspect-[16/10] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={"/gen/services/" + (s.art === "anim" ? "video.webp" : s.art === "celeb" ? "talent.webp" : "ads.webp")}
                alt={s.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-95"
              />
              <ServiceVisual kind={s.art} />
              {/* Big number watermark */}
              <span
                className="absolute -bottom-2 right-3 font-display font-black leading-none text-white/10 select-none"
                style={{ fontSize: "clamp(60px, 14vw, 110px)" }}
              >
                {s.n}
              </span>
            </div>

            {/* Body */}
            <div className="p-6 md:p-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-violet-500/15 border border-violet-500/40 font-mono text-[10px] tracking-widest text-violet-400">
                  {s.n}
                </span>
                <span className="block h-px flex-1 bg-line" />
              </div>

              <h3
                className="font-display font-bold text-ink-primary leading-[1.15]"
                style={{ fontSize: "clamp(22px, 5.5vw, 26px)" }}
              >
                {s.title}
                <br />
                <span className="text-gradient-violet font-serif italic font-normal">
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
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/[0.04] border border-line text-ink-secondary"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-secondary group-hover:text-violet-400 transition-colors">
                  Learn More
                </span>
                <span
                  className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-line-strong grid place-items-center text-ink-primary group-hover:bg-violet-gradient group-hover:border-transparent group-hover:text-white transition-all"
                  aria-hidden
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ServiceVisual({ kind }: { kind: string }) {
  if (kind === "anim") {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-violet-700/50 via-bg-card to-accent-blue/30">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 60%22><defs><linearGradient id=%22g%22 x1=%220%22 y1=%220%22 x2=%221%22 y2=%221%22><stop offset=%220%22 stop-color=%22%23A78BFF%22 stop-opacity=%220.4%22/><stop offset=%221%22 stop-color=%22%23C45CFF%22 stop-opacity=%220.2%22/></linearGradient></defs><rect width=%22100%22 height=%2260%22 fill=%22%230B0D14%22/><circle cx=%2230%22 cy=%2230%22 r=%2218%22 fill=%22url(%23g)%22/><rect x=%2255%22 y=%2218%22 width=%2235%22 height=%2224%22 rx=%222%22 fill=%22%23A78BFF%22 fill-opacity=%220.15%22/><line x1=%2258%22 y1=%2226%22 x2=%2287%22 y2=%2226%22 stroke=%22%23A78BFF%22 stroke-opacity=%220.5%22/><line x1=%2258%22 y1=%2232%22 x2=%2280%22 y2=%2232%22 stroke=%22%23A78BFF%22 stroke-opacity=%220.3%22/></svg>')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card/80 to-transparent" />
      </div>
    );
  }
  if (kind === "celeb") {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-accent-pink/40 via-bg-card to-violet-700/40">
        <div className="absolute inset-0 grid place-items-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent-pink/60 to-violet-500/60 blur-2xl" />
        </div>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 60" preserveAspectRatio="none">
          <circle cx="50" cy="32" r="14" fill="rgba(196,92,255,0.2)" stroke="rgba(167,139,255,0.5)" strokeWidth="0.5" />
          <circle cx="50" cy="22" r="6" fill="rgba(255,255,255,0.15)" />
          <path d="M40 36 Q50 50 60 36 L60 50 L40 50 Z" fill="rgba(167,139,255,0.25)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card/80 to-transparent" />
      </div>
    );
  }
  // ads
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/40 via-bg-card to-accent-pink/30">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 60" preserveAspectRatio="none">
        <rect x="10" y="14" width="40" height="32" rx="2" fill="rgba(124,77,255,0.18)" stroke="rgba(167,139,255,0.5)" strokeWidth="0.4" />
        <rect x="55" y="20" width="30" height="20" rx="2" fill="rgba(196,92,255,0.18)" stroke="rgba(196,92,255,0.5)" strokeWidth="0.4" />
        <line x1="14" y1="22" x2="44" y2="22" stroke="rgba(167,139,255,0.6)" strokeWidth="0.5" />
        <line x1="14" y1="28" x2="38" y2="28" stroke="rgba(167,139,255,0.4)" strokeWidth="0.4" />
        <line x1="14" y1="34" x2="40" y2="34" stroke="rgba(167,139,255,0.3)" strokeWidth="0.3" />
        <circle cx="70" cy="30" r="6" fill="rgba(196,92,255,0.5)" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-bg-card/80 to-transparent" />
    </div>
  );
}
