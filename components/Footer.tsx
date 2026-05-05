const LINKS = [
  { head: "Studio", items: ["Our Approach", "Technology", "Careers"] },
  { head: "Services", items: ["AI Animation", "Virtual Celeb Studio", "AI Advertising"] },
  { head: "Company", items: ["About", "News", "Contact"] },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-x py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4">
            <span className="font-display font-black text-2xl text-ink">morpio</span>
            <p className="mt-4 text-ink-muted text-sm leading-relaxed max-w-xs">
              AI media studio for the next era of story, tech, and talent.
            </p>
          </div>

          {/* Link Columns */}
          {LINKS.map((col) => (
            <div key={col.head} className="md:col-span-2">
              <h5 className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-4">
                {col.head}
              </h5>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-ink hover:text-accent transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-ink-muted">
            © {new Date().getFullYear()} morpio. All rights reserved.
          </p>
          <p className="font-mono text-xs uppercase tracking-widest text-ink-muted">
            Made in Seoul · Sent to the world
          </p>
        </div>
      </div>
    </footer>
  );
}
