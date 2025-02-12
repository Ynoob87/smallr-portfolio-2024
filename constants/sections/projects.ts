import { useTranslations } from "@/hooks/useTranslations";
import type { UseCategories, UseProject } from "@/types";

export function useProjects(): UseProject[] {
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
        github: "https://github.com/Ynoob87/smallr-portfolio",
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
    // Roblox Projects
    {
      title: "Judgement Cut End Recreation",
      description: `Devil May Cry Vergil Abilitie "Judgement Cut End" `,
      category: "roblox",
      tags: ["Roblox", "Lua"],
      video: "MXsDfMxm0rs",
    },
    {
      title: "Custom Bangboo Character Model",
      description: "ZZZ Bangboo Custom Mesh Character & Idle Animation",
      category: "roblox",
      tags: ["Roblox", "Lua"],
      video: "rcDSce4aChg",
    },
    {
      title: "Parry-Based Combat System ",
      description:
        "This Roblox project explores the design and implementation of a combat system inspired by the Parry mechanic, focusing on strategic player interactions and real-time decision-making. It draws inspiration from the anime BLEACH, utilizing Shinigami abilities to enhance gameplay dynamics and challenge.",
      category: "roblox",
      tags: ["Roblox", "Lua"],
      image: "/projects/thumbnails/bleach-shinigami.jpg",
      video: "vE8vWv9u99k",
    },
    {
      title: "Bleach Shinigami Abilities",
      description:
        "This is a roblox project inspired by the anime BLEACH from the shinigami's abilities",
      category: "roblox",
      tags: ["Roblox", "Lua"],
      image: "/projects/thumbnails/bleach-shinigami.jpg",
      video: "nUk5FNVyV2I",
    },
    {
      title: "Bleach Quincy Abilities",
      description:
        "This is a roblox project inspired by the anime BLEACH from the quincy's abilities",
      category: "roblox",
      tags: ["Roblox", "Lua"],
      video: "xjJSrZ468ME",
    },
    {
      title: "Bleach Arrancar Abilities",
      description:
        "This is a roblox project inspired by the anime BLEACH from the arrancar's abilities",
      category: "roblox",
      tags: ["Roblox", "Lua"],
      video: "1TGTTg14rSA",
    },
  ];
}

export function useCategories(): UseCategories[] {
  const t = useTranslations();

  return [
    { value: "all", label: t.categories.all },
    { value: "web", label: t.categories.web },
    { value: "roblox", label: t.categories.roblox },
    { value: "unreal", label: t.categories.other },
  ];
}
