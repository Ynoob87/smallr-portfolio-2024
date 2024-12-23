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

  UnrealEngine: {
    Icon: SiUnrealengine,
  },

  // 後端技術
  "Node.js": {
    Icon: SiNodedotjs,
  },
  MongoDB: {
    Icon: SiMongodb,
  },
  Firebase: {
    Icon: SiFirebase,
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
  Arduino: {
    Icon: SiArduino,
  },
  Google: {
    Icon: SiGoogle,
  },

  "Visual Studio": {
    Icon: BiLogoVisualStudio,
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
