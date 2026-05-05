const INDEX_LINKS = [
  { num: "01", label: "Practices", href: "#services" },
  { num: "02", label: "Method", href: "#process" },
  { num: "03", label: "Studio", href: "#about" },
  { num: "04", label: "Inquiry", href: "#contact" },
] as const;

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-ink">
      <div className="container-wide pt-20 md:pt-28 pb-10">
        {/* Top row: brand + columns */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          {/* Brand */}
          <div className="col-span-12 md:col-span-6">
            <a
              href="#"
              className="font-display font-black text-2xl text-ink lowercase tracking-[-0.04em]"
            >
              morpio<span className="text-accent">.</span>
            </a>
            <p className="mt-6 text-ink-muted text-[15px] leading-[1.65] max-w-sm">
              A media studio inside{" "}
              <span className="serif-em text-ink">Hashed Vibe Labs</span>. Tomorrow&apos;s franchises, tonight&apos;s prototypes.
            </p>
            <p className="meta mt-8">Seoul · Sent to the world</p>
          </div>

          {/* Index column — mirrors header nav */}
          <div className="col-span-6 md:col-span-3">
            <h5 className="meta-ink mb-5">Index</h5>
            <ul className="space-y-3">
              {INDEX_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-baseline gap-2 text-[14px] text-ink-muted hover:text-ink transition-colors duration-300"
                  >
                    <span className="font-mono text-[10px] text-ink-muted group-hover:text-accent transition-colors duration-300 tabular">
                      {link.num}
                    </span>
                    <span className="link-underline">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Write column */}
          <div className="col-span-6 md:col-span-3">
            <h5 className="meta-ink mb-5">Write</h5>
            <a
              href="mailto:hello@morpio.com"
              className="text-[14px] text-ink-muted hover:text-ink transition-colors duration-300 link-underline"
            >
              hello@morpio.com
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
            © {new Date().getFullYear()} morpio · Made with intention in Seoul
          </p>
          <p className="meta tabular">
            Vol. 01 · Issue 04 · 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
