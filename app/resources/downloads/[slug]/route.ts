import { guides } from '@/config/resources'
export function generateStaticParams() { return guides.map(guide => ({ slug: guide.slug })) }
export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = guides.find(item => item.slug === slug)
  if (!guide) return new Response('Not found', { status: 404 })
  return new Response(`# ${guide.title}\n\n${guide.description}\n\n${guide.sections.map(section => `## ${section.title}\n\n${section.text}`).join('\n\n')}\n\n${guide.content}\n\nPublished by Srapsware - https://www.srapsware.com\n`, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8', 'Content-Disposition': `attachment; filename="${guide.slug}.md"`, 'X-Robots-Tag': 'noindex' },
  })
}
