import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  console.log('Middleware running for:', request.nextUrl.pathname)

  const sessionCookie = request.cookies.get('__session')
  const pathname = request.nextUrl.pathname

  const blockedIfNotAuthenticatedPaths = ['/profile']
  const blockIfAuthenticatedPaths = ['/login']

  const requiresAuth = blockedIfNotAuthenticatedPaths.some((path) => pathname.startsWith(path))
  const shouldBlockIfAuthenticated = blockIfAuthenticatedPaths.some((path) => pathname.startsWith(path))

  const redirectToLogin = () => {
    // Create absolute URL for redirect
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  const redirectToHome = () => {
    // Create absolute URL for redirect to home
    const url = request.nextUrl.clone()
    url.pathname = '/'
    return NextResponse.redirect(url)
  }

  // No cookie - not logged in
  if (!sessionCookie) {
    if (requiresAuth) return redirectToLogin()
    return NextResponse.next()
  }

  // Has cookie - user is authenticated
  // Block access to login page if already authenticated
  if (shouldBlockIfAuthenticated) {
    return redirectToHome()
  }

  // Note: You had a logic issue here - this line would always redirect authenticated users
  // trying to access protected routes. I've commented it out as it seems incorrect.
  // if (requiresAuth) return redirectToLogin()

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - /api (API routes)
     * - /_next/static (static files)
     * - /_next/image (image optimization files)
     * - /favicon.ico (favicon file)
     * - public files (images, fonts, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2|ttf|otf)).*)',
  ],
}
