import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

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
  name: string;
  href: string;
  icon?: LucideIcon;
}

export interface PreviewCardProps {
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt?: string;
  techStack?: { icon: ReactNode; label: string }[];
  actions?: { icon?: ReactNode; label: string; href: string }[];
  className?: string;
}

export interface Translation {
  nav: {
    about: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    roles: readonly string[];
    description: string;
  };
  about: {
    title: string;
    description: string;
  };
  contact: {
    title: string;
    description: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
  };
}

export type Locale = "en" | "zh";
