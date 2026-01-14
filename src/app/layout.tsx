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
  title: "Horizon - See the world in full color.",
  description: "Componentes",
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
