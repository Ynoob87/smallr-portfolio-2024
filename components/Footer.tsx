import { Github, Mail, Linkedin } from "lucide-react";
import { siteConfig } from "@/constants/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-200 py-12 dark:border-neutral-800">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-light transition-colors hover:text-text-light dark:text-secondary-dark dark:hover:text-text-dark"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">Github</span>
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-light transition-colors hover:text-text-light dark:text-secondary-dark dark:hover:text-text-dark"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="text-secondary-light transition-colors hover:text-text-light dark:text-secondary-dark dark:hover:text-text-dark"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-secondary-light dark:text-secondary-dark">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
