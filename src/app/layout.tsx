import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedGradientBackground } from "@/components/ui/AnimatedGradientBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "PixelNiti | Websites, Apps & AI Agents Built with Strategy",
  description:
    "PixelNiti builds premium websites, business applications, AI agents, automation workflows, and SEO-ready digital experiences for growing businesses.",
  keywords:
    "PixelNiti, website development, AI agent development, app development, business website, SEO website design, automation services, web development India",
  metadataBase: new URL("https://pixelniti.com"),
  alternates: {
    canonical: "https://pixelniti.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pixelniti.com",
    siteName: "PixelNiti",
    title: "PixelNiti | Websites, Apps & AI Agents Built with Strategy",
    description:
      "Premium digital products for businesses that want to grow — websites, apps, AI agents, and automation.",
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
  name: "PixelNiti",
  url: "https://pixelniti.com",
  description:
    "Premium digital studio building websites, apps, AI agents, and automation workflows with a focus on business strategy, clean design, and long-term maintainability.",
  email: "hello@pixelniti.com",
  telephone: "+91-9893079221",
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
  name: "PixelNiti",
  url: "https://pixelniti.com",
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
