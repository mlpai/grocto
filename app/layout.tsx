import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Grocto | Food & Fruits Delivery by Pick & Drop Services",
    template: "%s | Grocto",
  },
  description: siteConfig.description,
  applicationName: "Grocto",
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  keywords: [
    "Grocto",
    "Pick & Drop Services",
    "food delivery Bathinda",
    "fruits delivery",
    "grocery delivery",
    "delivery partner app",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Grocto",
    title: "Grocto | Food & Fruits Delivery",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocto | Food & Fruits Delivery",
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <JsonLd />
        <Suspense fallback={<div className="h-16 border-b border-border bg-background" />}>
          <SiteHeader />
        </Suspense>
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
