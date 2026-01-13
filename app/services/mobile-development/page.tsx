import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { CTASection } from '@/components/sections/cta-section'
import { Smartphone, TabletSmartphone, GitBranch, Palette } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mobile App Development Services | iOS, Android, React Native | Srapsware',
  description: 'Professional mobile app development services including native iOS, Android, cross-platform, and mobile app design.',
  openGraph: {
    title: 'Mobile App Development Services',
    description: 'Native and cross-platform mobile apps for iOS and Android',
    type: 'website',
  }
}

const mobileServices = [
  {
    title: 'iOS App Development',
    description: 'Native iOS applications built with Swift and SwiftUI for optimal performance and user experience.',
    icon: TabletSmartphone,
    href: '/services/mobile-development/ios',
    features: ['Swift & SwiftUI', 'Native Performance', 'App Store Optimization', 'iPhone & iPad'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Android App Development',
    description: 'Native Android apps developed with Kotlin and Jetpack Compose for millions of devices.',
    icon: Smartphone,
    href: '/services/mobile-development/android',
    features: ['Kotlin & Java', 'Material Design', 'Google Play Store', 'All Android Devices'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Cross-Platform Apps',
    description: 'Build once, deploy everywhere with React Native and Flutter for iOS and Android.',
    icon: GitBranch,
    href: '/services/mobile-development/cross-platform',
    features: ['React Native', 'Flutter', 'Code Sharing', 'Faster Development'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Mobile App Design',
    description: 'User-centric mobile UI/UX design, prototyping, and app branding for engaging experiences.',
    icon: Palette,
    href: '/services/mobile-development/design',
    features: ['UI/UX Design', 'Prototyping', 'User Research', 'Design Systems'],
    color: 'from-pink-500 to-rose-500'
  }
]

export default function MobileDevelopmentPage() {
  return (
    <main>
      {/* Hero Section */}
      <PageHero
        badge="Mobile Development"
        title="Mobile App Development Services"
        description="Build powerful native and cross-platform mobile applications for iOS and Android with cutting-edge technologies."
        ctaPrimary={{
          text: 'Start Your Project',
          href: '/contact'
        }}
        ctaSecondary={{
          text: 'View Portfolio',
          href: '/portfolio'
        }}
      />

      {/* Services Grid */}
      <section className="relative py-32 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our Mobile Development Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From native iOS and Android apps to cross-platform solutions, we create mobile experiences users love.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {mobileServices.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group relative p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                >
                  {/* Gradient Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  )
}
