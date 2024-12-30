import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

import Background from "@/components/Background";
import Providers from "@/components/Providers";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import { siteConfig } from "@/config/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: `%s`,
    default: `${siteConfig.name} | Portfolio`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords.join(", "),
  creator: siteConfig.name,
  ogImage: "/avatar.jpg",
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
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
              <Analytics />
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
