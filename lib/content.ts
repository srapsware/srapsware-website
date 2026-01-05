import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import yaml from 'js-yaml'

const contentDirectory = path.join(process.cwd(), 'content')

export interface BlogPost {
  slug: string
  title: string
  excerpt?: string
  date: string
  featured?: boolean
  draft?: boolean
  categories?: string[]
  tags?: string[]
  author: string
  image: string
  image_alt?: string
  content: string
  // New fields
  metaDescription?: string
  readingTime?: number
  toc?: boolean
  comments?: boolean
}

export interface Portfolio {
  slug: string
  title: string
  description: string
  client?: string
  status: string
  featured?: boolean
  project_url?: string
  completed_on: string
  date: string
  image: string
  image_alt?: string
  categories?: string[]
  technologies?: string[]
  content: string
  galleryImages?: string[] | Array<{ image: string; caption?: string; alt?: string }>
  video?: string
  android?: string
  ios?: string
  // New fields
  industry?: string
  duration?: string
  teamSize?: number
  features?: string[]
  challenges?: string
  solutions?: string
  results?: Array<{ metric: string; description?: string }>
  githubUrl?: string
  metaDescription?: string
}

export interface Testimonial {
  slug: string
  name: string
  position: string
  company?: string
  company_url?: string
  country?: string
  avatar?: string
  logo?: string
  rating: number
  featured?: boolean
  date: string
  content: string
  project?: string
  // New fields
  industry?: string
  linkedin?: string
  verified?: boolean
  source?: string
  videoUrl?: string
}

export interface Author {
  name: string
  display_name: string
  position: string
  email?: string
  avatar?: string
  bio: string
  social?: {
    website?: string
    linkedin?: string
    twitter?: string
    github?: string
    facebook?: string
    instagram?: string
  }
  // New fields
  expertise?: string[]
  experience?: number
  active?: boolean
  joinedDate?: string
}

export interface SiteSettings {
  stats: {
    projects: string
    clients: string
    team: string
    years: string
  }
  hero: {
    badge: string
    headline: string
    headlineHighlight: string
    subheadline: string
    ctaPrimary: string
    ctaPrimaryLink: string
    ctaSecondary: string
    ctaSecondaryLink: string
  }
  sections: {
    portfolioTitle: string
    portfolioDescription: string
    testimonialsTitle: string
    testimonialsDescription: string
    blogTitle: string
    blogDescription: string
    servicesTitle: string
    servicesDescription: string
  }
  clients?: {
    title: string
    subtitle: string
    description: string
    logos: Array<{
      name: string
      logo: string
      website?: string
    }>
  }
  video?: {
    title: string
    description?: string
    videoUrl: string
    thumbnail: string
    thumbnailAlt?: string
  }
}

export interface Service {
  slug: string
  title: string
  description: string
  icon: string
  link: string
  order: number
  featured: boolean
  color: string
  content: string
}

// Generic function to read all files from a folder
function getContentFiles(folder: string) {
  const fullPath = path.join(contentDirectory, folder)
  
  if (!fs.existsSync(fullPath)) {
    return []
  }
  
  return fs.readdirSync(fullPath).filter(file => file.endsWith('.md'))
}

