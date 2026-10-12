import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/content";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={montserrat.variable}>
      <body className="flex min-h-screen flex-col font-sans bg-paper text-ink selection:bg-flame selection:text-white">
        <Header />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
