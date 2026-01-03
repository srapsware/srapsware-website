import { Metadata } from 'next'
import { getAllPortfolio, getTechnologies } from '@/lib/content'
import PortfolioGrid from '@/components/portfolio/portfolio-grid'
import PortfolioHero from '@/components/portfolio/portfolio-hero'
import { CTASection } from '@/components/sections/cta-section'

export const metadata: Metadata = {
  title: 'Portfolio | 600+ Projects Delivered | Srapsware',
  description: 'Explore our portfolio of 600+ successful projects across web, mobile, and enterprise applications. Real results, real impact.',
  keywords: 'portfolio, case studies, web development projects, mobile app development, enterprise solutions, project showcase',
  openGraph: {
    title: 'Portfolio - 600+ Projects & Success Stories',
    description: 'From startups to enterprises - see how we transform ideas into digital reality',
    type: 'website',
  }
}

export default async function PortfolioPage() {
  // Fetch all portfolio projects from CMS
  const allProjects = getAllPortfolio()
  
  // Get unique categories for filtering
  const allCategories = Array.from(
    new Set(allProjects.flatMap(p => p.categories || []))
  ).sort()
  
  // Get full technology data with logos
  const allTechnologies = getTechnologies()

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section with Animations */}
      <PortfolioHero 
        totalProjects={allProjects.length}
        featuredCount={allProjects.filter(p => p.featured).length}
      />

      {/* Portfolio Grid with Bento Layout */}
      <PortfolioGrid 
        projects={allProjects}
        categories={allCategories}
        technologies={allTechnologies}
      />

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your Project?"
        description="Join 600+ successful projects. Let's transform your ideas into digital reality with cutting-edge technology and stunning design."
        primaryButtonText="Start Your Project"
        primaryButtonLink="/contact"
        secondaryButtonText="View Case Studies"
        secondaryButtonLink="/resources/case-studies"
        showContactInfo={true}
      />
    </main>
  )
}