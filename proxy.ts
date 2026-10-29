import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
    // Evaluate string -> return "" instead of null
  const host = (request.headers.get('host') ?? "").toLowerCase();
  const url = request.nextUrl;
  const pathname= url.pathname

  console.log("Host: ", host);
  console.log("Pathname: ", pathname);

  // Rule : check for admin.wathifa.site then enter the dashboard
  const isAdminHost = host.includes('admin.wathifa.site');
  if(isAdminHost) {
    console.log("[IsAdminHost] Redirecting to dashboard");
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // Rule: check if wathifa.site and trying to access /dashboard then redirect to home
  const isMainHost = host.includes('wathifa.site');
  if(isMainHost && pathname.includes('/dashboard')) {
    console.log("[IsMainHost] Redirecting to home");
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
    matcher: [
      // Exclude API routes, static files, image optimizations, .png files, and service worker
      '/((?!api/|_next/static|_next/image|.*\\.png$|sw\.js$).*)',
    ],
  }