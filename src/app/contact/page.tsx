import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact PixelNiti | Start Your Project",
  description:
    "Tell us about your project. We will review your requirements and send a clear proposal within 2 business days — no sales calls, no pressure.",
  alternates: {
    canonical: "https://pixelniti.com/contact",
  },
  openGraph: {
    url: "https://pixelniti.com/contact",
    title: "Contact PixelNiti | Start Your Project",
    description:
      "Share your project requirements and receive a strategic proposal within 2 business days.",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
