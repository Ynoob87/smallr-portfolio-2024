"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // 避免水合作用不匹配
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // 根據當前主題顯示對應圖標
  const getIcon = () => {
    switch (theme) {
      case "dark":
        return <Moon className="size-5" />;
      case "light":
        return <Sun className="size-5" />;
      default:
        return <Monitor className="size-5" />;
    }
  };

  // 點擊切換主題
  const toggleTheme = () => {
    switch (theme) {
      case "system":
        setTheme("light");
        break;
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("system");
        break;
      default:
        setTheme("system");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-md p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
      aria-label={`Current theme: ${theme}`}
    >
      {getIcon()}
    </button>
  );
}
