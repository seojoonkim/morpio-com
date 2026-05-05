import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern Minimal Palette (Light Mode Base)
        bg: "#FAFAFA",
        ink: "#0A0A0A",
        "ink-muted": "#666666",
        line: "#E5E5E5",
        accent: "#5B3FFF", // Single violet accent
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      fontSize: {
        "hero": ["clamp(72px, 14vw, 180px)", { lineHeight: "0.9", letterSpacing: "-0.04em", fontWeight: "900" }],
        "headline": ["clamp(48px, 10vw, 96px)", { lineHeight: "0.95", letterSpacing: "-0.03em", fontWeight: "900" }],
        "title": ["clamp(32px, 6vw, 56px)", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "900" }],
      },
      spacing: {
        "section": "clamp(128px, 20vw, 224px)",
        "section-sm": "clamp(80px, 12vw, 128px)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
