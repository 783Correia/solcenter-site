import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { password } = await request.json()
  const envPw = process.env.ADMIN_PASSWORD?.trim() ?? ''
  const envSecret = process.env.ADMIN_SECRET?.trim() ?? ''
  const match = password.trim() === envPw

  if (match && envPw) {
    const cookieStore = await cookies()
    cookieStore.set('solcenter-admin', envSecret, {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
    })
    return NextResponse.json({ ok: true })
  }

  return NextResponse.json({ error: 'Senha incorreta' }, { status: 401 })
}
