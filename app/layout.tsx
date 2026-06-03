import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const GA_ID = "G-2HE7N1GQ7Y";

export const metadata: Metadata = {
  title: "Solcenter — Energia Solar em Santo Cristo e Região | RS",
  description:
    "Instalação de energia solar residencial, empresarial e agronegócio em Santo Cristo/RS. +1400 projetos entregues. Economize até 95% na sua conta de luz. Orçamento grátis.",
  keywords:
    "energia solar Santo Cristo, energia solar RS, instalação solar, sistema fotovoltaico, Solcenter, painel solar, energia fotovoltaica, reduzir conta de luz",
  openGraph: {
    title: "Solcenter — Energia Solar em Santo Cristo e Região",
    description:
      "Mais de 1400 projetos entregues no RS. Economize até 95% na conta de luz.",
    url: "https://www.solcenter.com.br",
    siteName: "Solcenter",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.solcenter.com.br",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.solcenter.com.br/#business",
      "name": "Solcenter Energia Solar",
      "alternateName": "SolCenter",
      "url": "https://www.solcenter.com.br",
      "telephone": "+55-55-98449-1054",
      "email": "atendimento@solcenter.com.br",
      "description": "Empresa especializada em instalação de energia solar residencial, empresarial e agronegócio em Santo Cristo e região noroeste do RS. Mais de 1.400 projetos entregues em mais de 60 municípios gaúchos. Economize até 95% na conta de luz.",
      "foundingDate": "2014",
      "priceRange": "$$",
      "currenciesAccepted": ["BRL"],
      "paymentAccepted": ["Cash", "CreditCard", "DebitCard", "Invoice"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Dom Pedro II, 539",
        "addressLocality": "Santo Cristo",
        "addressRegion": "RS",
        "postalCode": "98890-000",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -27.8317,
        "longitude": -54.6856
      },
      "areaServed": [
        { "@type": "City", "name": "Santo Cristo" },
        { "@type": "City", "name": "Horizontina" },
        { "@type": "City", "name": "Três de Maio" },
        { "@type": "City", "name": "Santa Rosa" },
        { "@type": "City", "name": "Ijuí" },
        { "@type": "City", "name": "Tucunduva" },
        { "@type": "City", "name": "Novo Machado" },
        { "@type": "City", "name": "Porto Lucena" },
        { "@type": "AdministrativeArea", "name": "Noroeste do Rio Grande do Sul" }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": 5.0,
        "reviewCount": 6,
        "bestRating": 5,
        "worstRating": 1
      },
      "sameAs": [
        "https://www.google.com/maps/place/Solcenter+Soluções+em+Energia/@-27.8286,-54.3358,17z",
        "https://www.instagram.com/solcenterenergia/",
        "https://www.facebook.com/solcenterenergia",
        "https://www.youtube.com/@solcenter"
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday"],
          "opens": "08:00",
          "closes": "12:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Sunday"],
          "opens": "00:00",
          "closes": "00:00"
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://www.solcenter.com.br/#organization",
      "name": "Solcenter Energia Solar",
      "alternateName": "SolCenter",
      "url": "https://www.solcenter.com.br",
      "logo": "https://www.solcenter.com.br/logo.svg",
      "description": "Especialistas em energia solar no noroeste gaúcho com mais de 1.400 projetos entregues para residências, empresas e agronegócio em mais de 60 municípios do RS.",
      "sameAs": [
        "https://www.instagram.com/solcenterenergia/",
        "https://www.facebook.com/solcenterenergia",
        "https://www.youtube.com/@solcenter"
      ],
      "knowsAbout": [
        "Energia solar fotovoltaica",
        "Instalação de painéis solares",
        "Sistema fotovoltaico residencial",
        "Energia solar para agronegócio",
        "Energia solar empresarial",
        "Mobilidade elétrica",
        "Scooter elétrica EVOX",
        "Redução de conta de luz",
        "Financiamento solar Sicredi",
        "Homologação junto à distribuidora",
        "Monitoramento de sistema solar"
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.solcenter.com.br/#services",
      "provider": { "@id": "https://www.solcenter.com.br/#organization" },
      "areaServed": { "@type": "AdministrativeArea", "name": "Noroeste do Rio Grande do Sul" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Soluções Solcenter",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Energia Solar Residencial",
              "url": "https://www.solcenter.com.br/lp-energia",
              "description": "Instalação de sistema fotovoltaico para residências em Santo Cristo e região do RS. Reduza até 95% da sua conta de luz. Projeto personalizado, instalação completa, homologação e monitoramento contínuo. Parcelas menores que a economia gerada."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Energia Solar Empresarial",
              "description": "Sistemas fotovoltaicos para empresas e comércio no noroeste gaúcho. Redução de custos operacionais e retorno sobre investimento em até 4 anos."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Energia Solar para Agronegócio",
              "description": "Soluções de energia solar para propriedades rurais no RS: irrigação, secadores, tulhas e instalações agrícolas. Projeto e instalação especializada para o campo."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobilidade Elétrica — Scooter EVOX",
              "url": "https://www.solcenter.com.br/lp-mobi",
              "description": "Distribuição e revenda da scooter elétrica EVOX 1000W para revendas e distribuidores no Sul do Brasil. Sem CNH, sem IPVA, sem emplacamento. Motor brushless 1000W, bateria de lítio removível 60v/20Ah."
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quanto custa instalar energia solar em Santo Cristo RS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O valor varia conforme o consumo da residência. Para uma conta de R$300/mês, o investimento médio é de R$15.000 a R$20.000, com retorno em 4 a 5 anos e economia de até 95% na conta de luz por 25 anos. A Solcenter oferece orçamento gratuito sem compromisso."
          }
        },
        {
          "@type": "Question",
          "name": "Qual a economia real com energia solar na Solcenter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nossos clientes economizam em média 85% a 95% na conta de luz. Um cliente com conta de R$680 passou a pagar R$47 por mês após a instalação — economia de mais de R$7.500 por ano. O sistema se paga em 4 a 6 anos e gera por mais de 25 anos."
          }
        },
        {
          "@type": "Question",
          "name": "A Solcenter atende em quais cidades do RS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Atendemos Santo Cristo e toda a região noroeste do RS, incluindo Horizontina, Três de Maio, Santa Rosa, Ijuí, Tucunduva, Novo Machado, Porto Lucena e mais de 60 municípios gaúchos. Somos referência em energia solar na região com mais de 1.400 projetos entregues."
          }
        },
        {
          "@type": "Question",
          "name": "Quanto tempo leva para instalar energia solar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O processo completo leva de 30 a 60 dias: visita técnica, projeto, aprovação na distribuidora e instalação. A instalação física é feita em 1 a 2 dias. A Solcenter cuida de toda a burocracia com a concessionária."
          }
        },
        {
          "@type": "Question",
          "name": "Tem financiamento para energia solar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim. Trabalhamos com financiamento Sicredi com condições facilitadas. A maioria dos clientes paga parcelas menores do que a economia gerada na conta de luz — ou seja, já economiza desde o primeiro mês mesmo financiando."
          }
        },
        {
          "@type": "Question",
          "name": "O que é a scooter elétrica EVOX da SolCenter Mobi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A EVOX é uma scooter elétrica 100% elétrica com motor 1000W brushless, bateria de lítio removível 60v/20Ah, autonomia de até 40km e velocidade máxima de 32km/h. Não exige CNH, não paga IPVA nem emplacamento. Disponível em 4 cores: Preta, Azul/Prata, Vermelha/Prata e Branca. Distribuída pela SolCenter Mobi para revendedores no Sul do Brasil."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-full antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
      {/* Google Analytics 4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}');
      `}</Script>
    </html>
  );
}
