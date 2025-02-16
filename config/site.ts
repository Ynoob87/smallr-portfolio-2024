import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Small R",
  url: "https://smallr-portfolio.vercel.app",
  description:
    "Full-Stack developer specializing in modern web technologies and creative solutions",
  keywords: [
    "small R",
    "portfolio",
    "Lua",
    "luau",
    "roblox",
    "roblox studio",
    "full stack devloper",
    "web development",
    "frontend developer",
    "React",
    "Python",
    "C++",
    "Next.js",
    "TypeScript",
  ],
  formspree: process.env.NEXT_PUBLIC_FORMSPREE_ID || "",
  locales: [
    { locale: "en", label: "English" },
    { locale: "zh", label: "繁體中文" },
  ],
  defaultLocale: "en",
  links: {
    github: "https://github.com/Ynoob87",
    linkedin: "https://www.linkedin.com/in/alaner652",
    email: "hhgg12661@gmail.com",
    osu: "https://osu.ppy.sh/users/30500236",
  },
};
