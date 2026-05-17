import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#07080B",
          900: "#0B0D12",
          800: "#11141B",
          700: "#1A1E27",
          600: "#262B37",
        },
        accent: {
          DEFAULT: "#E11D48",
          soft: "#F43F5E",
          glow: "#FB7185",
        },
        sand: "#F5F1EA",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse at top, rgba(244,63,94,0.18), transparent 60%)",
      },
    },
  },
  plugins: [],
};
export default config;
