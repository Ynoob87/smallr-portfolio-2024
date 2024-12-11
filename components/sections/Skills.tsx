import { motion } from "framer-motion";

import { TECH_ICONS, getTechIcon } from "@/constants/tech-icons";
import { useTranslations } from "@/hooks/useTranslations";

export default function Skills() {
  const t = useTranslations();

  return (
    <section id="skills" className="scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold">{t.about.techStack}</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {Object.entries(TECH_ICONS).map(([name, { Icon }]) => (
            <div
              key={name}
              className="flex items-center gap-2 rounded-lg border p-3"
            >
              <Icon className="size-5" />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
