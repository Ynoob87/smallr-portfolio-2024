export const colors = {
  background: {
    light: "#FFFFFF",
    dark: "#111111",
  },
  text: {
    light: "#1A1A1A",
    dark: "#E5E5E5",
  },
  primary: {
    light: "#2563EB",
    dark: "#60A5FA",
  },
  secondary: {
    light: "#4B5563",
    dark: "#9CA3AF",
  },
  accent: {
    light: "#F3F4F6",
    dark: "#374151",
  },
  border: {
    light: "#E5E7EB",
    dark: "#374151",
  },
} as const;

export type ColorScheme = typeof colors;
