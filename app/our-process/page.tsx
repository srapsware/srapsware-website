import { editorialMetadata } from '@/lib/page-content'
import { EditorialPage } from '@/components/sections/editorial-page'
import { DeliveryProcess } from '@/components/sections/delivery-process'
import { CTASection } from '@/components/sections/cta-section'
export const metadata = editorialMetadata('our-process')
export default function Page(){return <EditorialPage slug="our-process"><DeliveryProcess/><CTASection/></EditorialPage>}
