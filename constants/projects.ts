import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, and a responsive design.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: "/projects/Portfolio-Website.png",
    links: {
      demo: "#",
    },
  },

  {
    title: "About Smallr Website",
    description:
      "A personal website built with Next.js, TypeScript, and Tailwind CSS, designed to showcase my background, interests, and development skills. It features a modern single-page design, integrates my love for ANIME, and highlights my passion for DEVELOPMENT.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: "/projects/About-Smallr-Website.png",
    links: {
      demo: "https://about-smallr.vercel.app/",
      github: "https://github.com/Ynoob87/about-small",
    },
  },

  {
    title: "Private Project",
    description:
      "A confidential project developed for a client, featuring custom business logic and data visualization.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/avatar.jpg",
  },
  {
    title: "Demo Only Project",
    description:
      "An experimental project showcasing new technologies and design patterns.",
    tags: ["Vue.js", "GraphQL", "Tailwind"],
    image: "/avatar.jpg",
    links: {
      demo: "#",
    },
  },
];
