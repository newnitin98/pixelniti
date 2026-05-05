import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedGradientBackground } from "@/components/ui/AnimatedGradientBackground";
import { siteConfig } from "@/data/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "PixelNiti | Websites, Apps & AI Agents Built with Strategy",
  description: siteConfig.description,
  keywords:
    "PixelNiti, website development, AI agent development, app development, business website, SEO website design, automation services, web development India",
  metadataBase: new URL(siteConfig.domain),
  alternates: {
    canonical: siteConfig.domain,
  },
  icons: {
    icon: "/brand/pixelniti-icon-dark-transparent.svg",
    shortcut: "/brand/pixelniti-icon-dark-transparent.svg",
    apple: "/brand/pixelniti-square-dark.svg",
    // TODO: Convert SVG to .ico for maximum browser compatibility
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    title: "PixelNiti | Websites, Apps & AI Agents Built with Strategy",
    description:
      "Premium digital products for businesses that want to grow — websites, apps, AI agents, and automation.",
    images: [
      {
        url: "/brand/pixelniti-square-dark.svg",
        width: 400,
        height: 400,
        alt: "PixelNiti logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PixelNiti | Websites, Apps & AI Agents Built with Strategy",
    description:
      "Premium digital products for businesses that want to grow — websites, apps, AI agents, and automation.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.domain,
  logo: `${siteConfig.domain}/brand/pixelniti-square-dark.svg`,
  description:
    "Premium digital studio building websites, apps, AI agents, and automation workflows with a focus on business strategy, clean design, and long-term maintainability.",
  email: siteConfig.email,
  areaServed: "Worldwide",
  foundingLocation: {
    "@type": "Place",
    addressCountry: "IN",
  },
  sameAs: [],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.domain,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col relative`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <AnimatedGradientBackground />
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
