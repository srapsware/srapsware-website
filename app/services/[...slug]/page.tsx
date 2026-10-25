import { getOfferings } from '@/lib/page-content'
import { OfferingPage,offeringMetadata } from '@/components/sections/offering-page'
import routes from '@/config/routes.json'
export function generateStaticParams(){return getOfferings().filter(p=>p.route.startsWith('services/')&&!routes.includes('/'+p.route)).map(p=>({slug:p.route.split('/').slice(1)}))}
export async function generateMetadata({params}:{params:Promise<{slug:string[]}>}){return offeringMetadata('services/'+(await params).slug.join('/'))}
export default async function Page({params}:{params:Promise<{slug:string[]}>}){return <OfferingPage slug={'services/'+(await params).slug.join('/')}/>}
