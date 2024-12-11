"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { useTranslations } from "@/hooks/useTranslations";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const t = useTranslations();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

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

  const getLabel = () => {
    switch (theme) {
      case "dark":
        return t.common.darkMode;
      case "light":
        return t.common.lightMode;
      default:
        return t.common.systemMode;
    }
  };

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
      aria-label={getLabel()}
    >
      {getIcon()}
    </button>
  );
}
