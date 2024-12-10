"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/constants/navigation";
import ThemeToggle from "./ThemeToggle";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(path);
    if (element) {
      const navbarHeight = 80; // 導航欄高度
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/75 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/75">
      <motion.div
        className="h-[2px] bg-primary-light dark:bg-primary-dark origin-left"
        style={{ scaleX }}
      />
      <div className="mx-auto max-w-4xl px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-tighter">
            Small R
          </Link>

          {/* Navigation Links & Theme Toggle */}
          <div className="flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    onClick={(e) => scrollToSection(e, item.path)}
                    className={`text-sm transition-colors hover:text-neutral-700 dark:hover:text-neutral-200 ${
                      pathname === item.path
                        ? "text-neutral-900 dark:text-neutral-100"
                        : "text-neutral-500 dark:text-neutral-400"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
