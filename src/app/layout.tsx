import type { Metadata } from "next";
import { Montserrat, Playfair_Display, Sora } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://horizon-travels.vercel.app"),

  title: {
    default: "Horizon — See the world in full color",
    template: "%s | Horizon Travels",
  },

  description:
    "Horizon Travels curates immersive journeys around the globe, connecting travelers with authentic experiences and seamless planning.",

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
    title: "Horizon Travels — Curated Journeys Around the World",
    description:
      "Explore authentic travel experiences and seamless planning with Horizon Travels, your gateway to unforgettable adventures.",
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
    title: "Horizon Travels — See the world in full color",
    description:
      "Plan your next immersive journey with Horizon Travels. Adventure, culture, and unforgettable experiences await.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <body
        className={`
          ${dmSans.variable}
          ${sora.variable}
          ${fraunces.variable}
          antialiased w-full max-w-400 mx-auto
        `}
      >
        {children}
      </body>
    </html>
  );
}
