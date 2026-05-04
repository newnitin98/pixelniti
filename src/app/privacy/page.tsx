import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | PixelNiti",
  description: "How PixelNiti collects, uses, and protects your personal information.",
  alternates: {
    canonical: "https://pixelniti.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-12">Last updated: May 5, 2026</p>

        <div className="space-y-10 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
            <p>
              PixelNiti (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the website at{" "}
              <Link href="https://pixelniti.com" className="text-primary hover:underline">
                pixelniti.com
              </Link>
              . This Privacy Policy explains what information we collect when you use our website or
              contact us, how we use it, and your rights regarding your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
            <p className="mb-4">
              When you use our contact form, we collect the following information you voluntarily
              provide:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Full name</li>
              <li>Business name (optional)</li>
              <li>Email address</li>
              <li>Phone number (optional)</li>
              <li>Project type and budget range</li>
              <li>Project description and requirements</li>
            </ul>
            <p className="mt-4">
              We do not collect any information automatically beyond standard web server logs (IP
              address, browser type, referring page) that are retained by our hosting provider
              Vercel.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use the information you provide solely to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your project inquiry</li>
              <li>Prepare and send a project proposal</li>
              <li>Communicate with you about your project</li>
            </ul>
            <p className="mt-4">
              We do not sell, rent, or share your personal information with any third parties for
              marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Cookies</h2>
            <p>
              This website does not use tracking cookies or advertising cookies. We do not use Google
              Analytics or any third-party analytics services. Vercel, our hosting provider, may set
              functional cookies necessary for serving the website. These are not used for tracking
              purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Services</h2>
            <p>
              This website is hosted on{" "}
              <span className="text-foreground font-medium">Vercel</span>, which may process
              technical data (such as IP addresses and server request logs) as part of delivering the
              website. Vercel&apos;s privacy policy is available at{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                vercel.com/legal/privacy-policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Data Retention</h2>
            <p>
              Contact form submissions and related correspondence are retained for up to 90 days from
              the date of submission. If a project engagement begins, communication records may be
              retained for the duration of the project and for up to 1 year thereafter for business
              records.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request a copy of the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, email us at{" "}
              <a href="mailto:hello@pixelniti.com" className="text-primary hover:underline">
                hello@pixelniti.com
              </a>
              . We will respond within 7 business days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will update the
              &ldquo;Last updated&rdquo; date at the top of this page. Continued use of the website
              after any changes constitutes your acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Contact</h2>
            <p>
              If you have questions about this Privacy Policy, contact us at:{" "}
              <a href="mailto:hello@pixelniti.com" className="text-primary hover:underline">
                hello@pixelniti.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
