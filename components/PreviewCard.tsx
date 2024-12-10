"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface PreviewCardProps {
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt?: string;
  techStack?: { icon: React.ReactNode; label: string }[];
  actions?: { icon?: React.ReactNode; label: string; href: string }[];
  className?: string;
}

export default function PreviewCard({
  title,
  description,
  imageSrc,
  imageAlt = "",
  techStack = [],
  actions = [],
  className = "",
}: PreviewCardProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

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
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
          {/* 添加點擊提示 */}
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
          {/* 標題和描述 */}
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
              {title}
            </h2>
            {description && (
              <p className="line-clamp-2 text-sm text-neutral-600 dark:text-neutral-400">
                {description}
              </p>
            )}
          </div>

          {/* 底部工具列 */}
          <div className="flex items-center justify-between">
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
        <div
          className="fixed inset-0 z-50 flex flex-col bg-white/95 backdrop-blur-sm dark:bg-neutral-900/95"
          onClick={handleModalClick}
        >
          {/* 頂部導航欄 */}
          <div className="flex h-16 items-center px-6">
            <button
              className="flex items-center gap-2 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              onClick={handleModalClick}
            >
              <svg
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>Back</span>
            </button>
          </div>

          {/* 圖片容器 */}
          <div
            className="relative flex flex-1 items-center justify-center p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-full w-full max-w-5xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                className="object-contain"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
