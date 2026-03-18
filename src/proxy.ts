import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n/config";

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "never",
});

export const config = {
  matcher: ["/", "/(pt|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
