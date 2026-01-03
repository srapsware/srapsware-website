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
    .map(filename => parseContentFile<Author>('authors', filename))
    .filter((author): author is Author => author !== null)
  
  return authors
}

export function getAuthorByName(name: string): Author | null {
  const files = getContentFiles('authors')
  const filename = files.find(f => f.replace(/\.md$/, '') === name)
  
  if (!filename) return null
  
  return parseContentFile<Author>('authors', filename)
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

