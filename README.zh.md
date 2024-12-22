# Small R Portfolio

<div align="center">
  <p align="center">
    使用 Next.js 15 和 Tailwind CSS 打造的現代響應式個人作品集網站，具有流暢動畫和精緻的 UI/UX 設計
  </p>
  <p align="center">
    <a href="https://smallr-portfolio.vercel.app">預覽網站</a>
    ·
    <a href="#features">功能特色</a>
    ·
    <a href="#tech-stack">技術棧</a>
  </p>
  <img src="/public/preview.png" alt="Portfolio Preview" width="600px" />
</div>

[繁體中文](/README.zh.md) | [English](/README.md)

## ✨ 功能特色

### 🌐 國際化支援

- 內建英文和繁體中文支援
- 基於 URL 的語言切換
- 自動語言偵測
- 完整的翻譯系統
- 智能語言導航

### 🎨 現代設計

- 完全響應式佈局
- 深色/淺色主題支援
- Framer Motion 流暢動畫
- 簡潔直觀的使用者介面
- 互動式專案卡片與縮放預覽
- 客製化 404 頁面
- 精緻的圖片模態框與背景模糊效果

### ⚡ 效能優化

- 使用 Next.js 15 App Router
- 靜態網站生成 (SSG)
- 自動圖片優化
- 路由預加載
- 客戶端導航
- 優化的圖片載入

### 🔍 SEO 優化

- Meta 標籤優化
- Sitemap 生成
- Robots.txt 配置
- 結構化資料
- 多語言 SEO

## 🛠️ 技術棧

- **框架:** [Next.js 15](https://nextjs.org/)
- **樣式:** [Tailwind CSS](https://tailwindcss.com/)
- **動畫:** [Framer Motion](https://www.framer.com/motion/)
- **圖示:** [Lucide Icons](https://lucide.dev/)
- **部署:** [Vercel](https://vercel.com)
- **表單:** [Formspree](https://formspree.io)

## 📦 專案結構

```
├── app/                # Next.js app 目錄
│   ├── [locale]/      # 語言特定路由
│   │   ├── cv/        # 履歷頁面
│   │   ├── layout.tsx # 語言佈局
│   │   └── page.tsx   # 首頁
│   └── layout.tsx     # 根佈局
├── components/        # React 元件
│   ├── sections/     # 頁面區塊元件
│   └── ui/           # UI 元件
├── config/           # 配置檔案
├── constants/        # 常數和翻譯
│   └── sections/     # 頁面區塊常數
├── hooks/           # 自定義 React Hooks
├── lib/            # 工具函數
├── public/         # 靜態資源
└── types/          # TypeScript 型別定義
```

## 🚀 開始使用

1. 複製專案

```bash
git clone https://github.com/Ynoob87/smallr-portfolio.git
```

2. 安裝依賴

```bash
npm install
```

3. 啟動開發伺服器

```bash
npm run dev
```

4. 開啟 [http://localhost:3000](http://localhost:3000)

## 📝 環境變數

在根目錄建立 `.env.local` 檔案：

```bash
NEXT_PUBLIC_FORMSPREE_ID=你的_Formspree_表單_ID
```

## 👤 作者

- 吳宸麒 (Small R)
- 信箱: hhgg12661@gmail.com
- GitHub: [@Ynoob87](https://github.com/Ynoob87)
- LinkedIn: [alaner652](https://www.linkedin.com/in/alaner652/)

## 📄 授權

本專案使用 MIT 授權 - 詳見 [LICENSE](LICENSE) 檔案

## 🤝 參與貢獻

歡迎參與貢獻！在開始之前，請先閱讀我們的[貢獻指南](.github/CONTRIBUTING.md)和[行為準則](CODE_OF_CONDUCT.md)。

### 貢獻方式

- 回報 Bug 和問題
- 提出新功能建議
- 改善文檔
- 提交 Pull Request
- 分享這個專案

## 💖 支持專案

如果你覺得這個專案有幫助，可以：

- ⭐ 給專案一個 Star
- 🐛 回報 Bug 或提出建議
- 🔀 提交 Pull Request
- 📢 分享給其他人
