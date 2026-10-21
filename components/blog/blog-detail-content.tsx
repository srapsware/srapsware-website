import { ResourceCallout } from './resource-callout'
import { ShareArticle } from './share-article'
import type { Author,BlogPost } from '@/lib/content'
import { getCdnUrl } from '@/lib/utils'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import rehypePrism from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'
import '../../app/blog-code-styles.css'
import { CodeBlockEnhancer } from './code-block-enhancer'

interface BlogDetailContentProps {
  post: BlogPost
  author?: Author | null
}

export function BlogDetailContent({ post, author }: BlogDetailContentProps) {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <CodeBlockEnhancer />
      <div className="grid lg:grid-cols-[1fr_300px] gap-12 max-w-full overflow-hidden">
        {/* Main Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none min-w-0">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[[rehypePrism, { showLineNumbers: false }]]}
          >
            {post.content}
          </ReactMarkdown>
        </article>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-24 lg:self-start space-y-8 min-w-0 max-w-full">
          {/* Author Card */}
          {author && (
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-bold mb-4">About the Author</h3>
              
              <div className="flex items-start gap-4 mb-4">
                {author.avatar && (
                  <Image
                    src={getCdnUrl(author.avatar)}
                    alt={author.display_name}
                    width={64}
                    height={64}
                    className="rounded-full flex-shrink-0"
                    unoptimized
                  />
                )}
                <div>
                  <div className="font-semibold">{author.display_name}</div>
                  <div className="text-sm text-muted-foreground mb-2">{author.position}</div>
                </div>
              </div>

              {author.bio && (
                <p className="text-sm text-muted-foreground mb-4">
                  {author.bio}
                </p>
              )}

            {author.expertise && author.expertise.length > 0 && (
              <div className="mb-4">
                <div className="text-xs font-semibold text-muted-foreground mb-2">Expertise</div>
                <div className="flex flex-wrap gap-1.5">
                  {author.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs rounded bg-primary/10 text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {author.social && (
              <div className="flex flex-wrap gap-2">
                {author.social.twitter && (
                  <a
                    href={author.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 text-xs rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Twitter
                  </a>
                )}
                {author.social.github && (
                  <a
                    href={author.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 text-xs rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {author.social.linkedin && (
                  <a
                    href={author.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 text-xs rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            )}
          </div>
          )}

          <ResourceCallout />
          <ShareArticle slug={post.slug} title={post.title} />
        </aside>
      </div>
    </div>
  )
}
