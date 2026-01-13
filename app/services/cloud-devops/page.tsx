import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { CTASection } from '@/components/sections/cta-section'
import { Cloud, Workflow, RefreshCw, Package } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cloud & DevOps Services | AWS, Azure, Kubernetes | Srapsware',
  description: 'Professional cloud and DevOps services including cloud solutions, CI/CD pipelines, cloud migration, and container orchestration.',
  openGraph: {
    title: 'Cloud & DevOps Services',
    description: 'Scalable cloud infrastructure and DevOps automation',
    type: 'website',
  }
}

const cloudServices = [
  {
    title: 'Cloud Solutions',
    description: 'Design and implement scalable cloud infrastructure on AWS, Azure, and Google Cloud Platform.',
    icon: Cloud,
    href: '/services/cloud-devops/cloud',
    features: ['AWS & Azure', 'Google Cloud', 'Serverless', 'Microservices'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'DevOps & CI/CD',
    description: 'Automated deployment pipelines, continuous integration, and delivery workflows.',
    icon: Workflow,
    href: '/services/cloud-devops/devops',
    features: ['CI/CD Pipelines', 'GitHub Actions', 'Jenkins', 'Automated Testing'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Cloud Migration',
    description: 'Seamless migration from on-premise to cloud infrastructure with minimal downtime.',
    icon: RefreshCw,
    href: '/services/cloud-devops/migration',
    features: ['Migration Strategy', 'Data Transfer', 'Zero Downtime', 'Cost Optimization'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Container Solutions',
    description: 'Docker containerization and Kubernetes orchestration for scalable microservices.',
    icon: Package,
    href: '/services/cloud-devops/containers',
    features: ['Docker', 'Kubernetes', 'Container Registry', 'Service Mesh'],
    color: 'from-orange-500 to-red-500'
  }
]

export default function CloudDevOpsPage() {
  return (
    <main>
      {/* Hero Section */}
      <PageHero
        badge="Cloud & DevOps"
        title="Cloud & DevOps Services"
        description="Scale your applications with modern cloud infrastructure, automated deployments, and DevOps best practices."
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
              Our Cloud & DevOps Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From cloud architecture to automated pipelines, we help you build and deploy at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {cloudServices.map((service) => {
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
