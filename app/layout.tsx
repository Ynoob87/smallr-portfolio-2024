import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Background>
            <div className="relative min-h-screen bg-neutral-50/80 dark:bg-neutral-900/80">
              <Navbar />
              <div className="mx-auto max-w-4xl px-6 py-8">{children}</div>
              <Footer />
            </div>
          </Background>
        </Providers>
      </body>
    </html>
  );
}
