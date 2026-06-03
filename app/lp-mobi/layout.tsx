import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "EVOX Scooter Elétrica 1000W — Revenda sem CNH e sem IPVA | Sol Center Mobi",
  description:
    "Revenda a EVOX: scooter elétrica 1000W que não exige CNH, não paga IPVA e não precisa de emplacamento. Produto pronto para a sua loja. Atendimento B2B para revendedores no Sul do Brasil.",
  keywords:
    "scooter elétrica sem CNH, moto elétrica revenda, scooter elétrica revendedor, EVOX elétrica, mobilidade elétrica RS, Sol Center Mobi, distribuidora scooter elétrica Sul Brasil, scooter 1000W sem habilitação",
  openGraph: {
    title: "EVOX Scooter Elétrica 1000W — Qualquer pessoa pode comprar | Sol Center Mobi",
    description:
      "Scooter elétrica EVOX: 1000W, sem CNH, sem IPVA, sem emplacamento. Abre um mercado que as motos convencionais não alcançam. Seja revendedor — Sul do Brasil.",
    url: "https://www.solcenter.com.br/lp-mobi",
    siteName: "Sol Center Mobi",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://www.solcenter.com.br/mobi/real/preta-1.jpg",
        width: 1920,
        height: 1440,
        alt: "EVOX Scooter Elétrica Sol Center Mobi — Preta",
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
          "name": "Sol Center",
          "item": "https://www.solcenter.com.br",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Sol Center Mobi — EVOX",
          "item": "https://www.solcenter.com.br/lp-mobi",
        },
      ],
    },
    {
      "@type": "Product",
      "@id": "https://www.solcenter.com.br/lp-mobi#product",
      "name": "EVOX — Scooter Elétrica Sol Center Mobi",
      "description":
        "Scooter elétrica EVOX com motor 1000W brushless, bateria de lítio 60v/20Ah, autonomia de 40km e velocidade máxima de 32km/h. Não exige CNH, não paga IPVA nem emplacamento. Freio a disco dianteiro, iluminação Full LED, suspensão dianteira e traseira. Disponível em Preta, Azul/Prata, Vermelha/Prata e Branca.",
      "brand": {
        "@type": "Brand",
        "name": "Sol Center Mobi",
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "Sol Center Mobi",
        "url": "https://www.solcenter.com.br/lp-mobi",
      },
      "category": "Scooter Elétrica",
      "color": ["Preta", "Azul/Prata", "Vermelha/Prata", "Branca"],
      "url": "https://www.solcenter.com.br/lp-mobi",
      "image": [
        "https://www.solcenter.com.br/mobi/real/preta-1.jpg",
        "https://www.solcenter.com.br/mobi/real/azul-1.jpg",
        "https://www.solcenter.com.br/mobi/real/vermelha-1.jpg",
        "https://www.solcenter.com.br/mobi/real/branca-1.jpg",
      ],
      "additionalProperty": [
        { "@type": "PropertyValue", "name": "Motor", "value": "1000W brushless sem escovas" },
        { "@type": "PropertyValue", "name": "Bateria", "value": "60v / 20Ah de lítio" },
        { "@type": "PropertyValue", "name": "Autonomia", "value": "Até 40 km" },
        { "@type": "PropertyValue", "name": "Velocidade Máxima", "value": "32 km/h" },
        { "@type": "PropertyValue", "name": "Tempo de Carga", "value": "6 a 8 horas" },
        { "@type": "PropertyValue", "name": "Peso Suportado", "value": "200 kg" },
        { "@type": "PropertyValue", "name": "Transmissão", "value": "3 velocidades" },
        { "@type": "PropertyValue", "name": "Pneus", "value": "3.00 – 10 pol." },
        { "@type": "PropertyValue", "name": "Suspensão", "value": "Dianteira e traseira" },
        { "@type": "PropertyValue", "name": "Freios", "value": "Disco dianteiro e traseiro" },
        { "@type": "PropertyValue", "name": "Iluminação", "value": "Full LED" },
        { "@type": "PropertyValue", "name": "CNH necessária", "value": "Não" },
        { "@type": "PropertyValue", "name": "IPVA", "value": "Não" },
        { "@type": "PropertyValue", "name": "Emplacamento", "value": "Não" },
      ],
      "offers": {
        "@type": "Offer",
        "priceCurrency": "BRL",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "Sol Center Mobi",
          "url": "https://www.solcenter.com.br/lp-mobi",
        },
      },
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
            "text": "A EVOX tem autonomia de até 40km por carga completa com bateria de lítio 60v/20Ah. O tempo de recarga é de 6 a 8 horas em tomada 110/220V.",
          },
        },
        {
          "@type": "Question",
          "name": "Como funciona o modelo de revenda da Sol Center Mobi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O revendedor adquire um lote de unidades EVOX da Sol Center Mobi, expõe na sua loja e vende. O produto é entregue na caixa pronto para comercialização. O suporte técnico pós-venda para o consumidor final é responsabilidade da Sol Center Mobi.",
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
