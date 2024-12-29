import { useTranslations } from "@/hooks/useTranslations";
import type { Project } from "@/types";

// 導出項目卡片資料 (如果要套用翻譯請在i18n.ts中添加資訊)
export function useProjects(): Project[] {
  const t = useTranslations();

  return [
    // Web Projects
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
      title: "Bleach Shinigami Abilities",
      description:
        "This is a roblox project inspired by the anime BLEACH from the shinigami's abilities",
      category: "roblox",
      tags: ["Roblox", "Lua"],
      image: "/projects/thumbnails/bleach-shinigami.jpg",
      video: "watch?v=mHXd9876MWQ",
    },
    /* {
      title: "Bleach Quincy Abilities",
      description:
        "This is a roblox project inspired by the anime BLEACH from the quincy's abilities",
      category: "roblox",
      tags: ["Roblox", "Lua"],
      video: "",
    },
    {
      title: "Bleach Arrancar Abilities",
      description:
        "This is a roblox project inspired by the anime BLEACH from the arrancar's abilities",
      category: "roblox",
      tags: ["Roblox", "Lua"],
      video: "",
    },
    {
      title: "Custom Bangboo Character Model",
      description: "ZZZ Bangboo Custom Mesh Character & Idle Animation",
      category: "roblox",
      tags: ["Roblox", "Lua"],
      video: "",
    },

    {
      title: "Judgement Cut End Recreation",
      description: `Devil May Cry Vergil Abilitie "Judgement Cut End" `,
      category: "roblox",
      tags: ["Roblox", "Lua"],
      video: "",
    }, */
  ];
}
