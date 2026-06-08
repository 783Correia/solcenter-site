'use server'

import { revalidatePath } from 'next/cache'
import { supabaseAdmin } from '@/app/lib/supabase-admin'

type PostData = {
  title: string
  slug: string
  excerpt: string
  category: string
  image_url: string
  date: string
  read_time: string
  focus_keyword: string
  meta_title: string
  meta_description: string
  published: boolean
  content: { heading: string; body: string }[]
}

export async function createPost(data: PostData): Promise<{ slug: string }> {
  const { data: created, error } = await supabaseAdmin.from('blog_posts').insert(data).select('slug').single()
  if (error) throw new Error(error.message)
  revalidatePath('/blog')
  revalidatePath('/seoblog/posts')
  return { slug: created.slug }
}

export async function updatePost(id: string, data: Partial<PostData>): Promise<{ slug: string }> {
  const { data: updated, error } = await supabaseAdmin.from('blog_posts').update(data).eq('id', id).select('slug').single()
  if (error) throw new Error(error.message)
  revalidatePath('/blog')
  revalidatePath('/seoblog/posts')
  return { slug: updated.slug }
}

export async function deletePost(id: string) {
  const { error } = await supabaseAdmin.from('blog_posts').delete().eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/blog')
  revalidatePath('/seoblog/posts')
}

export async function togglePublish(id: string, published: boolean) {
  const { error } = await supabaseAdmin.from('blog_posts').update({ published }).eq('id', id)
  if (error) throw new Error(error.message)
  revalidatePath('/blog')
  revalidatePath('/seoblog/posts')
}
