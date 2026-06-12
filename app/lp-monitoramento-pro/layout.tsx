import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monitoramento PRO — Manutenção e Seguro Solar | Solcenter",
  description:
    "Painel sujo perde até 30% de geração. Limpeza periódica, visita técnica anual, monitoramento em tempo real e seguro do equipamento no RS.",
  keywords:
    "manutenção sistema solar, limpeza painel solar, monitoramento energia solar, seguro painel solar, assistência técnica solar RS, Solcenter PRO",
  openGraph: {
    title: "Monitoramento PRO — Manutenção e Proteção do Seu Sistema Solar",
    description:
      "Seu sistema instalado e esquecido? Painel sujo perde até 30% da geração. Garanta o máximo com o Monitoramento PRO da Solcenter.",
    url: "https://www.solcenter.com.br/lp-monitoramento-pro",
    siteName: "Solcenter",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://www.solcenter.com.br/images/hero-monitoramento.jpg",
        width: 1200,
        height: 630,
        alt: "Monitoramento PRO — manutenção e proteção do sistema solar",
      },
    ],
  },
  alternates: {
    canonical: "https://www.solcenter.com.br/lp-monitoramento-pro",
  },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Posso contratar o Monitoramento PRO mesmo que o sistema não tenha sido instalado pela Solcenter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O Monitoramento PRO está disponível para qualquer sistema solar instalado na região de atendimento da Solcenter. Antes da ativação, a equipe realiza um diagnóstico gratuito para verificar o estado atual do equipamento.",
      },
    },
    {
      "@type": "Question",
      name: "Com que frequência os painéis solares são limpos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A recomendação é de 2 limpezas por ano. A frequência pode ser ajustada conforme a localização — áreas com mais poeira, fumaça ou presença de aves podem exigir limpeza mais frequente. O plano inclui a limpeza já no calendário anual.",
      },
    },
    {
      "@type": "Question",
      name: "O que o seguro do Monitoramento PRO cobre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A apólice cobre danos causados por descarga elétrica (raio), granizo, furto e defeito elétrico nos equipamentos principais — painéis e inversores. Os detalhes de cobertura e franquia são apresentados antes da assinatura do contrato.",
      },
    },
    {
      "@type": "Question",
      name: "Como funciona o monitoramento em tempo real?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Após a ativação, o cliente tem acesso a um app onde acompanha a geração do sistema hora a hora. A Solcenter também monitora remotamente e envia alertas automáticos se a geração cair abaixo do esperado — sem precisar verificar manualmente.",
      },
    },
    {
      "@type": "Question",
      name: "A Solcenter atende fora de Santo Cristo para manutenção solar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. A Solcenter atende mais de 60 municípios no noroeste gaúcho, incluindo Horizontina, Três de Maio, Santa Rosa, Ijuí, Tucunduva e região. Entre em contato para confirmar a disponibilidade na sua cidade.",
      },
    },
    {
      "@type": "Question",
      name: "O sistema solar precisa estar funcionando perfeitamente para contratar o plano?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. A equipe da Solcenter faz o diagnóstico inicial e, caso identifique algum problema, apresenta o orçamento para correção antes de ativar o plano. Sistemas com falhas ou geração abaixo do esperado também são atendidos.",
      },
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.solcenter.com.br/lp-monitoramento-pro#service",
            name: "Monitoramento PRO — Solcenter",
            description:
              "Serviço de monitoramento, manutenção preventiva, limpeza de painéis, visita técnica anual e seguro de equipamento solar para sistemas fotovoltaicos instalados em Santo Cristo e região do RS.",
            provider: {
              "@type": "LocalBusiness",
              name: "Solcenter Soluções em Energia",
              url: "https://www.solcenter.com.br",
              telephone: "+555598449-1054",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Dom Pedro II, 539",
                addressLocality: "Santo Cristo",
                addressRegion: "RS",
                addressCountry: "BR",
              },
            },
            areaServed: {
              "@type": "State",
              name: "Rio Grande do Sul",
            },
            serviceType: "Manutenção e Monitoramento de Sistema Solar",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Planos Monitoramento PRO",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Monitoramento em tempo real",
                    description:
                      "Acompanhamento 24/7 da geração do sistema fotovoltaico via plataforma online.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Limpeza periódica dos painéis",
                    description:
                      "Limpeza técnica dos módulos solares para manter a eficiência máxima. Painel sujo pode perder até 30% da geração.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Visita técnica anual",
                    description:
                      "Verificação completa de fiação, inversor, estrutura de fixação e conectores pelo time técnico certificado.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Seguro do equipamento",
                    description:
                      "Cobertura contra raio, granizo, furto e defeito elétrico para painéis e inversores.",
                  },
                },
              ],
            },
          }),
        }}
      />
      {children}
    </>
  );
}
