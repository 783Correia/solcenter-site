import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Energia Solar, Dicas e Cases | SolCenter',
  description:
    'Artigos sobre energia solar, financiamento, agronegócio e cases reais da Sol Center no noroeste gaúcho.',
  alternates: { canonical: 'https://www.solcenter.com.br/blog' },
  openGraph: {
    title: 'Blog — Energia Solar | SolCenter',
    description: 'Tudo sobre energia solar, agronegócio e mobilidade elétrica no RS.',
    url: 'https://www.solcenter.com.br/blog',
    siteName: 'SolCenter',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
