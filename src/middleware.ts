import { NextResponse } from "next/server"
import { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

const protectedRoutes = ["/main"]

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req })
  const { pathname, origin } = req.nextUrl

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  )

  if (isProtected && !token) {
    const loginUrl = new URL("/login", origin)
    loginUrl.searchParams.set("callbackUrl", pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
