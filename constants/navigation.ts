export const navigation = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
] as const;

export type NavigationItem = (typeof navigation)[number];
