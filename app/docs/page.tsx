import { editorialMetadata } from '@/lib/page-content'
import { EditorialPage } from '@/components/sections/editorial-page'
export const metadata = editorialMetadata('docs')
export default function Page(){return <EditorialPage slug="docs"></EditorialPage>}
