"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useTranslations } from "@/hooks/useTranslations";
import { getLocaleFromPathname } from "@/lib/utils";

export default function NotFound() {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);

  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="relative"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-8xl font-bold text-neutral-900/5 dark:text-neutral-100/5">
            404
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-medium text-neutral-900 dark:text-neutral-100">
            404
          </div>
        </motion.div>

        <motion.h1
          className="mt-6 text-2xl font-bold text-neutral-900 dark:text-neutral-100 sm:text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {t.notFound.title}
        </motion.h1>

        <motion.p
          className="mt-4 text-neutral-600 dark:text-neutral-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {t.notFound.description}
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            href={`/${locale}`}
            className="inline-flex items-center space-x-2 rounded-full bg-neutral-900 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            {t.notFound.backHome}
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
