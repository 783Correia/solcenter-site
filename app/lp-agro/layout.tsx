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

const schemaAgro = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.solcenter.com.br/lp-agro#service",
      name: "Energia Solar para Agronegócio — SolCenter",
      description:
        "Instalação de sistemas fotovoltaicos para propriedades rurais no noroeste gaúcho. Atende irrigação, silos, secadores e câmaras frias. Redução de até 95% no custo de energia com retorno em 3 a 5 safras.",
      provider: {
        "@type": "LocalBusiness",
        name: "SolCenter Soluções em Energia",
        url: "https://www.solcenter.com.br",
        telephone: "+5555984491054",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. Dom Pedro II, 539",
          addressLocality: "Santo Cristo",
          addressRegion: "RS",
          addressCountry: "BR",
        },
      },
      areaServed: { "@type": "AdministrativeArea", name: "Noroeste do Rio Grande do Sul" },
      serviceType: "Instalação de Sistema Solar Fotovoltaico Rural",
      url: "https://www.solcenter.com.br/lp-agro",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Vale a pena instalar energia solar para irrigação?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "É onde o retorno é mais rápido. Motores de irrigação são os maiores consumidores de energia no campo. Com solar, o custo cai até 95% e o payback pode ser de 3 a 4 anos — ou 3 safras.",
          },
        },
        {
          "@type": "Question",
          name: "Energia solar funciona para silos e secadores?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. O sistema é dimensionado para o pico de consumo da safra, garantindo que o custo de energia não impacte a operação no período crítico.",
          },
        },
        {
          "@type": "Question",
          name: "Energia solar funciona no inverno no Rio Grande do Sul?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O Rio Grande do Sul tem excelente irradiação solar mesmo no inverno. O sistema continua gerando — em dias nublados a geração é menor, mas não cessa.",
          },
        },
        {
          "@type": "Question",
          name: "Precisa parar a produção para instalar energia solar no campo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Não. A equipe da SolCenter instala sem interromper as atividades da propriedade. A instalação leva de 1 a 3 dias dependendo do porte do projeto.",
          },
        },
        {
          "@type": "Question",
          name: "Tem financiamento para energia solar no agronegócio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. A SolCenter trabalha com linhas de crédito específicas para o agronegócio, com condições especiais. A parcela costuma ser menor do que a economia gerada.",
          },
        },
      ],
    },
  ],
};

export default function LpAgroLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaAgro) }}
      />
      {children}
    </>
  );
}
