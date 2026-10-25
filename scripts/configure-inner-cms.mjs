import fs from 'node:fs'
import yaml from 'js-yaml'
const config=yaml.load(fs.readFileSync('public/admin/config.yml','utf8'))
const field=(name,label,widget='string',extra={})=>({name,label,widget,...extra})
const optional=(name,label,widget='string',extra={})=>field(name,label,widget,{required:false,...extra})
const scenes=['web','backend','mobile','commerce','cloud','ai','data','integration','security','process','studio','editor','devstack','gps','learning','healthcare','finance','property']
const scene=field('scene','Illustration','select',{options:scenes,default:'web'})
const draft=field('draft','Draft (excluded from public pages)','boolean',{default:false,required:false})
const body=optional('body','Page content','markdown')
const steps=(name,label)=>optional(name,label,'list',{summary:'{{fields.title}}',fields:[field('title','Title'),field('description','Description','text')]})
const relations=optional('relatedProjects','Selected portfolio projects','relation',{collection:'portfolio',search_fields:['title'],value_field:'{{slug}}',display_fields:['title'],multiple:true})
const technologies=optional('technologies','Related technologies','relation',{collection:'portfoliooptions',file:'technologies',multiple:true,search_fields:['technologies.*.title'],value_field:'technologies.*.title',display_fields:['technologies.*.title']})
const questions=optional('questions','Page-specific questions','list',{fields:[field('question','Question'),field('answer','Answer','markdown')]})
const offerings=[field('route','Public route (without leading slash)','string',{pattern:['^(services|solutions)(/[a-z0-9-]+)*$','Use services/... or solutions/...; changing this requires a redirect.']}),optional('pageTitle','Detail-page heading'),optional('pageDescription','Detail-page description','text'),scene,draft,steps('features','Deliverables'),steps('steps','Delivery steps'),optional('children','Explore cards','list',{fields:[field('title','Title'),field('description','Description','text'),optional('href','Internal link'),optional('features','Highlights','list',{field:field('feature','Highlight')})]}),questions,relations,technologies,optional('industry','Industry match'),body]
const services=config.collections.find(c=>c.name==='services')
services.fields=[...services.fields.filter(f=>['title','description','icon','link','order','featured','color'].includes(f.name)),...offerings]
services.preview_path='{{route}}';services.editor={preview:true}
const upsert=collection=>{const index=config.collections.findIndex(c=>c.name===collection.name);if(index>=0)config.collections[index]=collection;else config.collections.push(collection)}
upsert({name:'solutions',label:'Solutions',folder:'content/solutions',create:true,slug:'{{slug}}',preview_path:'{{route}}',fields:[field('title','Title'),field('description','Description','text'),...offerings]})
const url=(name,label)=>optional(name,label,'string',{hint:'Leave empty until a real public destination exists. HTTPS URLs only.',pattern:['^$|^https://[^\\s]+$','Use a complete HTTPS URL, or leave empty.']})
upsert({name:'products',label:'Products',folder:'content/products',create:true,slug:'{{slug}}',preview_path:'product/{{slug}}',fields:[field('title','Product name'),field('description','Summary','text'),scene,draft,field('status','Release status'),field('platform','Platform'),optional('license','License'),field('pricingModel','Pricing model'),url('website','Official website'),url('docsUrl','Documentation'),url('repository','Source repository'),url('storeUrl','Store/download URL'),steps('features','Features'),optional('screenshots','Real product screenshots','list',{fields:[field('image','Screenshot','image'),field('alt','Image description'),optional('caption','Caption')]}),technologies,relations,body]})
upsert({name:'productDocuments',label:'Product policies & support',folder:'content/product-documents',create:true,slug:'{{fields.product}}-{{fields.kind}}',preview_path:'product/{{product}}/{{kind}}',fields:[field('title','Document title'),field('description','Summary','text'),field('product','Product','relation',{collection:'products',search_fields:['title'],value_field:'{{slug}}',display_fields:['title']}),field('kind','Document type','select',{options:['privacy','terms','support','data-deletion']}),optional('effectiveDate','Effective / revised date'),draft,field('body','Approved document content','markdown',{hint:'Describe this product’s actual data practices. Confirm SDKs, accounts, billing and retention before changing legal statements.'})]})
upsert({name:'resources',label:'Guides & resources',folder:'content/resources',create:true,slug:'{{slug}}',preview_path:'resources/guides/{{slug}}',fields:[field('title','Title'),field('description','Summary','text'),draft,field('sections','Guide sections','list',{fields:[field('title','Heading'),field('text','Content','text')]}),body]})
upsert({name:'pages',label:'Company pages',folder:'content/pages',create:false,slug:'{{slug}}',preview_path:'{{route}}',fields:[field('route','Public route'),field('title','Heading'),field('description','Introduction','text'),optional('badge','Eyebrow'),scene,steps('sections','Sections'),body]})
const portfolio=config.collections.find(c=>c.name==='portfolio')
if(!portfolio.fields.some(f=>f.name==='draft'))portfolio.fields.push(draft)
for(const c of config.collections){if(['blog','portfolio','services','solutions','products','productDocuments','resources','pages','faq'].includes(c.name))c.editor={preview:true}}
config.display_url='https://www.srapsware.com'
config.site_url='https://www.srapsware.com'
fs.writeFileSync('public/admin/config.yml', '# Git-backed content. Public URLs must remain stable; drafts are excluded by the content loaders.\n'+yaml.dump(config,{lineWidth:120,noRefs:true,quotingType:"'"}))
let html=fs.readFileSync('public/admin/index.html','utf8').replace('decap-cms@^3.0.0','decap-cms@3.17.1')
if(!html.includes('/admin/preview.js'))html=html.replace('</body>','  <script src="/admin/preview.js"></script>\n</body>')
fs.writeFileSync('public/admin/index.html',html)
console.log('CMS collections connected; existing backend and simple publishing retained.')
