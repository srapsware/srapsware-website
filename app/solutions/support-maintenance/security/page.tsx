import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { ProcessSteps } from '@/components/sections/process-steps'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { CTASection } from '@/components/sections/cta-section'
import TechShowcase from '@/components/animations/tech-showcase'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'
import { Shield, Lock, Eye, AlertTriangle, FileCheck, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Security Solutions | Cybersecurity Services | Penetration Testing | Srapsware',
  description: 'Comprehensive cybersecurity services including penetration testing, security audits, compliance management, and threat monitoring to protect your business from cyber threats.',
  openGraph: {
    title: 'Cybersecurity & Security Solutions',
    description: 'Protect your business with expert security audits, penetration testing, and compliance management',
    type: 'website',
  }
}

export default function SecuritySolutionsPage() {
  const portfolioProjects = getFeaturedPortfolio()
  const technologies = getTechnologies()
  const testimonials = getFeaturedTestimonials()

  const processSteps = [
    {
      number: 1,
      title: 'Security Assessment',
      description: 'Comprehensive evaluation of your current security posture, identify vulnerabilities, and prioritize risks across your infrastructure.',
      duration: '1-2 weeks',
      icon: 'Search'
    },
    {
      number: 2,
      title: 'Security Audit',
      description: 'Detailed security audit covering applications, networks, databases, and compliance requirements with actionable recommendations.',
      duration: '2-4 weeks',
      icon: 'FileCheck'
    },
    {
      number: 3,
      title: 'Implementation',
      description: 'Deploy security controls, fix critical vulnerabilities, implement monitoring, and establish security policies and procedures.',
      duration: '4-8 weeks',
      icon: 'Shield'
    },
    {
      number: 4,
      title: 'Testing & Validation',
      description: 'Penetration testing, vulnerability scanning, security testing, and validation that security measures are working effectively.',
      duration: '2-3 weeks',
      icon: 'CheckCircle'
    },
    {
      number: 5,
      title: 'Monitoring Setup',
      description: 'Implement continuous monitoring, threat detection, incident response procedures, and security alerting systems.',
      duration: '2 weeks',
      icon: 'Eye'
    },
    {
      number: 6,
      title: 'Ongoing Security',
      description: 'Regular security updates, compliance monitoring, incident response, and continuous improvement of security posture.',
      duration: 'Ongoing',
      icon: 'TrendingUp'
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <PageHero
        badge="Cybersecurity"
        title="Protect Your Business from Cyber Threats"
        description="Comprehensive security solutions including penetration testing, security audits, compliance management, and 24/7 threat monitoring. Keep your data safe and your business secure."
        ctaPrimary={{
          text: 'Start Security Audit',
          href: '/contact'
        }}
        ctaSecondary={{
          text: 'View Security Services',
          href: '/services'
        }}
      />

      {/* Overview Section - Creative Magazine Layout */}
      <section className="relative py-32 border-t border-border overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          {/* Dynamic Title */}
          <div className="relative mb-20">
            <div className="absolute -top-10 -right-10 w-32 h-32 border-4 border-red-500/20 rounded-full hidden lg:block"></div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-foreground">Security That</span>
              <span className="block mt-2 bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                Never Sleeps
              </span>
            </h2>
          </div>

          {/* First Section - Diagonal Split */}
          <div className="relative mb-32">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Large Image - Diagonal Cut */}
              <div className="lg:col-span-7 relative">
                <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 opacity-50" 
                       style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}></div>
                  <img 
                    src="https://picsum.photos/seed/security-monitoring/900/600" 
                    alt="Security Monitoring"
                    className="w-full h-full object-cover"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
                  />
                  {/* Floating Badge */}
                  <div className="absolute top-8 right-8 bg-background/90 backdrop-blur-md border border-red-500/30 rounded-full px-6 py-3 shadow-xl">
                    <span className="text-sm font-bold text-red-500">24/7 Monitoring</span>
                  </div>
                </div>
              </div>
              
              {/* Text Content - Overlapping */}
              <div className="lg:col-span-5 lg:-ml-20 relative z-10">
                <div className="bg-background/95 backdrop-blur-xl border border-border rounded-3xl p-8 lg:p-10 shadow-2xl">
                  <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-orange-500 mb-6"></div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Proactive Security Defense</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Don't wait for breaches to happen. Our comprehensive security approach identifies vulnerabilities before attackers can exploit them, keeping your business protected around the clock.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Section - Reverse Layout */}
          <div className="relative mb-32">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Text Content - Left Side */}
              <div className="lg:col-span-5 relative z-10 order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-500/10 rounded-lg -z-10"></div>
                  <div className="bg-gradient-to-br from-background via-background to-red-900/5 backdrop-blur-xl border border-border rounded-3xl p-8 lg:p-10 shadow-2xl">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                      <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse delay-100"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500 animate-pulse delay-200"></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Compliance Made Simple</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Navigate complex compliance requirements with ease. We handle SOC 2, HIPAA, GDPR, PCI DSS, and other regulatory frameworks so you can focus on your business.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Image Grid - Right Side */}
              <div className="lg:col-span-7 lg:-mr-20 relative order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4 h-[500px]">
                  <div className="row-span-2 rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/compliance-audit/400/650" 
                      alt="Compliance Audit"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/threat-detection/400/320" 
                      alt="Threat Detection"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/80 to-transparent"></div>
                  </div>
                  <div className="rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/security-dashboard/400/320" 
                      alt="Security Dashboard"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tl from-amber-500/80 to-transparent"></div>
                    <div className="absolute bottom-4 right-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-full">
                      Real-time Alerts
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Section - Full Width Stats */}
          <div className="relative">
            <div className="bg-gradient-to-br from-background via-red-500/5 to-orange-900/10 rounded-[3rem] overflow-hidden border border-border shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left - Text with Stats */}
                <div className="p-12 lg:p-16 flex flex-col justify-center relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 to-amber-500"></div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                    Zero Trust{' '}
                    <span className="text-red-500">Security Model</span>
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Never trust, always verify. Our zero-trust approach ensures every access request is authenticated, authorized, and encrypted - protecting against both external and internal threats.
                  </p>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-500 mb-2">99.9%</div>
                      <div className="text-sm text-muted-foreground">Uptime Protected</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-500 mb-2">&lt;1min</div>
                      <div className="text-sm text-muted-foreground">Response Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-500 mb-2">24/7</div>
                      <div className="text-sm text-muted-foreground">Monitoring</div>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-sm font-medium">
                      Zero Trust
                    </span>
                    <span className="px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-sm font-medium">
                      SOC 2 Compliant
                    </span>
                    <span className="px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-sm font-medium">
                      GDPR Ready
                    </span>
                  </div>
                </div>
                
                {/* Right - Large Hero Image */}
                <div className="relative h-[400px] lg:h-auto min-h-[500px]">
                  <img 
                    src="https://picsum.photos/seed/security-control-center/700/700" 
                    alt="Security Control Center"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent lg:from-background/50"></div>
                  
                  {/* Floating Card */}
                  <div className="absolute bottom-8 right-8 bg-background/95 backdrop-blur-xl border border-border rounded-2xl p-6 shadow-2xl max-w-xs hidden lg:block">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-bold">
                        <Shield className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground mb-1">Always Protected</div>
                        <div className="text-sm text-muted-foreground">Enterprise-grade security</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - Bento Grid Layout */}
      <section className="relative py-28 border-t border-border overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(239,68,68,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(249,115,22,0.05),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-sm font-semibold text-red-500 mb-6">
              Security Services
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Comprehensive{' '}
              <span className="text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text">
                Security Solutions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From vulnerability assessment to compliance management
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Security Scanning - Large Featured */}
            <div className="lg:col-span-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-red-950/40 to-orange-950/40 backdrop-blur-xl border border-red-500/20 rounded-3xl p-8 lg:p-12 overflow-hidden group-hover:border-red-500/40 transition-all duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground">Security Scanning & Assessment</h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    Automated vulnerability scanning, penetration testing, security assessments, and risk analysis across your entire infrastructure, applications, and networks.
                  </p>
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <img 
                      src="https://picsum.photos/seed/vulnerability-scan/700/300" 
                      alt="Security Scanning"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-950/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-4">
                      <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">Automated Scans</div>
                      <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">Pen Testing</div>
                      <div className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">Risk Analysis</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Threat Detection - Tall Card */}
            <div className="lg:col-span-4 lg:row-span-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-orange-950/40 to-amber-950/40 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-8 overflow-hidden group-hover:border-orange-500/40 transition-all duration-300">
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6">
                    <AlertTriangle className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Threat Detection & Response</h3>
                  <p className="text-base text-muted-foreground mb-6">
                    24/7 threat monitoring, real-time alerts, automated incident response, and forensic analysis to detect and neutralize security threats before they cause damage.
                  </p>
                  <div className="mt-auto space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-orange-500/5 rounded-lg border border-orange-500/10">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm">Real-time Monitoring</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-orange-500/5 rounded-lg border border-orange-500/10">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span className="text-sm">Auto Response</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-orange-500/5 rounded-lg border border-orange-500/10">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm">Forensic Analysis</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Compliance Management */}
            <div className="lg:col-span-4 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-amber-950/40 to-yellow-950/40 backdrop-blur-xl border border-amber-500/20 rounded-3xl p-6 overflow-hidden group-hover:border-amber-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center mb-4">
                  <FileCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Compliance Management</h3>
                <p className="text-sm text-muted-foreground">
                  Ensure compliance with SOC 2, HIPAA, GDPR, PCI DSS, and other regulatory frameworks through automated monitoring and reporting.
                </p>
              </div>
            </div>

            {/* Vulnerability Assessment */}
            <div className="lg:col-span-4 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-red-950/40 to-pink-950/40 backdrop-blur-xl border border-red-500/20 rounded-3xl p-6 overflow-hidden group-hover:border-red-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Vulnerability Assessment</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Identify and prioritize security vulnerabilities across your systems, applications, and infrastructure with detailed remediation guidance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-red-500/10 border border-red-500/30 rounded text-xs">Critical</span>
                  <span className="px-2 py-1 bg-red-500/10 border border-red-500/30 rounded text-xs">High Risk</span>
                  <span className="px-2 py-1 bg-red-500/10 border border-red-500/30 rounded text-xs">Remediation</span>
                </div>
              </div>
            </div>

            {/* Incident Response & Penetration Testing - Wide Card */}
            <div className="lg:col-span-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-rose-500/20 to-red-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-r from-pink-950/40 via-rose-950/40 to-red-950/40 backdrop-blur-xl border border-pink-500/20 rounded-3xl overflow-hidden group-hover:border-pink-500/40 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0 h-full">
                  {/* Incident Response Side */}
                  <div className="p-8 flex flex-col justify-center border-r border-pink-500/10">
                    <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">Incident Response</h3>
                    <p className="text-base text-muted-foreground">
                      Rapid response to security incidents with containment, eradication, recovery, and lessons learned. Minimize damage and prevent future incidents.
                    </p>
                  </div>
                  
                  {/* Penetration Testing Side */}
                  <div className="relative p-8 flex flex-col justify-center">
                    <div className="absolute inset-0">
                      <img 
                        src="https://picsum.photos/seed/penetration-testing/500/400" 
                        alt="Penetration Testing"
                        className="w-full h-full object-cover opacity-20"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-red-950/80 to-red-950/40"></div>
                    </div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                        <Lock className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground">Penetration Testing</h3>
                      <p className="text-base text-muted-foreground">
                        Ethical hacking to identify exploitable vulnerabilities before malicious actors can find them. Comprehensive testing of your security defenses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <TechShowcase 
        technologies={technologies}
        title="Security Technology Stack"
        subtitle="Enterprise-grade security tools and platforms"
        filterSlugs={[
          // Backend for security tools
          'nodejs', 'python',
          // Database security
          'postgresql', 'mongodb', 'redis',
          // Cloud security
          'aws', 'docker', 'kubernetes', 'nginx'
        ]}
        showStats={true}
      />

      {/* Process */}
      <ProcessSteps
        title="Our Security Process"
        description="Comprehensive security assessment to ongoing protection"
        steps={processSteps}
      />

      {/* Use Cases - Card Deck Layout */}
      <section className="relative py-32 border-t border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
              <span className="px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-sm font-semibold text-red-500">
                Security Scenarios
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-red-500 to-transparent"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Security Solutions{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 bg-clip-text">
                  For Every Business
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                  <path d="M0 6C50 0 150 12 200 6" stroke="url(#gradient-security)" strokeWidth="2"/>
                  <defs>
                    <linearGradient id="gradient-security" x1="0" y1="0" x2="200" y2="0">
                      <stop offset="0%" stopColor="rgb(239, 68, 68)" />
                      <stop offset="50%" stopColor="rgb(249, 115, 22)" />
                      <stop offset="100%" stopColor="rgb(245, 158, 11)" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Protecting businesses across all industries from cyber threats
            </p>
          </div>

          {/* Card Deck */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Security Audits */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 backdrop-blur-sm border border-red-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-red-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-red-500/40 transition-all duration-300">
                  <div className="absolute top-4 right-4 w-32 h-32 bg-red-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <FileCheck className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Security Audits & Assessments</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Comprehensive security audits for startups, enterprises, and everything in between. Identify vulnerabilities, assess risks, and get actionable remediation plans.
                    </p>
                    
                    <div className="relative h-40 rounded-xl overflow-hidden mb-6">
                      <img 
                        src="https://picsum.photos/seed/security-audit/600/300" 
                        alt="Security Audit"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-red-500/80 to-transparent"></div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full text-xs font-medium text-red-400">
                        Risk Assessment
                      </span>
                      <span className="px-3 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full text-xs font-medium text-red-400">
                        Vulnerability Scan
                      </span>
                      <span className="px-3 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full text-xs font-medium text-red-400">
                        Compliance Check
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Penetration Testing */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 backdrop-blur-sm border border-orange-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-orange-500/40 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 w-40 h-40 bg-orange-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Lock className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Penetration Testing</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Ethical hacking services to test your defenses. Web applications, APIs, networks, and mobile apps tested by certified penetration testers.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      <div className="relative h-20 rounded-lg overflow-hidden bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-orange-400">Web Apps</span>
                      </div>
                      <div className="relative h-20 rounded-lg overflow-hidden bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-orange-400">APIs</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400">
                        Ethical Hacking
                      </span>
                      <span className="px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400">
                        Certified Testers
                      </span>
                      <span className="px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-xs font-medium text-orange-400">
                        Detailed Reports
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Compliance Management */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-500/5 backdrop-blur-sm border border-amber-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-amber-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-amber-500/40 transition-all duration-300">
                  <div className="absolute top-4 left-4 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Compliance Management</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      SOC 2, HIPAA, GDPR, PCI DSS compliance. Automated monitoring, evidence collection, and audit preparation for regulatory requirements.
                    </p>
                    
                    <div className="relative h-32 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-xl p-4 mb-6 border border-amber-500/20">
                      <div className="space-y-2">
                        <div className="h-4 bg-amber-500/20 rounded w-3/4"></div>
                        <div className="h-4 bg-amber-500/20 rounded w-full"></div>
                        <div className="h-4 bg-amber-500/20 rounded w-5/6"></div>
                        <div className="h-4 bg-amber-500/20 rounded w-2/3"></div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full text-xs font-medium text-amber-400">
                        SOC 2
                      </span>
                      <span className="px-3 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full text-xs font-medium text-amber-400">
                        HIPAA
                      </span>
                      <span className="px-3 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full text-xs font-medium text-amber-400">
                        GDPR
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Threat Monitoring */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 backdrop-blur-sm border border-red-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-red-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-red-500/40 transition-all duration-300">
                  <div className="absolute bottom-4 right-4 w-40 h-40 bg-red-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">24/7 Threat Monitoring</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Continuous security monitoring with real-time alerts, automated responses, and threat intelligence. Never sleep on your security again.
                    </p>
                    
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="aspect-square bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-xl border border-red-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-xl border border-red-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5V17zM4.868 12.683A17.925 17.925 0 0112 21c7.962 0 12-1.21 12-2.683m-12 2.683l-9-9 3.5-3.5L12 21zm0 0L21 12l-9-9-3.5 3.5L12 21z" />
                        </svg>
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-xl border border-red-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full text-xs font-medium text-red-400">
                        Real-time
                      </span>
                      <span className="px-3 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full text-xs font-medium text-red-400">
                        Auto Alerts
                      </span>
                      <span className="px-3 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full text-xs font-medium text-red-400">
                        Threat Intel
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      {portfolioProjects.length > 0 && (
        <section className="py-20 border-t border-border bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Security Solutions We've Implemented
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Protecting businesses with enterprise-grade security
              </p>
            </div>
            
            <div className="px-8">
              <PortfolioSlider 
                projects={portfolioProjects.slice(0, 6)}
                technologies={technologies}
                autoplay={true}
                showNavigation={true}
              />
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="relative py-28 border-t border-border overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Trusted by Businesses
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Security solutions that businesses rely on
              </p>
            </div>
            
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </section>
      )}

      {/* Final CTA */}
      <CTASection 
        title="Secure Your Business Today"
        description="Don't wait for a security breach to happen. Get a comprehensive security assessment and protect your business from cyber threats."
        primaryButtonText="Start Security Audit"
        primaryButtonLink="/contact"
        secondaryButtonText="Get Security Consultation"
        secondaryButtonLink="/contact"
        showContactInfo={true}
      />
    </main>
  )
}
