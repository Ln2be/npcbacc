// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname);
  //   if (request.nextUrl.pathname.startsWith("/docs")) {
  //     console.log(request.nextUrl.pathname);
  //     // return NextResponse.next();
  //     return NextResponse.rewrite(new URL("/docs", request.url));
  //   }

  //   return NextResponse.next();
  // return NextResponse.redirect(new URL("/about-2", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/docs",
};
