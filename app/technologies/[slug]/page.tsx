import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTechnologies, getAllPortfolio } from '@/lib/content'
import TechnologyHero from '@/components/technologies/technology-hero'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'

interface TechnologyPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const technologies = getTechnologies()
  
  return technologies
    .filter(tech => tech.active)
    .map(tech => ({
      slug: tech.slug
    }))
}

export async function generateMetadata({ params }: TechnologyPageProps): Promise<Metadata> {
  const { slug } = await params
  const technologies = getTechnologies()
  const technology = technologies.find(t => t.slug === slug)
  
  if (!technology) {
    return {
      title: 'Technology Not Found'
    }
  }
  
  return {
    title: `${technology.title} Development | Srapsware`,
    description: technology.description,
    openGraph: {
      title: `${technology.title} Development | Srapsware`,
      description: technology.description,
      type: 'website',
    },
  }
}

export const dynamic = 'force-static'
export const revalidate = 3600

export default async function TechnologyPage({ params }: TechnologyPageProps) {
  const { slug } = await params
  const technologies = getTechnologies()
  const technology = technologies.find(t => t.slug === slug)
  
  if (!technology) {
    notFound()
  }
  
  const allProjects = getAllPortfolio()
  
  // Get projects using this technology
  const relatedProjects = allProjects.filter(project =>
    project.technologies?.some(t => t.toLowerCase() === technology.title.toLowerCase())
  )
  
  // Get related technologies from same category
  const relatedTechnologies = technologies
    .filter(t => 
      t.active && 
      t.category === technology.category && 
      t.slug !== technology.slug
    )
    .slice(0, 6)
  
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <TechnologyHero 
        technology={technology}
        projectCount={relatedProjects.length}
      />
      
      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Experience Level */}
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {technology.experience}
                </div>
                <div className="text-sm text-muted-foreground">
                  Experience Level
                </div>
              </div>
              
              {/* Projects */}
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {relatedProjects.length}+
                </div>
                <div className="text-sm text-muted-foreground">
                  Projects Built
                </div>
              </div>
              
              {/* Category */}
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {technology.category}
                </div>
                <div className="text-sm text-muted-foreground">
                  Technology Type
                </div>
              </div>
            </div>
            
            {/* Description */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4">About {technology.title}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {technology.description}
              </p>
              
              {technology.website && (
                <div className="mt-6">
                  <a
                    href={technology.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium no-underline"
                  >
                    Visit Official Website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Using This Technology */}
      {relatedProjects.length > 0 && (
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Projects Built with {technology.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our portfolio of {relatedProjects.length} projects showcasing our expertise with {technology.title}
              </p>
            </div>
            
            <PortfolioSlider
              projects={allProjects}
              technologies={technologies}
              filterByTechnologies={[technology.title]}
              limit={12}
              showViewAll={relatedProjects.length > 6}
              viewAllLink="/portfolio"
            />
          </div>
        </section>
      )}
      
      {/* Related Technologies */}
      {relatedTechnologies.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Related {technology.category} Technologies
                </h2>
                <p className="text-lg text-muted-foreground">
                  Explore other technologies in our {technology.category} stack
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {relatedTechnologies.map(tech => (
                  <Link
                    key={tech.slug}
                    href={`/technologies/${tech.slug}`}
                    className="group"
                  >
                    <div className="bg-card border border-border rounded-xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1">
                      <div 
                        className="w-16 h-16 rounded-xl flex items-center justify-center p-3 mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${tech.color}15` }}
                      >
                        <Image
                          src={tech.logo}
                          alt={tech.title}
                          width={48}
                          height={48}
                          className="w-full h-full object-contain"
                          unoptimized
                        />
                      </div>
                      <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                        {tech.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Need a {technology.title} Expert?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can leverage {technology.title} to bring your project to life.
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
                href="/technologies"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border rounded-lg hover:bg-accent transition-colors font-medium"
              >
                View All Technologies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
