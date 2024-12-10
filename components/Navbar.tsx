"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { navigation } from "@/constants/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-background-light/60 backdrop-blur-xl dark:bg-background-dark/60">
      <div className="mx-auto max-w-4xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold relative group">
            <span>Small R</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark transition-all group-hover:w-full" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="relative group">
                <span
                  className={`transition-colors ${
                    pathname === item.href
                      ? "text-primary-light dark:text-primary-dark"
                      : "text-text-light dark:text-text-dark"
                  }`}
                >
                  {item.name}
                </span>
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
                    pathname === item.href
                      ? "w-full bg-primary-light dark:bg-primary-dark"
                      : "bg-text-light dark:bg-text-dark"
                  }`}
                />
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-4 p-2 rounded-full hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute w-full bg-background-light/80 backdrop-blur-xl dark:bg-background-dark/80 md:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {navigation.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-4 rounded-lg transition-all hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 ${
                      pathname === item.href
                        ? "text-primary-light bg-accent-light/5 dark:text-primary-dark dark:bg-accent-dark/5"
                        : "text-text-light dark:text-text-dark"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
