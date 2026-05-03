"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Studio", href: "#studio" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-bg-base/75 border-b border-line/60"
          : "bg-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="container-x flex items-center justify-between h-14 md:h-16">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group"
          aria-label="morpio home"
        >
          <span className="font-display font-black tracking-tight text-xl md:text-2xl lg:text-3xl text-ink-primary group-hover:text-violet-400 transition-all">
            morpio
          </span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-violet-500 shadow-glow-sm" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-secondary hover:text-ink-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA + mobile menu */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 md:px-5 h-9 md:h-10 rounded-full text-xs md:text-sm font-medium text-white bg-violet-gradient shadow-glow-sm hover:shadow-glow transition-shadow"
          >
            Start a Project
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden w-10 h-10 grid place-items-center rounded-full border border-line text-ink-primary hover:border-violet-500"
          >
            <span className="relative flex flex-col gap-[5px]">
              <span
                className={`block w-4 h-px bg-current transition-transform ${
                  open ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`block w-4 h-px bg-current transition-transform ${
                  open ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 border-t border-line/60 bg-bg-base/95 backdrop-blur ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-x flex flex-col py-6 gap-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base text-ink-primary py-2 border-b border-line/50 flex items-center justify-between"
            >
              {l.label}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-ink-muted">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 h-12 rounded-full text-sm font-medium text-white bg-violet-gradient shadow-glow-sm"
          >
            Start a Project
          </a>
        </nav>
      </div>
    </header>
  );
}
