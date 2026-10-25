// Illustrative workflows: these contain no live chat, customer data or API calls.
export function ChatbotScene() {
  return <>
    <g className="scene-piece">
      <rect x="28" y="35" width="356" height="350" rx="24" className="scene-panel"/>
      <circle cx="56" cy="64" r="7" className="scene-dot"/>
      <text x="74" y="69" className="scene-label">Your product assistant</text>
      <path d="M28 90H384" className="scene-border"/>
      <rect x="48" y="334" width="314" height="30" rx="15" className="scene-soft"/>
      <text x="64" y="354" className="scene-small">ASK A QUESTION…</text>
    </g>
    <g className="chat-question">
      <rect x="116" y="110" width="246" height="57" rx="16" className="scene-soft"/>
      <text x="133" y="135" className="scene-label">Where should I start?</text>
      <text x="133" y="154" className="scene-small">A VISITOR’S QUESTION</text>
    </g>
    <g className="scene-piece">
      <text x="417" y="93" className="scene-small">APPROVED KNOWLEDGE</text>
      {['Product guides','Your documentation','Support answers'].map((label,i)=><g key={label}>
        <rect x="416" y={112+i*66} width="180" height="48" rx="11" className="scene-panel"/>
        <text x="430" y={141+i*66} className="scene-label">{label}</text>
      </g>)}
    </g>
    <path d="M416 136H400V220H362M416 202H400M416 268H400V220" className="scene-wire chat-retrieval" fill="none"/>
    <g className="chat-answer">
      <rect x="48" y="194" width="314" height="112" rx="16" className="scene-panel"/>
      <text x="66" y="221" className="scene-label">Let’s find the right next step.</text>
      <path d="M66 238H335M66 250H290" className="scene-border"/>
      <rect x="66" y="264" width="132" height="25" rx="12" className="scene-soft"/>
      <text x="79" y="281" className="scene-small">VIEW THE GUIDE ↗</text>
    </g>
    <g className="chat-handoff"><path d="M384 340H418" className="scene-border"/><rect x="418" y="318" width="178" height="48" rx="12" className="scene-soft"/><text x="433" y="347" className="scene-label">A person, when needed</text></g>
  </>
}

export function McpScene() {
  return <>
    <g className="scene-piece"><rect x="24" y="137" width="152" height="123" rx="20" className="scene-panel"/><text x="43" y="178" className="scene-label">AI assistant</text><text x="43" y="202" className="scene-small">A USER’S REQUEST</text><path d="M43 225H143M43 237H119" className="scene-border"/></g>
    <path d="M176 198H238M382 198H416V89H444M416 198H444M416 198V307H444" className="scene-wire" fill="none"/>
    <g className="scene-piece"><rect x="238" y="138" width="144" height="122" rx="26" className="scene-panel"/><text x="278" y="187" className="mcp-title">MCP</text><text x="258" y="211" className="scene-small">YOUR TOOL SERVER</text><text x="266" y="235" className="scene-small">CLEAR CONTRACTS</text></g>
    <g className="mcp-permission"><rect x="215" y="37" width="190" height="58" rx="14" className="scene-soft"/><path d="m233 66 6 6 12-15" className="scene-wire" fill="none"/><text x="262" y="62" className="scene-label">Permission check</text><text x="262" y="80" className="scene-small">ACCOUNT + SCOPE</text><path d="M310 95V138" className="scene-border"/></g>
    {['Account','Orders','Support'].map((label,i)=><g key={label} className="mcp-tool"><rect x="444" y={53+i*109} width="152" height="72" rx="14" className="scene-panel"/><text x="460" y={83+i*109} className="scene-label">{label}</text><text x="460" y={105+i*109} className="scene-small">{i===2?'CONTROLLED ACTION':'SCOPED READ'}</text></g>)}
    <path d="M516 343V374H100V260" className="mcp-return scene-wire" fill="none"/>
    <g className="mcp-result"><rect x="211" y="350" width="198" height="46" rx="12" className="scene-soft"/><text x="232" y="378" className="scene-label">A structured result</text></g>
  </>
}
