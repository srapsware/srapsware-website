import type { capabilities } from '@/config/capabilities'
import './capability-scenes.css'

type Capability = typeof capabilities[number]
function Wire({ d }: { d: string }) {
  return <path d={d} className="cap-wire" pathLength="1" strokeDasharray="1"/>
}
function Label({ x, y, children }: { x: number; y: number; children: string }) {
  return <text x={x} y={y} className="cap-label">{children}</text>
}

export function CapabilityScene({ item, id }: { item: Capability; id: string }) {
  const [a, b, c, d] = item.nodes
  return <svg className="cap-scene" data-scene={item.id} viewBox="0 0 640 470" role="img" aria-labelledby={`${id}-art-title ${id}-art-desc`}>
    <title id={`${id}-art-title`}>{`${item.center}: ${item.detail}`}</title>
    <desc id={`${id}-art-desc`}>{item.id === 'product' ? `${a} and ${b} are assembled above a foundation of ${c} and ${d}.` : item.id === 'commerce' ? `A purchase moves from ${a} through ${b} to ${c}, connected to ${d}.` : item.id === 'cloud' ? `${a} passes through ${b}, deploys to a ${c}, and feeds ${d}.` : `${a} and ${b} exchange information through ${c} with ${d}.`}</desc>
    <defs><pattern id={`${id}-grid`} width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="currentColor" opacity=".12"/></pattern></defs>
    <rect width="640" height="470" fill={`url(#${id}-grid)`}/>
    <text x="40" y="38" className="cap-kicker">{item.number} / {item.center}</text>
    {item.id === 'product' && <>
      <g className="cap-foundation"><path d="m74 345 245-64 246 64-246 76Z" className="cap-soft"/><path d="m74 345 245 76 246-76M319 421v14" className="cap-line"/><Wire d="M190 315v30h255v-41"/><rect x="130" y="347" width="164" height="42" rx="10" className="cap-paper"/><Label x={151} y={373}>{c}</Label><rect x="324" y="347" width="164" height="42" rx="10" className="cap-paper"/><Label x={345} y={373}>{d}</Label></g>
      <g className="cap-browser"><rect x="74" y="90" width="351" height="231" rx="15" className="cap-shadow" transform="translate(6 7)"/><rect x="74" y="90" width="351" height="231" rx="15" className="cap-paper"/><path d="M74 124h351" className="cap-line"/><circle cx="94" cy="107" r="3" className="cap-accent"/><Label x={115} y={112}>{a}</Label><g className="cap-ui"><rect x="94" y="145" width="94" height="153" rx="8" className="cap-soft"/><path d="M110 168h59m-59 19h42m-42 19h51" className="cap-line"/><rect x="205" y="145" width="197" height="66" rx="8" className="cap-soft"/><text x="220" y="176" className="cap-heading">Your idea, alive.</text><path d="M220 192h123" className="cap-line"/><rect x="205" y="227" width="91" height="71" rx="8" className="cap-soft"/><rect x="310" y="227" width="92" height="71" rx="8" className="cap-soft"/><Wire d="m220 280 19-22 19 9 23-23"/></g></g>
      <g className="cap-phone"><rect x="424" y="154" width="118" height="195" rx="21" className="cap-paper"/><rect x="435" y="180" width="96" height="144" rx="11" className="cap-soft"/><path d="M466 167h33" className="cap-line"/><rect x="447" y="194" width="72" height="45" rx="7" className="cap-paper"/><path d="M448 255h69m-69 13h47m-47 13h61" className="cap-line"/><Label x={444} y={338}>{b}</Label><path className="cap-confirm" d="m465 215 12 11 23-24"/></g>
      <circle className="cap-tap" cx="483" cy="217" r="31"/>
    </>}
    {item.id === 'commerce' && <>
      <Wire d="M154 247H485V347H154V247"/>
      <g className="cap-shop"><rect x="44" y="115" width="182" height="155" rx="12" className="cap-paper"/><path d="M44 149h182l-14-34H58Z" className="cap-soft"/><path d="M80 116v32m36-32v32m36-32v32m36-32v32" className="cap-line"/><Label x={65} y={100}>{a}</Label><rect x="65" y="166" width="57" height="76" rx="6" className="cap-soft"/><rect x="137" y="166" width="66" height="76" rx="6" className="cap-soft"/><path d="M79 191h29v31H79Zm7 0v-8h15v8" className="cap-line"/></g>
      <g className="cap-checkout"><rect x="258" y="148" width="135" height="153" rx="12" className="cap-paper"/><Label x={276} y={174}>{b}</Label><path d="M277 191h96m-96 15h65" className="cap-line"/><rect x="274" y="221" width="102" height="59" rx="8" className="cap-soft"/><path d="M286 237h31m-31 13h49" className="cap-line"/><path d="m345 254 7 7 13-17" className="cap-confirm"/></g>
      <g className="cap-package"><path d="m443 186 55-28 55 28v79l-55 29-55-29Z" className="cap-paper"/><path d="m443 186 55 29 55-29m-55 29v79m-28-122 54 29v24" className="cap-line"/><Label x={473} y={323}>{c}</Label></g>
      <g className="cap-stock"><rect x="95" y="327" width="225" height="65" rx="12" className="cap-paper"/><Label x={113} y={353}>{d}</Label>{[0,1,2,3].map(i=><rect key={i} className="cap-stock-bar cap-accent" x={217+i*20} y={347-i*5} width="11" height={25+i*5} rx="2"/>)}<path d="M113 369h76" className="cap-line"/></g>
      <g className="cap-order"><rect x="157" y="209" width="32" height="32" rx="8" className="cap-accent"/><path d="m165 225 5 5 10-12" className="cap-inverse"/></g>
    </>}
    {item.id === 'cloud' && <>
      <Wire d="M139 174H480V296H171"/>
      <g className="cap-source"><rect x="46" y="119" width="142" height="118" rx="12" className="cap-paper"/><Label x={61} y={104}>{a}</Label><path d="m90 152-17 18 17 18m42-36 17 18-17 18m-16-45-13 54" className="cap-line"/><path d="M67 217h99" className="cap-line"/></g>
      <g className="cap-build"><rect x="226" y="119" width="145" height="118" rx="12" className="cap-paper"/><Label x={241} y={104}>{b}</Label>{[0,1,2].map(i=><g key={i}><path d={`M246 ${146+i*29}h67`} className="cap-line"/><path d={`m326 ${141+i*29} 5 5 10-12`} className="cap-test cap-confirm"/></g>)}</g>
      <g className="cap-cloud"><path d="M439 224c-54-2-48-65-9-68 4-63 97-66 113-9 55-3 63 76 10 77Z" className="cap-paper"/><Label x={437} y={104}>{c}</Label><path d="m472 188 20-21 20 21m-20-21v42" className="cap-upload cap-line"/></g>
      <g className="cap-monitor"><rect x="162" y="277" width="303" height="119" rx="12" className="cap-paper"/><Label x={180} y={302}>{d}</Label><path d="M180 375h267m-267-25h267" className="cap-line" opacity=".3"/><path d="m180 365 35-7 25 8 23-30 24 15 26-10 23 12 30-30 27 9 39-14" pathLength="1" strokeDasharray="1" className="cap-metrics cap-confirm"/></g>
      <circle className="cap-release cap-accent" cx="139" cy="174" r="7"/>
    </>}
    {item.id === 'systems' && <>
      <Wire d="M182 137H246Q270 137 270 167v31M182 310h64q24 0 24-24v-31M359 226h75M503 226v97"/>
      <g className="cap-tools"><rect x="41" y="91" width="169" height="103" rx="12" className="cap-paper"/><Label x={58} y={117}>{a}</Label>{[0,1,2].map(i=><rect key={i} x={59+i*45} y="133" width="33" height="38" rx="6" className="cap-soft"/>)}</g>
      <g className="cap-workflow"><rect x="41" y="261" width="169" height="103" rx="12" className="cap-paper"/><Label x={58} y={287}>{b}</Label><path d="M65 325h117" className="cap-line"/>{[65,119,176].map(x=><circle key={x} cx={x} cy="325" r="9" className="cap-accent"/>)}</g>
      <g className="cap-adapter"><path d="m306 157 62 35v70l-62 35-62-35v-70Z" className="cap-paper"/><path d="m276 210 14 14-14 14m58-28-14 14 14 14" className="cap-line"/><circle cx="305" cy="225" r="14" className="cap-soft"/><text x="306" y="333" textAnchor="middle" className="cap-label">{c}</text></g>
      <g className="cap-database"><path d="M441 187v89c0 30 126 30 126 0v-89" className="cap-paper"/><ellipse cx="504" cy="187" rx="63" ry="21" className="cap-paper"/><path d="M441 218c0 30 126 30 126 0m-126 29c0 30 126 30 126 0" className="cap-line"/><Label x={465} y={151}>{d}</Label><rect x="451" y="328" width="105" height="43" rx="10" className="cap-paper"/><path d="m470 349 8 8 14-19" className="cap-confirm"/><text x="504" y="354" className="cap-label">Synced</text></g>
      <rect className="cap-packet-a cap-accent" x="177" y="131" width="12" height="12" rx="3"/><rect className="cap-packet-b cap-accent" x="177" y="304" width="12" height="12" rx="3"/>
    </>}
    <text x="320" y="450" textAnchor="middle" className="cap-footnote">{item.detail}</text>
  </svg>
}
