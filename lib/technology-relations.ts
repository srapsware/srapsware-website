import type { Technology } from './content'

export function technologyRelations(selected: Technology, technologies: Technology[]) {
  const available = new Map(technologies.filter(item => item.active).map(item => [item.slug, item]))
  const relations = new Map<string, { technology: Technology; label: string }>()
  const add = (slug: string, label: string) => {
    const technology = available.get(slug)
    if (technology && slug !== selected.slug && !relations.has(slug)) relations.set(slug, { technology, label })
  }
  selected.relationships?.forEach(item => add(item.target, item.label))
  selected.relatedTechnologies?.forEach(slug => add(slug, 'Related technology'))
  // Legacy parent fields vary in meaning. Never turn them into an unverified dependency claim.
  if (selected.parent) add(selected.parent, 'Related ecosystem')
  technologies.forEach(item => {
    if (item.relatedTechnologies?.includes(selected.slug) || item.parent === selected.slug) add(item.slug, 'Related ecosystem')
  })
  return [...relations.values()]
}
