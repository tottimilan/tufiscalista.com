import { Cormorant_Garamond, Inter } from "next/font/google";

export const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
