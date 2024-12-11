"use client";

import { motion } from "framer-motion";
import {
  Github,
  Mail,
  Linkedin,
  Code2,
  Sparkles,
  ChevronDown,
  FileText,
} from "lucide-react";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import { siteConfig } from "@/constants";
import { useTranslations } from "@/hooks/useTranslations";

export default function Hero() {
  const t = useTranslations();
  const [text] = useTypewriter({
    words: [...t.hero.roles],
    loop: true,
    delaySpeed: 2000,
  });

  const socialLinks = [
    {
      href: siteConfig.links.github,
      icon: Github,
      label: t.hero.buttons.github,
      target: "_blank",
    },
    {
      href: siteConfig.links.linkedin,
      icon: Linkedin,
      label: t.hero.buttons.linkedin,
      target: "_blank",
    },
    {
      href: "#contact",
      icon: Mail,
      label: t.hero.buttons.contact,
      target: "_self",
    },
  ];

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-4rem)] w-full items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <motion.div className="relative mx-auto -mt-20 w-full max-w-3xl sm:-mt-24">
        <div className="flex flex-col items-center space-y-6">
          {/* Avatar Container */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative size-28 overflow-hidden rounded-full sm:size-36 md:size-40">
              <Image
                src="/avatar.jpg"
                alt={siteConfig.name}
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
                sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 160px"
                priority
              />
            </div>
          </motion.div>

          {/* Name and Title */}
          <div className="text-center">
            <motion.h1
              className="relative inline-block text-2xl font-bold tracking-tight sm:text-3xl md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t.hero.greeting}{" "}
              <motion.span
                className="text-primary-light dark:text-primary-dark"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {siteConfig.name}
              </motion.span>
              <motion.span
                className="absolute -right-6 -top-4 text-primary-light dark:text-primary-dark sm:-right-8 sm:-top-6"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="size-4 sm:size-5 md:size-6" />
              </motion.span>
            </motion.h1>

            <motion.div
              className="mt-2 flex items-center justify-center gap-2 text-sm text-secondary-light dark:text-secondary-dark sm:mt-3 sm:text-base md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Code2 className="size-4 sm:size-5" />
              <span>{text}</span>
              <Cursor cursorColor="currentColor" />
            </motion.div>

            <motion.p
              className="mx-auto mt-2 max-w-lg text-xs text-secondary-light/80 dark:text-secondary-dark/80 sm:mt-3 sm:text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {t.hero.description}
            </motion.p>
          </div>

          {/* Social Links and CV Button */}
          <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Social Links */}
            <div className="flex items-center gap-4 sm:gap-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target={link.target}
                  rel={
                    link.target === "_blank" ? "noopener noreferrer" : undefined
                  }
                  className="group relative rounded-md p-2 text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="size-5" />
                  <span className="sr-only">{link.label}</span>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-neutral-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 dark:bg-neutral-700">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* CV Button */}
            <motion.a
              href="/CV"
              className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="size-4" />
              <span>{t.hero.buttons.cv}</span>
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                animate={{ x: 4 }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <ChevronDown className="size-6 text-neutral-600 dark:text-neutral-400" />
      </motion.div>
    </section>
  );
}
