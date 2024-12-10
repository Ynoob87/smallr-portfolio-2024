import type { Config } from "tailwindcss";
import { colors } from "./constants/colors";
import { siteConfig } from "./constants/config";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: colors,
      spacing: {
        header: siteConfig.layout.headerHeight,
        footer: siteConfig.layout.footerHeight,
      },
      maxWidth: {
        container: siteConfig.layout.maxWidth,
      },
    },
  },
  plugins: [],
};

export default config;
