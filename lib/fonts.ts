import {
  JetBrains_Mono as FontMono,
  Inter as FontSans,
} from "next/font/google";
import { Tilt_Prism } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const logoFont = Tilt_Prism({
  subsets: ["latin"],
  // variable: "--font-sans",
});
