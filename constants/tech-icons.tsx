import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiLua,
  SiRoblox,
  SiPython,
  SiCplusplus,
} from "react-icons/si";

// 按類別分組的技術棧
export const TECH_ICONS = {
  // 主要技術
  React: {
    Icon: SiReact,
    color: "#61DAFB",
  },
  "Next.js": {
    Icon: SiNextdotjs,
    color: "#000000",
  },
  TypeScript: {
    Icon: SiTypescript,
    color: "#3178C6",
  },
  Tailwind: {
    Icon: SiTailwindcss,
    color: "#06B6D4",
  },

  // 後端技術
  "Node.js": {
    Icon: SiNodedotjs,
    color: "#339933",
  },
  MongoDB: {
    Icon: SiMongodb,
    color: "#47A248",
  },

  // 遊戲開發
  Lua: {
    Icon: SiLua,
    color: "#2C2D72",
  },
  Roblox: {
    Icon: SiRoblox,
    color: "#000000",
  },

  // 其他語言
  Python: {
    Icon: SiPython,
    color: "#3776AB",
  },
  "C++": {
    Icon: SiCplusplus,
    color: "#00599C",
  },
} as const;

export const getTechIcon = (tech: keyof typeof TECH_ICONS) => {
  const iconData = TECH_ICONS[tech];
  if (!iconData) return <span>{tech[0]}</span>;
  const { Icon, color } = iconData;
  return <Icon className="size-4" style={{ color }} />;
};

// 分組顯示的技術棧
export const techGroups = [
  {
    title: "Frontend",
    icons: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Backend",
    icons: ["Node.js", "MongoDB"],
  },
  {
    title: "Game Dev",
    icons: ["Lua", "Roblox"],
  },
  {
    title: "Other",
    icons: ["Python", "C++"],
  },
] as const;

export const techIcons = Object.entries(TECH_ICONS).map(([name, { Icon }]) => ({
  name,
  icon: Icon,
}));
