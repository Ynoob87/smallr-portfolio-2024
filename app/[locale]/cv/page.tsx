"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

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
          `${emoji.game} Roblox 遊戲開發者`,
          `${emoji.code} 全端開發學習者`,
          `${emoji.teach} 技術導師`,
          `${emoji.promote} 社群推廣者`,
        ]
      : [
          `${emoji.game} Roblox Game Developer`,
          `${emoji.code} Full-Stack Developer`,
          `${emoji.teach} Tech Mentor`,
          `${emoji.promote} Community Advocate`,
        ],
    intro: isZh
      ? "你好，我是 吳宸麒 (small R)，目前 16 歲，就讀台北城市科技大學五專資訊工程系。我是一名 熱愛技術、勇於挑戰、樂於分享 的開發者，擁有 5 年 Roblox 開發經驗，並積極學習 全端開發 (Next.js)，希望能將技術與創意結合，打造更有價值的作品！"
      : "Hi, I'm Chen-Chi Wu (small R), a 16-year-old student at Taipei City University of Science and Technology. As a developer who loves technology, embraces challenges, and enjoys sharing, I have 5 years of Roblox development experience and am actively learning full-stack development (Next.js). I aim to combine technology and creativity to create more valuable projects!",
    mission: {
      title: isZh
        ? `${emoji.mission} 我的使命：推廣 Roblox 開發！`
        : `${emoji.mission} My Mission: Promoting Roblox Development!`,
      content: isZh
        ? "我的 Roblox 技術始終保持最新，並持續進步。我希望透過自己的能力 影響台灣的 Roblox 開發環境，讓更多人認識這個強大的遊戲開發平台。我深信 Roblox 是初學者最好的遊戲開發入門選擇，因為我自己就是從這裡開始，一步步成長到現在。"
        : "I keep my Roblox skills up-to-date and continuously improve. I aim to make this powerful game development platform more accessible to everyone. I firmly believe that Roblox is the best entry point for beginners in game development, as I started here myself and grew step by step to where I am now.",
    },
    whyMe: {
      title: isZh
        ? `${emoji.fire} 為什麼選擇我？`
        : `${emoji.fire} Why Choose Me?`,
      points: [
        {
          title: isZh ? "5 年遊戲開發經驗" : "5 Years of Game Development",
          content: isZh
            ? "專注於 Roblox，精通 Lua/Luau，擅長遊戲機制、系統開發與優化，曾參與多個商業級專案。"
            : "Focused on Roblox, mastered Lua/Luau, specialized in game mechanics, system development and optimization, with commercial project experience.",
        },
        {
          title: isZh ? "全端開發實戰" : "Full-Stack Development",
          content: isZh
            ? "學習 Next.js、Tailwind CSS、TypeScript，並已開發個人作品集網站，熟悉前後端整合。"
            : "Learning Next.js, Tailwind CSS, TypeScript, developed personal portfolio website, familiar with front-end and back-end integration.",
        },
        {
          title: isZh
            ? "創意與實作並重"
            : "Balancing Creativity & Implementation",
          content: isZh
            ? "不只是開發者，更是創意實踐者，喜歡將新技術應用到專案，讓產品更具吸引力。"
            : "Not just a developer, but a creative implementer, enjoying applying new technologies to projects, making products more appealing.",
        },
        {
          title: isZh ? "樂於學習與教學" : "Eager to Learn & Teach",
          content: isZh
            ? "不只提升自己，還積極分享知識，參與 Roblox 開發者社群，並擁有部分教學經驗。"
            : "Not only improving myself but actively sharing knowledge, participating in the Roblox developer community, with some teaching experience.",
        },
        {
          title: isZh ? "持續成長與挑戰" : "Continuous Growth & Challenges",
          content: isZh
            ? "從 C++、Python，到 Unreal Engine 5，不斷拓展技術邊界，為未來的開發做好準備。"
            : "From C++, Python, to Unreal Engine 5, continuously expanding technical boundaries, preparing for future development.",
        },
      ],
    },
    projects: {
      title: isZh ? `${emoji.pin} 近期專案` : `${emoji.pin} Recent Projects`,
      items: [
        {
          title: isZh ? "1️⃣ 個人作品集網站" : "1️⃣ Personal Portfolio Website",
          points: isZh
            ? [
                "使用 Next.js + Tailwind CSS 開發",
                "支援中/英文版本，展示開發作品",
              ]
            : [
                "Developed with Next.js + Tailwind CSS",
                "Supports Chinese/English versions, showcasing development works",
              ],
        },
        {
          title: isZh
            ? "2️⃣ Roblox 遊戲開發接案 & 社群推廣"
            : "2️⃣ Roblox Game Development & Community",
          points: isZh
            ? [
                "專注於遊戲系統、UI 互動、伺服器優化",
                "與 VFX 藝術家合作，打造高品質遊戲體驗",
                "持續參與 Roblox 開發者社群，提供技術交流與指導",
                "推廣 Roblox 開發，讓更多台灣玩家與開發者認識這個平台",
              ]
            : [
                "Focus on game systems, UI interactions, and server optimization",
                "Collaborate with VFX artists to create high-quality game experiences",
                "Active participation in Roblox developer community, providing technical guidance",
                "Promote Roblox development to make it more accessible to new developers",
              ],
        },
        {
          title: isZh
            ? "3️⃣ C++ & Unreal Engine 5 學習中"
            : "3️⃣ Learning C++ & Unreal Engine 5",
          points: isZh
            ? ["持續探索 3D 遊戲開發，為未來更多可能性做準備"]
            : [
                "Exploring 3D game development, preparing for more future possibilities",
              ],
        },
      ],
    },
    collaboration: {
      title: isZh
        ? `${emoji.mission} 期待的合作`
        : `${emoji.mission} Looking for Collaboration`,
      points: isZh
        ? [
            "Roblox 遊戲開發（腳本、系統設計、伺服器優化）",
            "網站開發（個人網站、作品集、前端設計）",
            "技術分享 & 教學（Roblox 腳本開發、全端開發基礎）",
            "Roblox 社群推廣 & 影響力打造（教育、開發者扶植）",
          ]
        : [
            "Roblox Game Development (Scripting, System Design, Server Optimization)",
            "Web Development (Personal Websites, Portfolios, Frontend Design)",
            "Technical Sharing & Teaching (Roblox Scripting, Full-Stack Basics)",
            "Roblox Community Building & Impact Creation (Education, Developer Support)",
          ],
    },
    contact: {
      title: isZh ? `${emoji.contact} 聯絡方式` : `${emoji.contact} Contact Me`,
      subtitle: isZh
        ? "如果你正在尋找一位具備創意、技術實力，並樂於分享與成長的開發者，歡迎與我聯繫！"
        : "If you're looking for a creative, technically skilled developer who loves to share and grow, feel free to contact me!",
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
      ? `讓我們一起打造更棒的作品，推動 Roblox 在台灣的發展！${emoji.rocket}`
      : `Let's create amazing projects together and drive Roblox development forward! ${emoji.rocket}`,
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="container mx-auto max-w-2xl px-6 py-12 [--card-bg:theme(colors.white/80)] dark:[--card-bg:theme(colors.neutral.900/80)]"
    >
      <article className="prose prose-neutral dark:prose-invert">
        <motion.div variants={item} className="mb-12 text-center">
          <h1 className="mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            {content.title}
          </h1>
          <div className="text-xl font-medium tracking-wide text-neutral-600 dark:text-neutral-400">
            {content.roles.join(" | ")}
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="mb-12 rounded-xl bg-[var(--card-bg)] p-6"
        >
          <div className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            {content.intro}
          </div>
        </motion.div>

        <motion.section variants={item} className="mb-12">
          <h2 className="mb-6 text-center text-2xl font-bold">
            {content.mission.title}
          </h2>
          <div className="rounded-lg border border-neutral-200 bg-white/80 p-6 dark:border-neutral-800 dark:bg-neutral-900/80">
            {content.mission.content}
          </div>
        </motion.section>

        <motion.section variants={item} className="mb-12">
          <h2 className="mb-6 text-center text-2xl font-bold text-neutral-800 dark:text-neutral-200">
            {content.whyMe.title}
          </h2>
          <div className="grid gap-4">
            {content.whyMe.points.map((point, index) => (
              <div
                key={index}
                className="rounded-lg border border-neutral-200 bg-white/50 p-6 dark:border-neutral-800 dark:bg-neutral-900/50"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-green-500">{emoji.check}</span>
                  <div>
                    <div className="mb-2 font-semibold text-neutral-800 dark:text-neutral-200">
                      {point.title}
                    </div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">
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
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-neutral-200 bg-white/50 dark:border-neutral-800 dark:bg-neutral-900/50"
              >
                <div className="border-b border-neutral-200 bg-neutral-50/50 p-6 dark:border-neutral-800 dark:bg-neutral-900/50">
                  <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                    {project.title}
                  </h3>
                </div>
                <ul className="space-y-3 p-6">
                  {project.points.map((point, pIndex) => (
                    <li
                      key={pIndex}
                      className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400"
                    >
                      <span className="mt-1 text-blue-500">{emoji.dot}</span>
                      <span>{point}</span>
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
              <div
                key={index}
                className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-white/50 p-4 dark:border-neutral-800 dark:bg-neutral-900/50"
              >
                <span className="mt-1 text-green-500">✔</span>
                <span className="text-neutral-600 dark:text-neutral-400">
                  {point}
                </span>
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
                className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white/50 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-300 dark:hover:bg-neutral-800/50"
              >
                <span className="text-lg">{item.icon}</span>
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
