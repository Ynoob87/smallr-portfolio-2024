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
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: titles[locale],
        },
      ],
      locale,
      type: "website",
    },
    alternates: {
      canonical: `https://smallr-portfolio.vercel.app/${locale}`,
      languages: {
        en: "https://smallr-portfolio.vercel.app/en",
        zh: "https://smallr-portfolio.vercel.app/zh",
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
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
