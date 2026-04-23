import { Playfair_Display, Inter } from "next/font/google";

// Serif para títulos (Playfair Display)
// preload: true para que cargue rápido (es la fuente visible en hero)
// weight reducidos a 500/600/700 (los realmente usados en la web)
export const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
  fallback: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"],
});

// Sans para body (Inter)
export const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
});
