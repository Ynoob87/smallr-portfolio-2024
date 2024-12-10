"use client";

import { motion } from "framer-motion";

export default function Background() {
  // 固定的光暈位置
  const fixedPositions = [
    { x: "15%", y: "15%" }, // 左上
    { x: "85%", y: "10%" }, // 右上
    { x: "10%", y: "85%" }, // 左下
    { x: "90%", y: "85%" }, // 右下
    { x: "50%", y: "20%" }, // 中上
    { x: "50%", y: "90%" }, // 中下
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* 主要光暈群組 */}
      <motion.div
        className="pointer-events-none absolute aspect-square w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-violet-500/40 via-purple-400/45 to-fuchsia-300/40 blur-[80px]"
        initial={{ x: fixedPositions[0].x, y: fixedPositions[0].y }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          scale: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />
      <motion.div
        className="pointer-events-none absolute aspect-square w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-500/35 via-cyan-400/40 to-teal-300/35 blur-[70px]"
        initial={{ x: fixedPositions[1].x, y: fixedPositions[1].y }}
        animate={{
          scale: [1.2, 0.8, 1.2],
        }}
        transition={{
          scale: {
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* 輔助光暈群組 */}
      <motion.div
        className="pointer-events-none absolute aspect-square w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-rose-500/35 via-pink-400/40 to-red-300/35 blur-[60px]"
        initial={{ x: fixedPositions[2].x, y: fixedPositions[2].y }}
        animate={{
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          scale: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />
      <motion.div
        className="pointer-events-none absolute aspect-square w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-amber-500/35 via-orange-400/40 to-yellow-300/35 blur-[65px]"
        initial={{ x: fixedPositions[3].x, y: fixedPositions[3].y }}
        animate={{
          scale: [1.3, 0.9, 1.3],
        }}
        transition={{
          scale: {
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* 點綴光暈群組 */}
      <motion.div
        className="pointer-events-none absolute aspect-square w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-emerald-500/30 via-green-400/35 to-lime-300/30 blur-[55px]"
        initial={{ x: fixedPositions[4].x, y: fixedPositions[4].y }}
        animate={{
          scale: [1, 1.4, 1],
        }}
        transition={{
          scale: {
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />
      <motion.div
        className="pointer-events-none absolute aspect-square w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo-500/30 via-blue-400/35 to-sky-300/30 blur-[50px]"
        initial={{ x: fixedPositions[5].x, y: fixedPositions[5].y }}
        animate={{
          scale: [1.2, 0.7, 1.2],
        }}
        transition={{
          scale: {
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* 環境光暈 */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/20 dark:via-black/10 dark:to-black/20" />
    </div>
  );
}
