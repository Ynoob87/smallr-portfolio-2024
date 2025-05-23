"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import LanguageSwitch from "@/components/ui/LanguageSwitch";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { getLocalizedNavigation } from "@/constants/sections/navbar";

// 桌面版導航組件
const DesktopNav = ({ pathname }: { pathname: string }) => {
  const locale = pathname?.startsWith("/zh") ? "zh" : "en";
  const navItems = getLocalizedNavigation(locale);

  return (
    <div className="relative backdrop-blur-xl">
      <nav className="relative mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <Link
          href={`/${locale}/#hero`}
          className="text-lg font-medium tracking-wide text-neutral-950 dark:text-neutral-50"
        >
          Small R
        </Link>
        <div className="flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative px-3 py-2"
            >
              <span
                className={`${
                  pathname === item.href
                    ? "text-neutral-950 dark:text-neutral-50"
                    : "text-neutral-600 group-hover:text-neutral-950 dark:text-neutral-400 dark:group-hover:text-neutral-50"
                }`}
              >
                {item.name}
              </span>
              <span
                className={`absolute inset-x-0 -bottom-1 h-px transition-all duration-300 ${
                  pathname === item.href
                    ? "bg-neutral-950 dark:bg-neutral-50"
                    : "scale-x-0 bg-neutral-950 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 dark:bg-neutral-50"
                }`}
              />
            </Link>
          ))}
          <div className="ml-2 flex items-center gap-2 border-l border-neutral-200 pl-4 dark:border-neutral-800">
            <LanguageSwitch />
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
};

// 移動版導航組件
const MobileNav = ({
  isOpen,
  setIsOpen,
  pathname,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  pathname: string;
}) => {
  const locale = pathname?.startsWith("/zh") ? "zh" : "en";
  const navItems = getLocalizedNavigation(locale);

  return (
    <div className="relative backdrop-blur-xl">
      <div className="absolute inset-0 bg-white/80 dark:bg-black/80" />
      <div className="relative">
        <div className="flex h-16 items-center justify-between px-6">
          <Link
            href={`/${locale}/#hero`}
            className="text-lg font-medium tracking-wide text-neutral-950 dark:text-neutral-50"
          >
            Small R
          </Link>
          <div className="flex items-center gap-2">
            <LanguageSwitch />
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-md p-1.5 text-neutral-800 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-50"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* 展開的導航選單 */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="border-t border-neutral-200 dark:border-neutral-800"
            >
              <div className="py-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group relative block px-6 py-3 text-center text-sm font-medium tracking-wide transition-all duration-300"
                  >
                    <span
                      className={`relative ${
                        pathname === item.href
                          ? "text-neutral-950 dark:text-neutral-50"
                          : "text-neutral-600 group-hover:text-neutral-950 dark:text-neutral-400 dark:group-hover:text-neutral-50"
                      }`}
                    >
                      {item.name}
                      <span
                        className={`absolute inset-x-0 -bottom-1 h-px transition-all duration-300 ${
                          pathname === item.href
                            ? "bg-neutral-950 dark:bg-neutral-50"
                            : "scale-x-0 bg-neutral-950 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 dark:bg-neutral-50"
                        }`}
                      />
                    </span>
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// 主導航組件
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="hidden md:block">
        <DesktopNav pathname={pathname} />
      </div>
      <div className="md:hidden">
        <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} pathname={pathname} />
      </div>
    </header>
  );
}
