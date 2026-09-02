"use client";

import { useEffect, useRef } from "react";

const LINKS = [
  { label: "Why", href: "#why" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#system" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const cancelPendingAlignment = useRef<(() => void) | null>(null);

  useEffect(() => () => cancelPendingAlignment.current?.(), []);

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    cancelPendingAlignment.current?.();
    const section = document.querySelector<HTMLElement>(href);
    if (!section) return;
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const anchor = section.querySelector<HTMLElement>(".kicker") ?? section;
    const breathingRoom = window.innerWidth <= 900 ? 52 : 64;
    const targetTop = () => {
      const headerBottom = document.querySelector<HTMLElement>(".site-nav")?.getBoundingClientRect().bottom ?? 0;
      return Math.max(0, window.scrollY + anchor.getBoundingClientRect().top - headerBottom - breathingRoom);
    };
    const alignNow = () => {
      const top = targetTop();
      if (Math.abs(window.scrollY - top) <= 1) return;
      const root = document.documentElement;
      const previousBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo({ top, behavior: "auto" });
      requestAnimationFrame(() => { root.style.scrollBehavior = previousBehavior; });
    };

    window.scrollTo({ top: targetTop(), behavior: "smooth" });

    let cancelled = false;
    const timers = [700, 1400, 2200].map((delay) => window.setTimeout(() => {
      if (!cancelled) alignNow();
    }, delay));
    const onScrollEnd = () => { if (!cancelled) alignNow(); };
    const cancel = () => {
      if (cancelled) return;
      cancelled = true;
      timers.forEach(window.clearTimeout);
      window.removeEventListener("scrollend", onScrollEnd);
      window.removeEventListener("wheel", interrupt);
      window.removeEventListener("touchstart", interrupt);
      window.removeEventListener("pointerdown", interrupt);
      window.removeEventListener("keydown", interrupt);
      if (cancelPendingAlignment.current === cancel) cancelPendingAlignment.current = null;
    };
    const interrupt = () => {
      cancel();
      requestAnimationFrame(() => {
        const root = document.documentElement;
        const previousBehavior = root.style.scrollBehavior;
        const interruptedTop = window.scrollY;
        root.style.scrollBehavior = "auto";
        window.scrollTo({ top: interruptedTop, behavior: "auto" });
        requestAnimationFrame(() => { root.style.scrollBehavior = previousBehavior; });
      });
    };
    window.addEventListener("scrollend", onScrollEnd, { once: true });
    window.addEventListener("wheel", interrupt, { once: true, passive: true });
    window.addEventListener("touchstart", interrupt, { once: true, passive: true });
    window.addEventListener("pointerdown", interrupt, { once: true, passive: true });
    window.addEventListener("keydown", interrupt, { once: true });
    window.setTimeout(cancel, 2300);
    cancelPendingAlignment.current = cancel;
  };

  return (
    <header className="site-nav">
      <a className="nav-logo" href="#top" aria-label="Morpio home" onClick={(event) => scrollToSection(event, "#top")}>morpio<span>.</span></a>
      <nav aria-label="Primary navigation">
        {LINKS.map((link) => <a key={link.href} href={link.href} onClick={(event) => scrollToSection(event, link.href)}>{link.label}</a>)}
      </nav>
    </header>
  );
}
