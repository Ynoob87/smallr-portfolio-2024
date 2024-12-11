import { useTranslations } from "@/hooks/useTranslations";
import type { Project } from "@/types";

export function useProjects(): Project[] {
  const t = useTranslations();

  return [
    {
      title: t.projects.items.portfolio.title,
      description: t.projects.items.portfolio.description,
      tags: ["Next.js", "TypeScript", "Tailwind"],
      image: "/projects/Portfolio-Website.png",
      links: {
        demo: "#",
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
