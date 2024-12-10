"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, User } from "lucide-react";
import { useState } from "react";

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
      className="container mx-auto max-w-4xl scroll-mt-16 px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mb-8 text-center sm:mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50 sm:text-3xl"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-sm text-neutral-700 dark:text-neutral-300 sm:mt-4 sm:text-base"
        >
          Have a question or want to work together?
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mx-auto max-w-xl overflow-hidden rounded-lg bg-white shadow-md dark:bg-neutral-900 sm:rounded-2xl sm:shadow-xl"
      >
        {submitted ? (
          <div className="p-6 text-center sm:p-8">
            <div className="mx-auto mb-4 flex size-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900 sm:size-12">
              <Send className="size-4 text-green-600 dark:text-green-300 sm:size-5" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 sm:text-xl">
              Thanks for reaching out!
            </h3>
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300 sm:text-base">
              {"I'll"} get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-900 dark:text-neutral-100"
                  >
                    Name
                  </label>
                  <div className="relative mt-1.5 sm:mt-2">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <User className="size-4 text-neutral-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="block w-full rounded-md border-0 bg-neutral-50 py-2 pl-10 pr-4 text-sm text-neutral-900 ring-1 ring-inset ring-neutral-200 transition-colors placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 dark:ring-neutral-700 dark:placeholder:text-neutral-500 dark:focus:ring-neutral-100 sm:rounded-lg sm:py-2.5 sm:text-base"
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
                  <div className="relative mt-1.5 sm:mt-2">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Mail className="size-4 text-neutral-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="block w-full rounded-md border-0 bg-neutral-50 py-2 pl-10 pr-4 text-sm text-neutral-900 ring-1 ring-inset ring-neutral-200 transition-colors placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 dark:ring-neutral-700 dark:placeholder:text-neutral-500 dark:focus:ring-neutral-100 sm:rounded-lg sm:py-2.5 sm:text-base"
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
                <div className="relative mt-1.5 sm:mt-2">
                  <div className="pointer-events-none absolute left-0 top-2.5 flex items-center pl-3 sm:top-3">
                    <MessageSquare className="size-4 text-neutral-400" />
                  </div>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    required
                    className="block w-full rounded-md border-0 bg-neutral-50 py-2 pl-10 pr-4 text-sm text-neutral-900 ring-1 ring-inset ring-neutral-200 transition-colors placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 dark:ring-neutral-700 dark:placeholder:text-neutral-500 dark:focus:ring-neutral-100 sm:rounded-lg sm:py-2.5 sm:text-base"
                    placeholder="Your message..."
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-1.5 rounded-md bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 dark:focus:ring-neutral-100 dark:focus:ring-offset-neutral-900 sm:gap-2 sm:rounded-lg sm:px-5 sm:py-2.5"
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block size-3.5 animate-spin rounded-full border-2 border-neutral-50 border-t-transparent dark:border-neutral-900 dark:border-t-transparent sm:size-4" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="size-3.5 sm:size-4" />
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
