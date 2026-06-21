"use client";

import { useState, useEffect } from "react";
import Magnetic from "./Magnetic";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
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
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-bg-base/80 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="container-x flex items-center justify-between h-[60px]">
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center gap-2 text-ink-primary"
          aria-label="morpio home"
        >
          <span className="display text-[1.6rem] leading-none">morpio</span>
          <span
            className="block w-[6px] h-[6px] rounded-full bg-accent-lime"
            style={{ boxShadow: "0 0 12px #C5FF3D" }}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.9rem] font-medium text-ink-secondary hover:text-ink-primary transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA + mobile menu */}
        <div className="flex items-center gap-3">
          <Magnetic
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 h-10 px-[18px] rounded-none border border-accent-lime text-ink-primary text-[0.82rem] font-semibold transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(197,255,61,0.35)]"
          >
            Start a Project
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Magnetic>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden w-10 h-10 grid place-items-center rounded-none border border-line text-ink-primary"
          >
            <svg width="16" height="4" viewBox="0 0 16 4">
              <circle cx="2" cy="2" r="1.5" fill="currentColor" />
              <circle cx="8" cy="2" r="1.5" fill="currentColor" />
              <circle cx="14" cy="2" r="1.5" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 bg-bg-base/95 backdrop-blur border-t border-line ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-x flex flex-col py-6 gap-5">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="display text-2xl text-ink-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 h-12 rounded-none border border-accent-lime text-ink-primary text-sm font-semibold"
          >
            Start a Project
          </a>
        </nav>
      </div>
    </header>
  );
}
