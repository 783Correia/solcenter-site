import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moto Elétrica para Revendas e Frotas — Mobilidade Elétrica | Solcenter",
  description:
    "A moto elétrica que faz o negócio andar. Custo de R$120/mês vs R$860 a combustão. Ideal para revendas, frotas e distribuidores no RS. Fale com um consultor.",
  keywords:
    "moto elétrica, mobilidade elétrica, frota elétrica, revenda moto elétrica, Solcenter mobi",
  openGraph: {
    title: "Moto Elétrica para Revendas e Frotas — Solcenter Mobi",
    description: "R$120/mês vs R$860 de combustão. A moto elétrica que faz o negócio andar. Fale com um consultor.",
    url: "https://www.solcenter.com.br/lp-mobi",
    siteName: "Solcenter",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.solcenter.com.br/lp-mobi",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function LpMobiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
