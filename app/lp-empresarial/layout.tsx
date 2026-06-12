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

const schemaEmpresarial = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.solcenter.com.br/lp-empresarial#service",
      name: "Energia Solar para Empresas — SolCenter",
      description:
        "Instalação de sistemas fotovoltaicos para comércio, indústria e condomínios no noroeste gaúcho. Redução de até 95% no custo de energia com retorno em 3 a 5 anos.",
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
      serviceType: "Instalação de Sistema Solar Fotovoltaico Empresarial",
      url: "https://www.solcenter.com.br/lp-empresarial",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Vale a pena instalar energia solar na minha empresa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contas empresariais acima de R$1.000/mês já têm excelente retorno. Quanto maior o consumo, mais rápido o payback. A análise gratuita da SolCenter mostra o retorno exato para o seu caso.",
          },
        },
        {
          "@type": "Question",
          name: "A instalação de energia solar para a operação da empresa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Não. A equipe da SolCenter instala sem interromper as operações da empresa. A instalação leva de 1 a 3 dias dependendo do porte do projeto.",
          },
        },
        {
          "@type": "Question",
          name: "Empresas têm incentivos fiscais para energia solar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Empresas do Simples Nacional têm isenção de ICMS sobre a energia gerada. Há possibilidade de depreciação acelerada do ativo. Os consultores da SolCenter orientam em cada caso.",
          },
        },
        {
          "@type": "Question",
          name: "Existe financiamento para energia solar empresarial?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. A SolCenter trabalha com linhas de crédito específicas para pessoa jurídica, com condições especiais. Em muitos casos a parcela é menor do que a economia gerada no primeiro mês.",
          },
        },
        {
          "@type": "Question",
          name: "O sistema solar aguenta o consumo da minha empresa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. O sistema é calculado para o consumo real da empresa — não é genérico. Cada projeto é feito para atender 100% do que foi prometido, incluindo os horários de pico.",
          },
        },
      ],
    },
  ],
};

export default function LpEmpresarialLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaEmpresarial) }}
      />
      {children}
    </>
  );
}
