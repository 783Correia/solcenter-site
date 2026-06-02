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
      "url": "https://www.solcenter.com.br",
      "telephone": "+55-55-98449-2001",
      "email": "atendimento@solcenter.com.br",
      "description": "Empresa especializada em instalação de energia solar residencial, empresarial e agronegócio em Santo Cristo e região do RS. Mais de 1400 projetos entregues. Economize até 95% na conta de luz.",
      "foundingDate": "2015",
      "priceRange": "$$",
      "currenciesAccepted": "BRL",
      "paymentAccepted": "Dinheiro, Cartão, Financiamento",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Santo Cristo",
        "addressLocality": "Santo Cristo",
        "addressRegion": "RS",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-27.8317",
        "longitude": "-54.6856"
      },
      "areaServed": [
        { "@type": "State", "name": "Rio Grande do Sul" }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "1400",
        "bestRating": "5",
        "worstRating": "1"
      },
      "sameAs": [
        "https://www.instagram.com/solcenter_energia/",
        "https://www.facebook.com/solcenterenergia"
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
          "dayOfWeek": "Saturday",
          "opens": "08:00",
          "closes": "12:00"
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://www.solcenter.com.br/#organization",
      "name": "Solcenter Energia Solar",
      "url": "https://www.solcenter.com.br",
      "description": "Especialistas em energia solar no RS com mais de 1400 projetos entregues para residências, empresas e agronegócio.",
      "knowsAbout": [
        "Energia solar fotovoltaica",
        "Instalação de painéis solares",
        "Sistema fotovoltaico residencial",
        "Energia solar para agronegócio",
        "Energia solar empresarial",
        "Mobilidade elétrica",
        "Moto elétrica",
        "Redução de conta de luz",
        "Financiamento solar"
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.solcenter.com.br/#services",
      "provider": { "@id": "https://www.solcenter.com.br/#organization" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Soluções Solcenter",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Energia Solar Residencial",
              "description": "Instalação de sistema fotovoltaico para residências. Reduza até 95% da sua conta de luz. Projeto personalizado, instalação completa e monitoramento."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Energia Solar Empresarial",
              "description": "Sistemas fotovoltaicos para empresas e comércio. Redução de custos operacionais e retorno sobre investimento em até 4 anos."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Energia Solar para Agronegócio",
              "description": "Soluções de energia solar para propriedades rurais, irrigação, secadores e instalações agrícolas no RS."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobilidade Elétrica",
              "description": "Motos elétricas para revendas, frotas e distribuidores. Solução de mobilidade sustentável com retorno financeiro comprovado."
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
          "name": "Quanto custa instalar energia solar em casa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O valor varia conforme o consumo da residência. Para uma conta de R$300, o investimento médio é de R$15.000 a R$20.000, com retorno em 4 a 5 anos e economia de até 95% na conta de luz por 25 anos. Entre em contato para um orçamento gratuito."
          }
        },
        {
          "@type": "Question",
          "name": "Qual a economia real com energia solar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nossos clientes economizam em média 85% a 95% na conta de luz. Um cliente com conta de R$680 passou a pagar R$47 por mês após a instalação. O sistema se paga em 4 a 6 anos e gera energia por mais de 25 anos."
          }
        },
        {
          "@type": "Question",
          "name": "A Solcenter atende em quais cidades do RS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Atendemos Santo Cristo e toda a região noroeste do RS, incluindo municípios vizinhos. Com mais de 1400 projetos entregues, somos referência em energia solar na região."
          }
        },
        {
          "@type": "Question",
          "name": "Quanto tempo leva para instalar os painéis solares?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O processo completo leva de 30 a 60 dias: visita técnica, projeto, aprovação na distribuidora e instalação. A instalação em si é feita em 1 a 2 dias dependendo do tamanho do sistema."
          }
        },
        {
          "@type": "Question",
          "name": "Tem financiamento para energia solar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim. Trabalhamos com diversas linhas de financiamento, incluindo BNDES e bancos parceiros, com parcelas que geralmente são menores do que a economia gerada na conta de luz — ou seja, você já economiza desde o primeiro mês."
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
