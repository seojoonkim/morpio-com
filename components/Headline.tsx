"use client";

import { useEffect, useRef, useState, Fragment, type ElementType } from "react";

type HeadlineProps = {
  text: string;
  as?: ElementType;
  limeIndices?: number[];
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Display headline with per-word clip-path reveal stagger.
 * Self-observes via IntersectionObserver; honors prefers-reduced-motion.
 * The `limeIndices` array marks which word indices (0-based) get the lime accent.
 */
export default function Headline({
  text,
  as: Tag = "h2",
  limeIndices = [],
  className = "",
  style,
}: HeadlineProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const words = text.split(" ");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-revealed" : ""} ${className}`}
      style={style}
    >
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="word">
            <span
              style={{
                transitionDelay: `${i * 0.08}s`,
                ...(limeIndices.includes(i)
                  ? {
                      textShadow:
                        "0 0 6px rgba(0,0,0,1), 0 1px 4px rgba(0,0,0,1), 0 0 28px rgba(0,0,0,0.85)",
                    }
                  : {}),
              }}
              className={limeIndices.includes(i) ? "lime" : undefined}
            >
              {w}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}
