// Real anchors only — mirrors header nav. Ghost menus (Approach/Technology/Careers/News) dropped.
const INDEX_LINKS = [
  { num: "01", label: "Services", href: "#services" },
  { num: "02", label: "Process", href: "#process" },
  { num: "03", label: "Work", href: "#work" },
  { num: "04", label: "About", href: "#about" },
  { num: "05", label: "Contact", href: "#contact" },
] as const;

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-bg-base">
      <div
        className="container-x"
        style={{ paddingBlock: "clamp(56px, 8vh, 80px)" }}
      >
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4">
            <a href="#top" className="flex items-center gap-2 mb-4">
              <span className="display text-[1.8rem] leading-none text-ink-primary">
                morpio
              </span>
              <span
                className="block w-[6px] h-[6px] rounded-full bg-accent-lime"
                style={{ boxShadow: "0 0 12px #C5FF3D" }}
              />
            </a>
            <p
              className="text-ink-secondary max-w-[30ch]"
              style={{
                fontSize: "clamp(12px, 3.2vw, 14px)",
                lineHeight: 1.6,
              }}
            >
              An AI media lab incubated by Hashed. Tomorrow&apos;s
              franchises, tonight&apos;s prototypes.
            </p>
          </div>

          {/* Index column — mirrors header nav */}
          <div className="md:col-span-3">
            <h5 className="mono text-[0.68rem] uppercase tracking-[0.25em] lime mb-4">
              Index
            </h5>
            <ul className="flex flex-col gap-[10px]">
              {INDEX_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group flex items-baseline gap-2 text-[0.875rem] text-ink-secondary hover:text-ink-primary transition-colors duration-300"
                  >
                    <span className="mono text-[0.62rem] text-ink-muted group-hover:text-accent-lime transition-colors duration-300 tabular">
                      {l.num}
                    </span>
                    <span>{l.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Write column */}
          <div className="md:col-span-2">
            <h5 className="mono text-[0.68rem] uppercase tracking-[0.25em] lime mb-4">
              Write
            </h5>
            <a
              href="mailto:hello@morpio.com"
              className="text-[0.875rem] text-ink-secondary hover:text-ink-primary transition-colors duration-300"
            >
              hello@morpio.com
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-ink-muted">
            © {new Date().getFullYear()} morpio · Made with intention in Seoul
          </p>
          <p className="mono text-[0.62rem] uppercase tracking-[0.25em] text-ink-muted">
            Made in Seoul · Sent to the world
          </p>
        </div>
      </div>
    </footer>
  );
}
