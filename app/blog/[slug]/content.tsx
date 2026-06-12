'use client'

import Link from 'next/link'
import Image from 'next/image'
import { BlogPost } from '@/app/types/blog'

function toAnchorId(heading: string): string {
  return heading.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').replace(/-+/g, '-')
}

const WHATSAPP = 'https://wa.me/5555984491054'
const BASE_URL = 'https://www.solcenter.com.br'

export default function BlogPostContent({ post, related }: { post: BlogPost; related: BlogPost[] }) {
  return (
    <main style={{ background: '#faf9f7', minHeight: '100vh' }}>
      {/* Hero do post */}
      <section style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1a2a4a 100%)', paddingTop: '8rem', paddingBottom: '3rem' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          {/* Breadcrumb */}
          <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 12, color: 'rgba(255,255,255,.65)', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,.65)', textDecoration: 'none' }}>Início</Link>
            <span>/</span>
            <Link href="/blog" style={{ color: 'rgba(255,255,255,.65)', textDecoration: 'none' }}>Blog</Link>
            <span>/</span>
            <span style={{ color: 'rgba(255,255,255,.85)' }}>{post.category}</span>
          </nav>

          <span style={{ display: 'inline-block', background: 'rgba(255,177,0,.15)', color: '#FFB100', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.2em', padding: '4px 14px', borderRadius: 999, marginBottom: '1.25rem' }}>
            {post.category}
          </span>

          <h1 style={{ fontFamily: 'var(--font-display, sans-serif)', fontSize: 'clamp(26px, 4.5vw, 44px)', fontWeight: 900, color: '#fff', lineHeight: 1.1, letterSpacing: '-.02em', marginBottom: '1.25rem' }}>
            {post.title}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, color: 'rgba(255,255,255,.45)', fontSize: 13 }}>
            <span>{new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
            <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(255,255,255,.3)', flexShrink: 0 }} />
            <span>{post.read_time} de leitura</span>
          </div>
        </div>
      </section>

      {/* Imagem de capa */}
      <div style={{ maxWidth: 900, margin: '-2rem auto 0', padding: '0 1.5rem', position: 'relative', zIndex: 10 }}>
        <div style={{ borderRadius: 20, overflow: 'hidden', aspectRatio: '21/9', background: '#1a2a4a', position: 'relative', boxShadow: '0 24px 80px rgba(0,0,0,.25)' }}>
          {post.image_url ? (
            <Image src={post.image_url} alt={post.title} fill style={{ objectFit: 'cover' }} unoptimized priority />
          ) : (
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #0a1628, #1a3a6a)' }} />
          )}
        </div>
      </div>

      {/* Conteúdo */}
      <section style={{ maxWidth: 800, margin: '0 auto', padding: '4rem 1.5rem' }}>
        {/* Excerpt */}
        <p className="article-excerpt" style={{ fontSize: '1.15rem', color: '#444', lineHeight: 1.75, marginBottom: '2.5rem', fontWeight: 500 }}>
          {post.excerpt}
        </p>

        {/* Índice */}
        {post.content.filter(s => s.heading).length >= 3 && (
          <nav style={{ background: '#fff', border: '1px solid rgba(0,0,0,.08)', borderRadius: 16, padding: '1.5rem', marginBottom: '2.5rem' }}>
            <p style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '.6rem', letterSpacing: '.2em', textTransform: 'uppercase', color: '#FFB100', marginBottom: '.75rem' }}>Neste artigo</p>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {post.content.filter(s => s.heading).map((section, i) => (
                <li key={i} style={{ display: 'flex', gap: 8, alignItems: 'baseline' }}>
                  <span style={{ color: '#FFB100', fontWeight: 700, fontSize: 11, fontFamily: 'var(--font-mono, monospace)', flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</span>
                  <a href={`#${toAnchorId(section.heading)}`} style={{ color: '#444', textDecoration: 'none', fontSize: '.9rem', lineHeight: 1.4 }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#FFB100')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#444')}>
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Seções */}
        {post.content.map((section, i) => (
          <div key={i} id={section.heading ? toAnchorId(section.heading) : undefined} style={{ marginBottom: '2.5rem', scrollMarginTop: 96 }}>
            {section.heading && (
              <h2 style={{ fontFamily: 'var(--font-display, sans-serif)', fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 800, color: '#0a1628', marginBottom: '1rem', letterSpacing: '-.01em' }}>
                {section.heading}
              </h2>
            )}
            {section.body.includes('<') ? (
              <div className="prose-body" dangerouslySetInnerHTML={{ __html: section.body }}
                style={{ color: '#555', lineHeight: 1.75, fontSize: '1rem' }} />
            ) : (
              section.body.split('\n\n').map((p, j) => (
                <p key={j} style={{ color: '#555', lineHeight: 1.75, fontSize: '1rem', marginBottom: '1rem' }}>{p}</p>
              ))
            )}
          </div>
        ))}

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, #0a1628, #1a2a4a)', borderRadius: 20, padding: '3rem 2rem', textAlign: 'center', marginTop: '3rem' }}>
          <h3 style={{ fontFamily: 'var(--font-display, sans-serif)', fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 800, color: '#fff', marginBottom: '.75rem' }}>
            Quer saber se vale a pena pra você?
          </h3>
          <p style={{ color: 'rgba(255,255,255,.55)', maxWidth: 420, margin: '0 auto 2rem', lineHeight: 1.6, fontSize: '.95rem' }}>
            Fale com um consultor da SolCenter e receba uma análise gratuita para a sua situação.
          </p>
          <a href={`${WHATSAPP}?text=Olá! Li o artigo "${post.title}" e quero saber mais sobre energia solar.`}
            target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#FFB100', color: '#0a1628', fontWeight: 800, padding: '14px 28px', borderRadius: 999, fontSize: '.9rem', textDecoration: 'none', letterSpacing: '.02em' }}>
            Análise gratuita pelo WhatsApp
          </a>
        </div>

        <div style={{ marginTop: '2.5rem' }}>
          <Link href="/blog" style={{ color: '#999', textDecoration: 'none', fontSize: '.9rem', fontWeight: 600 }}>
            ← Voltar ao Blog
          </Link>
        </div>
      </section>

      {/* Posts relacionados */}
      {related.length > 0 && (
        <section style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem 5rem', borderTop: '1px solid rgba(0,0,0,.06)', paddingTop: '3rem' }}>
          <h3 style={{ fontFamily: 'var(--font-display, sans-serif)', fontSize: '1.5rem', fontWeight: 800, color: '#0a1628', marginBottom: '1.5rem' }}>
            Artigos relacionados
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {related.map(r => (
              <Link key={r.id} href={`/blog/${r.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(0,0,0,.06)', transition: 'transform .2s' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-3px)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}>
                  <div style={{ position: 'relative', aspectRatio: '16/9', background: '#1a2a4a' }}>
                    {r.image_url && <Image src={r.image_url} alt={r.title} fill style={{ objectFit: 'cover' }} unoptimized />}
                  </div>
                  <div style={{ padding: '1rem' }}>
                    <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', color: '#FFB100', letterSpacing: '.1em' }}>{r.category}</span>
                    <h4 style={{ fontFamily: 'var(--font-display, sans-serif)', fontSize: '.95rem', fontWeight: 800, color: '#0a1628', lineHeight: 1.3, marginTop: 4 }}>
                      {r.title}
                    </h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <style>{`
        .prose-body p { margin-bottom: 1rem; }
        .prose-body ul { list-style: disc; padding-left: 1.4rem; margin-bottom: 1rem; }
        .prose-body ol { list-style: decimal; padding-left: 1.4rem; margin-bottom: 1rem; }
        .prose-body li { margin-bottom: .3rem; }
        .prose-body strong { color: #0a1628; font-weight: 700; }
        .prose-body h3 { font-family: var(--font-display, sans-serif); font-size: 1.15rem; font-weight: 700; color: #0a1628; margin: 1.5rem 0 .5rem; }
        .prose-body img { max-width: 100%; border-radius: 12px; margin: 1.5rem 0; }
      `}</style>
    </main>
  )
}
