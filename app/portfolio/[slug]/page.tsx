import { completeMetadata } from '@/lib/seo'
import PortfolioDetailContent from '@/components/portfolio/portfolio-detail-content'
import PortfolioDetailHero from '@/components/portfolio/portfolio-detail-hero'
import PortfolioGallery from '@/components/portfolio/portfolio-gallery'
import { CTASection } from '@/components/sections/cta-section'
import { RelatedWork } from '@/components/sections/related-work'
import { inquiryLink } from '@/lib/page-content'
import { getAllPortfolio,getPortfolioBySlug,getTechnologies } from '@/lib/content'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { StructuredData } from '@/components/content/structured-data'
import { site } from '@/config/site'
import { getCdnUrl } from '@/lib/utils'
import { plainDescription } from '@/lib/seo'

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
    return completeMetadata({
    title: 'Project Not Found',
    })
  }

  return completeMetadata({
    alternates: { canonical: `/portfolio/${slug}` },
    title: `${project.title} | Portfolio | Srapsware`,
    description: project.metaDescription || project.description || plainDescription(project.content) || `Explore ${project.title}, a project in the Srapsware portfolio.`,
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
          url: getCdnUrl(project.image),
          alt: project.title,
        }
      ] : [],
    },
  })
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


  return (
    <div className="min-h-screen bg-background">
      <StructuredData data={{'@context':'https://schema.org','@type':'CreativeWork','@id':`${site.url}/portfolio/${slug}#project`,name:project.title,url:`${site.url}/portfolio/${slug}`,description:project.description||plainDescription(project.content),image:project.image?new URL(getCdnUrl(project.image),site.url).href:undefined,creator:{'@id':`${site.url}/#organization`}}}/>
      {/* Hero Section */}
      <PortfolioDetailHero project={project} />

      {/* Main Content */}
      <PortfolioDetailContent project={project} allTechnologies={allTechnologies} />

      {/* Gallery Section */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <PortfolioGallery images={project.galleryImages} projectTitle={project.title} />
      )}

      <RelatedWork title="More work to explore." categories={project.categories} technologies={project.technologies} exclude={project.slug}/>

      {/* CTA Section */}
      <CTASection
        title="Have a Similar Project in Mind?"
        description="Let's discuss how we can bring your vision to life with cutting-edge technology and stunning design."
        primaryButtonText="Start Your Project"
        primaryButtonLink={inquiryLink({project:project.title,source:'/portfolio/'+project.slug})}
        secondaryButtonText="View All Projects"
        secondaryButtonLink="/portfolio"
        showContactInfo={true}
      />
    </div>
  )
}

// Enable static export
export const dynamic = 'force-static'
export const dynamicParams = false
