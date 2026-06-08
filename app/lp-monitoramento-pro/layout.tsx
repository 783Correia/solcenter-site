import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monitoramento PRO — Manutenção, Limpeza e Seguro Solar | SolCenter",
  description:
    "Painel sujo perde até 30% de geração. O Monitoramento PRO da SolCenter inclui limpeza periódica, visita técnica anual, monitoramento em tempo real e seguro do equipamento. Santo Cristo e região do RS.",
  keywords:
    "manutenção sistema solar, limpeza painel solar, monitoramento energia solar, seguro painel solar, assistência técnica solar RS, SolCenter PRO",
  openGraph: {
    title: "Monitoramento PRO — Manutenção e Proteção do Seu Sistema Solar",
    description:
      "Seu sistema instalado e esquecido? Painel sujo perde até 30% da geração. Garanta o máximo com o Monitoramento PRO da SolCenter.",
    url: "https://www.solcenter.com.br/lp-monitoramento-pro",
    siteName: "SolCenter",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.solcenter.com.br/lp-monitoramento-pro",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.solcenter.com.br/lp-monitoramento-pro#service",
            name: "Monitoramento PRO — SolCenter",
            description:
              "Serviço de monitoramento, manutenção preventiva, limpeza de painéis, visita técnica anual e seguro de equipamento solar para sistemas fotovoltaicos instalados em Santo Cristo e região do RS.",
            provider: {
              "@type": "LocalBusiness",
              name: "SolCenter Soluções em Energia",
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
