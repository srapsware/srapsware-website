import { editorialMetadata } from '@/lib/page-content'
import { EditorialPage } from '@/components/sections/editorial-page'
export const metadata = editorialMetadata('api-documentation')
export default function Page(){return <EditorialPage slug="api-documentation"></EditorialPage>}
