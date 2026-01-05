import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { CreditCard, RefreshCw, Clock, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy | Srapsware',
  description: 'Learn about our cancellation and refund policies for software development projects and services.',
  openGraph: {
    title: 'Cancellation & Refund Policy - Srapsware',
    description: 'Transparent refund and cancellation terms',
    type: 'website',
  }
}

export default function CancellationRefundPage() {
  return (
    <main>
      {/* Hero Section */}
      <PageHero
        badge="Refund Policy"
        title="Cancellation & Refund Policy"
        description="Last updated: January 3, 2026"
      />

      {/* Content Section */}
      <section className="relative py-32 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <div className="not-prose mb-12 grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl border border-border bg-card text-center">
                <CreditCard className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Fair Refunds</h3>
                <p className="text-sm text-muted-foreground">Transparent policy</p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">7-Day Window</h3>
                <p className="text-sm text-muted-foreground">Initial phase refund</p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card text-center">
                <RefreshCw className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Quick Process</h3>
                <p className="text-sm text-muted-foreground">5-10 business days</p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card text-center">
                <AlertCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Clear Terms</h3>
                <p className="text-sm text-muted-foreground">No hidden fees</p>
              </div>
            </div>

            <h2>1. Overview</h2>
            <p>
              At Srapsware, we strive for 100% client satisfaction. This policy outlines our cancellation and refund procedures for software development projects and services. By engaging our services, you agree to these terms.
            </p>

            <h2>2. Cancellation Policy</h2>
            <h3>2.1 Cancellation During Discovery Phase (First 7 Days)</h3>
            <p>
              If you cancel within 7 days of project initiation and before development work begins:
            </p>
            <ul>
              <li><strong>100% refund</strong> of deposit minus $250 administrative fee</li>
              <li>You retain all discovery documents and proposals provided</li>
              <li>Must provide written cancellation notice</li>
            </ul>

            <h3>2.2 Cancellation After Development Begins</h3>
            <p>
              Once active development has commenced:
            </p>
            <ul>
              <li>You may cancel with 15 days written notice</li>
              <li>Payment required for all work completed to date</li>
              <li>Work is billed based on agreed hourly/milestone rates</li>
              <li>You receive all code, designs, and documentation produced</li>
              <li>Unused deposit is refunded within 10 business days</li>
            </ul>

            <h3>2.3 Project Suspension</h3>
            <p>
              If you need to pause your project:
            </p>
            <ul>
              <li>Projects can be paused for up to 90 days</li>
              <li>A $500/month holding fee applies to reserve team resources</li>
              <li>After 90 days, the project is considered cancelled</li>
              <li>Resumption requires 2-week notice for team scheduling</li>
            </ul>

            <h2>3. Refund Policy</h2>
            <h3>3.1 Eligible for Refunds</h3>
            <p>Refunds may be issued if:</p>
            <ul>
              <li>Cancellation occurs within 7-day window (see 2.1)</li>
              <li>We are unable to deliver agreed-upon services</li>
              <li>Major milestone deliverables fail to meet acceptance criteria after 2 revision rounds</li>
              <li>Mutual agreement to terminate the project</li>
            </ul>

            <h3>3.2 Non-Refundable Items</h3>
            <p>The following are non-refundable:</p>
            <ul>
              <li>Work already completed and delivered</li>
              <li>Third-party costs (hosting, licenses, APIs, domains)</li>
              <li>Discovery and research phase after 7 days</li>
              <li>Approved milestone payments</li>
              <li>Custom integrations or specialized development</li>
              <li>Maintenance and support agreements (monthly/annual)</li>
            </ul>

            <h3>3.3 Refund Processing</h3>
            <ul>
              <li>Refund requests must be submitted in writing to <a href="mailto:contact@srapsware.com">contact@srapsware.com</a></li>
              <li>Approved refunds are processed within 5-10 business days</li>
              <li>Refunds are issued to the original payment method</li>
              <li>Processing fees (typically 2.9% + $0.30) are non-refundable</li>
            </ul>

            <h2>4. Milestone-Based Projects</h2>
            <h3>4.1 Milestone Payments</h3>
            <p>
              For projects with milestone-based payments:
            </p>
            <ul>
              <li>Each milestone is invoiced upon completion</li>
              <li>Payment is due before work on next milestone begins</li>
              <li>Once a milestone is accepted and paid, it is non-refundable</li>
              <li>Unused milestone funds are eligible for refund upon cancellation</li>
            </ul>

            <h3>4.2 Milestone Acceptance</h3>
            <p>Clients have 7 days to review and request revisions:</p>
            <ul>
              <li>Up to 2 rounds of revisions included per milestone</li>
              <li>If no response within 7 days, milestone is considered accepted</li>
              <li>Additional revisions beyond scope are billed separately</li>
            </ul>

            <h2>5. Monthly Retainer Services</h2>
            <h3>5.1 Cancellation Notice</h3>
            <ul>
              <li>Requires 30 days written notice</li>
              <li>Current month's fee is non-refundable</li>
              <li>Unused hours do not roll over</li>
              <li>Annual plans require 60 days notice</li>
            </ul>

            <h3>5.2 Annual Plans</h3>
            <ul>
              <li>Billed annually at discounted rate</li>
              <li>Early cancellation: refund of remaining months minus 20% early termination fee</li>
              <li>After 6 months, full remaining balance is refundable</li>
            </ul>

            <h2>6. Maintenance & Support Agreements</h2>
            <h3>6.1 Monthly Plans</h3>
            <ul>
              <li>Cancel anytime with 30 days notice</li>
              <li>Current month non-refundable</li>
              <li>No long-term commitment required</li>
            </ul>

            <h3>6.2 Annual Plans</h3>
            <ul>
              <li>Discounted annual rate</li>
              <li>Refundable after 3 months with 60 days notice</li>
              <li>Prorated refund for remaining months</li>
            </ul>

            <h2>7. Force Majeure</h2>
            <p>
              If either party cannot fulfill obligations due to circumstances beyond control (natural disasters, pandemics, war, etc.):
            </p>
            <ul>
              <li>Project timelines may be extended without penalty</li>
              <li>Client receives refund for undelivered work</li>
              <li>No party is liable for delays or cancellations</li>
            </ul>

            <h2>8. Dispute Resolution</h2>
            <h3>8.1 Internal Resolution</h3>
            <p>Before seeking refunds, we encourage:</p>
            <ul>
              <li>Direct communication with your project manager</li>
              <li>Escalation to senior management if needed</li>
              <li>Good faith negotiation to resolve concerns</li>
            </ul>

            <h3>8.2 Mediation</h3>
            <p>
              If internal resolution fails, both parties agree to mediation before pursuing legal action. Mediation costs are split equally.
            </p>

            <h2>9. Quality Guarantee</h2>
            <p>We stand behind our work:</p>
            <ul>
              <li><strong>30-day bug fix guarantee:</strong> Critical bugs fixed free of charge</li>
              <li><strong>Performance guarantee:</strong> If deliverables don't meet agreed specs, we'll fix or refund</li>
              <li><strong>Communication guarantee:</strong> Response within 24 hours on business days</li>
            </ul>

            <h2>10. Special Circumstances</h2>
            <h3>10.1 Client Non-Cooperation</h3>
            <p>
              If client fails to provide timely feedback, assets, or approvals for 30+ days:
            </p>
            <ul>
              <li>Project may be considered abandoned</li>
              <li>All fees paid to date are non-refundable</li>
              <li>Reactivation requires new agreement and deposit</li>
            </ul>

            <h3>10.2 Material Breach by Client</h3>
            <p>
              If client violates terms (non-payment, misuse, illegal activity):
            </p>
            <ul>
              <li>Srapsware may terminate immediately</li>
              <li>No refunds issued</li>
              <li>Outstanding balances remain due</li>
            </ul>

            <h2>11. Refund Request Process</h2>
            <p>To request a refund:</p>
            <ol>
              <li>Send written request to <a href="mailto:contact@srapsware.com">contact@srapsware.com</a></li>
              <li>Include: Project name, invoice number, reason for refund</li>
              <li>We will review within 3 business days</li>
              <li>You'll receive written response with decision</li>
              <li>Approved refunds processed within 5-10 business days</li>
            </ol>

            <h2>12. Changes to This Policy</h2>
            <p>
              We reserve the right to modify this policy. Changes apply to new projects only. Active projects follow the policy in effect at project start.
            </p>

            <h2>13. Contact Us</h2>
            <p>Questions about cancellations or refunds?</p>
            <ul>
              <li><strong>Billing Inquiries:</strong> <a href="mailto:contact@srapsware.com">contact@srapsware.com</a></li>
              <li><strong>General Support:</strong> <a href="mailto:contact@srapsware.com">contact@srapsware.com</a></li>
              <li><strong>Phone:</strong> +1 (234) 567-890</li>
              <li><strong>Office Hours:</strong> Monday-Friday, 9 AM - 6 PM PST</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
