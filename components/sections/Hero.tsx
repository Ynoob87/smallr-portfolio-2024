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

export default function Hero() {
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "UI/UX Enthusiast", "Problem Solver"],
    loop: true,
    delaySpeed: 2000,
  });

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
              Hi, {"I'm"}
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
              Passionate about creating beautiful, functional, and user-friendly
              web applications that solve real-world problems.
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
            <div className="flex justify-center gap-4 sm:gap-6">
              {[
                {
                  href: siteConfig.links.github,
                  icon: Github,
                  target: "_blank",
                  label: "Open Source Projects",
                },
                {
                  href: siteConfig.links.linkedin,
                  icon: Linkedin,
                  target: "_blank",
                  label: "Connect with me",
                },
                {
                  href: `#contact`,
                  icon: Mail,
                  target: "_self",
                  label: "Get in touch",
                },
              ].map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target={link.target}
                  rel="noopener noreferrer"
                  className="group relative text-secondary-light/80 transition-colors hover:text-neutral-900 dark:text-secondary-dark/80 dark:hover:text-neutral-100"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="size-5 sm:size-6" />
                  <motion.span
                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] opacity-0 transition-all group-hover:opacity-100 sm:text-xs"
                    initial={{ y: -5 }}
                    animate={{ y: 0 }}
                  >
                    {link.label}
                  </motion.span>
                </motion.a>
              ))}
            </div>

            {/* CV Button */}
            <motion.a
              href="/CV"
              className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="size-4" />
              <span>View My CV</span>
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 2 }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Simplified Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-500 dark:text-neutral-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="size-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
