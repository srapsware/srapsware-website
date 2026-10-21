import { CTASection } from '@/components/sections/cta-section'
import { PageHero } from '@/components/sections/page-hero'
import { SelectedWork } from '@/components/sections/selected-work'
export const metadata = { title: 'Project Stories | Srapsware', description: 'Explore selected projects from the Srapsware portfolio.', alternates: { canonical: '/resources/case-studies' } }
export default function Page() { return <><PageHero badge="PROJECT STORIES" title="See the work behind the words." description="Explore selected projects, their context and the products we helped build." /><SelectedWork /><CTASection /></> }
