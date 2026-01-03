import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Shield, 
  Lock, 
  Eye, 
  Bug,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Scan,
  FileSearch,
  Database,
  Server,
  Clock
} from 'lucide-react'
import { cn } from '@/lib/utils'
import TechShowcase from '@/components/animations/tech-showcase'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { CTASection } from '@/components/sections/cta-section'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Cybersecurity Services | Application Security & Penetration Testing',
  description: 'Protect your applications from cyber threats. Penetration testing, vulnerability assessment, security audits, OWASP compliance, secure code review.',
  keywords: 'cybersecurity, application security, penetration testing, vulnerability assessment, OWASP, security audit, secure coding, compliance, PCI DSS, HIPAA, SOC 2',
  openGraph: {
    title: 'Cybersecurity & Application Security Services',
    description: 'Comprehensive security testing and protection for web and mobile applications.',
    type: 'website',
  }
}

export default function CybersecurityPage() {
  const projects = getFeaturedPortfolio(6)
  const technologies = getTechnologies()
  const testimonials = getFeaturedTestimonials(6)

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Cybersecurity</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 dark:from-red-950/20 dark:via-orange-950/20 dark:to-amber-950/20" />
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] bg-[size:32px_32px]" />
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm font-medium">
                🛡️ Cybersecurity
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
                Cybersecurity & Application Security
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Protect your applications from cyber threats. Penetration testing, security audits, vulnerability assessments, and compliance certifications.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-red-600">500+</div>
                  <div className="text-sm text-muted-foreground">Apps Secured</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-orange-600">10K+</div>
                  <div className="text-sm text-muted-foreground">Vulnerabilities</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-amber-600">Zero</div>
                  <div className="text-sm text-muted-foreground">Breaches</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Get Security Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="#services"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-red-600 text-red-600 dark:text-red-400 rounded-lg font-semibold hover:bg-red-50 dark:hover:bg-red-950/30 transition-all duration-200"
                >
                  Security Services
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
                <Image
                  src="https://picsum.photos/800/600?random=security"
                  alt="Cybersecurity Testing and Protection"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute top-6 right-6 bg-white/90 dark:bg-black/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg border border-white/20">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-red-500 animate-pulse" />
                    <span className="font-semibold text-sm">Protected</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-4 bg-white dark:bg-gray-900 px-6 py-3 rounded-full shadow-xl border border-gray-200 dark:border-gray-800">
                <Shield className="w-6 h-6 text-red-600" />
                <Lock className="w-6 h-6 text-orange-600" />
                <Bug className="w-6 h-6 text-amber-600" />
                <Eye className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Services */}
      <section id="services" className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Security Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive security testing and protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-red-200 dark:border-red-800 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                <Bug className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Penetration Testing</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                Ethical hacking to find vulnerabilities before attackers do. Manual and automated testing following OWASP Top 10, PTES, and OSSTMM methodologies.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span>Web app penetration testing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span>Mobile app security testing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span>API security assessment</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-orange-200 dark:border-orange-800 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                <Scan className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Vulnerability Assessment</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                Automated scanning to identify security weaknesses. Network, infrastructure, and application-layer vulnerability scans with risk prioritization.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0" />
                  <span>Automated vulnerability scans</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0" />
                  <span>CVE database matching</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0" />
                  <span>Risk scoring and remediation</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-amber-200 dark:border-amber-800 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center mb-4">
                <FileSearch className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure Code Review</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                Line-by-line code analysis to find security flaws. Static and dynamic code analysis (SAST/DAST) with manual expert review of critical sections.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Static code analysis (SAST)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Manual security code review</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Secure coding recommendations</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-yellow-200 dark:border-yellow-800 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Compliance Audits</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                Security assessments for regulatory compliance. PCI DSS, HIPAA, SOC 2, ISO 27001, GDPR compliance validation with gap analysis and remediation.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                  <span>PCI DSS compliance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                  <span>HIPAA security assessments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                  <span>SOC 2 Type II audits</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-lime-200 dark:border-lime-800 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-lime-100 dark:bg-lime-900/30 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-lime-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Security Monitoring</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                24/7 threat detection and incident response. SIEM, IDS/IPS, log analysis, anomaly detection, and real-time security alerts.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-lime-600 flex-shrink-0" />
                  <span>24/7 security monitoring</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-lime-600 flex-shrink-0" />
                  <span>Intrusion detection system</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-lime-600 flex-shrink-0" />
                  <span>Incident response planning</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-green-200 dark:border-green-800 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Security Hardening</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                Strengthen security posture with best practices. Server hardening, database security, WAF configuration, encryption implementation, access controls.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Infrastructure hardening</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>WAF and DDoS protection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Encryption and access control</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-red-100">Apps Secured</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">10K+</div>
                <div className="text-red-100">Vulnerabilities Found</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Zero</div>
                <div className="text-red-100">Security Breaches</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-red-100">Remediation Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OWASP Top 10 */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">OWASP Top 10 Security Risks</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We test and protect against the most critical web application security risks
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                rank: '01',
                title: 'Broken Access Control',
                description: 'Users accessing data or functions without authorization. We test for privilege escalation, insecure direct object references (IDOR), forced browsing.',
                severity: 'Critical'
              },
              {
                rank: '02',
                title: 'Cryptographic Failures',
                description: 'Sensitive data exposed due to weak encryption or missing HTTPS. We verify TLS implementation, password hashing (bcrypt/Argon2), data-at-rest encryption.',
                severity: 'High'
              },
              {
                rank: '03',
                title: 'Injection Attacks',
                description: 'SQL injection, NoSQL injection, command injection, LDAP injection. We test input validation, prepared statements, ORM usage.',
                severity: 'Critical'
              },
              {
                rank: '04',
                title: 'Insecure Design',
                description: 'Security flaws in architecture and design. We review threat modeling, secure development lifecycle, defense-in-depth strategies.',
                severity: 'High'
              },
              {
                rank: '05',
                title: 'Security Misconfiguration',
                description: 'Default passwords, unnecessary services, verbose error messages. We check server hardening, security headers, cloud storage permissions.',
                severity: 'Medium'
              },
              {
                rank: '06',
                title: 'Vulnerable Components',
                description: 'Outdated libraries with known CVEs. We scan dependencies, check for security patches, recommend version updates.',
                severity: 'High'
              },
              {
                rank: '07',
                title: 'Authentication Failures',
                description: 'Weak passwords, credential stuffing, session hijacking. We test MFA implementation, brute force protection, session management.',
                severity: 'Critical'
              },
              {
                rank: '08',
                title: 'Data Integrity Failures',
                description: 'Insecure deserialization, insufficient integrity verification. We test for tampered objects, CI/CD security, unsigned updates.',
                severity: 'High'
              },
              {
                rank: '09',
                title: 'Logging and Monitoring Failures',
                description: 'Insufficient logging preventing detection of breaches. We verify audit logs, alerting systems, incident response procedures.',
                severity: 'Medium'
              },
              {
                rank: '10',
                title: 'Server-Side Request Forgery',
                description: 'SSRF attacks targeting internal resources. We test URL validation, network segmentation, outbound request restrictions.',
                severity: 'High'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl font-bold text-red-600">{item.rank}</div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                      <span className={cn(
                        'inline-block px-2 py-0.5 rounded text-xs font-medium',
                        item.severity === 'Critical' && 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
                        item.severity === 'High' && 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
                        item.severity === 'Medium' && 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
                      )}>
                        {item.severity}
                      </span>
                    </div>
                  </div>
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <TechShowcase 
            technologies={technologies}
            title="Security Testing Tools"
            subtitle="Industry-leading tools for comprehensive security assessment"
            filterSlugs={[
              'nodejs', 'python', 'docker', 'kubernetes', 'aws',
              'postgresql', 'mongodb', 'redis', 'nginx', 'linux'
            ]}
            showStats={true}
          />
        </div>
      </section>

      {/* Security Process */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Security Testing Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Thorough security assessment in 2-4 weeks
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Scoping & Planning',
                description: 'Define testing scope, targets, and objectives. Identify critical assets and attack surfaces. Set up test environment and access credentials. Sign NDA and legal agreements.',
                duration: '1-2 days',
                icon: FileSearch
              },
              {
                step: '02',
                title: 'Reconnaissance & Discovery',
                description: 'Information gathering and attack surface mapping. Technology stack identification. Subdomain enumeration. Port scanning and service detection.',
                duration: '2-3 days',
                icon: Scan
              },
              {
                step: '03',
                title: 'Vulnerability Testing',
                description: 'Automated scanning with Burp Suite, OWASP ZAP, Nessus. Manual testing for OWASP Top 10. Authentication and authorization testing. Business logic flaws.',
                duration: '1-2 weeks',
                icon: Bug
              },
              {
                step: '04',
                title: 'Exploitation & Impact Analysis',
                description: 'Attempt to exploit discovered vulnerabilities. Assess potential impact and data exposure. Document proof-of-concept exploits. Prioritize risks (Critical/High/Medium/Low).',
                duration: '3-5 days',
                icon: Shield
              },
              {
                step: '05',
                title: 'Reporting & Recommendations',
                description: 'Detailed report with executive summary. Vulnerability descriptions with CVSS scores. Step-by-step reproduction steps. Remediation recommendations and secure code examples.',
                duration: '2-3 days',
                icon: FileSearch
              },
              {
                step: '06',
                title: 'Remediation Support & Retest',
                description: 'Support during vulnerability fixes. Secure code review of patches. Retest fixed vulnerabilities. Issue security certificate upon successful remediation.',
                duration: '1-2 weeks',
                icon: ShieldCheck
              }
            ].map((item, index) => (
              <div key={index} className="relative pl-8 pb-12 border-l-2 border-red-600 last:border-0 last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 bg-red-600 rounded-full -translate-x-[9px]" />
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow ml-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl font-bold text-red-600">{item.step}</div>
                      <div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground flex items-center mt-1">
                          <Clock className="w-4 h-4 mr-1" />
                          {item.duration}
                        </p>
                      </div>
                    </div>
                    <item.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Applications We've Secured
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Security testing across industries and platforms
            </p>
          </div>
          
          <PortfolioSlider 
            projects={projects}
            technologies={technologies}
            autoplay={true}
            showNavigation={true}
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Security Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by companies for application security
            </p>
          </div>
          
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {[
                {
                  question: 'How much does penetration testing cost?',
                  answer: 'Pricing depends on scope: Small web app (under 20 pages): $3K-8K. Medium web app (20-100 pages): $8K-20K. Large web app or API: $20K-50K. Mobile app (iOS/Android): $5K-15K per platform. Compliance audit (PCI DSS, HIPAA): $15K-40K. Timeline: 2-4 weeks for full test with report. We provide fixed-price quotes after scoping call.'
                },
                {
                  question: 'What is the difference between pentest and vulnerability scan?',
                  answer: 'Vulnerability Scan: Automated tool (Nessus, OpenVAS) scans for known CVEs. Fast (hours), cheaper ($500-2K), finds obvious flaws. Penetration Test: Manual testing by security experts. Tests business logic, chained exploits, real-world attack scenarios. Deeper analysis (2-4 weeks), $3K-50K, finds complex vulnerabilities scanners miss. Recommendation: Start with scan for quick wins, then do pentest for comprehensive security validation.'
                },
                {
                  question: 'Will penetration testing break my application?',
                  answer: 'No. Ethical penetration testing is non-destructive. We test in controlled manner on staging/test environment (recommended) or production with safeguards. No data deletion or permanent changes. DoS attacks excluded unless specifically requested. We backup data before testing. Any issues discovered are documented, not exploited maliciously. Professional indemnity insurance covers rare incidents.'
                },
                {
                  question: 'Do I need penetration testing for compliance?',
                  answer: 'Yes for many regulations: PCI DSS: Annual pentest required if storing/processing credit cards. HIPAA: Security risk assessments required for healthcare data. SOC 2: Penetration testing expected for trust service principles. ISO 27001: Security testing part of ISMS certification. GDPR: Security testing recommended for data protection. Insurance: Many cyber insurance policies require annual security assessments.'
                },
                {
                  question: 'What happens after vulnerabilities are found?',
                  answer: 'Our process: 1) Detailed Report: Vulnerabilities with severity ratings (Critical/High/Medium/Low), reproduction steps, impact analysis, remediation recommendations. 2) Remediation Call: Walkthrough findings with your dev team, answer questions, provide secure code examples. 3) Support: Available during fix implementation (extra 20-40 hours included). 4) Retest: Verify fixes after remediation (included in original quote). 5) Certificate: Issue security assessment certificate after successful retest.'
                },
                {
                  question: 'How often should I do security testing?',
                  answer: 'Recommendations: Annual Pentest: Minimum for most applications and compliance requirements. Quarterly Pentest: High-risk applications (financial, healthcare, high-traffic). After Major Changes: New features, architecture changes, third-party integrations. Continuous: Automated vulnerability scanning weekly/monthly. Bug Bounty: Ongoing crowdsourced testing for mature apps. We also offer: Retainer programs for ongoing security testing and monitoring at discounted rates.'
                }
              ].map((faq, index) => (
                <details key={index} className="group bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-muted/50 transition-colors">
                    <span className="font-semibold text-lg">{faq.question}</span>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="Protect Your Application"
        description="Find vulnerabilities before hackers do. Comprehensive security testing and remediation support."
        primaryButtonText="Get Security Audit"
        primaryButtonLink="/contact"
        secondaryButtonText="View Services"
        secondaryButtonLink="#services"
        showContactInfo={true}
      />
    </div>
  )
}
