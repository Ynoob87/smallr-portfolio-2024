import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  category: string;
  image?: string;
  video?: string;
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
  videoSrc?: string;
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
    buttons: {
      github: string;
      linkedin: string;
      contact: string;
      cv: string;
    };
    scrollText: string;
  };
  about: {
    title: string;
    description: string;
    features: {
      fullstack: {
        title: string;
        description: string;
      };
      frontend: {
        title: string;
        description: string;
      };
      backend: {
        title: string;
        description: string;
      };
      gamedev: {
        title: string;
        description: string;
      };
    };
    techStack: string;
  };
  projects: {
    title: string;
    viewDemo: string;
    viewCode: string;
    showMore: string;
    showLess: string;
    items: {
      portfolio: {
        title: string;
        description: string;
      };
      aboutSmallr: {
        title: string;
        description: string;
      };
    };
  };
  categories: {
    all: string;
    web: string;
  };
  contact: {
    title: string;
    description: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      success: string;
      error: string;
    };
  };
  common: {
    loading: string;
    error: string;
    darkMode: string;
    lightMode: string;
    systemMode: string;
  };
  notFound: {
    title: string;
    description: string;
    backHome: string;
  };
}

export type Locale = "en" | "zh";

export interface SiteConfig {
  name: string;
  url: string;
  description: string;
  keywords: string[];
  formspree: string;
  locales: Array<{
    locale: Locale;
    label: string;
  }>;
  defaultLocale: Locale;
  links: {
    github: string;
    linkedin: string;
    email: string;
    osu: string;
  };
}
