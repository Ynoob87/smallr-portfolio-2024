"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

import { siteConfig } from "@/config/site";
import { getLocaleFromPathname } from "@/lib/utils";

type Language = "zh" | "en";

interface CVContent {
  name: string;
  role: string;
  contact: string;
  introduction: string;
  introText: string[];
  skills: string;
  frontend: string;
  backend: string;
  gameDev: string;
  otherLang: string;
  education: string;
  university: string;
  major: string;
  highSchool: string;
  graduation: string;
  projects: string;
  robloxProject: string;
  robloxDesc: string;
  personalSite: string;
  siteDesc: string;
  printCV: string;
  switchLang: string;
  back: string;
  download: string;
  educationDetails: {
    university: {
      name: string;
      major: string;
      period: string;
    };
  };
  experience: Array<{
    title: string;
    description: string;
    period: string;
  }>;
}

const content: Record<Language, CVContent> = {
  zh: {
    name: "吳宸麒",
    role: "資訊工程系學生 | 全端開發者",
    contact: "聯絡方式",
    introduction: "簡介",
    introText: [
      "我目前就讀於台北城市科技大學五專資訊工程系，擁有 4 年 Roblox 開發經驗。",
      "專精於 Lua 程式設計、遊戲功能開發，同時也在學習全端開發，熟悉 Next.js 和 Tailwind CSS。",
    ],
    skills: "技能專長",
    frontend: "前端開發",
    backend: "後端開發",
    gameDev: "遊戲開發",
    otherLang: "其他語言",
    education: "教育背景",
    university: "台北城市科技大學",
    major: "五專資訊工程系",
    highSchool: "觀音高中附屬國中",
    graduation: "國中畢業",
    projects: "專案經驗",
    robloxProject: "Roblox 遊戲開發",
    robloxDesc: "獨立開發多個遊戲專案，累計獲得超過 500 美元和10萬Robux收益。",
    personalSite: "個人網站開發",
    siteDesc: "使用 Next.js 和 Tailwind CSS 開發作品集網站，實現響應式設計。",
    printCV: "列印履歷",
    switchLang: "Switch to English",
    back: "返回",
    download: "下載 PDF",
    educationDetails: {
      university: {
        name: "台北城市科技大學",
        major: "五專資訊工程系",
        period: "2023 - 2027",
      },
    },
    experience: [
      {
        title: "Roblox 遊戲開發",
        description:
          "獨立開發多個遊戲專案，累計獲得超過 300 美元和 10 萬 Robux 收益",
        period: "2019 - 現在",
      },
    ],
  },
  en: {
    name: "Chen-Chi Wu",
    role: "Information Engineering Student | Full-Stack Developer",
    contact: "Contact Information",
    introduction: "Introduction",
    introText: [
      "I am currently a student at Taipei City University of Science and Technology, majoring in Information Engineering, with 4 years of Roblox development experience.",
      "Specialized in Lua programming and game feature development, while also learning full-stack development with proficiency in Next.js and Tailwind CSS.",
    ],
    skills: "Skills",
    frontend: "Frontend Development",
    backend: "Backend Development",
    gameDev: "Game Development",
    otherLang: "Other Languages",
    education: "Education",
    university: "Taipei City University of Science and Technology",
    major: "Information Engineering (5-year program)",
    highSchool: "Guanyin High School Junior Division",
    graduation: "Junior High School Graduate",
    projects: "Project Experience",
    robloxProject: "Roblox Game Development",
    robloxDesc:
      "Independently developed multiple game projects, earning over $300 USD and 100k Robux in revenue.",
    personalSite: "Personal Website Development",
    siteDesc:
      "Developed a portfolio website using Next.js and Tailwind CSS with responsive design.",
    printCV: "Print CV",
    switchLang: "切換至中文",
    back: "Back",
    download: "Download PDF",
    educationDetails: {
      university: {
        name: "Taipei City University of Science and Technology",
        major: "Information Engineering (5-year program)",
        period: "2023 - 2027",
      },
    },
    experience: [
      {
        title: "Roblox Game Development",
        description:
          "Independently developed multiple game projects, earning over $500 USD and 100k Robux in revenue",
        period: "2019 - Present",
      },
    ],
  },
};

