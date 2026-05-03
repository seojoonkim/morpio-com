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
        // NEON RAINBOW SYSTEM
        neon: {
          pink: "#ff00ff",
          cyan: "#00ffff",
          violet: "#bf00ff",
          orange: "#ff6600",
          green: "#00ff88",
          blue: "#0066ff",
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
        "neon-gradient":
          "linear-gradient(135deg, #ff00ff 0%, #00ffff 50%, #bf00ff 100%)",
        "rainbow-conic":
          "conic-gradient(from 0deg, #ff00ff, #00ffff, #bf00ff, #ff6600, #00ff88, #ff00ff)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(140,93,255,0.35)",
        "glow-sm": "0 0 20px rgba(140,93,255,0.25)",
        "glow-lg": "0 0 80px rgba(140,93,255,0.4)",
        card: "0 4px 24px rgba(0,0,0,0.4)",
        // NEON SHADOWS
        "neon-pink": "0 0 30px rgba(255,0,255,0.5), 0 0 60px rgba(255,0,255,0.3)",
        "neon-cyan": "0 0 30px rgba(0,255,255,0.5), 0 0 60px rgba(0,255,255,0.3)",
        "neon-rainbow": "0 0 20px #ff00ff, 0 0 40px #bf00ff, 0 0 60px #00ffff",
      },
      animation: {
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        marquee: "marquee 40s linear infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite",
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
        "neon-pulse": {
          "0%, 100%": { 
            boxShadow: "0 0 20px rgba(255,0,255,0.4), 0 0 40px rgba(191,0,255,0.3)",
          },
          "50%": { 
            boxShadow: "0 0 40px rgba(255,0,255,0.6), 0 0 80px rgba(191,0,255,0.5)",
          },
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
