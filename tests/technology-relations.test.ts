import { test } from 'node:test'
import assert from 'node:assert/strict'
import { technologyRelations } from '../lib/technology-relations'
import type { Technology } from '../lib/content'

const tool = (slug: string, extra: Partial<Technology> = {}): Technology => ({ slug, title: slug, category: 'Frontend', logo: '/logo.svg', color: '#000', website: '', description: '', experience: 'Expert', featured: true, active: true, ...extra })

test('explicit labels win; missing, inactive, self and duplicate connections are excluded', () => {
  const selected = tool('react', { relationships: [{ target: 'nextjs', label: 'React framework' }], relatedTechnologies: ['nextjs', 'react', 'missing', 'inactive'], parent: 'javascript' })
  const result = technologyRelations(selected, [selected, tool('nextjs'), tool('javascript'), tool('inactive', { active: false }), tool('reverse', { parent: 'react' })])
  assert.deepEqual(result.map(r => [r.technology.slug, r.label]), [['nextjs', 'React framework'], ['javascript', 'Related ecosystem'], ['reverse', 'Related ecosystem']])
})

test('unconnected technologies have an empty explorer instead of invented links', () => {
  assert.deepEqual(technologyRelations(tool('alone'), [tool('alone'), tool('other')]), [])
})
