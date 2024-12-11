import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://smallr-portfolio.vercel.app"),
  title: "Small R | Portfolio",
  description:
    "Full-Stack developer game developer specializing in modern web technologies and creative solutions",
  keywords: [
    "small R",
    "portfolio",
    "web development",
    "frontend developer",
    "React",
    "Next.js",
    "TypeScript",
  ],
  creator: "small R",
  openGraph: {
    type: "website",
    locale: "en",
    alternateLocale: "zh",
    url: "https://smallr-portfolio.vercel.app",
    siteName: "Small R Portfolio",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Small R Portfolio",
      },
    ],
  },
  alternates: {
    canonical: "https://smallr-portfolio.vercel.app",
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=5"
        />
      </head>
      <body className="min-h-screen bg-white antialiased dark:bg-black">
        <Providers>
          <Background />
          <div className="relative">
            <Navbar />
            <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
              {children}
              <SpeedInsights />
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
