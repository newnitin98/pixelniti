import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Home, Layers, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You | PixelNiti",
  description: "Your project inquiry has been received. The PixelNiti team will review it and respond within 24 hours.",
  alternates: {
    canonical: "https://pixelniti.com/thank-you",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-24 md:py-36">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center">
            <CheckCircle2 size={40} className="text-emerald-400" aria-hidden="true" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Thank you for contacting PixelNiti
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          We have received your project inquiry and will review it shortly. You will hear from us
          within 24 hours with a strategic response.
        </p>

        <p className="text-muted-foreground mb-12">
          If your requirement is urgent, you can also reach us directly on WhatsApp.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-primary/25"
          >
            <Home size={18} aria-hidden="true" />
            Back to Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-foreground font-semibold hover:bg-secondary/80 transition-all border border-border"
          >
            <Layers size={18} aria-hidden="true" />
            Explore Services
          </Link>
          <a
            href="https://wa.me/919893079221"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-all"
          >
            <MessageCircle size={18} aria-hidden="true" />
            WhatsApp Us
          </a>
        </div>

        <div className="p-6 rounded-2xl bg-card border border-border text-sm text-muted-foreground">
          <p className="font-medium text-foreground mb-2">What happens next?</p>
          <ol className="space-y-2 text-left">
            <li className="flex gap-3">
              <span className="text-primary font-bold shrink-0">1.</span>
              We review your project requirements within 24 hours.
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold shrink-0">2.</span>
              We prepare a strategic proposal with scope, timeline, and pricing.
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold shrink-0">3.</span>
              You review the proposal and decide — no pressure, no sales calls.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
