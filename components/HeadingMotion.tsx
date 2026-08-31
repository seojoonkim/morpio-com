"use client";

import { useEffect } from "react";

export default function HeadingMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const headings = [...document.querySelectorAll<HTMLElement>(".hero h1, main section h2")];
    const engine = document.querySelector<HTMLElement>(".engine-drawing");
    root.classList.add("motion-ready");

    const headingObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-heading-visible");
        headingObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8%" });

    const engineObserver = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      entry.target.classList.add("is-engine-active");
      engineObserver.unobserve(entry.target);
    }, { threshold: 0.16, rootMargin: "0px 0px -5%" });

    headings.forEach((heading) => headingObserver.observe(heading));
    if (engine) engineObserver.observe(engine);
    return () => {
      headingObserver.disconnect();
      engineObserver.disconnect();
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
