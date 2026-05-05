"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out-expo ${
        scrolled ? "bg-bg/90 backdrop-blur-sm border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="font-display font-black text-xl md:text-2xl tracking-tight text-ink">
          morpio
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted hover:text-ink transition-colors duration-300 link-underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="mailto:hello@morpio.com"
          className="hidden md:inline-flex items-center gap-2 px-5 h-10 rounded-full border border-ink text-ink text-sm font-medium hover:bg-ink hover:text-bg transition-all duration-300"
        >
          Get in Touch
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 grid place-items-center"
          aria-label="Toggle menu"
        >
          <span className="relative flex flex-col gap-1.5">
            <span className={`block w-5 h-px bg-ink transition-transform duration-300 ${open ? "rotate-45 translate-y-[4px]" : ""}`} />
            <span className={`block w-5 h-px bg-ink transition-transform duration-300 ${open ? "-rotate-45 -translate-y-[2px]" : ""}`} />
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out-expo border-t border-line bg-bg ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <nav className="container-x flex flex-col py-6 gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg text-ink py-2 border-b border-line"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:hello@morpio.com"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 h-12 rounded-full border border-ink text-ink text-sm font-medium"
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
}
