"use client";

import { useEffect } from "react";

export default function HeadingMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const engine = document.querySelector<HTMLElement>(".engine-drawing");
    const headings = [...document.querySelectorAll<HTMLElement>(".hero h1, main section h2")];
    root.classList.add("motion-ready");

    headings.forEach((heading) => {
      if (heading.querySelector(".heading-char")) return;
      let characterIndex = 0;
      const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
      const textNodes: Text[] = [];

      while (walker.nextNode()) textNodes.push(walker.currentNode as Text);

      textNodes.forEach((textNode) => {
        if (!textNode.textContent?.trim()) return;
        const fragment = document.createDocumentFragment();

        textNode.textContent.split(/(\s+)/).forEach((part) => {
          if (/^\s+$/.test(part)) {
            fragment.append(part);
            return;
          }
          if (!part) return;

          const word = /^[A-Za-z0-9.,!?'/&+-]+$/.test(part)
            ? document.createElement("span")
            : fragment;
          if (word instanceof HTMLSpanElement) word.className = "heading-word";
          [...part].forEach((character) => {
            const span = document.createElement("span");
            span.className = "heading-char";
            span.style.setProperty("--char-index", String(characterIndex++));
            span.textContent = character;
            word.append(span);
          });
          if (word instanceof HTMLSpanElement) fragment.append(word);
        });

        textNode.replaceWith(fragment);
      });
    });

    const glintObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-glinting");
        glintObserver.unobserve(entry.target);
      });
    }, { threshold: 0.3 });
    headings.forEach((heading) => glintObserver.observe(heading));

    // Position-based (not intersection-based) so blocks jumped past by anchor navigation never stay hidden.
    let revealTargets = [...document.querySelectorAll<HTMLElement>("[data-reveal]")];
    let revealFrame = 0;
    const settleReveals = () => {
      revealFrame = 0;
      const line = window.innerHeight * 0.94;
      revealTargets = revealTargets.filter((target) => {
        if (target.getBoundingClientRect().top > line) return true;
        target.classList.add("is-in");
        return false;
      });
      if (!revealTargets.length) window.removeEventListener("scroll", queueReveals);
    };
    const queueReveals = () => {
      if (!revealFrame) revealFrame = window.requestAnimationFrame(settleReveals);
    };
    window.addEventListener("scroll", queueReveals, { passive: true });
    window.addEventListener("resize", queueReveals);
    settleReveals();

    const engineObserver = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      entry.target.classList.add("is-engine-active");
      engineObserver.unobserve(entry.target);
    }, { threshold: 0.16, rootMargin: "0px 0px -5%" });

    if (engine) engineObserver.observe(engine);
    const engineFallback = window.setTimeout(() => {
      if (!engine || engine.classList.contains("is-engine-active")) return;
      engine.classList.add("is-engine-active");
      engineObserver.unobserve(engine);
    }, 2400);
    return () => {
      window.clearTimeout(engineFallback);
      engineObserver.disconnect();
      glintObserver.disconnect();
      window.removeEventListener("scroll", queueReveals);
      window.removeEventListener("resize", queueReveals);
      window.cancelAnimationFrame(revealFrame);
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
