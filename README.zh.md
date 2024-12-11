# Small R 個人作品集

這是一個使用 Next.js 14 和 Tailwind CSS 打造的現代化個人作品集網站。[English](./README.md)

![作品集預覽](./public/preview.png)

## 🌟 特色功能

### 🌍 多國語系

- 內建繁體中文和英文支援
- 輕鬆新增其他語言
- 基於 URL 路徑的語言切換
- 自動偵測並導向預設語言

### 🎨 現代化設計

- 完整的響應式設計，支援各種裝置
- 深色/淺色主題，可跟隨系統設定
- 流暢的動畫與轉場效果
- 簡潔優雅的使用者介面

### ⚡ 效能優化

- Next.js 14 App Router 架構
- 靜態網頁生成 (SSG)
- 圖片自動最佳化
- 路由預先載入

## 🛠️ 自訂設定

### 新增語言

1. 在型別定義中新增：

```typescript
// types/index.ts
export type Locale = "en" | "zh" | "你的語言代碼";
```

2. 新增翻譯文字：

```typescript
// constants/i18n.ts
export const translations = {
  你的語言代碼: {
    nav: {
      about: "你的翻譯",
      projects: "你的翻譯",
      contact: "你的翻譯",
    },
    // ... 其他翻譯
  },
};
```

3. 更新網站設定：

```typescript
// config/site.ts
export const siteConfig = {
  locales: [
    { locale: "en", label: "English" },
    { locale: "zh", label: "繁體中文" },
    { locale: "你的語言代碼", label: "你的語言名稱" },
  ],
};
```

### 自訂內容

#### 個人資訊

```typescript
// config/site.ts
export const siteConfig: SiteConfig = {
  name: "你的名字",
  title: "你的頭銜",
  description: "你的簡介",
  links: {
    github: "https://github.com/你的帳號",
    linkedin: "https://linkedin.com/in/你的帳號",
    email: "你的信箱@example.com",
  },
};
```

#### 作品集

```typescript
// constants/projects.ts
export const projects: Project[] = [
  {
    title: "專案名稱",
    description: "專案說明",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: "/projects/你的圖片.png",
    links: {
      demo: "https://你的展示網址.com",
      github: "https://github.com/你的專案",
    },
  },
  // 新增更多專案...
];
```

#### 關於我區塊

```typescript
// constants/i18n.ts
{
  about: {
    title: "你的標題",
    description: "你的描述",
    features: {
      // 新增你的特色
    },
  },
}
```

### 新增社群連結

1. 在網站設定中新增連結：

```typescript
// config/site.ts
export const siteConfig: SiteConfig = {
  links: {
    twitter: "https://twitter.com/你的帳號",
    // 新增更多社群連結
  },
};
```

2. 在 Hero 元件中新增圖示：

```typescript
// components/sections/Hero.tsx
const socialLinks = [
  {
    href: siteConfig.links.twitter,
    icon: Twitter,
    label: "在 Twitter 上追蹤我",
    target: "_blank",
  },
  // 新增更多社群連結
];
```

## 🚀 開始使用

1. 複製專案並自訂：

```bash
# 複製專案
git clone https://github.com/Ynoob87/portfolio.git 你的專案名稱

# 進入專案目錄
cd 你的專案名稱

# 安裝套件
pnpm install

# 啟動開發伺服器
pnpm dev
```

2. 更新設定：

- 編輯 `config/site.ts` 更新個人資訊
- 修改 `constants/i18n.ts` 更新翻譯文字
- 更新 `constants/projects.ts` 加入你的作品

3. 自訂元件：

- 修改 `components/sections/` 中的區塊元件
- 更新 `tailwind.config.js` 自訂樣式
- 依需求新增功能

## 📦 專案結構

```
├── app/                  # Next.js 14 App Router
│   ├── [locale]/        # 多國語系路由
│   └── api/             # API 路由
├── components/          # React 元件
│   ├── sections/        # 頁面區塊元件
│   └── ui/             # UI 元件
├── config/             # 設定檔
├── constants/          # 常數與資料
├── hooks/              # 自訂 React Hooks
├── lib/               # 工具函式
├── public/            # 靜態資源
└── types/             # TypeScript 型別定義
```

## 🔧 進階設定

### 環境變數

```env
NEXT_PUBLIC_SITE_URL=https://你的網域.com
NEXT_PUBLIC_GA_ID=你的GA追蹤碼
```

### 自訂主題

```typescript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          // 新增你的顏色
        },
      },
    },
  },
};
```

## 📝 參與貢獻

歡迎提出貢獻！請先閱讀我們的[貢獻指南](CONTRIBUTING.md)了解詳情。

## 📄 授權條款

本專案使用 MIT 授權條款 - 詳見 [LICENSE](LICENSE) 檔案。

## 👤 作者

- 吳宸麒
- 信箱：hhgg12661@gmail.com
- GitHub：[@Ynoob87](https://github.com/Ynoob87)
- LinkedIn：[alaner652](https://www.linkedin.com/in/alaner652/)

---

[English](./README.md) | [回報問題](https://github.com/Ynoob87/portfolio/issues) | [功能建議](https://github.com/Ynoob87/portfolio/issues)
