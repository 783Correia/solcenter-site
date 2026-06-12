import type { Metadata } from 'next'
import Navbar from '@/app/components/Navbar'

export const metadata: Metadata = {
  title: 'Blog — Energia Solar, Dicas e Cases | Solcenter',
  description:
    'Artigos sobre energia solar, financiamento, agronegócio, manutenção e cases reais da Solcenter no noroeste gaúcho do RS.',
  alternates: { canonical: 'https://www.solcenter.com.br/blog' },
  openGraph: {
    title: 'Blog — Energia Solar | Solcenter',
    description: 'Tudo sobre energia solar, agronegócio e mobilidade elétrica no RS.',
    url: 'https://www.solcenter.com.br/blog',
    siteName: 'Solcenter',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: 'https://www.solcenter.com.br/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Solcenter — Energia Solar no Noroeste Gaúcho',
      },
    ],
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
