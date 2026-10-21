import { ImageResponse } from 'next/og'
export const alt = 'Srapsware - Thoughtful software. Real possibilities.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export default function Image() {
  return new ImageResponse(<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#0e151f', color: '#f6f8fb', padding: '70px', width: '100%', height: '100%' }}>
    <div style={{ fontSize: 26, color: '#71a7ec' }}>SRAPSWARE / SOFTWARE DEVELOPMENT</div>
    <div style={{ display: 'flex', flexDirection: 'column', fontSize: 76, fontWeight: 700, letterSpacing: -3 }}><span>Thoughtful software.</span><span style={{ color: '#71a7ec' }}>Real possibilities.</span></div>
    <div style={{ fontSize: 24 }}>Web · Mobile · Cloud · Connected systems</div>
  </div>, size)
}
