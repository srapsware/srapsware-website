'use client'

import { useId, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/animations/gsap-setup'
import type { SceneKey } from '@/lib/page-content'
import './expertise-scene.css'
import { ChatbotScene, McpScene } from './ai-service-scenes'

const captions: Record<SceneKey,string> = {
  chatbot:'A question. Relevant knowledge. A useful next step.',
  mcp:'Your assistant, connected through explicit permissions.',
  web:'Small details. A connected experience.', backend:'Clear contracts. Dependable connections.', mobile:'A useful journey, in your hand.', commerce:'From first discovery to the next order.', cloud:'Build with care. Release with confidence.', ai:'Context becomes a useful answer.', data:'From information to a clearer decision.', integration:'Different systems. A shared workflow.', security:'Observe. Understand. Improve.', process:'A shared plan. Visible progress.', studio:'Ideas meet design and engineering.', editor:'Give every idea room to take shape.', devstack:'Your projects. Your machine. Your stack.', gps:'A route worth exploring.', learning:'Make space for the next discovery.', healthcare:'Carefully connected care journeys.', finance:'Every step accounted for.', property:'From discovery to a new possibility.'
}
function Panel({x,y,w=150,h=82,label,sub}:{x:number;y:number;w?:number;h?:number;label:string;sub?:string}) {
  return <g className="scene-piece" transform={`translate(${x} ${y})`}><rect width={w} height={h} rx="16" className="scene-panel"/><circle cx="18" cy="20" r="3" className="scene-dot"/><text x="18" y="46" className="scene-label">{label}</text>{sub&&<text x="18" y="65" className="scene-small">{sub}</text>}</g>
}
function Wire({d}:{d:string}){return <path className="scene-wire" d={d} fill="none"/>}
function Browser({children}:{children?:React.ReactNode}) {return <g className="scene-piece"><rect x="85" y="70" width="450" height="280" rx="20" className="scene-panel"/><path d="M85 108H535" className="scene-border"/>{[104,118,132].map(x=><circle key={x} cx={x} cy="90" r="3" className="scene-dot"/>)}<text x="350" y="94" className="scene-small">made.with.care</text>{children}</g>}
export function ExpertiseScene({kind='web'}:{kind?:SceneKey}) {
  const root=useRef<HTMLElement>(null)
  const id=useId().replace(/:/g,'')
  useGSAP(()=>{
    const mm=gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)',()=>{
      const timeline=gsap.timeline({scrollTrigger:{trigger:root.current,start:'top 88%',once:true}})
      timeline.from('.scene-piece',{opacity:0,y:16,duration:.65,stagger:.09,ease:'power2.out'})
      root.current?.querySelectorAll<SVGPathElement>('.scene-wire').forEach(path=>{
        const length=path.getTotalLength()
        timeline.fromTo(path,{strokeDasharray:length,strokeDashoffset:length},{strokeDashoffset:0,duration:1.1,ease:'power2.inOut'},.35)
      })
      timeline.from('.scene-accent',{opacity:0,scale:.93,transformOrigin:'center',duration:.6,stagger:.12},.8)
      if(kind==='chatbot') {
        timeline.from('.chat-question',{opacity:0,x:14,duration:.45},.5)
          .from('.chat-answer',{opacity:0,y:12,duration:.6},1.5)
          .from('.chat-handoff',{opacity:0,y:8,duration:.45},2.2)
      }
      if(kind==='mcp') {
        timeline.from('.mcp-permission',{opacity:0,y:-10,duration:.5},.4)
          .from('.mcp-tool',{opacity:0,x:14,duration:.45,stagger:.18},1)
          .from('.mcp-result',{opacity:0,y:10,duration:.5},2)
      }
    })
    return()=>mm.revert()
  },{scope:root,dependencies:[kind],revertOnUpdate:true})
  const pipeline=['backend','integration'].includes(kind)
  const labels:Record<string,string[]>={backend:['Request','Validate','Application','Response'],integration:['Source','Connect','Transform','Destination'],cloud:['Build','Test','Release','Observe'],ai:['Question','Retrieve','Context','Answer'],process:['Discover','Design','Build','Improve'],finance:['Initiate','Authorize','Record','Reconcile']}
  return <figure ref={root} className={`expertise-scene scene-${kind}`}>
    <div className="scene-heading"><span>THE ENGINEERING OF POSSIBILITY</span><span aria-hidden="true">↗</span></div>
    <svg viewBox="0 0 620 420" aria-hidden="true" focusable="false">
      <defs><pattern id={`grid-${id}`} width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".8" className="scene-grid-dot"/></pattern></defs>
      <rect width="620" height="420" fill={`url(#grid-${id})`}/>
      {kind==='chatbot'&&<ChatbotScene/>}
      {kind==='mcp'&&<McpScene/>}
      {pipeline&&<>
        <Wire d="M190 175H245Q265 175 265 195V240Q265 260 285 260H360"/><Wire d="M360 260H450Q480 260 480 230V175"/>
        <Wire d="M480 175V110Q480 90 460 90H360"/>
        <Panel x={40} y={155} label={labels[kind][0]} sub="01 / INPUT"/>
        <Panel x={225} y={220} label={labels[kind][1]} sub="02 / PROCESS"/>
        <Panel x={395} y={135} label={labels[kind][2]} sub="03 / DELIVERY"/>
        <Panel x={210} y={48} label={labels[kind][3]} sub="04 / FEEDBACK"/>
        {kind==='integration'&&<g className="scene-accent"><text x="70" y="295" className="scene-code">{'{ event: "ready" }'}</text><path d="M95 315H200" className="scene-border"/></g>}
      </>}
      {kind==='cloud'&&<><g className="scene-piece"><rect x="100" y="65" width="420" height="245" rx="34" className="scene-soft" strokeDasharray="5 7"/><text x="124" y="94" className="scene-small">YOUR CLOUD ENVIRONMENT</text></g><Panel x={130} y={120} label="Application" sub="REVIEWED BUILD"/><Panel x={340} y={120} label="Services" sub="ISOLATED WORKLOADS"/><Panel x={230} y={285} label="Release" sub="CHECKS → DELIVERY"/><Wire d="M280 162H340M205 202V247H305V285M415 202V247H305"/><g className="scene-accent"><circle cx="305" cy="247" r="7" className="scene-dot"/><path d="M245 36h120" className="scene-border"/></g></>}
      {kind==='ai'&&<><Panel x={24} y={56} w={155} label="Your question" sub="A USEFUL TASK"/><g className="scene-piece">{[0,1,2].map(n=><rect key={n} x={55+n*9} y={221-n*10} width="106" height="80" rx="10" className="scene-panel"/>)}<text x="77" y="259" className="scene-small">YOUR KNOWLEDGE</text><circle cx="310" cy="188" r="65" className="scene-soft"/><text x="275" y="186" className="scene-label">Context</text><text x="270" y="207" className="scene-small">RETRIEVE + REVIEW</text></g><Wire d="M179 96H220Q245 96 265 139M179 245Q215 245 253 218M375 188H430"/><Panel x={430} y={142} w={165} h={126} label="A grounded answer" sub="SOURCES + NEXT STEP"/><path d="M451 226H553M451 242H530" className="scene-border scene-accent"/></>}
      {kind==='process'&&<><Wire d="M110 121H240V191H380V261H510"/>{['Discover','Design','Build','Improve'].map((label,i)=><g key={label}><Panel x={28+i*143} y={65+i*65} w={132} label={label} sub={`0${i+1} / TOGETHER`}/><circle className="scene-dot scene-accent" cx={94+i*143} cy={169+i*65} r="5"/></g>)}</>}
      {kind==='finance'&&<><Browser><text x="115" y="145" className="scene-label">A traceable transaction</text>{['Initiated','Authorized','Recorded'].map((label,i)=><g key={label} className="scene-piece"><rect x="110" y={166+i*49} width="394" height="38" rx="8" className="scene-soft"/><text x="130" y={191+i*49} className="scene-label">{label}</text><text x="365" y={191+i*49} className="scene-small">EVENT / 00{i+1}</text><path d={`M469 ${184+i*49}l5 5 10-12`} className="scene-wire"/></g>)}</Browser><Panel x={368} y={320} w={205} label="Ready to reconcile" sub="RECORDS THAT CONNECT"/></>}
      {(kind==='web'||kind==='editor'||kind==='learning')&&<Browser>
        <rect x="108" y="132" width="82" height="194" rx="10" className="scene-soft"/>
        {[155,181,207,233].map(y=><path key={y} d={`M124 ${y}H169`} className="scene-border"/>)}
        <text x="215" y="161" className="scene-label">{kind==='editor'?'Your next great idea.':kind==='learning'?'Your learning journey':'Hello, possibility.'}</text>
        {kind==='web'?<><rect x="213" y="180" width="170" height="130" rx="12" className="scene-soft"/><Wire d="M229 285L264 254L298 265L325 220L367 202"/><rect x="398" y="181" width="112" height="56" rx="10" className="scene-soft"/><rect x="398" y="251" width="112" height="58" rx="10" className="scene-panel"/><path d="m427 279 12 12 28-28" className="scene-wire"/></>:<>
          {[188,209,230,251].map((y,i)=><path key={y} d={`M215 ${y}H${i===3?365:490}`} className="scene-border"/>)}
          <g className="scene-accent"><rect x="215" y="276" width="208" height="34" rx="8" className="scene-soft"/><text x="230" y="298" className="scene-small">{kind==='editor'?'B   I   H₁   ↗   ≡   +':'LESSON 01     →     NEXT STEP'}</text></g>
        </>}
      </Browser>}
      {(kind==='mobile'||kind==='gps')&&<>
        <g className="scene-piece"><rect x="207" y="32" width="204" height="350" rx="32" className="scene-panel"/><rect x="265" y="46" width="88" height="12" rx="6" className="scene-soft"/><rect x="225" y="80" width="168" height="230" rx="16" className="scene-soft"/>
        {kind==='gps'?<><path d="M225 140H393M225 220H393M270 80V310M350 80V310" className="scene-border"/><Wire d="M249 271V174Q249 155 273 155H338Q365 155 365 128"/><circle cx="249" cy="271" r="7" className="scene-dot"/><circle cx="365" cy="128" r="9" className="scene-dot scene-accent"/></>:<><rect x="240" y="100" width="138" height="74" rx="12" className="scene-panel"/><path d="M244 196H365M244 216H337" className="scene-border"/><rect x="240" y="244" width="138" height="46" rx="10" className="scene-panel"/><text x="259" y="272" className="scene-label">Continue →</text></>}
        <rect x="250" y="330" width="118" height="28" rx="14" className="scene-soft"/><text x="271" y="349" className="scene-small">{kind==='gps'?'▶ PLAY ROUTE':'YOUR NEXT STEP'}</text></g>
        <Panel x={28} y={124} w={150} label={kind==='gps'?'Waypoint 01':'One clear task'} sub={kind==='gps'?'SIMULATION':'DESIGNED FOR PEOPLE'}/><Panel x={440} y={244} w={150} label={kind==='gps'?'Route ready':'A useful result'} sub="ILLUSTRATIVE WORKFLOW"/>
        <Wire d="M178 164H207M411 285H440"/>
      </>}
      {kind==='commerce'&&<><g className="scene-piece"><rect x="70" y="55" width="300" height="250" rx="22" className="scene-panel"/><text x="95" y="90" className="scene-label">A thoughtful storefront</text>{[0,1,2].map(i=><g key={i}><rect x={92+i*86} y="118" width="68" height="90" rx="10" className="scene-soft"/><path d={`M${98+i*86} 229h56M${98+i*86} 246h32`} className="scene-border"/></g>)}</g><Wire d="M370 175H455V275"/><Panel x={386} y={278} w={190} label="Order confirmed" sub="PAYMENT → FULFILMENT"/><Panel x={65} y={325} w={190} h={75} label="Stock connected" sub="CATALOGUE → INVENTORY"/><Wire d="M386 320H300V361H255"/></>}
      {kind==='devstack'&&<Browser><text x="110" y="143" className="scene-label">Your local workspace</text>{['Apache','MySQL','PHP'].map((name,i)=><g key={name} className="scene-accent"><rect x="110" y={160+i*50} width="175" height="40" rx="9" className="scene-soft"/><text x="126" y={185+i*50} className="scene-label">{name}</text><circle cx="265" cy={180+i*50} r="5" className="scene-dot"/></g>)}<rect x="310" y="160" width="198" height="140" rx="12" className="scene-panel"/><text x="329" y="190" className="scene-label">my-project.test</text><path d="M330 211H480M330 232H450" className="scene-border"/><text x="330" y="276" className="scene-small">LOCAL HTTPS  ✓</text></Browser>}
      {kind==='data'&&<><Browser><text x="113" y="145" className="scene-label">A clearer picture</text>{[80,130,100,170,200].map((h,i)=><rect key={i} x={120+i*73} y={325-h} width="38" height={h} rx="7" className="scene-soft scene-accent"/>)}<Wire d="M132 235L205 186L278 210L351 150L424 120"/></Browser><Panel x={392} y={285} w={190} label="Ready to interpret" sub="SOURCE → INSIGHT"/></>}
      {kind==='security'&&<><g className="scene-piece"><path d="M310 62L420 108V211Q420 285 310 348Q200 285 200 211V108Z" className="scene-panel"/><path d="m270 193 28 28 58-65" className="scene-wire"/><circle cx="310" cy="200" r="104" fill="none" className="scene-border"/></g><Panel x={25} y={100} w={150} label="Observe" sub="SIGNALS & CONTEXT"/><Panel x={445} y={228} w={150} label="Respond" sub="REVIEW & RECOVERY"/><Wire d="M175 141H200M420 270H445"/></>}
      {kind==='healthcare'&&<><Panel x={55} y={67} w={230} label="A clear appointment" sub="PERSON → AVAILABILITY"/><Panel x={330} y={253} w={230} label="The next care step" sub="COORDINATION → FOLLOW-UP"/><Wire d="M170 149V273H330"/><g className="scene-piece"><rect x="360" y="60" width="150" height="140" rx="20" className="scene-panel"/><path d="M400 130h70M435 95v70" className="scene-wire"/></g></>}
      {kind==='property'&&<><g className="scene-piece"><path d="M145 195L310 65L475 195V338H145Z" className="scene-panel"/><rect x="266" y="217" width="85" height="121" rx="8" className="scene-soft"/><rect x="180" y="214" width="54" height="60" rx="6" className="scene-soft"/></g><Panel x={35} y={300} label="Discover" sub="LISTINGS"/><Panel x={413} y={94} w={175} label="Arrange a viewing" sub="ENQUIRY → FOLLOW-UP"/><Wire d="M185 341H230M475 195V176"/></>}
      {kind==='studio'&&<><g className="scene-piece"><path d="M120 260L310 340L510 250L320 173Z" className="scene-soft"/><path d="M120 280L310 360L510 270" className="scene-border"/></g><Panel x={55} y={60} w={155} label="Curiosity" sub="ASK WHY"/><Panel x={246} y={104} w={155} label="Craft" sub="MAKE IT USEFUL"/><Panel x={431} y={40} w={155} label="Care" sub="BUILD TOGETHER"/><Wire d="M132 142V190L310 266L508 180V122M323 186V240"/></>}
    </svg>
    <figcaption>{captions[kind]}<span>ILLUSTRATIVE WORKFLOW</span></figcaption>
  </figure>
}
