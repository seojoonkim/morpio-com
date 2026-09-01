"use client";

import { useEffect } from "react";

export default function HeadingMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const engine = document.querySelector<HTMLElement>(".engine-drawing");
    root.classList.add("motion-ready");

    const engineObserver = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      entry.target.classList.add("is-engine-active");
      engineObserver.unobserve(entry.target);
    }, { threshold: 0.16, rootMargin: "0px 0px -5%" });

    if (engine) engineObserver.observe(engine);
    return () => {
      engineObserver.disconnect();
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
