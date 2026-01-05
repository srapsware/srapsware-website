import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | Srapsware',
  description: 'Read our privacy policy to understand how we collect, use, and protect your personal information.',
  openGraph: {
    title: 'Privacy Policy - Srapsware',
    description: 'How we protect and handle your data',
    type: 'website',
  }
}

export default function PrivacyPolicyPage() {
  return (
    <main>
      {/* Hero Section */}
      <PageHero
        badge="Privacy Policy"
        title="Your Privacy Matters to Us"
        description="Last updated: January 3, 2026"
      />

      {/* Content Section */}
      <section className="relative py-32 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <div className="not-prose mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-border bg-card text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Secure Data</h3>
                <p className="text-sm text-muted-foreground">Industry-standard encryption</p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card text-center">
                <Lock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">GDPR Compliant</h3>
                <p className="text-sm text-muted-foreground">Full EU data protection</p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card text-center">
                <UserCheck className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Your Rights</h3>
                <p className="text-sm text-muted-foreground">Control your data</p>
              </div>
            </div>

            <h2>1. Introduction</h2>
            <p>
              Srapsware ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2>2. Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide when you:</p>
            <ul>
              <li>Fill out contact forms or request quotes</li>
              <li>Subscribe to our newsletter</li>
              <li>Register for an account</li>
              <li>Participate in surveys or promotions</li>
              <li>Contact our support team</li>
            </ul>
            <p>This information may include:</p>
            <ul>
              <li>Name and contact information (email, phone, address)</li>
              <li>Company name and job title</li>
              <li>Project details and requirements</li>
              <li>Payment information (processed securely through third-party providers)</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process your requests and transactions</li>
              <li>Send you updates, marketing communications, and promotional materials</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Analyze usage patterns and optimize user experience</li>
              <li>Detect, prevent, and address technical issues or fraudulent activity</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>4. Information Sharing and Disclosure</h2>
            <p>We do not sell your personal information. We may share your information with:</p>
            
            <h3>Service Providers</h3>
            <p>Third-party vendors who perform services on our behalf, such as:</p>
            <ul>
              <li>Payment processors</li>
              <li>Cloud hosting providers (AWS, Azure)</li>
              <li>Email service providers</li>
              <li>Analytics platforms (Google Analytics)</li>
              <li>Customer relationship management (CRM) systems</li>
            </ul>

            <h3>Legal Requirements</h3>
            <p>We may disclose your information if required by law or in response to:</p>
            <ul>
              <li>Legal processes (subpoenas, court orders)</li>
              <li>Government requests</li>
              <li>Protection of our rights and property</li>
              <li>Investigation of fraud or security issues</li>
            </ul>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information, including:
            </p>
            <ul>
              <li>SSL/TLS encryption for data transmission</li>
              <li>Encrypted databases and secure servers</li>
              <li>Regular security audits and penetration testing</li>
              <li>Access controls and authentication</li>
              <li>Employee training on data protection</li>
            </ul>
            <p>
              However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
            </p>

            <h2>6. Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar technologies to:</p>
            <ul>
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Provide personalized content and advertising</li>
              <li>Improve website functionality</li>
            </ul>
            <p>
              You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.
            </p>

            <h2>7. Your Rights (GDPR)</h2>
            <p>If you are in the European Economic Area (EEA), you have the right to:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
              <li><strong>Restriction:</strong> Limit how we process your data</li>
              <li><strong>Portability:</strong> Receive your data in a structured format</li>
              <li><strong>Object:</strong> Object to processing of your data</li>
              <li><strong>Withdraw consent:</strong> Revoke previously given consent</li>
            </ul>
            <p>
              To exercise these rights, contact us at{' '}
              <a href="mailto:contact@srapsware.com">contact@srapsware.com</a>
            </p>

            <h2>8. Data Retention</h2>
            <p>
              We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. When data is no longer needed, we securely delete or anonymize it.
            </p>

            <h2>9. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under 16. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>

            <h2>10. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place, such as Standard Contractual Clauses (SCCs) approved by the European Commission.
            </p>

            <h2>11. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for their privacy practices. We encourage you to review their privacy policies.
            </p>

            <h2>12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page and updating the "Last updated" date. Continued use of our services after changes constitutes acceptance.
            </p>

            <h2>13. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
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
