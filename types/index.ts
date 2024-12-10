export interface Project {
  title: string;
  description: string;
  tags: string[];
  type: "website" | "app" | "file" | "default";
  links?: {
    demo?: string;
    github?: string;
  };
}

export interface NavItem {
  path: string;
  name: string;
}
