export function MilestoneIllustration({ kind }: { kind: string }) {
  return <svg viewBox="0 0 280 150" className="milestone-illustration" aria-hidden="true" fill="none">
    <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {kind === 'foundation' ? <>
        <rect className="illustration-part" x="55" y="27" width="170" height="100" rx="9" />
        <path d="M55 49 H225" opacity=".4" /><circle cx="69" cy="38" r="2" /><circle cx="79" cy="38" r="2" />
        <path className="illustration-part" d="M112 72 L96 87 L112 102 M168 72 L184 87 L168 102 M148 67 L132 107" strokeWidth="3" />
      </> : kind === 'delivery' ? <>
        <path className="illustration-part" d="M80 45 H130 V105 H200 M130 75 H200" opacity=".5" />
        {[{x:35,y:25},{x:175,y:52},{x:175,y:92}].map(({x,y}) => <g className="illustration-part" key={y}><rect x={x} y={y} width="65" height="32" rx="5" /><path d={`M${x+12} ${y+12} h25 M${x+12} ${y+20} h38`} opacity=".5" /></g>)}
      </> : kind === 'team' ? <>
        <path className="illustration-part" d="M140 75 L62 38 M140 75 L218 38 M140 75 L62 115 M140 75 L218 115" opacity=".4" />
        {[{x:62,y:38},{x:218,y:38},{x:62,y:115},{x:218,y:115}].map(({x,y}) => <g className="illustration-part" key={`${x}-${y}`}><circle cx={x} cy={y} r="18" /><circle cx={x} cy={y-4} r="4" /><path d={`M${x-8} ${y+8} q8 -10 16 0`} /></g>)}
        <rect className="illustration-part" x="118" y="53" width="44" height="44" rx="10" /><path d="M132 75 l6 6 12 -12" />
      </> : <>
        <path className="illustration-part" d="M140 24 L230 62 L140 100 L50 62 Z" />
        <path className="illustration-part" d="M50 82 L140 120 L230 82 M50 102 L140 140 L230 102" opacity=".55" />
        <path className="illustration-part" d="M110 62 L140 49 L170 62 L140 75 Z" fill="currentColor" fillOpacity=".12" />
      </>}
    </g>
  </svg>
}
