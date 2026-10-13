import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", md: "2rem", xl: "2.5rem" },
      screens: { "2xl": "1440px" },
    },
    extend: {
      colors: {
        ink: { DEFAULT: "#0B0B0C", soft: "#1A1A1D", muted: "#55555C" },
        paper: { DEFAULT: "#F4F3F0", warm: "#EFE7DA" },
        flame: { DEFAULT: "#E2501F", deep: "#CF4318", soft: "#FBE3D9" },
        sun: "#F2B33D",
        leaf: "#1F6F5C",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 7.5vw, 7.5rem)", { lineHeight: "0.95", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2.25rem, 5vw, 4.75rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(1.75rem, 3.2vw, 3rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-bar": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-50%)" },
        },
        kenburns: {
          from: { transform: "scale(1.12)" },
          to: { transform: "scale(1)" },
        },
        sparkle: {
          "0%, 100%": { opacity: "0", transform: "scale(0.4) rotate(0deg)" },
          "50%": { opacity: "1", transform: "scale(1) rotate(90deg)" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "marquee-bar": "marquee-bar 35s linear infinite",
        "marquee-vertical": "marquee-vertical 12s linear infinite",
        kenburns: "kenburns 7s cubic-bezier(0.16, 1, 0.3, 1) both",
        sparkle: "sparkle 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    logs: false,
    themes: [
      {
        noborders: {
          primary: "#CF4318",
          "primary-content": "#FFFFFF",
          secondary: "#0B0B0C",
          "secondary-content": "#FFFFFF",
          accent: "#F2B33D",
          "accent-content": "#0B0B0C",
          neutral: "#0B0B0C",
          "neutral-content": "#F4F3F0",
          "base-100": "#FFFFFF",
          "base-200": "#F4F3F0",
          "base-300": "#E6E3DD",
          "base-content": "#0B0B0C",
          info: "#2C6E9B",
          success: "#1F6F5C",
          warning: "#F2B33D",
          error: "#B42318",
          "--rounded-box": "1.25rem",
          "--rounded-btn": "0.625rem",
          "--rounded-badge": "999px",
          "--animation-btn": "0.2s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.97",
          "--border-btn": "1.5px",
          "--tab-radius": "0.5rem",
        },
      },
    ],
  },
};

export default config;
