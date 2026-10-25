import { completeMetadata } from '@/lib/seo'
import { ResourceLibrary } from '@/components/sections/resource-library'
export const metadata = completeMetadata({ title: 'Technical Field Notes | Srapsware', description: 'Download technical field notes for software discovery, launch readiness and integration planning from Srapsware.', alternates: { canonical: '/resources/whitepapers' } })
export default function Page() { return <ResourceLibrary title="Field notes you can take with you." description="Download concise Markdown checklists for your team. Keep them alongside your project brief, release plan or integration notes." /> }