export default function CV() {
  const pathname = usePathname();
  const language = getLocaleFromPathname(pathname);

  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    const printContent = componentRef.current;
    if (printContent) {
      const printWindow = window.open("", "", "width=800,height=600");

      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>Print CV</title>
              <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
              <style>
                @media screen, print {
                  body {
                    padding: 20px;
                    font-family: Arial, sans-serif;
                  }
                  .no-print {
                    display: none !important;
                  }
                  a {
                    color: #2563eb;
                    text-decoration: underline;
                  }
                  a:hover {
                    color: #1d4ed8;
                  }
                  @media (prefers-color-scheme: dark) {
                    a {
                      color: #60a5fa;
                    }
                    a:hover {
                      color: #93c5fd;
                    }
                  }
                }
                @media print {
                  a {
                    text-decoration: underline;
                  }
                  a[href]:after {
                    content: " (" attr(href) ")";
                    font-size: 0.8em;
                    font-style: italic;
                  }
                }
              </style>
            </head>
            <body>
              ${printContent.innerHTML}
            </body>
          </html>
        `);

        setTimeout(() => {
          printWindow.document.close();
          printWindow.print();
        }, 250);
      }
    }
  };

  return (
    <main className="container mx-auto px-4 py-6 sm:px-6 sm:py-8">
      {/* 頂導航 */}
      <div className="mb-6 flex flex-row items-center justify-between gap-4 sm:mb-8 sm:gap-0">
        <Link
          href={`/${language}/#hero`}
          className="inline-flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          <ArrowLeft className="size-4" />
          <span>{content[language].back}</span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 rounded-full bg-neutral-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 sm:px-4"
          >
            <span>{content[language].printCV}</span>
          </button>
        </div>
      </div>

      <div
        ref={componentRef}
        className="rounded-lg bg-white p-4 shadow-lg dark:bg-neutral-900 sm:p-8"
      >
        <header className="mb-6 text-center sm:mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 sm:text-4xl">
            {content[language].name}
          </h1>
          <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400 sm:text-lg">
            {content[language].role}
          </p>
        </header>

        {/* 聯絡方式 */}
        <section className="mb-6">
          <h2 className="mb-3 text-xl font-semibold text-neutral-900 dark:text-neutral-50">
            {content[language].contact}
          </h2>
          <div className="space-y-2 text-neutral-700 dark:text-neutral-300">
            <p>
              ✉️ Gmail: {""}
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                {siteConfig.links.email}
              </a>
            </p>
            <p>
              💼 GitHub:{" "}
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Ynoob87
              </a>
            </p>
            <p>
              🔗 LinkedIn:{" "}
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                alaner652
              </a>
            </p>
          </div>
        </section>

        {/* 簡介 */}
        <section className="mb-6">
          <h2 className="mb-3 text-xl font-semibold text-neutral-900 dark:text-neutral-50">
            {content[language].introduction}
          </h2>
          <div className="space-y-2 text-neutral-700 dark:text-neutral-300">
            {content[language].introText.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </section>

        {/* 技能專長 */}
        <section className="mb-6">
          <h2 className="mb-3 text-xl font-semibold text-neutral-900 dark:text-neutral-50">
            {content[language].skills}
          </h2>
          <div className="space-y-2 text-neutral-700 dark:text-neutral-300">
            <p>
              <strong>{content[language].frontend}:</strong> React, Next.js,
              TypeScript, Tailwind CSS, HTML5, CSS3
            </p>
            <p>
              <strong>{content[language].backend}:</strong> Node.js, MongoDB,
              RESTful API
            </p>
            <p>
              <strong>{content[language].gameDev}:</strong> Roblox Studio, Lua,
              Game Logic Design, UI/UX Design
            </p>
            <p>
              <strong>{content[language].otherLang}:</strong> Python, C++,
              JavaScript/TypeScript
            </p>
          </div>
        </section>

        {/* 教育背景 */}
        <section className="mb-6">
          <h2 className="mb-3 text-xl font-semibold text-neutral-900 dark:text-neutral-50">
            {content[language].education}
          </h2>
          <div className="space-y-2 text-neutral-700 dark:text-neutral-300">
            <p>
              <strong>{content[language].university}</strong> -{" "}
              {content[language].major} (2023 - 2027)
            </p>
            <p>
              <strong>{content[language].highSchool}</strong> -{" "}
              {content[language].graduation}
            </p>
          </div>
        </section>

        {/* 專案經驗 */}
        <section>
          <h2 className="mb-3 text-xl font-semibold text-neutral-900 dark:text-neutral-50">
            {content[language].projects}
          </h2>
          <div className="space-y-2 text-neutral-700 dark:text-neutral-300">
            <p>
              <strong>{content[language].robloxProject}:</strong>{" "}
              {content[language].robloxDesc}
            </p>
            <p>
              <strong>{content[language].personalSite}:</strong>{" "}
              {content[language].siteDesc}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
