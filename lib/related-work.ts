import type { Portfolio } from './content'
export interface WorkSelection { slugs?:string[]; technologies?:string[]; industry?:string; categories?:string[]; exclude?:string; limit?:number }
export function selectRelatedWork(projects:Portfolio[], selection:WorkSelection) {
  const normal=(value:string)=>value.toLowerCase().trim()
  const explicit=selection.slugs||[]
  return projects.filter(p=>p.slug!==selection.exclude).map(project=>{
    const index=explicit.indexOf(project.slug)
    const tech=(project.technologies||[]).filter(t=>selection.technologies?.some(w=>normal(w)===normal(t))).length
    const category=(project.categories||[]).filter(c=>selection.categories?.some(w=>normal(w)===normal(c))).length
    const industry=!!selection.industry&&normal(project.industry||'')===normal(selection.industry)
    return {project,score:index>=0?10000-index:tech*3+category*2+(industry?8:0)}
  }).filter(item=>item.score>0).sort((a,b)=>b.score-a.score||a.project.slug.localeCompare(b.project.slug)).slice(0,selection.limit??3).map(item=>item.project)
}
