import type { Metadata } from "next";
import "./globals.css";

import { Quicksand } from "next/font/google";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { Toaster } from "sonner";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Mónika Családállítás",
  description:
    "Családállítás Gyálon és online Nagy Mónikával – egyéni és csoportos lehetőségek, lelki oldások, mélyebb megértés önmagadról.",
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
      <meta
        name="google-site-verification"
        content="EZus6TEOuPwe3Eqkq8eG6kX99gt29kOAHslhoC6PtVs"
      />
      <body className="font-main antialiased text-foreground overflow-x-hidden">
        <div className="min-h-screen flex flex-col">
          <Header />

          <main className="flex-1">{children}</main>
          <Toaster position="top-center" richColors />
          <Footer />
        </div>
      </body>
    </html>
  );
}
