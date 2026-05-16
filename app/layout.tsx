import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { company } from "@/data/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1f3a"
};

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default:
      "Nandanam Electricals Engineers and Contractors | Solar Company in Kerala",
    template: "%s | Nandanam Electricals"
  },
  description:
    "Nandanam Electricals Engineers and Contractors provides on-grid solar, hybrid solar, solar subsidy support, electrical works, wiring, and maintenance in Kerala.",
  keywords: [
    "Solar company in Kerala",
    "Solar panel installation Kerala",
    "Solar installers Kerala",
    "Electrical contractors Kerala",
    "Electrical works Kerala",
    "Solar and electrical services Kerala",
    "Residential solar installation Kerala",
    "Commercial solar installation Kerala",
    "Solar subsidy Kerala",
    "Solar maintenance Kerala",
    "Hybrid solar system Kerala",
    "On grid solar system Kerala",
    "Nandanam Electricals",
    "Nandanam Electricals Engineers and Contractors",
    "Nandanam Electricals Engineers and Contractors Ltd",
    "Nandanam Electricals Kayamkulam"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title:
      "Nandanam Electricals Engineers and Contractors | Solar and Electrical Works Kerala",
    description:
      "On-grid solar, hybrid solar, electrical works, maintenance, and subsidy support in Kerala backed by discipline, experience, and trust.",
    url: company.siteUrl,
    siteName: company.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-solar.svg",
        width: 1200,
        height: 630,
        alt: "Solar panel installation in Kerala"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Nandanam Electricals | Solar and Electrical Works Kerala",
    description:
      "On-grid solar, hybrid solar, subsidy guidance, electrical wiring, and maintenance in Kerala."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
