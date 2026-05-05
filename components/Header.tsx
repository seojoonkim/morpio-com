"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Index", href: "#index", num: "01" },
  { label: "Practice", href: "#services", num: "02" },
  { label: "Method", href: "#process", num: "03" },
  { label: "Studio", href: "#about", num: "04" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ease-out-expo ${
        scrolled
          ? "bg-bg/85 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Editorial topbar */}
      <div className="hidden md:block border-b border-line/60">
        <div className="container-wide flex items-center justify-between h-7 text-[10px] tracking-[0.22em] uppercase text-ink-muted font-mono">
          <span>Vol. 01 — Studio Letter</span>
          <span className="tabular">2026 / 05</span>
          <span>Seoul · Sent to the world</span>
        </div>
      </div>

      <div className="container-wide flex items-center justify-between h-14 md:h-16">
        {/* Logo */}
        <a
          href="#"
          className="font-display font-black text-lg md:text-xl tracking-[-0.04em] text-ink lowercase"
        >
          morpio<span className="text-accent">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex items-baseline gap-1.5 text-[13px] text-ink hover:text-ink transition-colors duration-300"
            >
              <span className="font-mono text-[10px] text-ink-muted group-hover:text-accent transition-colors duration-300 tabular">
                {link.num}
              </span>
              <span className="link-underline">{link.label}</span>
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="mailto:hello@morpio.com"
          className="hidden md:inline-flex items-baseline gap-2 text-[13px] text-ink"
        >
          <span className="link-underline">Get in Touch</span>
          <span className="font-serif italic text-ink-muted">↗</span>
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 grid place-items-center"
          aria-label="Toggle menu"
        >
          <span className="relative flex flex-col gap-1.5">
            <span
              className={`block w-5 h-px bg-ink transition-transform duration-300 ${
                open ? "rotate-45 translate-y-[4px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-ink transition-transform duration-300 ${
                open ? "-rotate-45 -translate-y-[2px]" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out-expo border-t border-line bg-bg ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <nav className="container-x flex flex-col py-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline justify-between py-4 border-b border-line"
            >
              <span className="text-lg text-ink">{link.label}</span>
              <span className="font-mono text-xs text-ink-muted tabular">{link.num}</span>
            </a>
          ))}
          <a
            href="mailto:hello@morpio.com"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center justify-center gap-2 h-12 border border-ink text-ink text-sm font-medium"
          >
            Get in Touch ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
