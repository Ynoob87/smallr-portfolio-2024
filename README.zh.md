# Small R 作品集

<div align="center">
  <img src="./public/preview.png" alt="作品集預覽" width="600px" />
  
  <p align="center">
    使用 Next.js 14 和 Tailwind CSS 打造的現代化個人作品集網站
  </p>

  <p align="center">
    <a href="https://smallr-portfolio.vercel.app">查看演示</a>
    ·
    <a href="#features">功能特色</a>
    ·
    <a href="#tech-stack">技術棧</a>
  </p>
</div>

English | [繁體中文](./README.zh.md)

## ✨ 功能特色

### 🌐 多語言支援

- 內建繁體中文和英文支援
- 基於 URL 的語言切換
- 自動偵測預設語言
- 完整的翻譯系統

### 🎨 現代化設計

- 完整的響應式布局
- 深色/淺色主題切換
- 流暢的動畫效果
- 簡潔優雅的介面

### ⚡ 效能優化

- 採用 Next.js 14 App Router
- 靜態網站生成 (SSG)
- 自動圖片最佳化
- 路由預先載入

### 🔍 SEO 優化

- Meta 標籤優化
- 網站地圖生成
- Robots.txt 配置
- 結構化資料

## 🛠️ 技術棧

- **框架：** [Next.js 14](https://nextjs.org/)
- **樣式：** [Tailwind CSS](https://tailwindcss.com/)
- **動畫：** [Framer Motion](https://www.framer.com/motion/)
- **圖標：** [Lucide Icons](https://lucide.dev/)
- **部署：** [Vercel](https://vercel.com)

## 📦 專案結構

```
├── app/                # Next.js 應用目錄
│   ├── [locale]/      # 多語言路由
│   └── layout.tsx     # 根布局
├── components/        # React 元件
├── config/           # 配置文件
├── constants/        # 常量和翻譯
├── hooks/           # 自定義 React Hooks
├── public/          # 靜態資源
└── types/           # TypeScript 類型定義
```

## 🚀 開始使用

1. 克隆專案

```bash
git clone https://github.com/Ynoob87/portfolio.git
```

2. 安裝依賴

```bash
pnpm install
```

3. 啟動開發伺服器

```bash
pnpm dev
```

4. 開啟 [http://localhost:3000](http://localhost:3000)

## 📝 環境變數

在根目錄創建 `.env.local` 文件：

```bash
NEXT_PUBLIC_GOOGLE_VERIFICATION=你的_google_驗證_id
```

## 👤 作者

- 吳宸麒 (Small R)
- Email: hhgg12661@gmail.com
- GitHub: [@Ynoob87](https://github.com/Ynoob87)
- LinkedIn: [alaner652](https://www.linkedin.com/in/alaner652/)

## 📄 授權

本專案使用 MIT 授權 - 詳見 [LICENSE](LICENSE) 文件
