"use client";

import { useEffect, useState } from "react";

export default function Background() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 size-full overflow-hidden">
      <div className="relative size-full bg-white dark:bg-black">
        {/* 主網格 */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.07) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(0,0,0,0.07) 1.5px, transparent 1.5px)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* 背景漸層 */}
        <div
          className="absolute inset-0 
          bg-gradient-to-br from-transparent via-neutral-100/50 to-neutral-200/50 
          dark:from-transparent dark:via-neutral-900/50 dark:to-neutral-800/50"
        />
      </div>
    </div>
  );
}
