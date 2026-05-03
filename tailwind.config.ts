import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Morphio dark palette (mobile-first)
        bg: {
          base: "#05060A",
          panel: "#0B0D14",
          card: "#0E1119",
          elevated: "#13161F",
        },
        line: {
          DEFAULT: "#1B1E2A",
          strong: "#262A38",
        },
        ink: {
          primary: "#F4F5F7",
          secondary: "#C7CBD6",
          muted: "#8B91A1",
          dim: "#4A4F5E",
        },
        violet: {
          400: "#A78BFF",
          500: "#8C5DFF",
          600: "#7B4DFF",
          700: "#5E36D9",
        },
        accent: {
          electric: "#8C5DFF",
          blue: "#4C5BFF",
          pink: "#C45CFF",
          cyan: "#7EDCFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: [
          "var(--font-mono)",
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      backgroundImage: {
        "violet-gradient":
          "linear-gradient(135deg, #4C5BFF 0%, #8C5DFF 50%, #C45CFF 100%)",
        "violet-gradient-soft":
          "linear-gradient(135deg, #4C5BFF20 0%, #8C5DFF20 50%, #C45CFF20 100%)",
        "radial-violet":
          "radial-gradient(circle at 50% 50%, #8C5DFF40 0%, transparent 70%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(140,93,255,0.35)",
        "glow-sm": "0 0 20px rgba(140,93,255,0.25)",
        "glow-lg": "0 0 80px rgba(140,93,255,0.4)",
        card: "0 4px 24px rgba(0,0,0,0.4)",
      },
      animation: {
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        marquee: "marquee 40s linear infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
    },
  },
  plugins: [],
};

export default config;
