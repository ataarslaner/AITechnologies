import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Professional white + dark navy palette.
        // Backgrounds = paper (white / off-white), text = ink (deep navy).
        paper: {
          DEFAULT: "#FFFFFF", // page background, pure white
          warm: "#F6F8FB",    // subtle section background, hint of cool
          deep: "#EAEFF6",    // deeper card / decorative blocks
          pure: "#FFFFFF",
        },
        ink: {
          DEFAULT: "#0A1F44", // brand navy, primary text
          950: "#06122A",
          900: "#0A1F44",
          800: "#10254F",
          700: "#1A335F",
          600: "#2A4373",
          500: "#56678C",
          300: "#A4B0C8",
        },
        accent: {
          DEFAULT: "#0A1F44", // accent matches navy for unity
          soft: "#1F3A78",
          deep: "#06122A",
          glow: "#D7E0F2",
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
          "radial-gradient(ellipse at top, rgba(10,31,68,0.10), transparent 60%)",
      },
    },
  },
  plugins: [],
};
export default config;
