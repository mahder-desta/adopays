import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let locales = ["en", "ti"];
let defaultLocale = "en";

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  // Negotiator expects plain object so we need to transform headers
  const headers = {
    "accept-language": request.headers.get("accept-language") || "",
  };

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers }).languages();
  try {
    return match(languages, locales, defaultLocale);
  } catch (error) {
    return defaultLocale;
  }
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    //"/((?!api|assets|.*\\..*|_next).*)",
    "/((?!api|assets|docs|.*\\..*|_next).*)",
    // Optional: only run on root (/) URL
  ],
};
