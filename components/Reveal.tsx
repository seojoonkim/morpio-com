"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  id?: string;
};

/**
 * IntersectionObserver-driven reveal wrapper.
 * Toggles `is-revealed` once the element enters the viewport.
 * Honors prefers-reduced-motion (shows immediately).
 */
export default function Reveal({
  children,
  className = "",
  stagger = false,
  id,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      id={id}
      ref={ref}
      className={`reveal ${stagger ? "reveal-stagger" : ""} ${
        visible ? "is-revealed" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
