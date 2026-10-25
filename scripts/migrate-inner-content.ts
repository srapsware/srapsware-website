import fs from 'node:fs'
import yaml from 'js-yaml'
import frontmatter from '../lib/frontmatter'
import { guides } from '../config/resources'

if (fs.existsSync('content/products/gpshunter.md')) throw new Error('One-time migration already completed. Edit Markdown through the CMS; do not overwrite content by rerunning this script.')

const write = (folder: string, slug: string, data: unknown, body = '') => {
  fs.mkdirSync(`content/${folder}`, { recursive: true })
  fs.writeFileSync(`content/${folder}/${slug}.md`, `---\n${yaml.dump(data,{lineWidth:110,noRefs:true})}---\n\n${body.trim()}\n`)
}
const scene = (route: string) => {
  if (/healthcare/.test(route)) return 'healthcare'
  if (/finance|blockchain/.test(route)) return 'finance'
  if (/education/.test(route)) return 'learning'
  if (/real-estate/.test(route)) return 'property'
  if (/ai-ml/.test(route)) return 'ai'
  if (/analytics/.test(route)) return 'data'
  if (/security|maintenance|support/.test(route)) return 'security'
  if (/integration|iot/.test(route)) return 'integration'
  if (/automation|strategy|legacy/.test(route)) return 'process'
  if (/cloud|devops|containers|migration|saas/.test(route)) return 'cloud'
  if (/ecommerce|shopify|woocommerce|magento/.test(route)) return 'commerce'
  if (/mobile|android|ios|cross-platform/.test(route)) return 'mobile'
  if (/backend/.test(route)) return 'backend'
  return 'web'
}
const questions: Record<string,[string,string]> = {
  web:['How do you approach an existing website?', 'We review its content, user journeys, accessibility and integrations before deciding what to retain. A staged release can help preserve useful functionality while the new experience is tested.'],
  backend:['How will our systems communicate?', 'We agree the API contract, authentication, data ownership and failure behaviour first. Delivery includes testing retries, invalid requests and integration boundaries.'],
  mobile:['How do we choose platforms for the first release?', 'We start with your users, device needs and required native capabilities. Those constraints guide the choice between platform-specific and shared application code.'],
  commerce:['Can you connect orders and inventory?', 'We map your catalogue, stock ownership, payment provider and fulfilment workflow before defining integrations. Sandbox transactions and reconciliation are part of release planning.'],
  cloud:['How do you plan a migration?', 'We assess dependencies and data first, then agree staged transfers, validation and rollback conditions. The migration approach depends on your availability requirements and existing infrastructure.'],
  ai:['How do you evaluate an AI feature?', 'We define representative tasks, data access boundaries and observable acceptance criteria. Human review and failure handling are planned alongside the model or retrieval integration.'],
  data:['Which measures should a dashboard show?', 'We start with the decisions your team needs to make, identify reliable source data, and agree definitions before building the visual reporting layer.'],
  integration:['What happens when a connected service fails?', 'We agree retry limits, reconciliation and user-visible failure states. Authentication, rate limits and event ordering are considered before implementing the integration.'],
  security:['What support coverage is included?', 'Scope, access, response expectations and responsibilities are agreed for each engagement. We do not assume a universal response time or coverage level before reviewing your system.'],
  process:['Can improvements be delivered gradually?', 'We identify the most valuable workflow first and agree a staged roadmap. Each increment has review points and acceptance criteria so your team can assess the change.'],
  healthcare:['How are sensitive workflows approached?', 'We clarify data access, user roles and operational requirements before design. Any compliance requirements need to be confirmed with your responsible specialists for the intended market.'],
  finance:['How do you approach transaction reliability?', 'We map authorization, transaction states, reconciliation and audit requirements. Your business and regulatory specialists help define the acceptance requirements.'],
  learning:['Can learning workflows fit our organisation?', 'We discuss learners, instructors, content ownership and progress reporting, then agree the essential journeys and integrations for the first release.'],
  property:['Can enquiries connect to our existing tools?', 'We map property listings, enquiry ownership and follow-up stages, then define which system owns each record and how updates are reconciled.'],
}
const offerings = JSON.parse(fs.readFileSync('content/data/offerings.json','utf8'))
const existing = fs.readdirSync('content/services').filter(f=>f.endsWith('.md')).map(file=>({file,...frontmatter(fs.readFileSync(`content/services/${file}`,'utf8'))}))
for (const [route, raw] of Object.entries(offerings)) {
  const value = raw as Record<string, unknown>
  const folder = route.startsWith('services') ? 'services' : 'solutions'
  const match = route !== 'services' ? existing.find(item=>item.data.link === `/${route}`) : undefined
  const key = scene(route)
  const [question,answer] = questions[key]
  write(folder, match ? match.file.slice(0,-3) : route.replace(/\//g,'-'), {
    ...value, ...(match?.data || {}), route, pageTitle:value.title, pageDescription:value.description, scene:key,
    featured:match?.data.featured || false, features:value.features || [],steps:value.steps || [],children:value.children || [],
    relatedProjects:[],technologies:[],draft:false,questions:[{question,answer},{question:`What should we share to discuss ${String(value.title).replace(/ Services$/,'').toLowerCase()}?`,answer:'Bring the problem you want to solve, current workflows, existing systems and any important deadlines. We will clarify scope, dependencies and delivery options before preparing an estimate.'}],
  },match?.content || '')
}
for(const guide of guides) write('resources',guide.slug,{title:guide.title,description:guide.description,sections:guide.sections,draft:false})
const faqSource = fs.readFileSync('app/faq/page.tsx','utf8')
const faqPattern = /\{q:'([^']*)',a:'([^']*)'\}/g
let i=0
for(const match of faqSource.matchAll(faqPattern)) write('faq',`getting-started-${++i}`,{question:match[1],answer:match[2],category:'General',active:true,order:i})

write('products','likha-editor',{title:'Likha Editor',description:'A framework-agnostic rich text editor built on ProseMirror. A flexible editing experience you can host and shape around your application.',scene:'editor',status:'Pre-1.0',platform:'Web / JavaScript',license:'MIT',pricingModel:'Free and open source',website:'https://likhaeditor.netlify.app/',docsUrl:'https://likhaeditor.netlify.app/',repository:'https://github.com/ProgrammerNomad/likhaeditor',storeUrl:'',draft:false,technologies:['JavaScript','TypeScript','React'],features:[{title:'An editor that fits your product',description:'Use the framework-agnostic core and the available adapters to integrate editing into your application.'},{title:'Choose your editing tools',description:'A modular plugin architecture lets you choose the controls and editing capabilities you need.'},{title:'Host it on your terms',description:'Serve the editor and its styles from your own application or CDN. See the project documentation for current capabilities.'}],screenshots:[],relatedProjects:[]},'## Built for the writing experience\n\nLikha Editor brings a configurable toolbar and rich text editing into web applications. The project is pre-1.0; consult its release status and documentation before choosing capabilities for your product.\n\n## Make it part of your workflow\n\nExplore the maintained examples, integration guides and repository on the official product site. If your application needs custom editing workflows, we can discuss how to integrate and adapt the experience.')
write('products','devstackbox',{title:'DevStackBox',description:'A local PHP development environment for Windows. Bring services, project folders and local HTTPS together in one workspace.',scene:'devstack',status:'Available',platform:'Windows',license:'MIT',pricingModel:'Free and open source',website:'https://www.devstackbox.com/',docsUrl:'https://www.devstackbox.com/docs/',repository:'',storeUrl:'',draft:false,technologies:['PHP','MySQL'],features:[{title:'Your services, together',description:'Manage Apache, MySQL and PHP from a desktop workspace.'},{title:'A runtime for each project',description:'Connect existing project folders and choose supported installed PHP versions for your websites.'},{title:'Local HTTPS',description:'Configure local hostnames and trusted certificates as described in the official setup guide.'}],screenshots:[],relatedProjects:[]},'## Less setup between you and your next idea\n\nDevStackBox is an open-source Windows development environment for local PHP projects. Its official website maintains current installers, supported versions, screenshots and release notes.\n\n## Keep the details close to the product\n\nVisit the product site for installation, migration and troubleshooting guidance. For a tailored development workflow or integration, talk to us about your team’s requirements.')
write('products','gpshunter',{title:'GPS Hunter',description:'GPS simulation and route playback for testing location-based experiences. Create routes and explore movement workflows on Android.',scene:'gps',status:'Not yet publicly released',platform:'Android',pricingModel:'Release details to be announced',website:'',docsUrl:'',repository:'',storeUrl:'',draft:false,technologies:['Android'],features:[{title:'Explore location workflows',description:'Simulate GPS positions for development, testing and lawful use.'},{title:'Create and play routes',description:'Build saved routes and test movement through a sequence of locations.'},{title:'Keep playback in view',description:'The existing app design includes playback status and controls. Final public release details will be announced here.'}],screenshots:[],relatedProjects:[]},'## Built for location-based testing\n\nGPS Hunter is being prepared for public release. A download link will appear here when the official store listing is available.\n\nRead the product privacy policy and terms for the existing app information, or contact us with a product question.')
// Preserve existing GPS Hunter document wording while moving the source into Markdown.
for(const kind of ['privacy','terms']) {
  const source=fs.readFileSync(`app/product/gpshunter/${kind}/page.tsx`,'utf8')
  const start=source.indexOf('<p>\n',source.indexOf('Last Updated:'))
  const end=source.lastIndexOf('</div>')
  let body=source.slice(start,end)
    .replace(/<h2>([\s\S]*?)<\/h2>/g,'\n\n## $1\n\n').replace(/<h3>([\s\S]*?)<\/h3>/g,'\n\n### $1\n\n')
    .replace(/<li>([\s\S]*?)<\/li>/g,'\n- $1').replace(/<\/p>/g,'\n\n').replace(/<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g,'[$2]($1)')
    .replace(/<[^>]+>/g,'').replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&amp;/g,'&').replace(/\{['"] ['"]\}/g,' ')
    .split('\n').map(line=>line.trim()).join('\n').replace(/\n{3,}/g,'\n\n')
  write('product-documents',`gpshunter-${kind}`,{product:'gpshunter',kind,title:`GPS Hunter ${kind==='privacy'?'Privacy Policy':'Terms of Service'}`,description:`${kind==='privacy'?'Data handling and privacy information':'Terms of use'} for GPS Hunter.`,effectiveDate:'June 2026',draft:false},body)
}
console.log('Migrated offering catalogue, guides, FAQ and three product records. Existing legal wording retained for review.')
