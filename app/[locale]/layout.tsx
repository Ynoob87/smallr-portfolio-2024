import { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import type { Locale } from "@/types";

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;

  if (!["en", "zh"].includes(locale)) {
    notFound();
  }

  const titles = {
    zh: `${siteConfig.name} | 個人網站`,
    en: `${siteConfig.name} | Portfolio`,
  } as const;

  const descriptions = {
    zh: "全端開發者，專注於現代網頁技術與創意解決方案",
    en: "Full-Stack developer specializing in modern web technologies and creative solutions",
  } as const;

  return {
    title: titles[locale],
    description: descriptions[locale],
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!["en", "zh"].includes(locale)) {
    notFound();
  }

  return <div lang={locale}>{children}</div>;
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}
