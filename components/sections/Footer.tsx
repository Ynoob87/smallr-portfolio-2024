import { siteConfig } from "@/config/site";

import SocialLinks from "../ui/SocialLinks";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-200 py-12 dark:border-neutral-800">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <SocialLinks />

          {/* Copyright */}
          <p className="text-sm text-secondary-light dark:text-secondary-dark">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
