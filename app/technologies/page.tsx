import { Metadata } from 'next'
import { getTechnologies, getAllPortfolio } from '@/lib/content'
import TechnologyGrid from '@/components/technologies/technology-grid'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Technologies & Expertise | Srapsware',
  description: 'Explore our technology stack and expertise across frontend, backend, mobile, cloud, AI/ML, and more. We leverage cutting-edge tools to build exceptional digital solutions.',
  openGraph: {
    title: 'Technologies & Expertise | Srapsware',
    description: 'Explore our technology stack and expertise across frontend, backend, mobile, cloud, AI/ML, and more.',
    type: 'website',
  },
}

export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

export default async function TechnologiesPage() {
  const technologies = getTechnologies()
  const allProjects = getAllPortfolio()
  
  // Calculate project count per technology
  const technologiesWithProjects = technologies.map(tech => {
    const projectCount = allProjects.filter(project => 
      project.technologies?.some(t => t.toLowerCase() === tech.title.toLowerCase())
    ).length
    
    return {
      ...tech,
      projectCount
    }
  })
  
  // Calculate stats
  const totalTechnologies = technologies.length
  const activeTechnologies = technologies.filter(t => t.active).length
  const categories = [...new Set(technologies.map(t => t.category))].length
  const expertTechnologies = technologies.filter(t => t.experience === 'Expert').length
  
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Our Technology Stack
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Technologies We
              <span className="text-primary"> Master</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              From cutting-edge frontend frameworks to powerful backend solutions, we leverage the best technologies to build exceptional digital experiences.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-background/50 backdrop-blur-sm border border-border rounded-lg p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {totalTechnologies}+
                </div>
                <div className="text-sm text-muted-foreground">
                  Technologies
                </div>
              </div>
              <div className="bg-background/50 backdrop-blur-sm border border-border rounded-lg p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {categories}+
                </div>
                <div className="text-sm text-muted-foreground">
                  Categories
                </div>
              </div>
              <div className="bg-background/50 backdrop-blur-sm border border-border rounded-lg p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {expertTechnologies}+
                </div>
                <div className="text-sm text-muted-foreground">
                  Expert Level
                </div>
              </div>
              <div className="bg-background/50 backdrop-blur-sm border border-border rounded-lg p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {allProjects.length}+
                </div>
                <div className="text-sm text-muted-foreground">
                  Projects Built
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technologies Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <TechnologyGrid technologies={technologiesWithProjects} />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how our technology expertise can bring your project to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Start a Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border rounded-lg hover:bg-accent transition-colors font-medium"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
