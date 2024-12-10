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
        accent: {
          light: "#F3F4F6",
          dark: "#374151",
        },
      },
    },
  },
  plugins: [],
};

export default config;
