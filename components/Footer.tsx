const LINKS = [
  {
    head: "Studio",
    items: ["Approach", "Technology", "Careers"],
  },
  {
    head: "Practice",
    items: ["AI Animation", "Virtual Celeb Studio", "AI Advertising"],
  },
  {
    head: "Letters",
    items: ["About", "News", "Contact"],
  },
] as const;

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-ink">
      <div className="container-wide pt-20 md:pt-28 pb-10">
        {/* Top row: brand + columns */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          {/* Brand */}
          <div className="col-span-12 md:col-span-5">
            <a
              href="#"
              className="font-display font-black text-2xl text-ink lowercase tracking-[-0.04em]"
            >
              morpio<span className="text-accent">.</span>
            </a>
            <p className="mt-6 text-ink-muted text-[15px] leading-[1.65] max-w-sm">
              An AI media studio for the next era of{" "}
              <span className="serif-em text-ink">story</span>,{" "}
              <span className="serif-em text-ink">talent</span>, and{" "}
              <span className="serif-em text-ink">advertising</span>.
            </p>
            <p className="meta mt-8">Seoul · Sent to the world</p>
          </div>

          {/* Columns */}
          {LINKS.map((col) => (
            <div
              key={col.head}
              className="col-span-6 md:col-span-2 lg:col-span-2"
            >
              <h5 className="meta-ink mb-5">{col.head}</h5>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[14px] text-ink-muted hover:text-ink transition-colors duration-300 link-underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div className="col-span-12 md:col-span-1 lg:col-span-1">
            <h5 className="meta-ink mb-5">Write</h5>
            <a
              href="mailto:hello@morpio.com"
              className="text-[14px] text-ink-muted hover:text-ink transition-colors duration-300 link-underline"
            >
              hello@<br />morpio.com
            </a>
          </div>
        </div>

        {/* Mega kicker */}
        <div className="mt-24 md:mt-32 mb-10 md:mb-14 overflow-hidden">
          <p
            className="font-display font-black text-ink leading-[0.85] tracking-[-0.05em] whitespace-nowrap"
            style={{ fontSize: "clamp(96px, 22vw, 320px)" }}
          >
            morpio<span className="serif-em font-normal text-ink-muted">.</span>
          </p>
        </div>

        {/* Legal row */}
        <div className="pt-8 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="meta">
            © {new Date().getFullYear()} morpio · All rights reserved
          </p>
          <p className="meta tabular">
            Vol. 01 · Issue 04 · 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
