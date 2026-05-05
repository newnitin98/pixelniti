import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon, XIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/data/site";

// Replace placeholder social links after PixelNiti social pages are created.
const socialLinks = [
  { icon: FacebookIcon, href: siteConfig.social.facebook, label: "Follow PixelNiti on Facebook" },
  { icon: InstagramIcon, href: siteConfig.social.instagram, label: "Follow PixelNiti on Instagram" },
  { icon: YoutubeIcon, href: siteConfig.social.youtube, label: "Follow PixelNiti on YouTube" },
  { icon: XIcon, href: siteConfig.social.x, label: "Follow PixelNiti on X" },
  { icon: LinkedinIcon, href: siteConfig.social.linkedin, label: "Follow PixelNiti on LinkedIn" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-5">
            <Link href="/" aria-label="PixelNiti home">
              {/* pixelniti-full-dark-transparent.svg: transparent bg, white text — fits dark footer */}
              <Image
                src="/brand/pixelniti-full-dark-transparent.svg"
                alt="PixelNiti logo"
                width={127}
                height={40}
                className="h-10 w-auto"
                unoptimized
              />
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Clean design meets practical strategy. We build websites, apps, AI agents, and
              automation workflows for businesses that want to grow.
            </p>

            {/* Social Icons */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Follow PixelNiti
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    {...(href !== "#" && { target: "_blank", rel: "noopener noreferrer" })}
                    className="w-8 h-8 flex items-center justify-center rounded-md bg-muted/60 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <Icon size={15} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
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
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-primary transition-colors break-all"
                >
                  {siteConfig.email}
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
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p>© {currentYear} PixelNiti. All rights reserved.</p>
            <span className="hidden md:inline text-muted-foreground/30">·</span>
            <p className="text-muted-foreground/60">
              Website crafted by{" "}
              <a
                href="https://pixelniti.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                PixelNiti
              </a>
            </p>
          </div>
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
