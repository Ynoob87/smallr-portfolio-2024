# Small R Portfolio

<div align="center">
  <img src="/public/avatar.jpg" alt="Portfolio Preview" width="600px" />
  
  <p align="center">
    A modern, responsive portfolio website built with Next.js 15 and Tailwind CSS
  </p>

  <p align="center">
    <a href="https://smallr-portfolio.vercel.app">View Demo</a>
    ·
    <a href="#features">Features</a>
    ·
    <a href="#tech-stack">Tech Stack</a>
  </p>
</div>

[繁體中文](/README.zh.md) | English (/README.md)

## ✨ Features

### 🌐 Internationalization

- Built-in support for English and Traditional Chinese
- URL-based language switching
- Automatic language detection
- Complete translation system

### 🎨 Modern Design

- Fully responsive layout
- Dark/Light theme support
- Smooth animations
- Clean and minimal UI

### ⚡ Performance

- Built with Next.js 14 App Router
- Static Site Generation (SSG)
- Automatic image optimization
- Route prefetching

### 🔍 SEO Optimized

- Meta tags optimization
- Sitemap generation
- Robots.txt configuration
- Structured data

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide Icons](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com)

## 📦 Project Structure

```
├── app/                # Next.js app directory
│   ├── [locale]/      # Locale-specific routes
│   └── layout.tsx     # Root layout
├── components/        # React components
├── config/           # Configuration files
├── constants/        # Constants and translations
├── hooks/           # Custom React hooks
├── public/          # Static assets
└── types/           # TypeScript type definitions
```

## 🚀 Getting Started

1. Clone the repository

```bash
git clone https://github.com/Ynoob87/smallr-portfolio.git
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## 📝 Environment Variables

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_GOOGLE_VERIFICATION=your_google_verification_id
```

## 👤 Author

- Wu Chen-Chi (Small R)
- Email: hhgg12661@gmail.com
- GitHub: [@Ynoob87](https://github.com/Ynoob87)
- LinkedIn: [alaner652](https://www.linkedin.com/in/alaner652/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