// Generic function to parse markdown file
function parseContentFile<T>(folder: string, filename: string): T | null {
  try {
    const fullPath = path.join(contentDirectory, folder, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    const slug = filename.replace(/\.md$/, '')
    
    return {
      slug,
      ...data,
      content,
    } as T
  } catch (error) {
    console.error(`Error parsing ${folder}/${filename}:`, error)
    return null
  }
}

// Blog Posts
export function getAllBlogPosts(): BlogPost[] {
  const files = getContentFiles('posts')
  
  const posts = files
    .map(filename => parseContentFile<BlogPost>('posts', filename))
    .filter((post): post is BlogPost => post !== null && !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  return posts
}

export function getFeaturedBlogPosts(limit = 3): BlogPost[] {
  return getAllBlogPosts()
    .filter(post => post.featured)
    .slice(0, limit)
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const files = getContentFiles('posts')
  const filename = files.find(f => f.replace(/\.md$/, '') === slug)
  
  if (!filename) return null
  
  return parseContentFile<BlogPost>('posts', filename)
}

// Portfolio
export function getAllPortfolio(): Portfolio[] {
  const files = getContentFiles('portfolios')
  
  const projects = files
    .map(filename => parseContentFile<Portfolio>('portfolios', filename))
    .filter((project): project is Portfolio => project !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  return projects
}

export function getFeaturedPortfolio(limit = 6): Portfolio[] {
  return getAllPortfolio()
    .filter(project => project.featured)
    .slice(0, limit)
}

export function getPortfolioBySlug(slug: string): Portfolio | null {
  const files = getContentFiles('portfolios')
  const filename = files.find(f => f.replace(/\.md$/, '') === slug)
  
  if (!filename) return null
  
  return parseContentFile<Portfolio>('portfolios', filename)
}

// Testimonials
export function getAllTestimonials(): Testimonial[] {
  const files = getContentFiles('testimonials')
  
  const testimonials = files
    .map(filename => parseContentFile<Testimonial>('testimonials', filename))
    .filter((testimonial): testimonial is Testimonial => testimonial !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  return testimonials
}

export function getFeaturedTestimonials(limit = 6): Testimonial[] {
  return getAllTestimonials()
    .filter(testimonial => testimonial.featured)
    .slice(0, limit)
}

// Authors
export function getAllAuthors(): Author[] {
  const files = getContentFiles('authors')
  
  const authors = files
    .map(filename => {
      const parsed = parseContentFile<any>('authors', filename)
      if (!parsed) return null
      
      return {
        ...parsed,
        bio: parsed.bio || parsed.content || '',
      } as Author
    })
    .filter((author): author is Author => !!(author && author.name && author.display_name))
  
  return authors
}

export function getAuthorByName(name: string): Author | null {
  const authors = getAllAuthors()
  return authors.find(author => author.name === name) || null
}

// Site Settings
export function getSiteSettings(): SiteSettings | null {
  try {
    const filePath = path.join(process.cwd(), 'content', 'settings', 'site-config.md')
    
    if (!fs.existsSync(filePath)) {
      return null
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)
    
    return data as SiteSettings
  } catch (error) {
    console.error('Error reading site settings:', error)
    return null
  }
}

// Services
export function getAllServices(): Service[] {
  const files = getContentFiles('services')
  
  const services = files
    .map(filename => parseContentFile<Service>('services', filename))
    .filter((service): service is Service => service !== null)
    .sort((a, b) => (a.order || 999) - (b.order || 999))
  
  return services
}

export function getFeaturedServices(): Service[] {
  return getAllServices().filter(service => service.featured)
}

// Technologies
export interface Technology {
  title: string
  slug: string
  category: string
  parent?: string
  ecosystem?: string
  relatedTechnologies?: string[]
  tags?: string[]
  logo: string
  color: string
  website: string
  description: string
  experience: string
  featured: boolean
  active: boolean
}

export function getTechnologies(): Technology[] {
  try {
    const filePath = path.join(process.cwd(), 'content', 'data', 'technologies.yml')
    
    if (!fs.existsSync(filePath)) {
      return []
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const data = yaml.load(fileContents) as { technologies: Technology[] }
    
    return data.technologies || []
  } catch (error) {
    console.error('Error reading technologies:', error)
    return []
  }
}

export function getTechnologyByTitle(title: string): Technology | null {
  const technologies = getTechnologies()
  return technologies.find(tech => tech.title === title) || null
}

export function getTechnologyBySlug(slug: string): Technology | null {
  const technologies = getTechnologies()
  return technologies.find(tech => tech.slug === slug) || null
}

export function getFeaturedTechnologies(): Technology[] {
  return getTechnologies().filter(tech => tech.featured && tech.active)
}

export function getTechnologiesByCategory(category: string): Technology[] {
  return getTechnologies().filter(tech => tech.category === category && tech.active)
}

// Blog-specific helper functions
export function getFeaturedPost(): BlogPost | null {
  const featured = getAllBlogPosts().filter(post => post.featured)
  return featured.length > 0 ? featured[0] : null
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllBlogPosts().filter(post => 
    post.categories?.some(cat => cat.toLowerCase() === category.toLowerCase())
  )
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getAllBlogPosts().filter(post =>
    post.tags?.some(t => t.toLowerCase() === tag.toLowerCase())
  )
}

export function getRelatedPosts(currentSlug: string, categories: string[] = [], tags: string[] = [], limit = 3): BlogPost[] {
  const allPosts = getAllBlogPosts().filter(post => post.slug !== currentSlug)
  
  // Score posts by relevance
  const scoredPosts = allPosts.map(post => {
    let score = 0
    
    // Match categories (higher weight)
    const matchingCategories = post.categories?.filter(cat => 
      categories.some(c => c.toLowerCase() === cat.toLowerCase())
    ).length || 0
    score += matchingCategories * 3
    
    // Match tags
    const matchingTags = post.tags?.filter(tag =>
      tags.some(t => t.toLowerCase() === tag.toLowerCase())
    ).length || 0
    score += matchingTags * 1
    
    return { post, score }
  })
  
  // Sort by score, then by date
  return scoredPosts
    .filter(({ score }) => score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score
      return new Date(b.post.date).getTime() - new Date(a.post.date).getTime()
    })
    .slice(0, limit)
    .map(({ post }) => post)
}

export function getPopularPosts(limit = 5): BlogPost[] {
  // For now, return featured posts. Later can be based on views/reactions
  return getAllBlogPosts()
    .filter(post => post.featured)
    .slice(0, limit)
}

export function getAllCategories(): string[] {
  const posts = getAllBlogPosts()
  const categories = new Set<string>()
  
  posts.forEach(post => {
    post.categories?.forEach(cat => categories.add(cat))
  })
  
  return Array.from(categories).sort()
}

export function getAllTags(): string[] {
  const posts = getAllBlogPosts()
  const tags = new Set<string>()
  
  posts.forEach(post => {
    post.tags?.forEach(tag => tags.add(tag))
  })
  
  return Array.from(tags).sort()
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 265
  const words = content.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return minutes
}

export function generateExcerpt(content: string, length = 160): string {
  // Remove markdown syntax
  const plainText = content
    .replace(/#{1,6}\s+/g, '') // Remove headings
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Remove links but keep text
    .replace(/[*_~`]/g, '') // Remove emphasis markers
    .replace(/^\s*[-*+]\s+/gm, '') // Remove list markers
    .replace(/^\s*\d+\.\s+/gm, '') // Remove numbered list markers
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]+`/g, '') // Remove inline code
    .trim()
  
  if (plainText.length <= length) {
    return plainText
  }
  
  return plainText.substring(0, length).trim() + '...'
}

