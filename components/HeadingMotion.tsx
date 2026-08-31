"use client";

import { useEffect } from "react";

const HEADING_SELECTOR = ".hero h1, main section h2";

function splitHeading(heading: HTMLElement) {
  if (heading.dataset.split === "true") return;

  const label = heading.innerText.replace(/\s+/g, " ").trim();
  let index = 0;

  const splitTextNode = (node: Text) => {
    const fragment = document.createDocumentFragment();
    const tokens = (node.textContent || "").split(/(\s+)/);

    tokens.forEach((token) => {
      if (!token) return;
      if (/^\s+$/.test(token)) {
        fragment.append(document.createTextNode(" "));
        return;
      }

      const word = document.createElement("span");
      word.className = "heading-word";
      word.setAttribute("aria-hidden", "true");

      Array.from(token).forEach((character) => {
        const characterSpan = document.createElement("span");
        characterSpan.className = "heading-char";
        characterSpan.textContent = character;
        characterSpan.style.setProperty("--char-delay", `${index++ * 26}ms`);
        word.append(characterSpan);
      });

      fragment.append(word);
    });

    node.replaceWith(fragment);
  };

  const walk = (element: Element) => {
    Array.from(element.childNodes).forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        splitTextNode(node as Text);
      } else if (node instanceof Element && !node.classList.contains("hero-period")) {
        walk(node);
      }
    });
  };

  heading.setAttribute("aria-label", label);
  heading.dataset.split = "true";
  heading.classList.add("is-char-split");
  walk(heading);
}

export default function HeadingMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const headings = [...document.querySelectorAll<HTMLElement>(HEADING_SELECTOR)];
    const engine = document.querySelector<HTMLElement>(".engine-drawing");

    headings.forEach(splitHeading);
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
