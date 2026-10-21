import PortfolioGrid from '@/components/portfolio/portfolio-grid'
import { CTASection } from '@/components/sections/cta-section'
import { PageHero } from '@/components/sections/page-hero'
import { getAllPortfolio,getTechnologies } from '@/lib/content'
export const metadata = { title:'Our Work | Srapsware', description:'Explore the Srapsware project archive across web, mobile and software engineering.', alternates:{canonical:'/portfolio'} }
export default function PortfolioPage(){const projects=getAllPortfolio();const categories=Array.from(new Set(projects.flatMap(project=>project.categories||[]))).sort();return <><PageHero badge="THE PROJECT ARCHIVE" title="A closer look at what we build." description="Explore projects by name, category or technology. Each project has its own context, challenges and approach."/><PortfolioGrid projects={projects} categories={categories} technologies={getTechnologies()}/><CTASection/></>}
