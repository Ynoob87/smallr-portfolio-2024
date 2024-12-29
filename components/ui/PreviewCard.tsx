"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef, ReactNode } from "react";
import { motion } from "framer-motion";

import { useTranslations } from "@/hooks/useTranslations";
import { video } from "framer-motion/client";

//import { PreviewCardProps } from "@/types";

interface PreviewCardProps {
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt?: string;
  videoSrc?: string;
  techStack?: { icon: React.ReactNode; label: string }[];
  actions?: { icon?: ReactNode; label: string; href: string }[];
  className?: string;
}

export default function PreviewCard({
  title,
  description,
  imageSrc,
  imageAlt = "",
  videoSrc,
  techStack = [],
  actions = [],
  className = "",
}: PreviewCardProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef<HTMLParagraphElement>(null);

  const t = useTranslations();

  useEffect(() => {
    setIsExpanded(false);
    // 檢查內容是否超出兩行
    if (contentRef.current) {
      setIsOverflowing(
        contentRef.current.scrollHeight > contentRef.current.clientHeight
      );
    }
  }, [description]);

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPreviewOpen(false);
  };

  return (
    <>
      <article
        className={`group relative overflow-hidden rounded-lg border border-neutral-200 bg-white/50 p-4 backdrop-blur-sm transition-all hover:bg-white/80 dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:bg-neutral-900/80 ${className}`}
      >
        {/* 主圖預覽 */}
        <div
          className="group/image relative mb-3 aspect-[2/1] cursor-zoom-in overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800"
          onClick={() => setIsPreviewOpen(true)}
        >
          {videoSrc ? (
            <div className="relative h-full w-full">
              <Image
                src={`https://img.youtube.com/vi/${
                  videoSrc.split("v=")[1]
                }/maxresdefault.jpg`}
                alt={imageAlt || title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover/image:bg-black/30" />
            </div>
          ) : (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          )}
          {/* 點擊提示 */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover/image:bg-black/20 group-hover/image:opacity-100">
            <svg
              className="size-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
              />
            </svg>
          </div>
        </div>

        {/* 內容區域 */}
        <div className="space-y-2.5">
          {/* 標題描述 */}
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
              {title}
            </h2>
            {description && (
              <div className="relative">
                <p
                  ref={contentRef}
                  className={`text-sm text-neutral-600 transition-all duration-200 dark:text-neutral-400 ${
                    isExpanded ? "" : "line-clamp-2"
                  }`}
                >
                  {description}
                </p>
                {isOverflowing && (
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-1 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    {isExpanded ? t.projects.showLess : t.projects.showMore}
                  </button>
                )}
              </div>
            )}
          </div>

          {/* 底部工具列 */}
          <div className="flex items-center justify-between">
            {/* 技術堆疊 */}
            <div className="flex -space-x-2">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="relative flex size-7 items-center justify-center rounded-full border border-neutral-200 bg-white/80 text-sm shadow-sm transition-colors dark:border-neutral-800 dark:bg-neutral-900/80"
                  title={tech.label}
                >
                  {tech.icon}
                </div>
              ))}
            </div>

            {/* 操作按鈕 */}
            <div className="flex gap-2">
              {actions.map((action, index) => (
                <Link
                  key={index}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-7 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 shadow-sm transition-colors hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                >
                  {action.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* 圖片預覽模態框 */}
      {isPreviewOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/80 p-4 md:p-8"
          onClick={handleModalClick}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="relative max-w-5xl w-full aspect-[2/1] overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
            {videoSrc ? (
              <iframe
                src={`https://www.youtube.com/embed/${
                  videoSrc.split("v=")[1]
                }?autoplay=1&modestbranding=1&rel=0&showinfo=0&controls=1`}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <Image
                src={imageSrc}
                alt={imageAlt}
                className="rounded-xl object-cover"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                priority
                quality={95}
              />
            )}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
