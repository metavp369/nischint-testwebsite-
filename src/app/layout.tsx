import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/inter";
import "@fontsource/noto-sans-devanagari/devanagari-500.css";
import "@fontsource/noto-sans-devanagari/devanagari-700.css";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { RevealController } from "@/components/RevealController";
import { OrganizationJsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "NISCHINT — Family safety for elders, women and children",
    template: "%s — NISCHINT",
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_IN",
    url: site.url,
    title: "NISCHINT — Your loved ones may be far away. Peace of mind shouldn't be.",
    description: site.description,
    images: [{ url: "/og-share-card.png", width: 1200, height: 630, alt: "NISCHINT — family safety, free from worry" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nischintcare",
    title: "NISCHINT — Family safety for elders, women and children",
    description: site.description,
    images: ["/og-share-card.png"],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#062B57",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only z-50 rounded-full bg-navy px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <div className="no-print bg-navy px-4 py-1.5 text-center text-[13px] text-white">
          In an emergency, call <a href="tel:112" className="font-semibold text-mint underline-offset-2">112</a>. NISCHINT is not an emergency service.
        </div>
        <SiteHeader />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <SiteFooter />
        <RevealController />
        <OrganizationJsonLd />
      </body>
    </html>
  );
}
