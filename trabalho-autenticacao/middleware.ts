// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Busca o token nos cookies
  const token = request.cookies.get('token')?.value

  // Se não houver token e o usuário tentar acessar /dashboard, redireciona para /login
  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

// Define quais rotas o middleware deve interceptar
export const config = {
  matcher: '/dashboard/:path*',
}