const COLS = [
  {
    head: "Studio",
    links: ["Our Approach", "Technology", "Careers"],
  },
  {
    head: "Services",
    links: ["AI Animation", "Virtual Celeb Studio", "AI Advertising"],
  },
  {
    head: "Company",
    links: ["About", "News", "Contact"],
  },
  {
    head: "Legal",
    links: ["Privacy Policy", "Terms of Service"],
  },
] as const;

const SOCIALS = [
  { label: "X", path: "M18 2h3l-7 8 8 12h-7l-5-7-6 7H1l8-9L1 2h7l4 6z" },
  { label: "Instagram", path: "M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-3a1 1 0 100 2 1 1 0 000-2z" },
  { label: "YouTube", path: "M22 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16 5 12 5 12 5s-4 0-7.2.1c-.4.1-1.2.1-2 .9C2.2 6.6 2 8 2 8S1.8 9.7 1.8 11.3v1.4c0 1.6.2 3.3.2 3.3s.2 1.4.8 2c.8.8 1.8.8 2.3.9 1.7.2 7 .2 7 .2s4 0 7.2-.1c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.7.2-3.3v-1.4C22.2 9.7 22 8 22 8zM10 15V9l5 3-5 3z" },
  { label: "LinkedIn", path: "M4 3a2 2 0 110 4 2 2 0 010-4zM3 9h2v12H3V9zm6 0h2v2c.7-1.2 2-2.2 4-2.2 4 0 4.5 2.5 4.5 5.7V21H17v-5.5c0-1.5 0-3.4-2-3.4s-2.3 1.6-2.3 3.3V21H9V9z" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-bg-base">
      <div className="container-x py-14 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display font-black text-2xl text-ink-primary">
                morpio
              </span>
              <span className="block w-1.5 h-1.5 rounded-full bg-violet-500 shadow-glow-sm" />
            </div>
            <p
              className="text-ink-secondary leading-relaxed max-w-xs"
              style={{ fontSize: "clamp(12px, 3.2vw, 14px)" }}
            >
              AI media studio for the next era of story, tech, and talent.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-10 h-10 grid place-items-center rounded-full border border-line text-ink-secondary hover:border-violet-500 hover:text-violet-400 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLS.map((c) => (
            <div key={c.head} className="md:col-span-2">
              <h5 className="font-mono text-[11px] uppercase tracking-[0.25em] text-violet-400 mb-4">
                {c.head}
              </h5>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-ink-secondary hover:text-ink-primary transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 pt-6 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-ink-muted">
            © {new Date().getFullYear()} morpio. All rights reserved.
          </p>
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-ink-muted">
            Made in Seoul · Sent to the world
          </p>
        </div>
      </div>
    </footer>
  );
}
