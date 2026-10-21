import { useId } from 'react'

/** Original product illustration. Each nested group separates entrance and ambient motion. */
export function HeroProductScene() {
  const id = useId().replace(/:/g, '')
  return <svg className="launch-art" viewBox="0 0 620 540" role="img" aria-labelledby={`${id}-title ${id}-description`}>
    <title id={`${id}-title`}>Your next idea, brought to life</title>
    <desc id={`${id}-description`}>Design, code, and cloud connect around a web and mobile product, with a heart representing the care behind the software.</desc>
    <defs>
      <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="var(--hero-surface)"/><stop offset="1" stopColor="var(--hero-panel)"/></linearGradient>
      <linearGradient id={`${id}-accent`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="var(--hero-blue)"/><stop offset="1" stopColor="var(--hero-teal)"/></linearGradient>
      <linearGradient id={`${id}-heart`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ff9ab6"/><stop offset="1" stopColor="#ec477f"/></linearGradient>
      <radialGradient id={`${id}-halo`}><stop stopColor="var(--hero-blue)" stopOpacity=".2"/><stop offset="1" stopColor="var(--hero-blue)" stopOpacity="0"/></radialGradient>
      <pattern id={`${id}-grid`} width="26" height="26" patternUnits="userSpaceOnUse"><path d="M26 0H0V26" fill="none" stroke="var(--hero-blue)" strokeOpacity=".07"/></pattern>
    </defs>
    <circle cx="320" cy="268" r="255" fill={`url(#${id}-halo)`}/>
    <circle cx="320" cy="268" r="229" fill={`url(#${id}-grid)`}/>
    <g className="launch-orbit" fill="none" stroke="var(--hero-blue)">
      <ellipse cx="320" cy="270" rx="284" ry="165" transform="rotate(-34 320 270)" strokeOpacity=".21"/>
      <ellipse cx="320" cy="270" rx="247" ry="206" transform="rotate(21 320 270)" strokeOpacity=".13" strokeDasharray="3 10"/>
      <circle cx="94" cy="190" r="5" fill="var(--hero-blue)" stroke="var(--hero-surface)" strokeWidth="3"/>
      <circle cx="536" cy="367" r="6" fill="var(--hero-teal)" stroke="var(--hero-surface)" strokeWidth="3"/>
    </g>
    <g className="launch-parallax">
      <g fill="none" strokeWidth="1.5" stroke="var(--hero-blue)">
        {['M112 148V196Q112 215 132 215H181', 'M474 176H530Q550 176 550 196V292', 'M199 382V428Q199 448 219 448H320', 'M360 448H474Q494 448 494 428V394'].map((d, i)=><g key={d}><path d={d} opacity=".16"/><path className="launch-route" d={d} pathLength="1" strokeDasharray="1" opacity=".65"/><path className="launch-signal" d={d} pathLength="1" strokeDasharray=".08 .92" stroke="var(--hero-teal)" strokeWidth="3" data-signal={i}/></g>)}
      </g>
      <g className="launch-panel"><g className="launch-float">
        <rect x="74" y="70" width="107" height="102" rx="17" fill={`url(#${id}-glass)`} stroke="var(--hero-stroke)"/>
        <path d="M101 100H153V142H101Z" fill="none" stroke="var(--hero-blue)" strokeWidth="1.5"/>
        {[[101,100],[153,100],[101,142],[153,142]].map(([cx,cy])=><rect key={`${cx}-${cy}`} x={cx-3} y={cy-3} width="6" height="6" fill="var(--hero-surface)" stroke="var(--hero-blue)"/>)}
        <circle cx="127" cy="121" r="11" fill="var(--hero-blue)" opacity=".15"/>
        <path d="M127 110V132M116 121H138" stroke="var(--hero-blue)"/>
        <text x="127" y="90" textAnchor="middle" className="launch-svg-micro">DESIGN</text>
      </g></g>
      <g className="launch-panel"><g className="launch-float">
        <rect x="183" y="117" width="307" height="223" rx="16" fill="var(--hero-blue)" opacity=".08" transform="translate(7 12)"/>
        <rect x="183" y="117" width="307" height="223" rx="16" fill={`url(#${id}-glass)`} stroke="var(--hero-stroke)" strokeWidth="1.3"/>
        <path d="M183 148H490" stroke="var(--hero-stroke)"/>
        {[199,208,217].map((cx,i)=><circle key={cx} cx={cx} cy="132" r="2.5" fill={i === 0 ? '#ee7c97' : i === 1 ? '#dbaf62' : 'var(--hero-teal)'}/>)}
        <rect x="282" y="126" width="118" height="13" rx="6.5" fill="var(--hero-blue)" opacity=".07"/>
        <text x="341" y="135" textAnchor="middle" className="launch-svg-micro">your-next-big-thing.app</text>
        <path d="M233 148V340" stroke="var(--hero-stroke)" strokeOpacity=".55"/>
        <rect x="197" y="169" width="22" height="22" rx="6" fill={`url(#${id}-accent)`}/>
        <path d="M204 180L208 175L212 180L208 185Z" fill="var(--hero-surface)"/>
        {[213,234,255,276].map((y,i)=><rect key={y} x="201" y={y} width={i === 0 ? 15 : 12} height="4" rx="2" fill="var(--hero-blue)" opacity={i === 0 ? .75 : .22}/>)}
        <text x="253" y="177" className="launch-svg-label">Something great, taking shape.</text>
        <rect x="253" y="189" width="124" height="4" rx="2" fill="var(--hero-blue)" opacity=".25"/>
        <rect x="253" y="209" width="142" height="104" rx="9" fill="var(--hero-blue)" opacity=".055"/>
        <path d="M267 288H383M267 265H383M267 242H383" stroke="var(--hero-stroke)" strokeOpacity=".4"/>
        <path d="M267 286L289 272L313 279L336 251L359 257L383 231V301H267Z" fill={`url(#${id}-accent)`} opacity=".12"/>
        <path className="launch-chart" d="M267 286L289 272L313 279L336 251L359 257L383 231" fill="none" stroke={`url(#${id}-accent)`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" pathLength="1" strokeDasharray="1"/>
        <circle cx="383" cy="231" r="4" fill="var(--hero-teal)"/>
        <rect x="408" y="209" width="62" height="48" rx="8" fill="var(--hero-blue)" opacity=".1"/>
        <rect x="420" y="222" width="27" height="4" rx="2" fill="var(--hero-blue)" opacity=".6"/>
        <rect x="420" y="234" width="38" height="3" rx="1.5" fill="var(--hero-blue)" opacity=".25"/>
        <rect x="408" y="268" width="62" height="45" rx="8" fill="var(--hero-teal)" opacity=".1"/>
        <path d="M423 290L433 298L454 280" fill="none" stroke="var(--hero-teal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </g></g>
      <g className="launch-panel"><g className="launch-float">
        <rect x="47" y="277" width="224" height="130" rx="14" fill={`url(#${id}-glass)`} stroke="var(--hero-stroke)"/>
        <path d="M47 306H271" stroke="var(--hero-stroke)"/>
        <text x="64" y="295" className="launch-svg-micro">build-with-heart.ts</text>
        <text x="248" y="295" textAnchor="end" className="launch-svg-micro">⌘</text>
        <g className="launch-code-lines" fontFamily="monospace" fontSize="10">
          <text x="64" y="329" fill="var(--hero-purple)">const <tspan fill="var(--hero-ink)">future = {'{'}</tspan></text>
          <text x="78" y="348" fill="var(--hero-muted)">idea: <tspan fill="var(--hero-teal)">'yours'</tspan>,</text>
          <text x="78" y="367" fill="var(--hero-muted)">craftedWith: <tspan fill="var(--hero-teal)">'heart'</tspan></text>
          <text x="64" y="386" fill="var(--hero-ink)">{'}'}</text>
          <path className="launch-cursor" d="M81 377V388" stroke="var(--hero-blue)" strokeWidth="2"/>
        </g>
      </g></g>
      <g className="launch-panel"><g className="launch-float">
        <rect x="450" y="285" width="89" height="157" rx="19" fill={`url(#${id}-glass)`} stroke="var(--hero-stroke)" strokeWidth="1.5"/>
        <rect x="478" y="294" width="32" height="5" rx="2.5" fill="var(--hero-blue)" opacity=".2"/>
        <rect x="460" y="313" width="69" height="57" rx="9" fill={`url(#${id}-accent)`} opacity=".13"/>
        <circle cx="494" cy="340" r="15" fill="var(--hero-blue)" opacity=".2"/>
        <path d="M488 340L492 344L501 335" fill="none" stroke="var(--hero-blue)" strokeWidth="2" strokeLinecap="round"/>
        <path d="M461 384H510M461 393H495" stroke="var(--hero-blue)" strokeOpacity=".35" strokeWidth="3" strokeLinecap="round"/>
        <rect x="461" y="406" width="67" height="20" rx="6" fill={`url(#${id}-accent)`}/>
        <path d="M486 416H501M498 412L502 416L498 420" fill="none" stroke="var(--hero-surface)" strokeWidth="1.5" strokeLinecap="round"/>
      </g></g>
      <g className="launch-panel"><g className="launch-float">
        <rect x="435" y="56" width="108" height="45" rx="22.5" fill={`url(#${id}-glass)`} stroke="var(--hero-stroke)"/>
        <path d="M452 82H472C481 82 478 69 471 72C468 61 454 66 455 73C448 72 447 81 452 82Z" fill="none" stroke="var(--hero-teal)" strokeWidth="1.5"/>
        <text x="488" y="81" className="launch-svg-label">CLOUD</text>
      </g></g>
      <g className="launch-heart-shell">
        <circle cx="340" cy="423" r="43" fill="var(--hero-surface)" stroke="var(--hero-stroke)"/>
        <circle cx="340" cy="423" r="35" fill="var(--hero-purple)" opacity=".07"/>
        <path className="launch-heart" d="M340 413C326 395 307 412 320 428L340 445L360 428C373 412 354 395 340 413Z" fill={`url(#${id}-heart)`}/>
        <path d="M326 413Q330 408 334 413" fill="none" stroke="white" strokeOpacity=".6" strokeWidth="2.5" strokeLinecap="round"/>
      </g>
      <g className="launch-spark" stroke="var(--hero-blue)" strokeLinecap="round"><path d="M564 230V244M557 237H571"/><path d="M273 64V75M268 69.5H278"/><path d="M94 453V463M89 458H99"/></g>
    </g>
  </svg>
}
