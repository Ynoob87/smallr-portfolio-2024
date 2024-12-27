"use client";

import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";
import { useState, useEffect } from "react";

import PreviewCard from "@/components/ui/PreviewCard";
import { getTechIcon, TECH_ICONS } from "@/components/ui/TechIcons";
import { useProjects } from "@/constants/sections/projects";
import { useTranslations } from "@/hooks/useTranslations";

export default function Projects() {
  const t = useTranslations();
  const projects = useProjects();

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);
  const initialCount = 6;

  // 導出項目分類
  const categories = [
    { value: "all", label: t.categories.all },
    { value: "web", label: t.categories.web },
    { value: "roblox", label: "Roblox" },
    { value: "unreal", label: "Unreal Engine" },
  ];

  const filteredProjects = projects
    .filter((project) => {
      if (selectedCategory === "all") return true;
      return project.category === selectedCategory;
    })
    .slice(0, visibleCount);

  const filteredProjectsTotal = projects.filter(
    (p) => selectedCategory === "all" || p.category === selectedCategory
  ).length;

  const hasMoreProjects = filteredProjectsTotal > visibleCount;
  const hasLessProjects = visibleCount > initialCount;

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const handleShowLess = () => {
    setVisibleCount(initialCount);
  };

  useEffect(() => {
    setVisibleCount(initialCount);
  }, [selectedCategory]);

  return (
    <section id="projects" className="scroll-mt-16">
      <div className="mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50"
        >
          {t.projects.title}
        </motion.h2>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`rounded-lg px-4 py-2 transition-colors ${
                selectedCategory === category.value
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mx-auto grid max-w-[1400px] grid-cols-[repeat(auto-fit,minmax(min(100%,380px),380px))] justify-center gap-8"
      >
        {filteredProjects.map((project) => (
          <PreviewCard
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.image}
            techStack={project.tags.map((tag) => ({
              icon: getTechIcon(tag as keyof typeof TECH_ICONS),
              label: tag,
            }))}
            actions={
              project.links
                ? [
                    ...(project.links.demo
                      ? [
                          {
                            icon: <Globe className="size-4" />,
                            label: t.projects.viewDemo,
                            href: project.links.demo,
                          },
                        ]
                      : []),
                    ...(project.links.github
                      ? [
                          {
                            icon: <Github className="size-4" />,
                            label: t.projects.viewCode,
                            href: project.links.github,
                          },
                        ]
                      : []),
                  ]
                : undefined
            }
          />
        ))}
      </motion.div>

      {(hasMoreProjects || hasLessProjects) && (
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={hasMoreProjects ? handleShowMore : handleShowLess}
            className="rounded-lg bg-neutral-900 px-6 py-2 text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
          >
            {hasMoreProjects ? t.projects.showMore : t.projects.showLess}
          </button>
        </div>
      )}
    </section>
  );
}
