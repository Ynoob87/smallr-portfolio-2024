"use client";

import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";

import PreviewCard from "@/components/PreviewCard";
import { projects } from "@/constants/projects";
import { getTechIcon, TECH_ICONS } from "@/constants/tech-icons";
import { useTranslations } from "@/hooks/useTranslations";
import type { Project } from "@/types";

export default function Projects() {
  const t = useTranslations();

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
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="grid gap-6 md:grid-cols-2"
      >
        {projects.map((project: Project, index: number) => (
          <PreviewCard
            key={index}
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
    </section>
  );
}
