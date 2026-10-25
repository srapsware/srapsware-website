import { editorialMetadata } from '@/lib/page-content'
import { EditorialPage } from '@/components/sections/editorial-page'
import JourneyTimeline from '@/components/animations/journey-timeline/journey-timeline'
import './journey-timeline-styles.css'
import { DeliveryProcess } from '@/components/sections/delivery-process'
import { CTASection } from '@/components/sections/cta-section'
export const metadata = editorialMetadata('about')
export default function Page(){return <EditorialPage slug="about"><JourneyTimeline/><DeliveryProcess/><CTASection/></EditorialPage>}
