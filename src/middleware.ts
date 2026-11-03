import { NextRequest, NextResponse } from "next/server";

const SUPPORTED_LOCALES = ["en", "es"] as const;
type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];
const DEFAULT_LOCALE: SupportedLocale = "es";

// Countries where English should be default
const ENGLISH_COUNTRIES = new Set([
  "US", "GB", "CA", "AU", "NZ", "IE", "ZA", "SG", "IN", "PH", "NG", "GH",
  "KE", "UG", "ZM", "ZW", "JM", "TT", "BB", "BS", "BZ", "PG", "FJ", "MW",
  "BW", "NA", "SZ", "LS", "RW", "TZ", "MZ", "MU",
]);

function getLocaleFromRequest(request: NextRequest): SupportedLocale {
  // 1. Check for Vercel geo header (IP country)
  const country = request.headers.get("x-vercel-ip-country");
  if (country && ENGLISH_COUNTRIES.has(country)) {
    return "en";
  }

  // 2. Check Accept-Language header
  const acceptLang = request.headers.get("accept-language");
  if (acceptLang) {
    const languages = acceptLang
      .split(",")
      .map((lang) => {
        const [tag, q] = lang.trim().split(";q=");
        return { tag: tag.trim().toLowerCase(), q: q ? parseFloat(q) : 1.0 };
      })
      .sort((a, b) => b.q - a.q);

    for (const { tag } of languages) {
      const primary = tag.split("-")[0];
      if (primary === "en") return "en";
      if (primary === "es") return "es";
    }
  }

  return DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip internal Next.js paths, API routes, and static assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/logos") ||
    pathname.startsWith("/fonts") ||
    pathname.match(/\.(.*)$/)
  ) {
    return NextResponse.next();
  }

  // Check if pathname already has a supported locale prefix
  const pathnameHasLocale = SUPPORTED_LOCALES.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Detect locale and redirect
  const locale = getLocaleFromRequest(request);
  const newUrl = request.nextUrl.clone();
  newUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|logos|fonts|icons|images).*)",
  ],
};

