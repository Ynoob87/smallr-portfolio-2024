import type { Translation } from "@/types";

export const translations: Record<"en" | "zh", Translation> = {
  zh: {
    nav: {
      about: "關於",
      projects: "作品",
      contact: "聯繫",
    },
    hero: {
      greeting: "你好，我是",
      roles: ["全端開發者", "UI/UX 愛好者", "問題解決者"] as const,
      description: "專注於創建美觀、實用的網頁應用",
    },
    about: {
      title: "關於我",
      description: "熱衷於創造有影響力的數字體驗",
      features: {
        fullstack: {
          title: "全端開發",
          description:
            "使用 React、Next.js、Node.js 和現代數據庫構建完整的網頁應用",
        },
        frontend: {
          title: "前端專長",
          description:
            "使用 TypeScript、Tailwind CSS 和現代 React 模式創建響應式和高性能的用戶界面",
        },
        backend: {
          title: "後端解決方案",
          description:
            "開發可擴展的服務器端應用程序和 RESTful API，注重安全性和性能",
        },
        gamedev: {
          title: "遊戲開發",
          description:
            "擁有 4 年以上的 Roblox 開發經驗，使用 Lua/Luau，展示了在不同編程領域的多樣性",
        },
      },
      techStack: "技術棧",
    },
    projects: {
      title: "精選作品",
      viewDemo: "訪問網站",
      viewCode: "查看代碼",
      showMore: "顯示更多",
      showLess: "收起",
    },
    contact: {
      title: "聯繫我",
      description: "有問題或想一起合作？",
      form: {
        name: "姓名",
        email: "郵箱",
        message: "訊息",
        submit: "發送",
        success: "訊息已發送！",
        error: "發送失敗，請稍後再試",
      },
    },
    common: {
      loading: "載入中...",
      error: "發生錯誤",
      darkMode: "深色模式",
      lightMode: "淺色模式",
      systemMode: "系統模式",
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      roles: [
        "Full Stack Developer",
        "UI/UX Enthusiast",
        "Problem Solver",
      ] as const,
      description:
        "Passionate about creating beautiful, functional web applications",
    },
    about: {
      title: "About Me",
      description:
        "A passionate developer focused on creating impactful digital experiences",
      features: {
        fullstack: {
          title: "Full-Stack Development",
          description:
            "Building complete web applications from frontend to backend using React, Next.js, Node.js, and modern databases.",
        },
        frontend: {
          title: "Frontend Expertise",
          description:
            "Creating responsive and performant user interfaces with TypeScript, Tailwind CSS, and modern React patterns.",
        },
        backend: {
          title: "Backend Solutions",
          description:
            "Developing scalable server-side applications and RESTful APIs with focus on security and performance.",
        },
        gamedev: {
          title: "Game Development",
          description:
            "4+ years of Roblox development experience using Lua/Luau, demonstrating versatility in different programming domains.",
        },
      },
      techStack: "Tech Stack",
    },
    projects: {
      title: "Featured Projects",
      viewDemo: "Visit Site",
      viewCode: "Source Code",
      showMore: "Show More",
      showLess: "Show Less",
    },
    contact: {
      title: "Get in Touch",
      description: "Have a question or want to work together?",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send",
        success: "Message sent!",
        error: "Failed to send message. Please try again later.",
      },
    },
    common: {
      loading: "Loading...",
      error: "An error occurred",
      darkMode: "Dark Mode",
      lightMode: "Light Mode",
      systemMode: "System Mode",
    },
  },
} as const;
