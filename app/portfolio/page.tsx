import { ContentDirectory } from '@/components/content/content-directory'
import { completeMetadata } from '@/lib/seo'
import PortfolioGrid from '@/components/portfolio/portfolio-grid'
import { CTASection } from '@/components/sections/cta-section'
import { PageHero } from '@/components/sections/page-hero'
import { getAllPortfolio,getTechnologies } from '@/lib/content'
export const metadata = completeMetadata({ title:'Our Work | Srapsware', description:'Explore the Srapsware project archive across web, mobile and software engineering.', alternates:{canonical:'/portfolio'} })
export default function PortfolioPage(){const projects=getAllPortfolio();const categories=Array.from(new Set(projects.flatMap(project=>project.categories||[]))).sort();return <><PageHero scene="studio" badge="THE PROJECT ARCHIVE" title="A closer look at what we build." description="Explore projects by name, category or technology. Each project has its own context, challenges and approach."/><PortfolioGrid projects={projects} categories={categories} technologies={getTechnologies()}/><ContentDirectory title="Browse the complete project index" items={projects.map(p=>({title:p.title,href:"/portfolio/"+p.slug}))}/><CTASection/></>}
