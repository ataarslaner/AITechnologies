import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales, type Locale } from "@/i18n/config";

function pickLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookie && (locales as readonly string[]).includes(cookie)) {
    return cookie as Locale;
  }
  const accept = request.headers.get("accept-language") ?? "";
  const langs = accept
    .split(",")
    .map((entry) => entry.split(";")[0].trim().toLowerCase());
  for (const lang of langs) {
    const base = lang.split("-")[0];
    if ((locales as readonly string[]).includes(base)) {
      return base as Locale;
    }
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return;

  const locale = pickLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
