"use client";

import { motion } from "framer-motion";
import { Code2, Laptop, Lightbulb, Rocket } from "lucide-react";

import { TECH_ICONS } from "@/components/ui/TechIcons";
import { techGroups } from "@/constants/sections/about";
import { useTranslations } from "@/hooks/useTranslations";

export default function About() {
  const t = useTranslations();

  const features = [
    {
      icon: Code2,
      key: "fullstack",
    },
    {
      icon: Laptop,
      key: "frontend",
    },
    {
      icon: Lightbulb,
      key: "backend",
    },
    {
      icon: Rocket,
      key: "gamedev",
    },
  ] as const;

  return (
    <section
      id="about"
      className="mx-auto max-w-4xl scroll-mt-16 px-6 py-16 md:scroll-mt-24 lg:px-8"
    >
      <div className="mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50"
        >
          {t.about.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-neutral-700 dark:text-neutral-300"
        >
          {t.about.description}
        </motion.p>
      </div>

      {/* 特點列表 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mb-16 grid gap-8 md:grid-cols-2"
      >
        {features.map((feature) => {
          const content = t.about.features[feature.key];
          return (
            <div
              key={feature.key}
              className="group relative rounded-2xl bg-neutral-100 p-6 dark:bg-neutral-900"
            >
              <div className="mb-4 inline-block rounded-lg bg-neutral-200 p-3 dark:bg-neutral-800">
                <feature.icon className="size-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-neutral-950 dark:text-neutral-50">
                {content.title}
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                {content.description}
              </p>
            </div>
          );
        })}
      </motion.div>

      {/* 技術堆疊 */}
      <div className="text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50"
        >
          {t.about.techStack}
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {techGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <h4 className="font-medium text-neutral-900 dark:text-neutral-100">
                {group.title}
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {group.icons.map((techName) => {
                  const tech = TECH_ICONS[techName as keyof typeof TECH_ICONS];
                  return (
                    <div
                      key={techName}
                      className="group flex flex-col items-center gap-2"
                    >
                      <div className="rounded-lg p-3 transition-colors group-hover:bg-neutral-800/50">
                        <tech.Icon
                          style={{
                            width: "2rem",
                            height: "2rem",
                          }}
                          className="text-neutral-700 dark:text-neutral-300"
                        />
                      </div>
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        {techName}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
