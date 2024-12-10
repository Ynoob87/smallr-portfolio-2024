import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, and responsive design.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: "/projects/Project-1.png",
    links: {
      demo: "#",
      // github: "#",
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
