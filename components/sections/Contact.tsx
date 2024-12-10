"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, User } from "lucide-react";
import { siteConfig } from "@/constants";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);

    try {
      const formData = new FormData(form);
      const message = formData.get("message") as string;

      if (!siteConfig.formspree) {
        throw new Error("Contact form not configured");
      }

      if (message.length > 1000) {
        throw new Error("Message too long");
      }

      const response = await fetch(
        `https://formspree.io/f/${siteConfig.formspree}`,
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-4xl scroll-mt-16 px-6 py-16 md:scroll-mt-24 lg:px-8"
    >
      <div className="mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-neutral-700 dark:text-neutral-300"
        >
          Have a question or want to work together?
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mx-auto max-w-xl overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-neutral-900"
      >
        {submitted ? (
          <div className="p-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
              <Send className="size-5 text-green-600 dark:text-green-300" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              Thanks for reaching out!
            </h3>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">
              I'll get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            <div className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-900 dark:text-neutral-100"
                  >
                    Name
                  </label>
                  <div className="relative mt-2">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <User className="size-4 text-neutral-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="block w-full rounded-lg border-0 bg-neutral-50 py-2.5 pl-10 pr-4 text-neutral-900 ring-1 ring-inset ring-neutral-200 transition-colors placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 dark:ring-neutral-700 dark:placeholder:text-neutral-500 dark:focus:ring-neutral-100"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-900 dark:text-neutral-100"
                  >
                    Email
                  </label>
                  <div className="relative mt-2">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Mail className="size-4 text-neutral-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="block w-full rounded-lg border-0 bg-neutral-50 py-2.5 pl-10 pr-4 text-neutral-900 ring-1 ring-inset ring-neutral-200 transition-colors placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 dark:ring-neutral-700 dark:placeholder:text-neutral-500 dark:focus:ring-neutral-100"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-900 dark:text-neutral-100"
                >
                  Message
                </label>
                <div className="relative mt-2">
                  <div className="pointer-events-none absolute left-0 top-3 flex items-center pl-3">
                    <MessageSquare className="size-4 text-neutral-400" />
                  </div>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    required
                    className="block w-full rounded-lg border-0 bg-neutral-50 py-2.5 pl-10 pr-4 text-neutral-900 ring-1 ring-inset ring-neutral-200 transition-colors placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 dark:ring-neutral-700 dark:placeholder:text-neutral-500 dark:focus:ring-neutral-100"
                    placeholder="Your message..."
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 dark:focus:ring-neutral-100 dark:focus:ring-offset-neutral-900"
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-neutral-50 border-t-transparent dark:border-neutral-900 dark:border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="size-4" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        )}
      </motion.div>
    </section>
  );
}
