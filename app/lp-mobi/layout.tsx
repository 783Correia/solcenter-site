import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "EVOX Scooter Elétrica 1000W — Sem CNH e IPVA | Solcenter",
  description:
    "Revenda a EVOX: scooter elétrica 1000W sem CNH, sem IPVA e sem emplacamento. Produto pronto para a sua loja. Atendimento B2B no Sul do Brasil.",
  keywords:
    "scooter elétrica sem CNH, moto elétrica revenda, scooter elétrica revendedor, EVOX elétrica, mobilidade elétrica RS, Solcenter Mobi, distribuidora scooter elétrica Sul Brasil, scooter 1000W sem habilitação",
  openGraph: {
    title: "EVOX Scooter Elétrica 1000W — Qualquer pessoa pode comprar | Solcenter Mobi",
    description:
      "Scooter elétrica EVOX: 1000W, sem CNH, sem IPVA, sem emplacamento. Abre um mercado que as motos convencionais não alcançam. Seja revendedor — Sul do Brasil.",
    url: "https://www.solcenter.com.br/lp-mobi",
    siteName: "Solcenter Mobi",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://www.solcenter.com.br/mobi/real/preta-1.jpg",
        width: 1920,
        height: 1440,
        alt: "EVOX Scooter Elétrica Solcenter Mobi — Preta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EVOX Scooter Elétrica 1000W — Seja Revendedor",
    description: "Revenda a scooter elétrica mais bonita do mercado. Sem CNH, sem IPVA. B2B para o Sul do Brasil.",
    images: ["https://www.solcenter.com.br/mobi/real/preta-1.jpg"],
  },
  icons: {
    icon: "/logo-mobi-icon.svg",
    apple: "/logo-mobi-icon.svg",
  },
  alternates: {
    canonical: "https://www.solcenter.com.br/lp-mobi",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const schemaMobi = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Solcenter",
          "item": "https://www.solcenter.com.br",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Solcenter Mobi — EVOX",
          "item": "https://www.solcenter.com.br/lp-mobi",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "A EVOX precisa de carteira de motorista?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não. A scooter elétrica EVOX não exige CNH (carteira de motorista) para ser pilotada, o que amplia significativamente o público comprador em comparação a motos convencionais.",
          },
        },
        {
          "@type": "Question",
          "name": "A EVOX paga IPVA e emplacamento?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não. A EVOX não exige emplacamento e não paga IPVA, eliminando a burocracia e os custos anuais de documentação.",
          },
        },
        {
          "@type": "Question",
          "name": "Qual a autonomia da scooter elétrica EVOX?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A EVOX tem autonomia de até 120km por carga completa com bateria de lítio 60v/20Ah. O tempo de recarga é de 6 a 8 horas em tomada 110/220V.",
          },
        },
        {
          "@type": "Question",
          "name": "Como funciona o modelo de revenda da Solcenter Mobi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O revendedor adquire um lote de unidades EVOX da Solcenter Mobi, expõe na sua loja e vende. O produto é entregue na caixa pronto para comercialização. O suporte técnico pós-venda para o consumidor final é responsabilidade da Solcenter Mobi.",
          },
        },
        {
          "@type": "Question",
          "name": "Quais cores a EVOX está disponível?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A EVOX está disponível em 4 cores: Preta (mais vendida), Azul/Prata, Vermelha/Prata e Branca.",
          },
        },
      ],
    },
  ],
};

export default function LpMobiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="schema-lp-mobi"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMobi) }}
      />
      {children}
    </>
  );
}
