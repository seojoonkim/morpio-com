"use client";

import { useEffect } from "react";

export default function HeadingMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const headings = [...document.querySelectorAll<HTMLElement>(".hero h1, main section h2")];
    root.classList.add("motion-ready");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-heading-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8%" });

    headings.forEach((heading) => observer.observe(heading));
    return () => {
      observer.disconnect();
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
