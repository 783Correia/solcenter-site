import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energia Solar para Agronegócio no RS — SolCenter",
  description:
    "Reduza até 95% do custo de energia na sua propriedade rural. Irrigação, secadores, silos e instalações agrícolas. +1.400 projetos no RS. Orçamento grátis.",
  keywords:
    "energia solar agronegócio RS, painel solar propriedade rural, energia solar irrigação, energia solar silo, energia solar noroeste gaúcho, custo energia rural",
  openGraph: {
    title: "Energia Solar para o Campo — Agronegócio | SolCenter",
    description:
      "Corte até 95% do custo de energia na sua propriedade. Mais de 1.400 projetos no RS. Análise gratuita.",
    url: "https://www.solcenter.com.br/lp-agro",
    siteName: "Solcenter",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "https://www.solcenter.com.br/og-home.jpg", width: 1200, height: 630, alt: "Energia solar para agronegócio — SolCenter RS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Energia Solar para Agronegócio — SolCenter RS",
    description: "Reduza até 95% do custo de energia rural. Análise gratuita no noroeste gaúcho.",
    images: ["https://www.solcenter.com.br/og-home.jpg"],
  },
  alternates: { canonical: "https://www.solcenter.com.br/lp-agro" },
  robots: { index: true, follow: true },
};

export default function LpAgroLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
