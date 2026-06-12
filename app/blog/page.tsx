import { supabase } from '@/app/lib/supabase'
import BlogPostsGrid from './posts-grid'

export const revalidate = 300

export default async function BlogPage() {
  const { data: posts } = await supabase()
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('date', { ascending: false })

  return (
    <main className="min-h-screen" style={{ background: '#faf9f7' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1a2a4a 100%)', paddingTop: '8rem', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '.65rem', letterSpacing: '.2em', textTransform: 'uppercase', color: '#FFB100', display: 'block', marginBottom: '1rem' }}>
            Blog · Solcenter
          </span>
          <h1 style={{ fontFamily: 'var(--font-display, sans-serif)', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, color: '#fff', lineHeight: .95, letterSpacing: '-.02em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Energia solar<br /><span style={{ color: '#FFB100' }}>na prática.</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,.55)', fontSize: '1rem', maxWidth: 480, margin: '0 auto', lineHeight: 1.6 }}>
            Dicas, financiamento, agronegócio e cases reais de quem já instalou energia solar no noroeste gaúcho.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '4rem 1.5rem' }}>
        <BlogPostsGrid posts={posts ?? []} />
      </section>
    </main>
  )
}
