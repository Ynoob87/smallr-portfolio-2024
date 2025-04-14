"use client";

import { motion } from "framer-motion";
import { ChevronDown, Code2, FileText, Sparkles } from "lucide-react";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import SocialLinks from "@/components/SocialLinks";
import { siteConfig } from "@/config/site";
import { useTranslations } from "@/hooks/useTranslations";

export default function Hero() {
  const t = useTranslations();
  const [text] = useTypewriter({
    words: [...t.hero.roles],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      {/* 主要內容容器 */}
      <div className="w-full max-w-3xl">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          {/* 頭像 */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative size-28 overflow-hidden rounded-full ring-2 ring-neutral-900/10 transition duration-300 hover:ring-4 dark:ring-white/20 sm:size-32">
              <Image
                src="/avatar.jpg"
                alt={siteConfig.name}
                fill
                priority
                sizes="(max-width: 640px) 112px, 128px"
                className="object-cover transition duration-300 hover:scale-110"
              />
            </div>
          </motion.div>

          {/* 文字內容 */}
          <div className="text-center">
            <motion.h1
              className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t.hero.greeting}{" "}
              <span className="relative inline-block text-primary-light dark:text-primary-dark">
                {siteConfig.name}
                <motion.span
                  className="absolute -right-4 -top-2 sm:-right-5 sm:-top-3"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="size-3 sm:size-4" />
                </motion.span>
              </span>
            </motion.h1>

            <motion.div
              className="mt-3 flex items-center justify-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Code2 className="size-4" />
              <span>{text}</span>
              <Cursor cursorColor="currentColor" />
            </motion.div>

            <motion.p
              className="mx-auto mt-3 max-w-lg text-sm text-neutral-600 dark:text-neutral-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t.hero.description}
            </motion.p>
          </div>

          {/* 按鈕組 */}
          <motion.div
            className="mt-2 flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <SocialLinks />

            {/* CV 按鈕 */}
            <motion.a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-neutral-900 p-1 pr-5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex size-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:scale-110 dark:bg-neutral-900/10">
                <FileText className="size-4" />
              </span>
              <span>{t.hero.buttons.cv}</span>
              <motion.span
                className="ml-1 origin-left transition-transform duration-300 group-hover:translate-x-1"
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* 滾動指示器 */}
      <div className="absolute inset-x-0 bottom-0 pb-8">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <a
            href="#about"
            className="group inline-flex flex-col items-center gap-1"
            aria-label="Scroll to about section"
          >
            <span className="text-xs font-medium text-neutral-600 transition-colors group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-neutral-50 sm:text-sm">
              {t.hero.scrollText}
            </span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronDown className="size-4 text-neutral-600 transition-colors group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-neutral-50 sm:size-5" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
