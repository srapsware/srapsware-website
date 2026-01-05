'use client'

import { useState, useMemo } from 'react'
import { BlogHero } from '@/components/blog/blog-hero'
import { BlogStats } from '@/components/blog/blog-stats'
import { BlogCard } from '@/components/blog/blog-card'
import { BlogSearch } from '@/components/blog/blog-search'
import { BlogSidebar } from '@/components/blog/blog-sidebar'
import type { BlogPost, Author } from '@/lib/content'

interface BlogListLayoutProps {
  posts: Array<BlogPost & { readingTime: number; excerpt: string }>
  featuredPost?: (BlogPost & { readingTime: number; excerpt: string }) | null
  categories: Array<{ name: string; count: number }>
  popularPosts: Array<BlogPost & { readingTime: number; excerpt: string }>
  tags: string[]
  authors: Record<string, Author>
  title?: string
  description?: string
  showFeatured?: boolean
  showStats?: boolean
}

export function BlogListLayout({
  posts,
  featuredPost,
  categories,
  popularPosts,
  tags,
  authors,
  title = 'Latest Articles',
  description,
  showFeatured = true,
  showStats = true
}: BlogListLayoutProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [displayCount, setDisplayCount] = useState(12)

  // Filter posts based on search
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return posts

    const query = searchQuery.toLowerCase()
    return posts.filter(post => {
      return (
        post.title.toLowerCase().includes(query) ||
        post.excerpt?.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.categories?.some(cat => cat.toLowerCase().includes(query)) ||
        post.tags?.some(tag => tag.toLowerCase().includes(query))
      )
    })
  }, [posts, searchQuery])

  const displayedPosts = filteredPosts.slice(0, displayCount)
  const hasMore = displayCount < filteredPosts.length

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Featured Post Hero */}
        {showFeatured && featuredPost && !searchQuery && (
          <div className="mb-12">
            <BlogHero 
              post={featuredPost} 
              author={authors[featuredPost.author]} 
            />
          </div>
        )}

        {/* Archive Header (for category/tag pages) */}
        {description && (
          <div className="mb-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">{title}</h1>
              <p className="text-lg text-muted-foreground">{description}</p>
            </div>
          </div>
        )}

        {/* Stats Bar */}
        {showStats && (
          <div className="mb-12">
            <BlogStats
              totalPosts={posts.length}
              totalCategories={categories.length}
              totalTags={tags.length}
            />
          </div>
        )}

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[1fr_350px] gap-12">
          {/* Posts List */}
          <div className="space-y-8">
            {/* Search */}
            <BlogSearch
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search articles by title, content, category, or tag..."
            />

            {/* Results Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                {searchQuery ? (
                  <>
                    Search Results ({filteredPosts.length})
                  </>
                ) : !description ? (
                  title
                ) : (
                  `${filteredPosts.length} ${filteredPosts.length === 1 ? 'Article' : 'Articles'}`
                )}
              </h2>
            </div>

            {/* Posts */}
            {displayedPosts.length > 0 ? (
              <div className="space-y-6">
                {displayedPosts.map(post => (
                  <BlogCard
                    key={post.slug}
                    post={post}
                    author={authors[post.author]}
                  />
                ))}

                {/* Load More Button */}
                {hasMore && (
                  <div className="text-center pt-8">
                    <button
                      onClick={() => setDisplayCount(prev => prev + 12)}
                      className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                    >
                      Load More Articles
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">
                  {searchQuery
                    ? 'No articles found matching your search.'
                    : 'No articles available yet.'}
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <BlogSidebar
            categories={categories}
            popularPosts={popularPosts}
            tags={tags}
          />
        </div>
      </div>
    </div>
  )
}
