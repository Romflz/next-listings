import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  console.log('Middleware running for:', request.nextUrl.pathname)

  const sessionCookie = request.cookies.get('__session') // For possibly authenticated requests
  const pathname = request.nextUrl.pathname // Where the user trying to go
  const search = request.nextUrl.search // includes leading "?" or empty string

  const blockedIfNotAuthenticatedPaths = ['/profile', '/create']
  const blockIfAuthenticatedPaths = ['/login']

  const requiresAuth = blockedIfNotAuthenticatedPaths.some((path) => pathname.startsWith(path))
  const shouldBlockIfAuthenticated = blockIfAuthenticatedPaths.some((path) => pathname.startsWith(path))

  const redirectToLogin = () => {
    const loginUrl = request.nextUrl.clone()
    loginUrl.pathname = '/login'
    // Preserve the full original path + query so we can return to it after login
    loginUrl.searchParams.set('redirect', `${pathname}${search}`)
    return NextResponse.redirect(loginUrl)
  }

  // No cookie - not logged in
  if (!sessionCookie) {
    if (requiresAuth) return redirectToLogin()
    return NextResponse.next()
  }

  // Check session with backend
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/api/session`, {
      headers: { Cookie: `__session=${sessionCookie.value}` },
    })

    if (response.status === 200) {
      // Logged in - optionally block /login and go to the redirect target or a default
      if (shouldBlockIfAuthenticated) {
        const redirectParam = request.nextUrl.searchParams.get('redirect')
        // Only allow same-site relative paths to avoid open redirects
        const safeTarget = redirectParam && redirectParam.startsWith('/') && !redirectParam.startsWith('//') ? redirectParam : '/'
        return NextResponse.redirect(new URL(safeTarget, request.url))
      }
      return NextResponse.next()
    }
  } catch (error) {
    console.error('Session check failed:', error)
  }

  // Not authenticated or error
  if (requiresAuth) return redirectToLogin()

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
