import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Kinetic Stage palette
        "bg-base": "#0A0A0A",
        "bg-surface": "#121214",
        "bg-surface-2": "#1A1A1E",
        "ink-primary": "#F4F4F2",
        "ink-secondary": "#9A9A9E",
        "ink-muted": "#5A5A60",
        "accent-lime": "#C5FF3D",
        "accent-lime-dim": "rgba(197,255,61,0.18)",
        line: {
          DEFAULT: "rgba(244,244,242,0.08)",
          strong: "rgba(244,244,242,0.16)",
        },
        // legacy aliases kept for any stray references
        violet: { 400: "#A78BFF", 500: "#8C5DFF" },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        body: ['"Hanken Grotesk"', "system-ui", "sans-serif"],
        mono: ['"Geist Mono"', "ui-monospace", "monospace"],
        sans: ['"Hanken Grotesk"', "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        stage: "cubic-bezier(0.16, 1, 0.3, 1)",
        snap: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        reveal: "900ms",
        hover: "300ms",
      },
      animation: {
        "word-reveal": "word-reveal 0.9s var(--ease-stage) both",
        "section-rise": "section-rise 0.9s var(--ease-stage) both",
        "glow-track": "glow-track 12s ease-in-out infinite alternate",
        "scroll-cue": "scroll-cue 2.4s ease-in-out infinite",
        "ring-spin": "ring-spin 20s linear infinite",
        "orb-breathe": "orb-breathe 3s ease-in-out infinite",
      },
      keyframes: {
        "word-reveal": {
          "0%": { clipPath: "inset(100% 0 0 0)", transform: "translateY(0.1em)" },
          "100%": { clipPath: "inset(0 0 0 0)", transform: "translateY(0)" },
        },
        "section-rise": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow-track": {
          "0%": { transform: "translate3d(-10%,0,0)", opacity: "0.4" },
          "100%": { transform: "translate3d(15%,8%,0)", opacity: "0.7" },
        },
        "scroll-cue": {
          "0%,100%": { transform: "scaleY(0.4)", transformOrigin: "top" },
          "50%": { transform: "scaleY(1)" },
        },
        "ring-spin": {
          to: { transform: "rotate(360deg)" },
        },
        "orb-breathe": {
          "0%,100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.04)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
