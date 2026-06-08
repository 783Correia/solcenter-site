import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/app/lib/supabase-admin'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, city, source, ...extra } = body

    await supabaseAdmin()
      .from('leads')
      .insert({ name, phone, city, source, extra })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Lead save error:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
