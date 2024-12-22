import { useTranslations } from "@/hooks/useTranslations";
import type { Project } from "@/types";

export function useProjects(): Project[] {
  const t = useTranslations();

  return [
    {
      title: t.projects.items.portfolio.title,
      description: t.projects.items.portfolio.description,
      category: "web",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      image: "/projects/Portfolio-Website.png",
      links: {
        demo: "https://smallr-portfolio.vercel.app",
        github: "https://github.com/Ynoob87/smallr",
      },
    },
    {
      title: t.projects.items.aboutSmallr.title,
      description: t.projects.items.aboutSmallr.description,
      category: "web",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      image: "/projects/About-Smallr-Website.png",
      links: {
        demo: "https://about-smallr.vercel.app/",
        github: "https://github.com/Ynoob87/about-small",
      },
    },
  ];
}
