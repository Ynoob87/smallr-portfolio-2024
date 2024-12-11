"use client";

import { usePathname } from "next/navigation";

import { translations } from "@/constants/i18n";
import type { Translation } from "@/types";

export function useTranslations(): Translation {
  const pathname = usePathname();
  const locale = pathname?.startsWith("/zh") ? "zh" : "en";

  return translations[locale];
}
