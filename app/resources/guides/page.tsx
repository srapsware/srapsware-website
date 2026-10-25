import { completeMetadata } from '@/lib/seo'
import { ResourceLibrary } from '@/components/sections/resource-library'
export const metadata = completeMetadata({ title: 'Guides | Srapsware', description: 'Read guides to software project discovery, release planning and connected systems before starting your next development project.', alternates: { canonical: '/resources/guides' } })
export default function Page() { return <ResourceLibrary title="A clearer plan starts here." description="Read practical guides to discovery, release planning and connected systems. Use them to prepare for your next project conversation." /> }
