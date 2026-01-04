import { getAllBlogPosts, getAllPortfolio, getTechnologies, getAllServices, generateExcerpt } from './content'

export interface SearchDocument {
  id: string
  type: 'blog' | 'portfolio' | 'technology' | 'page' | 'service'
  title: string
  description?: string
  tags?: string[]
  content?: string
  url: string
}

// Static pages to include in search
const staticPages: SearchDocument[] = [
  {
    id: 'page-home',
    type: 'page',
    title: 'Home',
    description: 'Transform your ideas into exceptional software solutions with Srapsware. Expert web, mobile, and cloud development services.',
    tags: ['home', 'main', 'landing'],
    url: '/',
  },
  {
    id: 'page-about',
    type: 'page',
    title: 'About Us',
    description: 'Learn about Srapsware\'s journey, mission, and the team behind innovative software solutions.',
    tags: ['about', 'company', 'team', 'mission'],
    url: '/about',
  },
  {
    id: 'page-services',
    type: 'page',
    title: 'Services',
    description: 'Explore our comprehensive software development services including web, mobile, cloud, and DevOps solutions.',
    tags: ['services', 'development', 'solutions'],
    url: '/services',
  },
  {
    id: 'page-portfolio',
    type: 'page',
    title: 'Portfolio',
    description: 'View our successful projects and case studies showcasing our expertise in software development.',
    tags: ['portfolio', 'projects', 'work', 'case studies'],
    url: '/portfolio',
  },
  {
    id: 'page-blog',
    type: 'page',
    title: 'Blog',
    description: 'Read insights, tutorials, and updates about software development, technology trends, and best practices.',
    tags: ['blog', 'articles', 'insights', 'news'],
    url: '/blog',
  },
  {
    id: 'page-contact',
    type: 'page',
    title: 'Contact Us',
    description: 'Get in touch with Srapsware for your next software project. We\'re here to help bring your ideas to life.',
    tags: ['contact', 'reach out', 'get in touch'],
    url: '/contact',
  },
  {
    id: 'page-testimonials',
    type: 'page',
    title: 'Testimonials',
    description: 'Read what our clients say about working with Srapsware and the results we\'ve delivered.',
    tags: ['testimonials', 'reviews', 'client feedback'],
    url: '/testimonials',
  },
  {
    id: 'page-technologies',
    type: 'page',
    title: 'Technologies',
    description: 'Discover the cutting-edge technologies and tools we use to build exceptional software solutions.',
    tags: ['technologies', 'tech stack', 'tools'],
    url: '/technologies',
  },
  {
    id: 'page-careers',
    type: 'page',
    title: 'Careers',
    description: 'Join our team of talented developers and innovators. Explore career opportunities at Srapsware.',
    tags: ['careers', 'jobs', 'opportunities', 'hiring'],
    url: '/careers',
  },
  {
    id: 'page-privacy',
    type: 'page',
    title: 'Privacy Policy',
    description: 'Learn about how we collect, use, and protect your personal information.',
    tags: ['privacy', 'policy', 'data protection'],
    url: '/privacy-policy',
  },
  {
    id: 'page-terms',
    type: 'page',
    title: 'Terms & Conditions',
    description: 'Read our terms and conditions for using our services and website.',
    tags: ['terms', 'conditions', 'legal'],
    url: '/terms-conditions',
  },
  {
    id: 'page-faq',
    type: 'page',
    title: 'FAQ',
    description: 'Find answers to frequently asked questions about our services and working with us.',
    tags: ['faq', 'questions', 'help', 'support'],
    url: '/faq',
  },
  {
    id: 'page-our-process',
    type: 'page',
    title: 'Our Process',
    description: 'Discover our proven software development methodology and how we deliver successful projects.',
    tags: ['process', 'methodology', 'workflow'],
    url: '/our-process',
  },
]

// Strip markdown to plain text
function stripMarkdown(markdown: string): string {
  return markdown
    .replace(/#{1,6}\s+/g, '') // Remove headings
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Remove links but keep text
    .replace(/[*_~`]/g, '') // Remove emphasis markers
    .replace(/^\s*[-*+]\s+/gm, '') // Remove list markers
    .replace(/^\s*\d+\.\s+/gm, '') // Remove numbered list markers
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]+`/g, '') // Remove inline code
    .replace(/!\[([^\]]*)\]\([^\)]+\)/g, '') // Remove images
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .replace(/\s+/g, ' ') // Normalize spaces
    .trim()
}

// Build the complete search index
export function buildSearchIndex(): SearchDocument[] {
  const documents: SearchDocument[] = []

  // Add blog posts
  const blogPosts = getAllBlogPosts()
  blogPosts.forEach(post => {
    const plainContent = stripMarkdown(post.content)
    const excerpt = plainContent.length > 200 
      ? plainContent.substring(0, 200) + '...'
      : plainContent

    documents.push({
      id: `blog-${post.slug}`,
      type: 'blog',
      title: post.title,
      description: post.excerpt || excerpt,
      tags: [...(post.tags || []), ...(post.categories || [])],
      content: excerpt,
      url: `/blog/${post.slug}`,
    })
  })

  // Add portfolio projects
  const portfolios = getAllPortfolio()
  portfolios.forEach(project => {
    const plainContent = stripMarkdown(project.content)
    const excerpt = plainContent.length > 200 
      ? plainContent.substring(0, 200) + '...'
      : plainContent

    documents.push({
      id: `portfolio-${project.slug}`,
      type: 'portfolio',
      title: project.title,
      description: project.description || excerpt,
      tags: [...(project.technologies || []), ...(project.categories || [])],
      content: excerpt,
      url: `/portfolio/${project.slug}`,
    })
  })

  // Add technologies
  const technologies = getTechnologies()
  technologies.forEach(tech => {
    if (tech.active) {
      documents.push({
        id: `tech-${tech.slug}`,
        type: 'technology',
        title: tech.title,
        description: tech.description,
        tags: [tech.category, tech.experience],
        url: `/technologies/${tech.slug}`,
      })
    }
  })

  // Add services
  const services = getAllServices()
  services.forEach(service => {
    const plainContent = stripMarkdown(service.content)
    const excerpt = plainContent.length > 200 
      ? plainContent.substring(0, 200) + '...'
      : plainContent

    documents.push({
      id: `service-${service.slug}`,
      type: 'service',
      title: service.title,
      description: service.description || excerpt,
      tags: [],
      content: excerpt,
      url: service.link,
    })
  })

  // Add static pages
  documents.push(...staticPages)

  return documents
}
