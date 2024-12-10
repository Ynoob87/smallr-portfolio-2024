import { Mail } from "lucide-react";
import { siteConfig } from "@/constants/site";

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col gap-8">
      <h2 className="text-2xl font-bold">Get in Touch</h2>
      <p className="text-secondary-light dark:text-secondary-dark">
        Feel free to reach out if you're looking for a developer, have a
        question, or just want to connect.
      </p>
      <a
        href={`mailto:${siteConfig.links.email}`}
        className="inline-flex w-fit items-center gap-2 text-secondary-light underline hover:text-text-light dark:text-secondary-dark dark:hover:text-text-dark"
      >
        <Mail className="h-4 w-4" />
        {siteConfig.links.email}
      </a>
    </section>
  );
}
