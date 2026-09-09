import { NextResponse, type NextRequest } from 'next/server'

/**
 * Host Dashboard proxy/middleware.
 * - Restricts production requests strictly to host.cityculture.in
 * - Enforces HTTPS in production
 * - Allows full local development on localhost
 */
export async function proxy(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const isLocalhost =
    hostname.includes('localhost') ||
    hostname.includes('127.0.0.1') ||
    hostname.includes('0.0.0.0')

  // In production, restrict to host subdomain only
  if (!isLocalhost) {
    const host = hostname.split(':')[0]
    const ALLOWED_HOST = 'host.cityculture.in'

    if (host !== ALLOWED_HOST) {
      return new NextResponse('Access Denied: This dashboard is only accessible from host.cityculture.in', {
        status: 403,
        headers: { 'Content-Type': 'text/plain' },
      })
    }

    // Force HTTPS in production
    if (request.nextUrl.protocol !== 'https:' && process.env.NODE_ENV === 'production') {
      const httpsUrl = request.nextUrl.clone()
      httpsUrl.protocol = 'https:'
      return NextResponse.redirect(httpsUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
