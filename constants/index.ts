export const siteConfig = {
  name: "Small R",
  links: {
    github: "https://github.com/Ynoob87",
    linkedin: "https://www.linkedin.com/in/alaner652/",
    email: "hhgg12661@gmail.com",
  },
  formspree: process.env.NEXT_PUBLIC_FORMSPREE_ID || "",
} as const;

export const techGroups = [
  {
    title: "Frontend",
    icons: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Backend",
    icons: ["Node.js", "MongoDB"],
  },
  {
    title: "Game Dev",
    icons: ["Lua", "Roblox"],
  },
  {
    title: "Other",
    icons: ["Python", "C++"],
  },
] as const;
