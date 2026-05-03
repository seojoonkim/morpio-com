"use client";

import Link from "next/link";

/**
 * Logo (top-left fixed) — equivalent to pacomepertant's .logo + .logo-tag-wrapper
 * - Wordmark "MORPIO"
 * - Tag (small star + label "studio")
 */
export default function Logo() {
  return (
    <div className="fixed top-5 left-5 z-30 flex items-center gap-3 select-none">
      <Link
        href="/"
        className="flex items-center gap-2 group"
        aria-label="MORPIO home"
      >
        <span
          className="font-display text-[14px] tracking-[0.18em] uppercase font-medium group-hover:text-accent transition-colors duration-500"
          style={{ fontFamily: "var(--font-display), system-ui" }}
        >
          MORPIO
        </span>
      </Link>

      <div className="flex items-center gap-1.5 pl-3 border-l border-white/15">
        {/* Star icon */}
        <svg
          viewBox="0 0 12 12"
          width="10"
          height="10"
          className="text-accent"
          fill="currentColor"
        >
          <path d="M6 0l1.5 4.5L12 6l-4.5 1.5L6 12 4.5 7.5 0 6l4.5-1.5L6 0z" />
        </svg>
        {/* Tag label */}
        <span
          className="text-[10px] tracking-[0.22em] uppercase text-white/55"
          style={{ fontFamily: "var(--font-display), system-ui" }}
        >
          studio
        </span>
      </div>
    </div>
  );
}
