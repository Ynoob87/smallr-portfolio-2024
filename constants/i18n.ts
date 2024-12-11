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
    },
    contact: {
      title: "聯繫我",
      description: "有問題或想一起合作？",
      form: {
        name: "姓名",
        email: "郵箱",
        message: "訊息",
        submit: "發送",
      },
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
    },
    contact: {
      title: "Get in Touch",
      description: "Have a question or want to work together?",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send",
      },
    },
  },
};
