import yaml from 'js-yaml';

export default function frontmatter(source: string): { data: Record<string, unknown>; content: string } {
  const match = source.replace(/^\uFEFF/, '').match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)
  if (!match) throw new Error('Expected YAML frontmatter.')
  const data = yaml.load(match[1])
  if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error('Frontmatter must be a mapping.')
  return { data: data as Record<string, unknown>, content: source.replace(/^\uFEFF/, '').slice(match[0].length) }
}
