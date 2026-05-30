import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#EEEFE9",
        "cream-soft": "#F5F5EF",
        ink: "#1A1A18",
        "ink-soft": "#26261F",
        accent: "#F1652A",
        "accent-warm": "#E85A1F",
        border: "#1A1A18",
        muted: "#6B6B62",
        "muted-dark": "#A8A89E",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        hard: "4px 4px 0 0 currentColor",
        "hard-sm": "2px 2px 0 0 currentColor",
        "hard-lg": "6px 6px 0 0 currentColor",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
