import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllPortfolio, getPortfolioBySlug, getTechnologies } from '@/lib/content'
import PortfolioDetailHero from '@/components/portfolio/portfolio-detail-hero'
import PortfolioDetailContent from '@/components/portfolio/portfolio-detail-content'
import PortfolioGallery from '@/components/portfolio/portfolio-gallery'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { CTASection } from '@/components/sections/cta-section'

// Generate static params for all portfolio slugs at build time
export async function generateStaticParams() {
  const projects = getAllPortfolio()
  
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

// Generate metadata for each portfolio page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getPortfolioBySlug(slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} | Portfolio | Srapsware`,
    description: project.description || `Case study for ${project.title} project`,
    keywords: [
      project.title,
      ...(project.technologies || []),
      ...(project.categories || []),
      'case study',
      'portfolio'
    ].join(', '),
    openGraph: {
      title: `${project.title} - Portfolio`,
      description: project.description || `View our work on ${project.title}`,
      type: 'article',
      images: project.image ? [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        }
      ] : [],
    },
  }
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getPortfolioBySlug(slug)
  
  if (!project) {
    notFound()
  }

  // Get all technologies data from YAML file
  const allTechnologies = getTechnologies()

  // Get all projects for related projects slider
  const allProjects = getAllPortfolio()

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <PortfolioDetailHero project={project} />

      {/* Main Content */}
      <PortfolioDetailContent project={project} allTechnologies={allTechnologies} />

      {/* Gallery Section */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <PortfolioGallery images={project.galleryImages} projectTitle={project.title} />
      )}

      {/* Related Projects Slider */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <PortfolioSlider
            projects={allProjects}
            technologies={allTechnologies}
            title="Related Projects"
            description="Explore more projects from similar categories and technologies"
            filterByCategories={project.categories}
            filterByTechnologies={project.technologies}
            excludeSlug={project.slug}
            limit={6}
            autoplay={true}
            showNavigation={true}
            showPagination={false}
            showViewAll={true}
            viewAllLink="/portfolio"
          />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Have a Similar Project in Mind?"
        description="Let's discuss how we can bring your vision to life with cutting-edge technology and stunning design."
        primaryButtonText="Start Your Project"
        primaryButtonLink="/contact"
        secondaryButtonText="View All Projects"
        secondaryButtonLink="/portfolio"
        showContactInfo={true}
      />
    </main>
  )
}

// Enable static export
export const dynamic = 'force-static'
export const dynamicParams = false
