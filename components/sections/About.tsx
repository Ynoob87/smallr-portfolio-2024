"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="flex flex-col gap-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold">About</h2>
      <p className="text-secondary-light dark:text-secondary-dark">
        I'm a full-stack developer with a passion for building digital products.
        I specialize in JavaScript and modern web technologies.
      </p>
    </motion.section>
  );
}
