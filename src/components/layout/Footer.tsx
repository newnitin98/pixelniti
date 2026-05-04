import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-2 group" aria-label="PixelNiti home">
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-br from-primary to-accent text-white shadow-lg">
                <span className="font-bold text-lg leading-none" aria-hidden="true">
                  P
                </span>
              </div>
              <span className="font-bold text-xl tracking-tight">PixelNiti</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Clean design meets practical strategy. We build websites, apps, AI agents, and
              automation workflows for businesses that want to grow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-5 text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-primary transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-primary transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-5 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/services#web" className="hover:text-primary transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services#app" className="hover:text-primary transition-colors">
                  App Development
                </Link>
              </li>
              <li>
                <Link href="/services#ai" className="hover:text-primary transition-colors">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link href="/services#automation" className="hover:text-primary transition-colors">
                  Workflow Automation
                </Link>
              </li>
              <li>
                <Link href="/services#seo" className="hover:text-primary transition-colors">
                  SEO & Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-5 text-sm uppercase tracking-wider">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                <a href="mailto:hello@pixelniti.com" className="hover:text-primary transition-colors">
                  hello@pixelniti.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                <a href="tel:+919893079221" className="hover:text-primary transition-colors">
                  +91-9893079221
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                <span>India (Global Remote)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            © {currentYear} PixelNiti. All rights reserved.
            <span className="ml-2 text-muted-foreground/60">Website crafted by PixelNiti</span>
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
