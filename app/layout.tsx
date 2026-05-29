import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { Navbar } from "@/components/Layout/Navbar";
import { Footer } from "@/components/Layout/Footer";

const sora = Sora({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "JTA Advance Painting LLC | Professional Painters Tampa Bay",
    template: "%s | JTA Advance Painting LLC",
  },
  description:
    "JTA Advance Painting LLC provides professional residential and commercial painting services throughout Tampa Bay. Quality craftsmanship, reliable scheduling, and guaranteed satisfaction.",
  keywords: [
    "painting contractor Tampa",
    "commercial painting Tampa",
    "residential painting Tampa Bay",
    "interior painting Tampa",
    "exterior painting Tampa Bay",
    "HOA painting services",
    "pressure washing Tampa",
    "Tampa Bay painters",
  ],
  authors: [{ name: "JTA Advance Painting LLC" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "JTA Advance Painting LLC",
    title: "JTA Advance Painting LLC | Professional Painters Tampa Bay",
    description:
      "Professional painting services for homes, businesses & communities throughout Tampa Bay.",
  },
  twitter: {
    card: "summary_large_image",
    title: "JTA Advance Painting LLC | Professional Painters Tampa Bay",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://jtaadvancepainting.com/#business",
      name: "JTA Advance Painting LLC",
      description:
        "Professional painting contractor serving residential, commercial, HOA, property management, and contractor clients throughout Tampa Bay.",
      url: "https://jtaadvancepainting.com",
      image: "https://jtaadvancepainting.com/project-images/jta_work_1.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "9225 Bay Plaza Blvd Suite 417 PMB 1205",
        addressLocality: "Tampa",
        addressRegion: "FL",
        postalCode: "33619",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        addressLocality: "Tampa",
        addressRegion: "FL",
      },
      telephone: "813-392-8301",
      email: "service@jtaadvancepainting.com",
      priceRange: "$$",
      areaServed: {
        "@type": "Place",
        name: "Tampa Bay Area",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "18:00",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Painting Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Commercial Painting",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Residential Painting",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Interior Painting",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Exterior Painting",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pressure Washing",
            },
          },
        ],
      },
    },
    {
      "@type": "Service",
      "@id": "https://jtaadvancepainting.com/#service",
      name: "Professional Painting Services",
      description:
        "Commercial and residential painting services including interior, exterior, pressure washing, and surface preparation.",
      provider: { "@id": "https://jtaadvancepainting.com/#business" },
      areaServed: { "@type": "Place", name: "Tampa Bay Area" },
      serviceType: ["Commercial Painting", "Residential Painting"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <Script
          id="schema-org-localbusiness"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body
        className={`${sora.variable} flex min-h-full flex-col antialiased font-sans`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
