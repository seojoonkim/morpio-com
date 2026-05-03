"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "backdrop-blur-md bg-black/40 border-b border-white/5" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-xl tracking-tight">
          MORPIO<span className="text-accent">.</span>
        </Link>
        <ul className="hidden md:flex items-center gap-9 text-sm text-white/70">
          <li><a href="#features" className="hover:text-white">Features</a></li>
          <li><a href="#showcase" className="hover:text-white">Showcase</a></li>
          <li><a href="#how" className="hover:text-white">How it works</a></li>
          <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
        </ul>
        <a href="#waitlist" className="btn-accent text-sm !py-2 !px-4">
          Join waitlist
        </a>
      </nav>
    </header>
  );
}
