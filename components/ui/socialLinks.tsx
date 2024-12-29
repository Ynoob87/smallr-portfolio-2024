"use client";

import { motion } from "framer-motion";
import React from "react";

import { siteConfig } from "@/config/site";
import { useTranslations } from "@/hooks/useTranslations";
import { Github, Linkedin, Mail } from "lucide-react";
import { SiOsu } from "react-icons/si";

export default function SocialLinks() {
  const t = useTranslations();

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
      href: siteConfig.links.osu,
      icon: SiOsu,
      label: "osu!",
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
    <>
      {/* 社交連結 */}
      <div className="flex items-center gap-3">
        {socialLinks.map((link) => (
          <motion.a
            key={link.href}
            href={link.href}
            target={link.target}
            rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
            className="group relative rounded-lg p-2 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <link.icon className="size-5" />
            <span className="sr-only">{link.label}</span>
            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-neutral-900/90 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-all group-hover:-top-11 group-hover:opacity-100 dark:bg-white/90 dark:text-neutral-900">
              {link.label}
              <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-neutral-900/90 dark:border-t-white/90" />
            </span>
          </motion.a>
        ))}
      </div>
    </>
  );
}
