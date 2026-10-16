import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { site } from "@/lib/content";

const montserrat = localFont({
  src: [
    {
      path: "./fonts/montserrat-latin.woff2",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "./fonts/montserrat-latin-ext.woff2",
      weight: "300 900",
      style: "normal",
    },
  ],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "No Borders ASBL — Briseur de frontières mentales",
    template: "%s | No Borders ASBL",
  },
  description: site.description,
  keywords: [
    "No Borders ASBL",
    "Mons",
    "Wallonie",
    "intégration sociale",
    "interculturalité",
    "sport inclusif",
    "bambou vélo",
    "mobilité douce",
    "solidarité",
  ],
  authors: [{ name: "No Borders ASBL" }],
  openGraph: {
    type: "website",
    locale: "fr_BE",
    url: site.url,
    title: "No Borders ASBL — Briseur de frontières mentales",
    description: site.description,
    siteName: "No Borders ASBL",
    images: [
      {
        url: "/images/hero-groupe.jpg",
        width: 1200,
        height: 630,
        alt: "No Borders ASBL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "No Borders ASBL — Briseur de frontières mentales",
    description: site.description,
    images: ["/images/hero-groupe.jpg"],
  },
  icons: {
    icon: "/images/logo/logoFichier 2logo_2.png",
    apple: "/images/logo/logoFichier 2logo_2.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={montserrat.variable}>
      <body className="flex min-h-screen flex-col font-sans bg-paper text-ink selection:bg-[#0875B9] selection:text-white">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
