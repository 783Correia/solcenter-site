'use client'

import Link from 'next/link'
import Image from 'next/image'
import { BlogPost } from '@/app/types/blog'

export default function BlogPostsGrid({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) {
    return (
      <p style={{ textAlign: 'center', color: '#999', padding: '5rem 0', fontSize: '.95rem' }}>
        Nenhum post publicado ainda.
      </p>
    )
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
      {posts.map(post => (
        <Link key={post.id} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
          <article style={{
            background: '#fff',
            borderRadius: 16,
            overflow: 'hidden',
            border: '1px solid rgba(0,0,0,.06)',
            boxShadow: '0 2px 12px rgba(0,0,0,.06)',
            transition: 'transform .25s, box-shadow .25s',
            cursor: 'pointer',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
            ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,0,0,.12)'
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
            ;(e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(0,0,0,.06)'
          }}>
            {/* Imagem */}
            <div style={{ position: 'relative', aspectRatio: '16/9', background: '#e5e7eb' }}>
              {post.image_url ? (
                <Image src={post.image_url} alt={post.title} fill style={{ objectFit: 'cover' }} unoptimized />
              ) : (
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #0a1628, #1a3a6a)' }} />
              )}
              <div style={{ position: 'absolute', top: 12, left: 12 }}>
                <span style={{ background: '#FFB100', color: '#0a1628', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', padding: '3px 10px', borderRadius: 999 }}>
                  {post.category}
                </span>
              </div>
            </div>

            {/* Conteúdo */}
            <div style={{ padding: '1.25rem' }}>
              <div style={{ display: 'flex', gap: 12, marginBottom: '.75rem', fontSize: 11, color: '#999', fontFamily: 'var(--font-mono, monospace)' }}>
                <span>{new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                <span>·</span>
                <span>{post.read_time} de leitura</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display, sans-serif)', fontSize: '1.05rem', fontWeight: 800, color: '#0a1628', lineHeight: 1.3, marginBottom: '.5rem' }}>
                {post.title}
              </h2>
              <p style={{ fontSize: '.85rem', color: '#666', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {post.excerpt}
              </p>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: '.75rem', fontSize: '.8rem', fontWeight: 700, color: '#FFB100' }}>
                Ler mais →
              </span>
            </div>
          </article>
        </Link>
      ))}
    </div>
  )
}
