import { Plus_Jakarta_Sans, Nunito_Sans } from "next/font/google";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const heading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const body = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `#1 Top-Rated Water Filtration & Treatment In Milwaukee | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Milwaukee water filtration",
    "water softener Milwaukee",
    "reverse osmosis Milwaukee",
    "well water treatment Waukesha",
    "Ozaukee County water filter",
  ],
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `#1 Top-Rated Water Filtration & Treatment In Milwaukee | ${site.name}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Water Filtration in Milwaukee`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink antialiased">
        <JsonLd />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-navy"
        >
          Skip to content
        </a>
        <Header />
        <main id="content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
