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

  return {
    title: titles[locale],
    description: siteConfig.description,
    openGraph: {
      title: titles[locale],
      description: siteConfig.description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
        },
      ],
      locale,
      type: "website",
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        zh: "/zh",
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
  return [{ locale: "en" }, { locale: "zh" }] as const;
}
