export default function CtaBanner() {
  return (
    <section id="contact" className="relative py-16 md:py-24 container-x">
      <div className="relative overflow-hidden rounded-3xl border border-violet-500/30 bg-gradient-to-br from-bg-panel via-bg-base to-bg-panel p-8 md:p-14">
        {/* Cosmic glow */}
        <div className="pointer-events-none absolute -inset-x-20 -top-20 h-80 bg-violet-gradient opacity-20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 w-1/2 h-full bg-radial-violet" />

        {/* Sparkle dots */}
        {[
          { top: "12%", left: "20%" },
          { top: "70%", left: "8%" },
          { top: "30%", left: "85%" },
          { top: "80%", left: "70%" },
          { top: "45%", left: "55%" },
        ].map((p, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white animate-glow"
            style={{
              top: p.top,
              left: p.left,
              boxShadow: "0 0 6px #C45CFF",
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <h2
              className="font-display font-black tracking-tight leading-[1.02] text-ink-primary"
              style={{ fontSize: "clamp(36px, 11vw, 80px)" }}
            >
              Build the Next
              <br />
              <span className="font-serif italic font-normal text-gradient-violet">
                Media Universe
              </span>
            </h2>

            <p
              className="mt-6 max-w-lg text-ink-secondary leading-relaxed"
              style={{ fontSize: "clamp(14px, 3.6vw, 16px)" }}
            >
              Let's create world-class AI media, virtual talent, and campaigns
              that inspire the world.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
            <a
              href="mailto:hello@morpio.com?subject=Start%20a%20Project"
              className="inline-flex items-center justify-center gap-2 h-13 px-7 rounded-full bg-violet-gradient text-white text-sm md:text-base font-medium shadow-glow hover:shadow-glow-lg transition-shadow w-full sm:w-auto"
            >
              Start a Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="mailto:hello@morpio.com"
              className="inline-flex items-center justify-center gap-2 h-13 px-7 rounded-full border border-line-strong text-ink-primary text-sm md:text-base font-medium hover:border-violet-500 hover:bg-white/5 transition-colors w-full sm:w-auto"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
