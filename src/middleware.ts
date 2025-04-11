import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the route starts with /convert/ and has a valid [pair] format (e.g., usd-to-brl)
  const isValidPairFormat = /^[a-z]{3}-to-[a-z]{3}$/i;
  const pairSegment = pathname.split('/')[2];
  const isConvertRoute = pathname.startsWith('/convert/') && pairSegment && isValidPairFormat.test(pairSegment);

  if (!isConvertRoute) {
    return NextResponse.redirect(new URL('/convert/usd-to-brl', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/convert/:path*'],
};