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

  const alternateLanguages = siteConfig.locales.reduce(
    (acc, { locale: l }) => ({
      ...acc,
      [l]: `${siteConfig.url}/${l}`,
    }),
    {}
  );

  return {
    title:
      locale === "zh"
        ? `${siteConfig.name} | 個人網站`
        : `${siteConfig.name} | Portfolio`,
    description:
      locale === "zh"
        ? "全端開發者，專注於現代網頁技術與創意解決方案"
        : "Full-Stack developer specializing in modern web technologies and creative solutions",
    openGraph: {
      locale,
      alternateLocale: locale === "en" ? "zh" : "en",
    },
    alternates: {
      canonical: `${siteConfig.url}/${locale}`,
      languages: alternateLanguages,
    },
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
