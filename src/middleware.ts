import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the route starts with /convert/ and has a valid [pair] format (e.g., usd-to-brl)
  const isValidPairFormat = /^[a-z]{3}-to-[a-z]{3}$/i;
  const isConvertRoute = pathname.startsWith('/convert/') && isValidPairFormat.test(pathname.split('/')[2]);

  if (!isConvertRoute) {
    return NextResponse.redirect(new URL('/convert/usd-to-brl', request.url));
  }

  return NextResponse.next();
}

// Define quais rotas o middleware deve afetar (opcional)
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};