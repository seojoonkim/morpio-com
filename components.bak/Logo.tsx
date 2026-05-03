"use client";

import Link from "next/link";

/**
 * Logo (top-left fixed) — equivalent to pacomepertant's .logo + .logo-tag-wrapper
 * pacome reference:
 *   .logo { height:64rem; width:64rem; left:var(--grid-margin); top:var(--grid-margin); position:fixed; z-index:20 }
 *   .logo-tag-wrapper { left:calc(100% + 8rem); top:16rem; }
 *   .logo-tag-wrapper .star { right:-12rem; top:-12rem; width:32rem; }
 *
 * morpio adaptation: square wordmark "M*" + tag "MORPIO STUDIO".
 */
export default function Logo() {
  return (
    <div
      className="fixed z-30 flex items-center select-none"
      style={{ top: "var(--grid-margin)", left: "var(--grid-margin)" }}
    >
      <Link
        href="/"
        aria-label="MORPIO home"
        className="relative flex items-center justify-center group"
        style={{
          width: 64,
          height: 64,
          borderRadius: 12,
          background: "transparent",
        }}
      >
        {/* Square mark */}
        <svg
          viewBox="0 0 64 64"
          width="64"
          height="64"
          className="transition-transform duration-500 group-hover:rotate-[-4deg]"
        >
          <rect
            x="0.75"
            y="0.75"
            width="62.5"
            height="62.5"
            rx="11"
            ry="11"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            opacity="0.7"
          />
          {/* M-shaped morph */}
          <path
            d="M14 46 V20 L24 36 L32 22 L40 36 L50 20 V46"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {/* asterisk seed */}
          <circle cx="32" cy="44" r="2.2" fill="var(--color-accent)" />
        </svg>
      </Link>

      {/* Tag wrapper — sits to the right of the mark */}
      <div className="relative ml-3 flex items-center pl-3 border-l border-white/15">
        {/* Star — top-right of tag, pacome .star */}
        <svg
          viewBox="0 0 24 24"
          width="14"
          height="14"
          className="absolute -top-3 -right-3 text-[var(--color-accent)]"
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 1.5l2.6 6.4 6.9.5-5.3 4.5 1.7 6.7L12 16.7 6.1 19.6l1.7-6.7L2.5 8.4l6.9-.5L12 1.5z" />
        </svg>
        <div className="flex flex-col leading-tight">
          <span
            className="text-[11px] tracking-[0.22em] uppercase font-medium"
            style={{ fontFamily: "var(--font-display), system-ui" }}
          >
            MORPIO
          </span>
          <span
            className="text-[9px] tracking-[0.32em] uppercase text-white/45"
            style={{ fontFamily: "var(--font-display), system-ui" }}
          >
            studio · seoul
          </span>
        </div>
      </div>
    </div>
  );
}
