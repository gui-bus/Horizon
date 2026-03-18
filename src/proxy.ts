import createMiddleware from "next-intl/middleware";
import { defaultLocale, locales } from "./i18n/config";

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "never",
});

export const config = {
  matcher: ["/", "/(pt|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
