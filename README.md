# Small R's Portfolio

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Dynamic theme switching with system preference support
- **Smooth Animations**: Engaging animations powered by Framer Motion
- **Type Animations**: Dynamic text animations using react-simple-typewriter
- **Accessibility**: WCAG compliant with full keyboard navigation and screen reader support
- **Performance Optimized**: Fast loading times with optimized images and code splitting

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide Icons
- **Deployment**: Vercel

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── sections/        # Main page sections
│   │   ├── Hero.tsx    # Hero section
│   │   └── ...         # Other sections
│   ├── Navbar.tsx      # Navigation component
│   └── ThemeToggle.tsx # Theme switcher
├── constants/          # Configuration files
│   ├── navigation.ts   # Navigation links
│   └── siteConfig.ts   # Site configuration
└── styles/
    └── globals.css     # Global styles
```

## 🚀 Local Development

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- Git

### Setup Steps

1. Clone the repository:

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file:

```bash
NEXT_PUBLIC_SITE_URL=your-site-url
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Deployment

### 1. Deploying to Vercel (Recommended)

#### Automatic Deployment

1. Create a [Vercel account](https://vercel.com/signup)
2. Install Vercel CLI:

```bash
npm i -g vercel
```

3. Login to Vercel:

```bash
vercel login
```

4. Deploy:

```bash
vercel
```

#### Using Vercel Dashboard

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Configure project:
   - Framework Preset: Next.js
   - Build Command: `next build`
   - Output Directory: `.next`
6. Add Environment Variables from your `.env.local`
7. Click "Deploy"

### 2. Manual Build for Other Platforms

1. Create production build:

```bash
npm run build
# or
yarn build
```

2. Start production server:

```bash
npm run start
# or
yarn start
```

### 3. Docker Deployment

1. Build Docker image:

```bash
docker build -t portfolio .
```

2. Run container:

```bash
docker run -p 3000:3000 portfolio
```

## 🔧 Customization

### Personal Information

Update `constants/siteConfig.ts`:

```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Your Title",
  description: "Your Description",
  links: {
    github: "your-github-url",
    linkedin: "your-linkedin-url",
    // ... other links
  },
};
```

### Navigation

Update `constants/navigation.ts`:

```typescript
export const navigation = [
  {
    name: "Home",
    href: "/",
  },
  // ... other navigation items
];
```

### Theme Colors

Modify `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          light: "your-color",
          dark: "your-color",
        },
        // ... other colors
      },
    },
  },
};
```

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**

   - Clear `.next` folder: `rm -rf .next`
   - Delete `node_modules`: `rm -rf node_modules`
   - Reinstall dependencies: `npm install`

2. **Image Optimization**

   - Ensure images are in `public/` directory
   - Use correct path in `next.config.js`
   - Optimize images before adding to project

3. **Environment Variables**
   - Verify `.env.local` exists
   - Check variable naming (must start with `NEXT_PUBLIC_`)
   - Restart development server after changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Small R**

- GitHub: [@Ynoob87](https://github.com/Ynoob87)
- LinkedIn: [alaner652](https://www.linkedin.com/in/alaner652/)
- Email: hhgg12661@gmail.com

## 🙏 Acknowledgments

- Icons by [Lucide Icons](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Theme toggle inspired by [shadcn/ui](
