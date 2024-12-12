import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import type { Locale } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLocaleFromPathname(pathname: string | null): Locale {
  return pathname?.startsWith("/zh") ? "zh" : "en";
}
