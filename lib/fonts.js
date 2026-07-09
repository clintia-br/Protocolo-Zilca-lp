import { Spectral, Archivo } from "next/font/google";

// Spectral (serif) is only used for the italic mentor quote and the decorative
// quotation mark — load just what's needed to trim the font payload.
export const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
  display: "swap",
});

// Archivo (sans) carries everything: headings (700/800), body/UI (400–600).
export const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});
