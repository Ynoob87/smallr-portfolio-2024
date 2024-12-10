import { Project } from "@/types";

// 定義項目類型對應的圖標
const PROJECT_ICONS = {
  website: "/globe.svg",
  app: "/window.svg",
  file: "/file.svg",
  default: "/next.svg",
} as const;

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, and responsive design.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    type: "website", // 用於選擇圖標
    links: {
      demo: "https://your-portfolio.com",
      github: "https://github.com/yourusername/portfolio",
    },
  },
  {
    title: "Private Project",
    description:
      "A confidential project developed for a client, featuring custom business logic and data visualization.",
    tags: ["React", "Node.js", "MongoDB"],
    type: "app",
  },
  {
    title: "Demo Only Project",
    description:
      "An experimental project showcasing new technologies and design patterns.",
    tags: ["Vue.js", "GraphQL", "Tailwind"],
    type: "file",
    links: {
      demo: "https://demo-project.com",
    },
  },
];

// 導出圖標選擇器函數
export const getProjectIcon = (
  type: keyof typeof PROJECT_ICONS = "default"
) => {
  return PROJECT_ICONS[type];
};
