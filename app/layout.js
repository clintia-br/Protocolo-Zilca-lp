import { spectral, archivo } from "@/lib/fonts";
import "./globals.css";

export const metadata = {
  title: "Protocolo Zilca — Imersão prática em Doppler de carótidas",
  description:
    "Em 3 dias, saia do \"faço meio que dá\" e passe a fazer Doppler de carótidas com a mesma segurança que você já tem no eco. Prática intensiva em paciente real, um aluno por aparelho, com o Dr. Cássio Bermudes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${spectral.variable} ${archivo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
