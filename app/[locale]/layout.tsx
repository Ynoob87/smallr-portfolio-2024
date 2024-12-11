import { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import type { Locale } from "@/types";

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
}

const validLocales: Locale[] = ["en", "zh"];

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;

  if (!validLocales.includes(locale)) {
    notFound();
  }

  const titles = {
    zh: "small R | 個人網站",
    en: "Small R | Portfolio",
  } as const;

  return {
    title: titles[locale],
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

  if (!validLocales.includes(locale)) {
    notFound();
  }

  return <div lang={locale}>{children}</div>;
}

export async function generateStaticParams() {
  return validLocales.map((locale) => ({
    locale,
  }));
}
