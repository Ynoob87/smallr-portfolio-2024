"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, User } from "lucide-react";
import { useState } from "react";

import { siteConfig } from "@/constants";
import { useTranslations } from "@/hooks/useTranslations";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const t = useTranslations();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
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

      if (response.ok) {
        setSubmitted(true);
        e.currentTarget.reset();
      } else {
        alert(t.contact.form.error);
      }
    } catch {
      alert(t.contact.form.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-xl text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
          {t.contact.title}
        </h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400">
          {t.contact.description}
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8 rounded-lg bg-green-50 p-6 dark:bg-green-950"
          >
            <p className="text-green-700 dark:text-green-300">
              {t.contact.form.success}
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-4">
              {/* 姓名輸入 */}
              <div>
                <label className="relative block">
                  <span className="sr-only">{t.contact.form.name}</span>
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-500">
                    <User className="size-5" />
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={t.contact.form.name}
                    className={cn(
                      "w-full rounded-lg border border-neutral-200 bg-white/50 py-3 pl-10 pr-4",
                      "placeholder:text-neutral-500",
                      "focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                      "dark:border-neutral-800 dark:bg-neutral-900/50",
                      "dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    )}
                  />
                </label>
              </div>

              {/* 郵箱輸入 */}
              <div>
                <label className="relative block">
                  <span className="sr-only">{t.contact.form.email}</span>
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-500">
                    <Mail className="size-5" />
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={t.contact.form.email}
                    className={cn(
                      "w-full rounded-lg border border-neutral-200 bg-white/50 py-3 pl-10 pr-4",
                      "placeholder:text-neutral-500",
                      "focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                      "dark:border-neutral-800 dark:bg-neutral-900/50",
                      "dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    )}
                  />
                </label>
              </div>

              {/* 訊息輸入 */}
              <div>
                <label className="relative block">
                  <span className="sr-only">{t.contact.form.message}</span>
                  <span className="absolute left-0 top-3 flex items-center pl-3 text-neutral-500">
                    <MessageSquare className="size-5" />
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder={t.contact.form.message}
                    className={cn(
                      "w-full rounded-lg border border-neutral-200 bg-white/50 py-3 pl-10 pr-4",
                      "placeholder:text-neutral-500",
                      "focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                      "dark:border-neutral-800 dark:bg-neutral-900/50",
                      "dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    )}
                  />
                </label>
              </div>

              {/* 提交按鈕 */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-neutral-950 px-4 py-3",
                    "text-sm font-semibold text-white transition-colors",
                    "hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2",
                    "disabled:cursor-not-allowed disabled:opacity-70",
                    "dark:bg-neutral-50 dark:text-neutral-900",
                    "dark:hover:bg-neutral-200 dark:focus:ring-neutral-50"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <span className="size-4 animate-spin rounded-full border-2 border-neutral-400 border-t-white" />
                      {t.common.loading}
                    </>
                  ) : (
                    <>
                      <Send className="size-4" />
                      {t.contact.form.submit}
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
