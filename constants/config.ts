export const siteConfig = {
  theme: {
    defaultTheme: "light" as const,
    storageKey: "theme" as const,
  },
  layout: {
    maxWidth: "1200px",
    headerHeight: "64px",
    footerHeight: "60px",
  },
  breakpoints: {
    mobile: "640px",
    tablet: "768px",
    desktop: "1024px",
  },
} as const;

export type SiteConfig = typeof siteConfig;
