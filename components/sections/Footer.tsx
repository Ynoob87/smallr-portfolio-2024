import { Github, Linkedin } from "lucide-react";

import { siteConfig } from "@/config/site";

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
              aria-label={"Link to my Github"}
              rel="noopener noreferrer"
              className="text-secondary-light transition-colors hover:text-text-light dark:text-secondary-dark dark:hover:text-text-dark"
            >
              <Github className="size-5" />
              <span className="sr-only">Github</span>
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              aria-label={"Link to my LinkedIn"}
              rel="noopener noreferrer"
              className="text-secondary-light transition-colors hover:text-text-light dark:text-secondary-dark dark:hover:text-text-dark"
            >
              <Linkedin className="size-5" />
              <span className="sr-only">LinkedIn</span>
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
