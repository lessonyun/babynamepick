import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Baby Name Generator - Find the Perfect Name | BabyNamePick",
  description:
    "Use our free AI-powered baby name generator to discover unique, meaningful names for your baby. Get personalized suggestions based on origin, style, and meaning.",
  keywords:
    "baby name generator, AI baby names, baby boy names, baby girl names, unique baby names, baby name meaning",
  openGraph: {
    title: "AI Baby Name Generator - Find the Perfect Name | BabyNamePick",
    description:
      "Use our free AI-powered baby name generator to discover unique, meaningful names for your baby.",
    url: "https://babynamepick.com",
    siteName: "BabyNamePick",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Baby Name Generator | BabyNamePick",
    description:
      "Discover the perfect baby name with our free AI-powered generator.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://babynamepick.com" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="jotr08IVb9NyPzTU-lp7FmLGpLoeSBJ4sBs2RzbEkWs" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "BabyNamePick - AI Baby Name Generator",
              url: "https://babynamepick.com",
              description:
                "Free AI-powered baby name generator with personalized suggestions.",
              applicationCategory: "UtilitiesApplication",
              operatingSystem: "Any",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
