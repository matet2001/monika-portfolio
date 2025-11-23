import type { Metadata } from "next";
import "./globals.css";

import { Quicksand } from "next/font/google";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { Toaster } from "sonner";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title:
    "Családállítás Nagy Mónikával – Egyéni és Csoportos Ülések Gyálon és Online",
  description:
    "Család- és rendszerállítás Gyálon és online Nagy Mónikával. Egyéni és csoportos ülések 20.000 Ft-tól. Találd meg a valódi okokat, oldódj fel, élj szabadabban. Foglalj időpontot most!",
  keywords: [
    "családállítás",
    "rendszerállítás",
    "családállítás Gyál",
    "családállítás online",
    "Nagy Mónika",
    "csoportos családállítás",
    "egyéni családállítás",
    "lelki gyógyulás",
    "családi minták",
  ],
  authors: [{ name: "Nagy Mónika" }],
  creator: "Nagy Mónika",
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: "https://www.monikacsaladallitas.hu",
    title:
      "Családállítás Nagy Mónikával – Egyéni és Csoportos Ülések Gyálon és Online",
    description:
      "Család- és rendszerállítás Gyálon és online. Egyéni és csoportos ülések. Találd meg a valódi okokat, oldódj fel, élj szabadabban.",
    siteName: "Családállítás Nagy Mónikával",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    "google-site-verification": "EZus6TEOuPwe3Eqkq8eG6kX99gt29kOAHslhoC6PtVs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={`${quicksand.variable} antialiased`}>
      <Head>
        {/* Google Verification */}
        <meta
          name="google-site-verification"
          content="EZus6TEOuPwe3Eqkq8eG6kX99gt29kOAHslhoC6PtVs"
        />

        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Nagy Mónika",
              jobTitle: "Családállító",
              description:
                "Családállítás Gyálon és online – egyéni és csoportos ülések",
              url: "https://www.monikacsaladallitas.hu",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Gyál",
                addressCountry: "HU",
              },
              sameAs: [
                "https://www.facebook.com/monika.nagy.9693001",
                "https://www.instagram.com/monika.nagy.9693001/",
              ],
            }),
          }}
        />

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Mónika Családállítás",
              description:
                "Családállítás Gyálon és online Nagy Mónikával – egyéni és csoportos lehetőségek",
              url: "https://www.monikacsaladallitas.hu",
              telephone: "+36 30 312 3763",
              priceRange: "Ft10000 - Ft20000",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Táncsics Mihály utca 4",
                addressLocality: "Gyál",
                postalCode: "2360",
                addressCountry: "HU",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 47.3847131,
                longitude: 19.2163119,
              },
              sameAs: [
                "https://www.facebook.com/monika.nagy.9693001",
                "https://www.instagram.com/monika.nagy.9693001/",
              ],
            }),
          }}
        />
      </Head>
      <body className="font-main antialiased text-foreground overflow-x-hidden">
        <div className="min-h-screen flex flex-col">
          <Header />

          <main className="flex-1">{children}</main>
          <Toaster position="top-center" richColors />
          <Footer />
          <SpeedInsights />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
