import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { FileText, Scale, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Srapsware',
  description: 'Read our terms and conditions for using Srapsware services. Understand your rights and responsibilities.',
  openGraph: {
    title: 'Terms & Conditions - Srapsware',
    description: 'Legal terms for using our services',
    type: 'website',
  }
}

export default function TermsConditionsPage() {
  return (
    <main>
      {/* Hero Section */}
      <PageHero
        badge="Terms & Conditions"
        title="Terms of Service"
        description="Last updated: January 3, 2026"
      />

      {/* Content Section */}
      <section className="relative py-32 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <div className="not-prose mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-border bg-card text-center">
                <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Clear Terms</h3>
                <p className="text-sm text-muted-foreground">Easy to understand</p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card text-center">
                <Scale className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Fair Practices</h3>
                <p className="text-sm text-muted-foreground">Transparent agreements</p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Protected Rights</h3>
                <p className="text-sm text-muted-foreground">Your interests matter</p>
              </div>
            </div>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using Srapsware's website and services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.
            </p>

            <h2>2. Services Provided</h2>
            <p>Srapsware provides software development services, including but not limited to:</p>
            <ul>
              <li>Web application development</li>
              <li>Mobile app development (iOS, Android)</li>
              <li>Cloud solutions and infrastructure</li>
              <li>AI and machine learning integration</li>
              <li>Enterprise software solutions</li>
              <li>Maintenance and support services</li>
              <li>Consulting and technical advisory</li>
            </ul>

            <h2>3. Project Agreements</h2>
            <h3>3.1 Scope of Work</h3>
            <p>
              Each project will be governed by a separate Statement of Work (SOW) or project agreement that outlines:
            </p>
            <ul>
              <li>Project scope, deliverables, and timeline</li>
              <li>Pricing and payment terms</li>
              <li>Intellectual property rights</li>
              <li>Acceptance criteria</li>
              <li>Change request process</li>
            </ul>

            <h3>3.2 Client Responsibilities</h3>
            <p>Clients are responsible for:</p>
            <ul>
              <li>Providing timely feedback and approvals</li>
              <li>Supplying necessary content, assets, and credentials</li>
              <li>Designating a point of contact</li>
              <li>Making timely payments as per agreed schedule</li>
              <li>Obtaining necessary third-party licenses</li>
            </ul>

            <h2>4. Payment Terms</h2>
            <h3>4.1 Fees and Invoicing</h3>
            <ul>
              <li>All fees are quoted in USD unless otherwise specified</li>
              <li>Invoices are due within 15 days of receipt</li>
              <li>Late payments may incur a 1.5% monthly interest charge</li>
              <li>Project work may be paused for overdue payments</li>
            </ul>

            <h3>4.2 Payment Schedule</h3>
            <p>Typical payment structure:</p>
            <ul>
              <li>30-50% upfront deposit to initiate project</li>
              <li>Milestone-based payments as work progresses</li>
              <li>Final payment upon project completion</li>
            </ul>

            <h3>4.3 Additional Costs</h3>
            <p>
              Third-party services, licenses, hosting, and other external costs are the client's responsibility unless explicitly included in the project agreement.
            </p>

            <h2>5. Intellectual Property Rights</h2>
            <h3>5.1 Client-Owned IP</h3>
            <p>
              Upon full payment, clients receive ownership of custom code and designs created specifically for their project, excluding:
            </p>
            <ul>
              <li>Pre-existing frameworks, libraries, and tools</li>
              <li>Reusable components and templates</li>
              <li>Third-party software and licenses</li>
            </ul>

            <h3>5.2 Srapsware IP</h3>
            <p>
              Srapsware retains ownership of:
            </p>
            <ul>
              <li>Development methodologies and processes</li>
              <li>Reusable code libraries and frameworks</li>
              <li>Design templates and components</li>
              <li>Documentation and training materials</li>
            </ul>

            <h2>6. Confidentiality</h2>
            <p>
              Both parties agree to maintain confidentiality of proprietary information shared during the project. This obligation survives termination of the agreement.
            </p>

            <h2>7. Warranties and Disclaimers</h2>
            <h3>7.1 Service Warranty</h3>
            <p>We warrant that:</p>
            <ul>
              <li>Services will be performed with professional skill and care</li>
              <li>Deliverables will substantially conform to agreed specifications</li>
              <li>We have the right to provide the services</li>
            </ul>

            <h3>7.2 Disclaimer</h3>
            <p>
              Except as expressly stated, services are provided "as is" without warranties of any kind. We do not guarantee:
            </p>
            <ul>
              <li>Uninterrupted or error-free operation</li>
              <li>Specific business results or ROI</li>
              <li>Compatibility with all systems and browsers</li>
            </ul>

            <h2>8. Limitation of Liability</h2>
            <p>
              Srapsware's total liability for any claim arising from services shall not exceed the amount paid by the client for the specific project giving rise to the claim. We are not liable for:
            </p>
            <ul>
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of profits, data, or business opportunities</li>
              <li>Third-party claims</li>
              <li>Force majeure events</li>
            </ul>

            <h2>9. Support and Maintenance</h2>
            <p>
              Post-launch support terms are defined in separate maintenance agreements. Standard support includes:
            </p>
            <ul>
              <li>Bug fixes for 30-90 days (as specified)</li>
              <li>Technical documentation</li>
              <li>Training and knowledge transfer</li>
            </ul>
            <p>
              Extended support, feature enhancements, and ongoing maintenance require separate agreements.
            </p>

            <h2>10. Termination</h2>
            <h3>10.1 Termination for Convenience</h3>
            <p>
              Either party may terminate with 30 days written notice. Client is responsible for payment of work completed up to termination date.
            </p>

            <h3>10.2 Termination for Cause</h3>
            <p>
              Either party may terminate immediately if the other party:
            </p>
            <ul>
              <li>Breaches material terms and fails to cure within 15 days</li>
              <li>Becomes insolvent or enters bankruptcy</li>
              <li>Engages in illegal activities</li>
            </ul>

            <h2>11. Change Requests</h2>
            <p>
              Requests to modify scope, features, or deliverables require written approval and may result in:
            </p>
            <ul>
              <li>Revised timeline</li>
              <li>Additional fees</li>
              <li>Updated project agreement</li>
            </ul>

            <h2>12. Acceptable Use</h2>
            <p>Clients agree not to use our services for:</p>
            <ul>
              <li>Illegal activities or content</li>
              <li>Infringing third-party intellectual property</li>
              <li>Distributing malware or harmful code</li>
              <li>Spamming or phishing</li>
              <li>Violating privacy or data protection laws</li>
            </ul>

            <h2>13. Indemnification</h2>
            <p>
              Client agrees to indemnify Srapsware against claims arising from:
            </p>
            <ul>
              <li>Client-provided content and materials</li>
              <li>Violation of laws or third-party rights</li>
              <li>Misuse of delivered products</li>
            </ul>

            <h2>14. Governing Law</h2>
            <p>
              These terms are governed by the laws of California, United States. Disputes will be resolved through arbitration in San Francisco, CA, except for injunctive relief matters.
            </p>

            <h2>15. Modifications</h2>
            <p>
              We may update these terms from time to time. Material changes will be communicated via email. Continued use of services constitutes acceptance of modified terms.
            </p>

            <h2>16. Contact Information</h2>
            <p>For questions about these terms, contact:</p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:contact@srapsware.com">contact@srapsware.com</a></li>
              <li><strong>Address:</strong> 123 Tech Street, Innovation District, San Francisco, CA 94105</li>
              <li><strong>Phone:</strong> +1 (234) 567-890</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
