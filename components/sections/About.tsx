"use client";

import { motion } from "framer-motion";
import { Code2, Laptop, Lightbulb, Rocket } from "lucide-react";
import { techGroups, TECH_ICONS } from "@/constants/tech-icons";

export default function About() {
  const features = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description:
        "Building complete web applications from frontend to backend using React, Next.js, Node.js, and modern databases.",
    },
    {
      icon: Laptop,
      title: "Frontend Expertise",
      description:
        "Creating responsive and performant user interfaces with TypeScript, Tailwind CSS, and modern React patterns.",
    },
    {
      icon: Lightbulb,
      title: "Backend Solutions",
      description:
        "Developing scalable server-side applications and RESTful APIs with focus on security and performance.",
    },
    {
      icon: Rocket,
      title: "Game Development",
      description:
        "4+ years of Roblox development experience using Lua/Luau, demonstrating versatility in different programming domains.",
    },
  ];

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
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-neutral-700 dark:text-neutral-300"
        >
          A passionate developer focused on creating impactful digital
          experiences
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
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="group relative rounded-2xl bg-neutral-100 p-6 dark:bg-neutral-900"
          >
            <div className="mb-4 inline-block rounded-lg bg-neutral-200 p-3 dark:bg-neutral-800">
              <feature.icon className="size-6 text-neutral-700 dark:text-neutral-300" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-neutral-950 dark:text-neutral-50">
              {feature.title}
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300">
              {feature.description}
            </p>
          </div>
        ))}
      </motion.div>

      {/* 技術堆疊 */}
      <div className="text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50"
        >
          Tech Stack
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
                            fill: "currentColor",
                            color: "inherit",
                          }}
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
