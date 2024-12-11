"use client";

import { Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import type { Locale } from "@/types";

export default function LanguageSwitch() {
  const pathname = usePathname();
  const router = useRouter();

  // 獲取當前語言
  const currentLocale: Locale = pathname?.startsWith("/zh") ? "zh" : "en";

  const toggleLanguage = () => {
    // 獲取新語言
    const newLocale: Locale = currentLocale === "en" ? "zh" : "en";

    // 構建新路徑
    let newPath: string;
    if (pathname === `/${currentLocale}`) {
      // 如果在根路徑，直接切換語言
      newPath = `/${newLocale}`;
    } else {
      // 如果在子路徑，替換語言部分
      newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    }

    // 導航到新路徑
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        "group relative flex items-center gap-2 rounded-md p-2",
        "text-sm font-medium",
        "text-neutral-600 hover:text-neutral-950",
        "dark:text-neutral-400 dark:hover:text-neutral-50",
        "transition-colors"
      )}
      aria-label="Switch language"
    >
      <Globe className="size-4" />
      <span>{currentLocale === "zh" ? "English" : "中文"}</span>
    </button>
  );
}
