import SectionLabel from "./SectionLabel";

const STEPS = [
  {
    n: "01",
    title: "Discover",
    body:
      "We dive deep into your IP, brand, and audience to uncover the core story and opportunities.",
    tags: ["Research", "Strategy"],
    icon: "spark",
  },
  {
    n: "02",
    title: "Design",
    body:
      "We build characters, worlds, and concepts, then prototype, iterate, and bring direction to life.",
    tags: ["Story", "Design"],
    icon: "pencil",
  },
  {
    n: "03",
    title: "Generate",
    body:
      "We leverage cutting-edge AI tools and in-house pipelines to produce stunning visuals and videos.",
    tags: ["AI Production", "Content"],
    icon: "sparkle",
  },
  {
    n: "04",
    title: "Launch",
    body:
      "We deliver optimized assets and scale your content across channels for maximum impact.",
    tags: ["Distribution", "Growth"],
    icon: "rocket",
  },
] as const;

const ICONS: Record<string, JSX.Element> = {
  spark: (
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" />
  ),
  pencil: (
    <path d="M3 21h4l11-11-4-4L3 17v4z M14 6l4 4" />
  ),
  sparkle: (
    <path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z M19 14l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" />
  ),
  rocket: (
    <path d="M5 19c0-4 4-10 9-12 5 2 9 8 9 12-2 0-4-1-5-3-1 2-3 3-4 3-1 0-3-1-4-3-1 2-3 3-5 3z M12 9a2 2 0 100 4 2 2 0 000-4z" />
  ),
};

export default function Process() {
  return (
    <section id="process" className="relative py-20 md:py-32 container-x">
      <SectionLabel>Our Process</SectionLabel>

      <div className="rounded-3xl border border-line bg-gradient-to-br from-bg-panel to-bg-base p-6 md:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className="relative flex flex-col"
            >
              {/* Connector line on desktop */}
              {i < STEPS.length - 1 && (
                <div
                  aria-hidden
                  className="hidden lg:block absolute top-7 left-[calc(50%+32px)] right-[-32px] h-px bg-gradient-to-r from-violet-500/50 to-transparent"
                />
              )}

              {/* Icon */}
              <div className="relative w-14 h-14 rounded-full grid place-items-center bg-gradient-to-br from-violet-700/30 to-accent-blue/20 border border-violet-500/40 shadow-glow-sm mb-5">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-violet-400"
                >
                  {ICONS[s.icon]}
                </svg>
              </div>

              <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-violet-400 mb-2">
                {s.n}
              </p>
              <h4
                className="font-display font-bold text-ink-primary mb-3"
                style={{ fontSize: "clamp(20px, 5vw, 24px)" }}
              >
                {s.title}
              </h4>
              <p
                className="text-ink-secondary leading-relaxed mb-4 flex-1"
                style={{ fontSize: "clamp(13px, 3.4vw, 14px)" }}
              >
                {s.body}
              </p>

              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium bg-white/[0.04] border border-line-strong text-ink-secondary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
