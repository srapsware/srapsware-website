'use client'

import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import type { BlogPost, Author } from '@/lib/content'

interface BlogDetailContentProps {
  post: BlogPost
  author: Author
}

export function BlogDetailContent({ post, author }: BlogDetailContentProps) {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="grid lg:grid-cols-[1fr_300px] gap-12">
        {/* Main Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-24 lg:self-start space-y-8">
          {/* Author Card */}
          <div className="p-6 rounded-xl border border-border bg-card">
            <h3 className="font-bold mb-4">About the Author</h3>
            
            <div className="flex items-start gap-4 mb-4">
              {author.avatar && (
                <Image
                  src={author.avatar}
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

          {/* Newsletter */}
          <div className="p-6 rounded-xl border border-border bg-gradient-to-br from-primary/10 to-background">
            <h3 className="font-bold mb-2">📬 Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get weekly tech insights delivered to your inbox!
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Share */}
          <div className="p-6 rounded-xl border border-border bg-card">
            <h3 className="font-bold mb-4">Share Article</h3>
            <div className="flex flex-col gap-2">
              <button className="px-4 py-2 rounded-lg bg-[#1DA1F2] text-white hover:opacity-90 transition-opacity text-sm">
                Share on Twitter
              </button>
              <button className="px-4 py-2 rounded-lg bg-[#0A66C2] text-white hover:opacity-90 transition-opacity text-sm">
                Share on LinkedIn
              </button>
              <button className="px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-sm">
                Copy Link
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
