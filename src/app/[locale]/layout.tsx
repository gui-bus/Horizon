import type { Metadata } from "next";
import { Montserrat, Playfair_Display, Sora } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import Navbar from "@/components/Navbar";

const dmSans = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const fraunces = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata");

  return {
    metadataBase: new URL("https://horizon-travels.vercel.app"),

    title: {
      default: t("title"),
      template: `%s | ${t("title")}`,
    },

    description: t("description"),

    applicationName: "Horizon Travels",

    keywords: [
      "travel agency",
      "luxury travel",
      "custom trips",
      "adventure travel",
      "Horizon Travels",
      "experiential journeys",
      "travel planning",
    ],

    authors: [
      {
        name: "Guilherme Bustamante",
      },
    ],

    creator: "Guilherme Bustamante",

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://horizon-travels.vercel.app",
      siteName: "Horizon Travels",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Horizon Travels — Curated Journeys",
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/og-image.png"],
    },

    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },

    alternates: {
      canonical: "https://horizon-travels.vercel.app",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`
          ${dmSans.variable}
          ${sora.variable}
          ${fraunces.variable}
          antialiased w-full max-w-440 mx-auto
        `}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
