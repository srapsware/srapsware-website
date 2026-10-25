import { ImageResponse } from 'next/og'
import { getProduct } from '@/lib/page-content'
export const alt='Srapsware product'
export const size={width:1200,height:630}
export const contentType='image/png'
export default async function Image({params}:{params:Promise<{slug:string}>}){const product=getProduct((await params).slug);return new ImageResponse(<div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',width:'100%',height:'100%',padding:70,background:'#0b1b2e',color:'#dcecff',fontFamily:'sans-serif'}}><div style={{fontSize:24,color:'#8cbcff'}}>SRAPSWARE / PRODUCTS</div><div style={{fontSize:80,fontWeight:600}}>{product?.title||'Srapsware'}</div><div style={{fontSize:30,lineHeight:1.4,maxWidth:1000}}>{product?.description||'Thoughtful design. Dependable engineering.'}</div><div style={{fontSize:22,color:'#77daca'}}>{product?.platform} · {product?.status}</div></div>,size)}
