import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiVuedotjs,
  SiGraphql,
} from "react-icons/si";

// 技術圖標映射及其顏色
export const TECH_ICONS = {
  React: {
    Icon: SiReact,
    color: "#61DAFB", // React 藍
  },
  "Next.js": {
    Icon: SiNextdotjs,
    color: "#000000", // Next.js 黑
  },
  TypeScript: {
    Icon: SiTypescript,
    color: "#3178C6", // TypeScript 藍
  },
  JavaScript: {
    Icon: SiJavascript,
    color: "#F7DF1E", // JavaScript 黃
  },
  Tailwind: {
    Icon: SiTailwindcss,
    color: "#06B6D4", // Tailwind 青
  },
  "Node.js": {
    Icon: SiNodedotjs,
    color: "#339933", // Node.js 綠
  },
  MongoDB: {
    Icon: SiMongodb,
    color: "#47A248", // MongoDB 綠
  },
  "Vue.js": {
    Icon: SiVuedotjs,
    color: "#4FC08D", // Vue.js 綠
  },
  GraphQL: {
    Icon: SiGraphql,
    color: "#E10098", // GraphQL 粉
  },
} as const;

// 獲取技術圖標的函數
export const getTechIcon = (tech: keyof typeof TECH_ICONS) => {
  const iconData = TECH_ICONS[tech];
  if (!iconData) return <span>{tech[0]}</span>;

  const { Icon, color } = iconData;
  return (
    <Icon
      className="size-4 transition-colors dark:text-neutral-200"
      style={{ color: `var(--icon-color, ${color})` }}
    />
  );
};
