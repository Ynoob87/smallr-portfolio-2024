import type { Locale } from "@/types";

export const navigation = {
  en: [
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ],
  zh: [
    { name: "關於", href: "/#about" },
    { name: "作品", href: "/#projects" },
    { name: "聯繫", href: "/#contact" },
  ],
} as const;

export type NavigationItem = (typeof navigation)[Locale][number];

// 輔助函數：獲取帶有語言前綴的導航鏈接
export function getLocalizedNavigation(locale: Locale) {
  return navigation[locale].map((item) => ({
    ...item,
    href: `/${locale}${item.href}`,
  }));
}
