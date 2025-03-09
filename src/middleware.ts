import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  
  // Allow access to login page
  if (path === '/admin/login') {
    return NextResponse.next()
  }

  // Check for admin token
  const token = request.cookies.get('admin_token')?.value

  if (!token && path.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  try {
    // Verify token
    if (token) {
      await jwtVerify(token, new TextEncoder().encode(JWT_SECRET))
      return NextResponse.next()
    }
  } catch (error) {
    // Token is invalid or expired
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  return NextResponse.next()
}

// Configure matcher
export const config = {
  matcher: ['/admin/:path*']
} 