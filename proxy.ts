import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Next.js 16: o antigo `middleware` foi renomeado para `proxy`.

// Faxina do hack legado: o site WordPress antigo foi comprometido e o Google
// indexou ~130 mil URLs de spam sob `/goods/...`. Devolvemos 410 (Gone) para
// que o Google descarte essas páginas do índice mais rápido que um 404.
function isLegacySpam(pathname: string): boolean {
  return pathname === '/goods' || pathname.startsWith('/goods/')
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 1) Spam legado -> 410 Gone
  if (isLegacySpam(pathname)) {
    return new NextResponse('410 Gone — esta página não existe mais.', {
      status: 410,
      headers: { 'content-type': 'text/plain; charset=utf-8' },
    })
  }

  // 2) Proteção do painel administrativo
  if (pathname.startsWith('/seoblog') && !pathname.startsWith('/seoblog/login')) {
    const session = request.cookies.get('solcenter-admin')
    if (!session || session.value !== process.env.ADMIN_SECRET) {
      return NextResponse.redirect(new URL('/seoblog/login', request.url))
    }
  }

  const response = NextResponse.next()
  response.headers.set('x-next-pathname', pathname)
  return response
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|.*\\.svg$).*)'],
}
