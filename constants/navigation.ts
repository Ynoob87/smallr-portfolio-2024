export const navigation = [
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
] as const;

export type NavigationItem = (typeof navigation)[number];
