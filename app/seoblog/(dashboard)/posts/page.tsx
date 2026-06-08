import { supabaseAdmin as getAdmin } from '@/app/lib/supabase-admin'
import Link from 'next/link'
import PostActions from './PostActions'

export const dynamic = 'force-dynamic'

export default async function PostsPage() {
  const { data: posts } = await getAdmin()
    .from('blog_posts')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="p-6 max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-white text-2xl font-bold">Posts</h1>
          <p className="text-gray-500 text-sm mt-0.5">{posts?.length ?? 0} posts no total</p>
        </div>
        <Link href="/seoblog/posts/new"
          className="font-bold px-5 py-2.5 rounded-xl transition-colors text-sm text-gray-950"
          style={{ background: '#FFB100' }}>
          + Novo Post
        </Link>
      </div>

      {(!posts || posts.length === 0) && (
        <div className="text-center py-20 bg-gray-900 rounded-2xl border border-gray-800">
          <p className="text-gray-400 text-lg mb-2">Nenhum post ainda</p>
          <p className="text-gray-600 text-sm mb-6">Crie o primeiro post de energia solar.</p>
          <Link href="/seoblog/posts/new"
            className="inline-block font-bold px-6 py-3 rounded-xl text-sm text-gray-950"
            style={{ background: '#FFB100' }}>
            + Criar primeiro post
          </Link>
        </div>
      )}

      {posts && posts.length > 0 && (
        <div className="space-y-2">
          {posts.map(post => (
            <div key={post.id} className="bg-gray-900 rounded-xl px-5 py-4 flex items-center gap-4 border border-gray-800 hover:border-gray-700 transition-colors">
              {post.image_url && (
                <div className="w-16 h-12 rounded-lg overflow-hidden bg-gray-800 shrink-0">
                  <img src={post.image_url} alt={post.title} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${post.published ? 'text-gray-950' : 'bg-gray-700 text-gray-400'}`}
                    style={post.published ? { background: '#FFB100' } : {}}>
                    {post.published ? 'Publicado' : 'Rascunho'}
                  </span>
                  <span className="text-gray-600 text-xs">{post.category}</span>
                  <span className="text-gray-700 text-xs">·</span>
                  <span className="text-gray-600 text-xs">{post.read_time} de leitura</span>
                </div>
                <p className="text-white font-medium truncate">{post.title}</p>
                <p className="text-gray-600 text-xs mt-0.5 font-mono">/blog/{post.slug}</p>
              </div>
              <PostActions post={post} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
