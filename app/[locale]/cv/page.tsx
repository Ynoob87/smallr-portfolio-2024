"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

export default function CVPage() {
  const pathname = usePathname();
  const isZh = pathname.startsWith("/zh");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const emoji = {
    mission: "🎯",
    fire: "🔥",
    pin: "📌",
    contact: "💬",
    email: "📩",
    link: "🔗",
    check: "✅",
    dot: "🔹",
    rocket: "🚀",
    game: "🎮",
    code: "💻",
    teach: "🎓",
    promote: "🚀",
  };

  const content = {
    title: isZh
      ? "關於我 – 吳宸麒 (small R)"
      : "About Me - Chen-Chi Wu (small R)",
    roles: isZh
      ? [
          `${emoji.game} Roblox 開發者`,
          `${emoji.code} 全端工程師`,
          `${emoji.teach} 技術教學`,
          `${emoji.promote} 社群經營`,
        ]
      : [
          `${emoji.game} Roblox Developer`,
          `${emoji.code} Full-Stack Engineer`,
          `${emoji.teach} Tech Educator`,
          `${emoji.promote} Community Builder`,
        ],
    intro: isZh
      ? "你好，我是吳宸麒 (small R)，就讀台北城市科技大學資訊工程系。擁有 5 年 Roblox 遊戲開發經驗，專注於系統設計與效能優化。目前正積極投入 Next.js 全端開發，致力於將遊戲開發的創意思維融入網頁應用。"
      : "Hi, I'm Chen-Chi Wu (small R), studying Information Engineering at Taipei City University of Science and Technology. With 5 years of Roblox game development experience focusing on system design and performance optimization. Currently diving into full-stack development with Next.js, aiming to bring creative game development concepts into web applications.",
    mission: {
      title: isZh
        ? `${emoji.mission} 推廣遊戲開發，培育新世代開發者`
        : `${emoji.mission} Promoting Game Development, Nurturing Next-Gen Developers`,
      content: isZh
        ? "致力於推廣 Roblox 開發技術，分享遊戲開發經驗與知識。期望透過實戰經驗與教學，協助更多台灣開發者認識並精通這個強大的遊戲開發平台，共同打造優質的遊戲作品。"
        : "Dedicated to promoting Roblox development technologies and sharing game development expertise. Through practical experience and teaching, I aim to help more developers master this powerful game development platform and create outstanding games together.",
    },
    whyMe: {
      title: isZh ? `${emoji.fire} 核心優勢` : `${emoji.fire} Core Strengths`,
      points: [
        {
          title: isZh ? "遊戲開發專家" : "Game Development Expert",
          content: isZh
            ? "5 年 Roblox 開發經驗，專精於遊戲系統架構、性能優化與使用者體驗設計，曾主導多個商業專案開發。"
            : "5 years of Roblox expertise, specializing in game system architecture, performance optimization, and UX design. Led multiple commercial project developments.",
        },
        {
          title: isZh ? "全端技術棧" : "Full-Stack Capabilities",
          content: isZh
            ? "熟練運用 Next.js、TypeScript 和 Tailwind CSS 構建現代化網頁應用，注重代碼質量與開發效率。"
            : "Proficient in building modern web applications with Next.js, TypeScript, and Tailwind CSS, focusing on code quality and development efficiency.",
        },
        {
          title: isZh ? "教學與社群" : "Teaching & Community",
          content: isZh
            ? "積極分享技術知識，建立開發者社群，協助新手快速成長。擅長將複雜概念轉化為易懂內容。"
            : "Actively sharing technical knowledge and building developer communities. Skilled at transforming complex concepts into accessible content.",
        },
        {
          title: isZh ? "持續創新" : "Continuous Innovation",
          content: isZh
            ? "不斷探索新技術，結合 AI 與遊戲開發創新應用，致力於提升開發流程與產品體驗。"
            : "Constantly exploring new technologies, combining AI with game development innovations, committed to enhancing development processes and product experiences.",
        },
      ],
    },
    projects: {
      title: isZh ? `${emoji.pin} 代表作品` : `${emoji.pin} Featured Projects`,
      items: [
        {
          title: isZh ? "個人技術品牌建設" : "Personal Tech Brand Building",
          points: isZh
            ? [
                "設計開發個人作品集網站，展示技術實力與項目經驗",
                "建立技術部落格，分享開發心得與最佳實踐",
                "經營技術社群，定期舉辦線上分享會",
              ]
            : [
                "Designed and developed portfolio website showcasing technical expertise",
                "Established tech blog sharing development insights and best practices",
                "Managing tech community with regular online sharing sessions",
              ],
        },
        {
          title: isZh
            ? "Roblox 遊戲開發與優化"
            : "Roblox Game Development & Optimization",
          points: isZh
            ? [
                "開發高效能遊戲系統，支持大規模多人互動",
                "設計模組化架構，提升代碼可維護性",
                "實現自動化測試流程，確保產品質量",
                "優化遊戲性能，提升用戶體驗",
              ]
            : [
                "Developed high-performance game systems supporting massive multiplayer interactions",
                "Designed modular architecture improving code maintainability",
                "Implemented automated testing processes ensuring product quality",
                "Optimized game performance enhancing user experience",
              ],
        },
      ],
    },
    collaboration: {
      title: isZh
        ? `${emoji.mission} 合作領域`
        : `${emoji.mission} Collaboration Areas`,
      points: isZh
        ? [
            "Roblox 遊戲系統開發與性能優化",
            "網頁應用開發與技術架構設計",
            "開發團隊技術培訓與指導",
            "遊戲開發社群建設與運營",
          ]
        : [
            "Roblox Game System Development & Optimization",
            "Web Application Development & Architecture Design",
            "Development Team Training & Mentoring",
            "Game Development Community Building & Operation",
          ],
    },
    contact: {
      title: isZh
        ? `${emoji.contact} 聯絡資訊`
        : `${emoji.contact} Contact Info`,
      subtitle: isZh
        ? "期待與您討論技術合作機會，一起打造優秀的作品！"
        : "Looking forward to discussing technical collaboration opportunities and creating outstanding projects together!",
      items: [
        {
          icon: emoji.email,
          label: "Email",
          value: "hhgg12661@gmail.com",
        },
        {
          icon: emoji.link,
          label: "GitHub",
          value: "Ynoob87",
        },
        {
          icon: emoji.link,
          label: "LinkedIn",
          value: "alaner652",
        },
      ],
    },
    footer: isZh
      ? `用技術與創意，為遊戲開發注入新活力！${emoji.rocket}`
      : `Energizing Game Development with Technology and Creativity! ${emoji.rocket}`,
  };

  const cardBaseStyle =
    "overflow-hidden rounded-xl border border-neutral-200 bg-[var(--card-bg)] shadow-sm dark:border-neutral-800";

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="container mx-auto max-w-2xl px-6 py-12 [--card-bg:theme(colors.white/90)] dark:[--card-bg:theme(colors.neutral.900/80)]"
    >
      <article className="prose prose-neutral dark:prose-invert">
        <motion.div variants={item} className="mb-12 text-center">
          <h1 className="mb-6 bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            {content.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-3 text-lg font-medium text-neutral-700 dark:text-neutral-400">
            {content.roles.map((role, index) => (
              <React.Fragment key={index}>
                <span className="flex items-center gap-2">
                  <span className="shrink-0">{role.split(" ")[0]}</span>
                  <span>{role.split(" ").slice(1).join(" ")}</span>
                </span>
                {index < content.roles.length - 1 && (
                  <span className="text-neutral-400 dark:text-neutral-600">
                    |
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="mb-12 overflow-hidden rounded-xl border border-neutral-200 bg-[var(--card-bg)] p-6 shadow-sm dark:border-neutral-800"
        >
          <div className="space-y-2 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
            {content.intro
              .split("。")
              .filter(Boolean)
              .map((sentence, index) => (
                <p key={index}>{sentence}。</p>
              ))}
          </div>
        </motion.div>

        <motion.section variants={item} className="mb-12">
          <h2 className="mb-6 text-center text-2xl font-bold text-neutral-800 dark:text-neutral-200">
            {content.mission.title}
          </h2>
          <div className="overflow-hidden rounded-xl border border-neutral-200 bg-[var(--card-bg)] p-6 shadow-sm dark:border-neutral-800">
            <div className="space-y-2 leading-relaxed text-neutral-600 dark:text-neutral-400">
              {content.mission.content
                .split("。")
                .filter(Boolean)
                .map((sentence, index) => (
                  <p key={index}>{sentence}。</p>
                ))}
            </div>
          </div>
        </motion.section>

        <motion.section variants={item} className="mb-12">
          <h2 className="mb-6 text-center text-2xl font-bold text-neutral-800 dark:text-neutral-200">
            {content.whyMe.title}
          </h2>
          <div className="grid gap-4">
            {content.whyMe.points.map((point, index) => (
              <div key={index} className={`${cardBaseStyle} p-6`}>
                <div className="flex items-center gap-3">
                  <span className="shrink-0 text-emerald-600 dark:text-green-500">
                    {emoji.check}
                  </span>
                  <div>
                    <div className="mb-2 font-semibold tracking-wide text-neutral-800 dark:text-neutral-200">
                      {point.title}
                    </div>
                    <div className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                      {point.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={item} className="mb-12">
          <h2 className="mb-6 text-center text-2xl font-bold text-neutral-800 dark:text-neutral-200">
            {content.projects.title}
          </h2>
          <div className="space-y-6">
            {content.projects.items.map((project, index) => (
              <div key={index} className={cardBaseStyle}>
                <div className="border-b border-neutral-200 bg-neutral-100/50 p-6 dark:border-neutral-800 dark:bg-neutral-800/50">
                  <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                    {project.title}
                  </h3>
                </div>
                <ul className="space-y-3 p-6">
                  {project.points.map((point, pIndex) => (
                    <li key={pIndex} className="flex items-center gap-3">
                      <span className="shrink-0 text-blue-600 dark:text-blue-500">
                        {emoji.dot}
                      </span>
                      <span className="leading-relaxed text-neutral-600 dark:text-neutral-400">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={item} className="mb-12">
          <h2 className="mb-6 text-center text-2xl font-bold text-neutral-800 dark:text-neutral-200">
            {content.collaboration.title}
          </h2>
          <div className="grid gap-4">
            {content.collaboration.points.map((point, index) => (
              <div key={index} className={`${cardBaseStyle} p-4`}>
                <div className="flex items-center gap-3">
                  <span className="shrink-0 text-green-500">✔</span>
                  <span className="leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {point}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={item} className="mb-12">
          <h2 className="mb-6 text-center text-2xl font-bold text-neutral-800 dark:text-neutral-200">
            {content.contact.title}
          </h2>
          <p className="mb-6 text-center text-lg text-neutral-600 dark:text-neutral-400">
            {content.contact.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {content.contact.items.map((item, index) => (
              <a
                key={index}
                href={`${
                  item.label === "Email"
                    ? `mailto:${item.value}`
                    : item.label === "GitHub"
                    ? `https://github.com/${item.value}`
                    : `https://linkedin.com/in/${item.value}`
                }`}
                target={item.label !== "Email" ? "_blank" : undefined}
                rel={item.label !== "Email" ? "noopener noreferrer" : undefined}
                className={`${cardBaseStyle} flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-neutral-700 transition-transform hover:scale-105 dark:text-neutral-300`}
              >
                <span className="shrink-0 text-lg">{item.icon}</span>
                <span>{item.label === "Email" ? item.value : item.label}</span>
              </a>
            ))}
          </div>
        </motion.section>

        <div className="text-center text-lg font-medium text-neutral-800 dark:text-neutral-200">
          {content.footer}
        </div>
      </article>
    </motion.div>
  );
}
