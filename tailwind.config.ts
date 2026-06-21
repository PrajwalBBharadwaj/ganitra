import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E1B4B", // Deep Indigo
          dark: "#0F0D2E",    // Navy Blue
        },
        secondary: {
          DEFAULT: "#F8F9FA", // Off White
          muted: "#E9ECEF",   // Light Gray
        },
        accent: {
          numbers: "#3B82F6",    // Blue
          algebra: "#8B5CF6",    // Purple
          geometry: "#10B981",   // Green
          patterns: "#F97316",   // Orange
          logic: "#14B8A6",      // Teal
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;