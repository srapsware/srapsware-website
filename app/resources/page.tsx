import { completeMetadata } from '@/lib/seo'
import { ResourceLibrary } from '@/components/sections/resource-library'
export const metadata = completeMetadata({ title: 'Resources | Srapsware', description: 'Explore Srapsware resources for planning, building and maintaining software, including practical guides and downloadable field notes.', alternates: { canonical: '/resources' } })
export default function Page() { return <ResourceLibrary /> }
