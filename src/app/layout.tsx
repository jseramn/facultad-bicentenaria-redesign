import type { Metadata } from "next";
import { Newsreader, Source_Sans_3 } from "next/font/google";
import { AccessibilityProvider } from "@/components/accessibility-provider";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkipLink } from "@/components/skip-link";
import { site } from "@/content/site";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand} · ${site.faculty}`,
    template: `%s · ${site.brand}`,
  },
  description: site.description,
  openGraph: {
    locale: "es_CO",
    type: "website",
    siteName: site.brand,
    title: `${site.faculty} · ${site.university}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-CO"
      className={`${sourceSans.variable} ${newsreader.variable} h-full`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <AccessibilityProvider>
          <SkipLink />
          <SiteHeader />
          {children}
          <SiteFooter />
          <MobileCtaBar />
        </AccessibilityProvider>
      </body>
    </html>
  );
}
