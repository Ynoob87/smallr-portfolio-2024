import { ReactNode } from "react";

export interface BaseProps {
  className?: string;
  children?: ReactNode;
}

export interface LayoutProps extends BaseProps {
  maxWidth?: keyof typeof import("../constants/config").siteConfig.layout.maxWidth;
}

export interface ThemeProps {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}
