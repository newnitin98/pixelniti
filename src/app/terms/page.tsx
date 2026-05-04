import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | PixelNiti",
  description: "Terms and conditions governing project engagements with PixelNiti.",
  alternates: {
    canonical: "https://pixelniti.com/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-12">Last updated: May 5, 2026</p>

        <div className="space-y-10 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
            <p>
              These Terms of Service govern all project engagements between PixelNiti
              (&ldquo;we&rdquo;, &ldquo;us&rdquo;) and our clients (&ldquo;you&rdquo;). By engaging
              our services, you agree to these terms. We recommend reading them in full before
              signing a project proposal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Services</h2>
            <p>
              PixelNiti provides digital design and development services including, but not limited
              to, website development, web application development, UI/UX design, AI agent
              deployment, and workflow automation. The specific scope of each project is defined in
              the project proposal agreed upon before work begins.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Payment</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                All projects require a <span className="text-foreground font-medium">50% advance payment</span>{" "}
                before work begins. Work does not start until the advance is received.
              </li>
              <li>
                The remaining 50% is due before final delivery of files and deployment access.
              </li>
              <li>
                Larger projects may use milestone-based payment schedules, which are defined in the
                project proposal.
              </li>
              <li>
                Invoices not paid within 7 days of the due date may result in work being paused
                until payment is received.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Revisions</h2>
            <p>
              The number of revision rounds included in each project is specified in the project
              proposal. Revisions beyond the agreed scope are billed at our standard hourly rate. A
              &ldquo;revision&rdquo; means changes to agreed deliverables — not additions to the
              project scope. Scope additions are treated as new work and quoted separately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Timeline</h2>
            <p>
              Project timelines are agreed upon at the start of each engagement. Timelines assume
              that you provide required content, feedback, and approvals within the agreed response
              windows (typically 2 business days). Delays caused by late content or approvals may
              extend the delivery timeline. We will communicate any timeline changes as soon as they
              are identified.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                Upon receipt of full payment, you own the final deliverables — code, design files,
                and content produced specifically for your project.
              </li>
              <li>
                PixelNiti retains the right to display completed projects in our portfolio and case
                studies, unless you request otherwise in writing before project start.
              </li>
              <li>
                Third-party libraries, frameworks, and tools used in your project are subject to
                their own licenses. We use only open-source, MIT-licensed, or commercially licensed
                tools.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
            <p>
              PixelNiti is not liable for indirect, incidental, or consequential damages arising from
              the use of our services or deliverables. Our total liability is limited to the amount
              paid for the specific project in question. We are not responsible for third-party
              service outages (hosting, APIs, etc.) or issues arising from client-managed changes to
              deliverables after project handoff.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
            <p>
              These Terms are governed by the laws of India. Any disputes shall be resolved under
              the jurisdiction of courts in India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Contact</h2>
            <p>
              For questions about these Terms, contact us at:{" "}
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
