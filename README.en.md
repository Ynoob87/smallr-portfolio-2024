# Small R's Portfolio

This is my personal portfolio website built with Next.js 14 and Tailwind CSS. It showcases my skills, projects, and experiences while providing ways to get in touch with me.

## 🌟 Features

### 🌍 Internationalization

- Supports both English and Chinese
- Language switching based on URL paths (`/en`, `/zh`)
- Automatic language redirection using Next.js middleware
- Complete translation system for navigation, buttons, and content

### 🎨 Modern Design

- Responsive design for all devices
- Dark/Light theme switching
- Smooth page transitions
- Carefully crafted UI and interactions

### ⚡ Performance

- Next.js 14 App Router
- Static Site Generation (SSG)
- Automatic image optimization
- Route prefetching

### 🔒 Code Quality

- TypeScript type safety
- ESLint code standards
- Prettier formatting
- Component-based architecture

### 📱 User Experience

- Smooth scrolling
- Progressive loading
- Accessibility support
- Cross-browser compatibility

## 🛠️ Tech Stack

### Frontend Framework

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

### UI/Animation

- Framer Motion
- Lucide Icons
- Tailwind Merge
- clsx

### Development Tools

- pnpm
- ESLint
- Prettier
- PostCSS

## 📦 Project Structure

```
├── app/                  # Next.js 14 App Router
│   ├── [locale]/        # i18n routes
│   └── api/             # API routes
├── components/          # React components
│   ├── sections/        # Page sections
│   └── ui/             # UI components
├── config/             # Configuration files
├── constants/          # Constants
├── hooks/              # Custom hooks
├── lib/               # Utility functions
├── public/            # Static assets
└── types/             # TypeScript types
```

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Ynoob87/portfolio.git
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## 🌐 Internationalization

The website supports both English and Chinese:

- English: `/en`
- Chinese: `/zh`

Language switching is implemented through URL paths, with automatic redirection handled by Next.js middleware.

## 📄 Page Structure

- `/` - Home (redirects to default language)
- `/[locale]` - Main page
  - `/#hero` - Introduction
  - `/#about` - About me
  - `/#projects` - Project showcase
  - `/#contact` - Contact information
- `/[locale]/cv` - Resume page

## 🔧 Configuration

Main configuration files:

- `config/site.ts` - Website information
- `constants/i18n.ts` - i18n text
- `constants/navigation.ts` - Navigation config
- `tailwind.config.js` - Tailwind CSS config

## 📝 Todo

- [ ] Add blog functionality
- [ ] Implement project detail pages
- [ ] Add search functionality
- [ ] Optimize SEO

## 📄 License

MIT License

## 👤 Author

- Chen-Chi Wu
- Email: hhgg12661@gmail.com
- GitHub: [@Ynoob87](https://github.com/Ynoob87)
- LinkedIn: [alaner652](https://www.linkedin.com/in/alaner652/)
