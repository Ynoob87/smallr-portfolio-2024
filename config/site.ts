import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Small R",
  title: "Full Stack Developer",
  description: "Full-Stack developer specializing in modern web technologies",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio.smallr.dev",
  ogImage: "/og.jpg",
  locales: [
    { locale: "en", label: "English" },
    { locale: "zh", label: "繁體中文" },
  ],
  defaultLocale: "en",
  links: {
    github: "https://github.com/Ynoob87",
    linkedin: "https://www.linkedin.com/in/alaner652/",
    email: "hhgg12661@gmail.com",
  },
};
