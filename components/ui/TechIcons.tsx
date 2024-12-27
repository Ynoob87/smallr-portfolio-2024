import { BiLogoVisualStudio } from "react-icons/bi";
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
  SiUnrealengine,
  SiFirebase,
  SiArduino,
  SiGoogle,
} from "react-icons/si";

// 導出技術圖標
export const TECH_ICONS = {
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
  UnrealEngine: {
    Icon: SiUnrealengine,
  },
  "Node.js": {
    Icon: SiNodedotjs,
  },
  MongoDB: {
    Icon: SiMongodb,
  },
  Firebase: {
    Icon: SiFirebase,
  },
  Lua: {
    Icon: SiLua,
  },
  Roblox: {
    Icon: SiRoblox,
  },
  Python: {
    Icon: SiPython,
  },
  "C++": {
    Icon: SiCplusplus,
  },
  Arduino: {
    Icon: SiArduino,
  },
  Google: {
    Icon: SiGoogle,
  },

  VisualStudio: {
    Icon: BiLogoVisualStudio,
  },
} as const;

// 獲取技術圖標
export const getTechIcon = (tech: keyof typeof TECH_ICONS) => {
  const iconData = TECH_ICONS[tech];
  if (!iconData) return <span>{tech[0]}</span>;
  const { Icon } = iconData;
  return <Icon className="size-4 text-neutral-700 dark:text-neutral-300" />;
};

// 獲取技術圖標列表
export const techIcons = Object.entries(TECH_ICONS).map(([name, { Icon }]) => ({
  name,
  icon: Icon,
}));
