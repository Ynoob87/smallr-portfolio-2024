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

export interface PreviewCardProps {
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt?: string;
  techStack?: { icon: React.ReactNode; label: string }[];
  actions?: { icon?: React.ReactNode; label: string; href: string }[];
  className?: string;
}
