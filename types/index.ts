export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  links?: {
    demo?: string;
    github?: string;
  };
}

export interface NavItem {
  path: string;
  name: string;
}
