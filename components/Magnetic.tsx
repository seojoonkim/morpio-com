"use client";

import { useEffect, useRef, type ReactNode } from "react";

type MagneticProps = {
  href: string;
  children: ReactNode;
  className: string;
  onClick?: () => void;
  ariaLabel?: string;
};

/**
 * Magnetic hover anchor — translates toward the cursor up to ~12px.
 * Desktop only (pointer:fine) and disabled under prefers-reduced-motion.
 */
export default function Magnetic({
  href,
  children,
  className,
  onClick,
  ariaLabel,
}: MagneticProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = ref.current;
    if (!el) return;
    const strength = 0.35;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };
    const onLeave = () => {
      el.style.transform = "";
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <a
      ref={ref}
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      className={className}
      style={{ willChange: "transform" }}
    >
      {children}
    </a>
  );
}
