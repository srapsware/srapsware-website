import { getProducts } from '@/lib/page-content'
import { ProductPage,productMetadata } from '@/components/product/product-page'
export function generateStaticParams(){return getProducts().filter(p=>p.slug!=='gpshunter').map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){return productMetadata((await params).slug)}
export default async function Page({params}:{params:Promise<{slug:string}>}){return <ProductPage slug={(await params).slug}/>}
