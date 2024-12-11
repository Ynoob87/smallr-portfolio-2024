import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import type { Locale } from "@/types";

const validLocales: Locale[] = ["en", "zh"];
const defaultLocale: Locale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 跳過靜態資源和API路由
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return;
  }

  // 如果訪問根路徑，重定向到默認語言
  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  // 檢查路徑是否包含有效的語言代碼
  const pathnameHasValidLocale = validLocales.some(
    (locale) =>
      pathname.startsWith(`/${locale}`) || pathname.startsWith(`/${locale}/`)
  );

  // 如果沒有有效的語言代碼，添加默認語言
  if (!pathnameHasValidLocale) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
