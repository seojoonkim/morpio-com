const STATS = [
  {
    label: "Story-First",
    value: "100%",
    body: "We start with powerful stories and meaningful connections.",
  },
  {
    label: "AI-Native",
    value: "100%",
    body: "Built with AI at the core to unlock speed, scale, and imagination.",
  },
  {
    label: "Global-Ready",
    value: "50+",
    body: "Projects across markets and languages.",
  },
  {
    label: "Fast Production",
    value: "10×",
    body: "Faster from concept to final content delivery.",
  },
] as const;

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 container-x">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        {/* Left: text */}
        <div className="lg:col-span-5">
          <p className="section-label mb-5 inline-flex items-center gap-3">
            <span className="block w-6 h-px bg-violet-500/60" />
            About morpio
          </p>

          <h2
            className="font-display font-black tracking-tight leading-[1.05] text-ink-primary"
            style={{ fontSize: "clamp(32px, 9vw, 56px)" }}
          >
            morpio is a{" "}
            <span className="font-serif italic font-normal text-gradient-violet">
              new-generation
            </span>{" "}
            AI media company at the intersection of IP, virtual talent, and
            advertising.
          </h2>

          <p
            className="mt-6 text-ink-secondary max-w-md leading-relaxed"
            style={{ fontSize: "clamp(14px, 3.6vw, 16px)" }}
          >
            We believe great stories deserve new forms — and AI helps us create
            them faster, better, and bolder.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 h-12 px-6 rounded-full bg-violet-gradient text-white text-sm font-medium shadow-glow-sm hover:shadow-glow transition-shadow"
          >
            Learn More About Us
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Right: stats grid */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className="relative rounded-2xl bg-bg-card border border-line p-5 md:p-6 hover:border-violet-500/40 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-violet-400">
                    {s.label}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-violet-500 shadow-glow-sm" />
                </div>
                <div
                  className="font-display font-black text-ink-primary leading-none mb-3"
                  style={{ fontSize: "clamp(36px, 10vw, 56px)" }}
                >
                  {s.value}
                </div>
                <p className="text-ink-secondary text-xs md:text-sm leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
