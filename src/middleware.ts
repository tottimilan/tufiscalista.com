import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const headers = response.headers;

  headers.set("X-Frame-Options", "DENY");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload"
  );

  if (!request.nextUrl.pathname.startsWith("/api")) {
    headers.set("X-XSS-Protection", "1; mode=block");
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon-|sw.js).*)"],
};
