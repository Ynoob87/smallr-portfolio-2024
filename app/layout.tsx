import type { Metadata } from "next";

import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";

import "./globals.css";

export const metadata: Metadata = {
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white antialiased dark:bg-black">
        <Providers>
          <Background />
          <div className="relative">
            <Navbar />
            <main className="mx-auto max-w-4xl px-6 py-24">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
