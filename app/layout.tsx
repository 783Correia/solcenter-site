import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solcenter — Energia Solar em Santo Cristo e Região | RS",
  description:
    "Instalação de energia solar residencial, empresarial e agronegócio em Santo Cristo/RS. +1400 projetos entregues. Economize até 95% na sua conta de luz. Orçamento grátis.",
  keywords:
    "energia solar Santo Cristo, energia solar RS, instalação solar, sistema fotovoltaico, Solcenter",
  openGraph: {
    title: "Solcenter — Energia Solar em Santo Cristo e Região",
    description:
      "Mais de 1400 projetos entregues no RS. Economize até 95% na conta de luz.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className={`${inter.className} min-h-full`}>{children}</body>
    </html>
  );
}
