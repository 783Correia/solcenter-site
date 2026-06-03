import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Reduza até 95% da sua conta de luz — Energia Solar | Solcenter",
  description:
    "Instale energia solar e economize de verdade. Cliente com conta de R$680 passou a pagar R$47/mês. +1.400 projetos entregues em Santo Cristo e região do RS. Orçamento grátis.",
  keywords:
    "energia solar residencial Santo Cristo, reduzir conta de luz RS, painel solar noroeste gaúcho, instalação solar, financiamento solar Sicredi",
  openGraph: {
    title: "Reduza até 95% da sua conta de luz com energia solar",
    description:
      "Mais de 1.400 projetos entregues no RS. Um cliente reduziu de R$680 para R$47 por mês. Faça sua simulação grátis.",
    url: "https://www.solcenter.com.br/lp-energia",
    siteName: "Solcenter",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://www.solcenter.com.br/og-lp-energia.png",
        width: 1200,
        height: 630,
        alt: "Solcenter — Energia Solar em Santo Cristo RS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reduza até 95% da conta de luz com energia solar — Solcenter",
    description: "Cliente reduziu de R$680 para R$47/mês. Orçamento grátis em Santo Cristo e região do RS.",
    images: ["https://www.solcenter.com.br/og-lp-energia.png"],
  },
  alternates: {
    canonical: "https://www.solcenter.com.br/lp-energia",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const schemaEnergia = {
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
          "name": "Energia Solar Residencial",
          "item": "https://www.solcenter.com.br/lp-energia",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://www.solcenter.com.br/lp-energia#service",
      "name": "Instalação de Energia Solar Residencial",
      "description":
        "Instalação completa de sistema fotovoltaico para residências em Santo Cristo e região noroeste do RS. Inclui análise de consumo, projeto técnico, homologação junto à distribuidora, instalação e monitoramento contínuo. Economia de até 95% na conta de luz.",
      "provider": {
        "@type": "LocalBusiness",
        "@id": "https://www.solcenter.com.br/#business",
        "name": "Solcenter Energia Solar",
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Noroeste do Rio Grande do Sul",
      },
      "serviceType": "Instalação de Sistema Fotovoltaico",
      "url": "https://www.solcenter.com.br/lp-energia",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "BRL",
        "availability": "https://schema.org/InStock",
        "description": "Orçamento gratuito sem compromisso. Financiamento disponível via Sicredi com parcelas menores que a economia gerada.",
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Tipos de instalação solar",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Energia Solar Residencial",
              "description": "Sistema fotovoltaico para casas. Reduza até 95% da conta de luz.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Energia Solar Empresarial",
              "description": "Sistema fotovoltaico para empresas e comércio. Retorno em até 4 anos.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Energia Solar para Agronegócio",
              "description": "Sistemas solares para propriedades rurais: irrigação, secadores e instalações agrícolas.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Vale a pena instalar energia solar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim. A simulação gratuita mostra o retorno exato no seu caso. Contas acima de R$300/mês costumam ter payback de 4 a 5 anos e o sistema gera por 25 anos. Um cliente com conta de R$680 passou a pagar R$47/mês após a instalação.",
          },
        },
        {
          "@type": "Question",
          "name": "E se não tiver sol suficiente no RS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O Rio Grande do Sul tem índice solar excelente o ano todo, inclusive no inverno. A tecnologia fotovoltaica moderna gera energia mesmo em dias nublados.",
          },
        },
        {
          "@type": "Question",
          "name": "Qual a manutenção de um sistema solar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Os sistemas solares são praticamente sem manutenção. A Solcenter oferece monitoramento contínuo com a Solcenter PRO para acompanhar a geração em tempo real e garantir o desempenho máximo.",
          },
        },
        {
          "@type": "Question",
          "name": "Tem financiamento para energia solar em Santo Cristo RS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim. Trabalhamos com financiamento Sicredi com condições facilitadas. Muitos clientes financiam e já economizam desde o primeiro mês — as parcelas costumam ser menores do que a economia gerada na conta de luz.",
          },
        },
        {
          "@type": "Question",
          "name": "Quanto tempo leva a instalação de energia solar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A instalação física leva 1 a 2 dias. O processo completo (visita técnica, projeto, homologação e instalação) leva de 30 a 60 dias. A Solcenter cuida de toda a burocracia com a concessionária de energia.",
          },
        },
        {
          "@type": "Question",
          "name": "Quanto tempo até o retorno do investimento em energia solar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A maioria dos clientes da Solcenter recupera o investimento em 4 a 5 anos. O sistema tem garantia de desempenho por 25 anos — ou seja, mais de 20 anos de energia praticamente gratuita após o payback.",
          },
        },
      ],
    },
  ],
};

export default function LpEnergiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="schema-lp-energia"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaEnergia) }}
      />
      {children}
    </>
  );
}
