import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          light: "#FFFFFF",
          dark: "#111111",
        },
        text: {
          light: "#1A1A1A",
          dark: "#E5E5E5",
        },
        primary: {
          light: "#2563EB",
          dark: "#60A5FA",
        },
        secondary: {
          light: "#64748B",
          dark: "#94A3B8",
        },
        accent: {
          light: "#F3F4F6",
          dark: "#374151",
        },
        white: "#FFFFFF",
        black: "#000000",
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
      },
    },
  },
  plugins: [],
};

export default config;
