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
  },
  "Next.js": {
    Icon: SiNextdotjs,
  },
  TypeScript: {
    Icon: SiTypescript,
  },
  Tailwind: {
    Icon: SiTailwindcss,
  },

  // 後端技術
  "Node.js": {
    Icon: SiNodedotjs,
  },
  MongoDB: {
    Icon: SiMongodb,
  },

  // 遊戲開發
  Lua: {
    Icon: SiLua,
  },
  Roblox: {
    Icon: SiRoblox,
  },

  // 其他語言
  Python: {
    Icon: SiPython,
  },
  "C++": {
    Icon: SiCplusplus,
  },
} as const;

export const getTechIcon = (tech: keyof typeof TECH_ICONS) => {
  const iconData = TECH_ICONS[tech];
  if (!iconData) return <span>{tech[0]}</span>;
  const { Icon } = iconData;
  return <Icon className="size-4 text-neutral-700 dark:text-neutral-300" />;
};

export const techIcons = Object.entries(TECH_ICONS).map(([name, { Icon }]) => ({
  name,
  icon: Icon,
}));
