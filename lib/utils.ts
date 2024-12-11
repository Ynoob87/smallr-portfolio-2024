import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import type { Locale } from "@/types";

/**
 * 合併 Tailwind CSS 類名
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 從路徑中獲取當前語言
 */
export function getLocaleFromPathname(pathname: string | null): Locale {
  return pathname?.startsWith("/zh") ? "zh" : "en";
}
