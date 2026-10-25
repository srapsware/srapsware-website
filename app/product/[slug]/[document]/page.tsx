import { getProductDocuments } from '@/lib/page-content'
import { ProductDocumentPage,productMetadata } from '@/components/product/product-page'
export function generateStaticParams(){return getProductDocuments().filter(d=>!(d.product==='gpshunter'&&['privacy','terms'].includes(d.kind))).map(d=>({slug:d.product,document:d.kind}))}
export async function generateMetadata({params}:{params:Promise<{slug:string;document:string}>}){const p=await params;return productMetadata(p.slug,p.document)}
export default async function Page({params}:{params:Promise<{slug:string;document:string}>}){const p=await params;return <ProductDocumentPage slug={p.slug} kind={p.document}/>}
