import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energia Solar para Empresas — Comércio e Indústria | SolCenter",
  description:
    "Reduza até 95% do custo operacional de energia da sua empresa. Sistemas fotovoltaicos para comércio, indústria e condomínios no RS. Análise gratuita.",
  keywords:
    "energia solar empresarial RS, painel solar comércio, energia solar indústria, reduzir custo operacional energia, sistema fotovoltaico empresa Santo Cristo",
  openGraph: {
    title: "Energia Solar para Empresas — SolCenter RS",
    description:
      "Corte até 95% do custo de energia da sua empresa. Mais de 1.400 projetos no RS. Análise gratuita.",
    url: "https://www.solcenter.com.br/lp-empresarial",
    siteName: "Solcenter",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "https://www.solcenter.com.br/og-home.jpg", width: 1200, height: 630, alt: "Energia solar empresarial — SolCenter RS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Energia Solar para Empresas — SolCenter RS",
    description: "Reduza até 95% do custo operacional. Análise gratuita.",
    images: ["https://www.solcenter.com.br/og-home.jpg"],
  },
  alternates: { canonical: "https://www.solcenter.com.br/lp-empresarial" },
  robots: { index: true, follow: true },
};

export default function LpEmpresarialLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
