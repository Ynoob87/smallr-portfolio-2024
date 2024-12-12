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
    { name: "聯絡", href: "/#contact" },
  ],
} as const;

export type NavigationItem = (typeof navigation)[Locale][number];

export function getLocalizedNavigation(locale: Locale) {
  return navigation[locale].map((item) => ({
    ...item,
    href: `/${locale}${item.href}`,
  }));
}
