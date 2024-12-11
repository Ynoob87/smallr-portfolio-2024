import { useTranslations } from "@/hooks/useTranslations";
import type { Project } from "@/types";

export function useProjects(): Project[] {
  const t = useTranslations();

  return [
    {
      title: "Portfolio Website",
      description: "使用 Next.js 14 和 Tailwind CSS 開發的個人作品集網站",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      image: "/projects/Portfolio-Website.png",
      links: {
        demo: "https://portfolio.smallr.dev",
        github: "https://github.com/Ynoob87/portfolio",
      },
    },
    {
      title: t.projects.items.aboutSmallr.title,
      description: t.projects.items.aboutSmallr.description,
      tags: ["Next.js", "TypeScript", "Tailwind"],
      image: "/projects/About-Smallr-Website.png",
      links: {
        demo: "https://about-smallr.vercel.app/",
        github: "https://github.com/Ynoob87/about-small",
      },
    },
    {
      title: t.projects.items.private.title,
      description: t.projects.items.private.description,
      tags: ["React", "Node.js", "MongoDB"],
      image: "/avatar.jpg",
    },
    {
      title: t.projects.items.demo.title,
      description: t.projects.items.demo.description,
      tags: ["Vue.js", "GraphQL", "Tailwind"],
      image: "/avatar.jpg",
      links: {
        demo: "#",
      },
    },
  ];
}
