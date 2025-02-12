# Small R Portfolio

<div align="center">
  <p align="center">
    A modern, responsive portfolio website built with Next.js 15 and Tailwind CSS, featuring smooth animations and a polished UI/UX design
  </p>
  <p align="center">
    <a href="https://smallr-portfolio.vercel.app">Live Demo</a>
    ·
    <a href="#features">Features</a>
    ·
    <a href="#tech-stack">Tech Stack</a>
  </p>
  <img src="/public/preview.png" alt="Portfolio Preview" width="600px" />
</div>

[繁體中文](/README.zh.md) | [English](/README.md)

## ✨ Features

### 🌐 Internationalization

- Built-in English and Traditional Chinese support
- URL-based language switching
- Automatic language detection
- Complete translation system
- Language-aware navigation

### 🎨 Modern Design

- Fully responsive layout
- Dark/Light theme support
- Smooth animations with Framer Motion
- Clean and intuitive UI
- Interactive project cards with zoom preview
- Custom 404 page
- Polished image modals with backdrop blur

### ⚡ Performance

- Built with Next.js 15 App Router
- Static Site Generation (SSG)
- Automatic image optimization
- Route prefetching
- Client-side navigation
- Optimized image loading

### 🔍 SEO Optimization

- Meta tags optimization
- Sitemap generation
- Robots.txt configuration
- Structured data
- Multi-language SEO

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide Icons](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com)
- **Forms:** [Formspree](https://formspree.io)

## 📦 Project Structure

```
├── app/                # Next.js app directory
│   ├── [locale]/      # Locale-specific routes
│   │   ├── cv/        # CV page
│   │   ├── layout.tsx # Language layout
│   │   └── page.tsx   # Home page
│   └── layout.tsx     # Root layout
├── components/        # React components
│   ├── sections/     # Page section components
│   └── ui/           # UI components
├── config/           # Configuration files
├── constants/        # Constants and translations
│   └── sections/     # Page section constants
├── hooks/           # Custom React hooks
├── lib/            # Utility functions
├── public/         # Static assets
└── types/          # TypeScript type definitions
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
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_form_id
```

## 👤 Author

- (Small R)
- Email: hhgg12661@gmail.com
- GitHub: [@Ynoob87](https://github.com/Ynoob87)
- LinkedIn: [alaner652](https://www.linkedin.com/in/alaner652/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](.github/CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) before getting started.

### Ways to Contribute

- Report bugs and issues
- Suggest new features
- Improve documentation
- Submit pull requests
- Share the project

## 💖 Support

If you find this project helpful, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs or suggesting features
- 🔀 Submitting pull requests
- 📢 Sharing with others
