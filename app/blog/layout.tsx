import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

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
  return (
    <>
      <header style={{ position: 'fixed', top: 0, insetInline: 0, zIndex: 50, background: 'rgba(10,22,40,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem', height: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/">
            <Image src="/logo.svg" alt="SolCenter" width={110} height={24} />
          </Link>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Link href="/blog" style={{ color: 'rgba(255,255,255,.6)', fontSize: '13px', fontWeight: 500, textDecoration: 'none' }}>
              Blog
            </Link>
            <Link href="/" style={{ color: 'rgba(255,255,255,.6)', fontSize: '13px', fontWeight: 500, textDecoration: 'none' }}>
              Site
            </Link>
            <Link href="/#contato" style={{ background: '#FFB100', color: '#0a1628', fontWeight: 700, fontSize: '12px', padding: '6px 16px', borderRadius: '99px', textDecoration: 'none' }}>
              Simulação grátis
            </Link>
          </nav>
        </div>
      </header>
      <div style={{ paddingTop: '3.5rem' }}>
        {children}
      </div>
    </>
  )
}
