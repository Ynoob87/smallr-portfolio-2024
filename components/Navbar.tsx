"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { navigation } from "@/constants/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="relative bg-neutral-50 dark:bg-neutral-950">
        <nav className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-medium tracking-wide text-neutral-950 dark:text-neutral-50"
          >
            Small R
          </Link>

          {/* 桌面導航 */}
          <div
            className={`items-center gap-6 ${
              isOpen ? "hidden" : "hidden md:flex"
            }`}
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-2 py-1 text-sm font-medium tracking-wide transition-colors ${
                  pathname === item.href
                    ? "text-neutral-950 dark:text-neutral-50"
                    : "text-neutral-800 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-50"
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neutral-950 dark:bg-neutral-50"
                    layoutId="navbar-underline"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* 移動端按鈕 */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-md p-1.5 text-neutral-800 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-50"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* 移動端選單 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 md:hidden"
          >
            <nav className="mx-auto max-w-4xl px-6 py-4">
              <div className="flex flex-col space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-md px-3 py-2 text-center text-sm font-medium tracking-wide transition-colors ${
                      pathname === item.href
                        ? "bg-neutral-200/50 text-neutral-950 dark:bg-neutral-800/50 dark:text-neutral-50"
                        : "text-neutral-800 hover:bg-neutral-200/50 hover:text-neutral-950 dark:text-neutral-300 dark:hover:bg-neutral-800/50 dark:hover:text-neutral-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
