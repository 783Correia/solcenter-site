import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reduza até 95% da sua conta de luz — Energia Solar | Solcenter",
  description:
    "Instale energia solar e economize de verdade. Cliente com conta de R$680 passou a pagar R$47/mês. +1400 projetos entregues no RS. Orçamento grátis.",
  keywords:
    "energia solar residencial, reduzir conta de luz, painel solar, instalação solar Santo Cristo RS, financiamento solar",
  openGraph: {
    title: "Reduza até 95% da sua conta de luz com energia solar",
    description: "Mais de 1400 projetos entregues no RS. Um cliente reduziu de R$680 para R$47 por mês. Faça sua simulação grátis.",
    url: "https://www.solcenter.com.br/lp-energia",
    siteName: "Solcenter",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.solcenter.com.br/lp-energia",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function LpEnergiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
