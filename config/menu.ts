import { 
  Globe, Smartphone, Cloud, Brain, Palette, Building2,
  Code, ShoppingCart, Blocks, Database, Lock, Zap,
  Cpu, Search, MessageSquare, BarChart, Users,
  Repeat, Package, Server, Home, Briefcase, 
  Newspaper, Mail, Info, HeadphonesIcon, FileText, Award,
  Lightbulb, Settings, Layers, Target, TrendingUp, RefreshCw
} from 'lucide-react'
import { LucideIcon } from 'lucide-react'

export interface MenuItem {
  name: string
  href: string
  icon?: LucideIcon
  megaMenu?: {
    categories: {
      category: string
      icon: LucideIcon
      description?: string
      items: {
        name: string
        href: string
        icon: LucideIcon
        description?: string
      }[]
    }[]
  }
}

export const menuItems: MenuItem[] = [
  {
    name: 'Home',
    href: '/',
    icon: Home
  },
  {
    name: 'Services',
    href: '/services',
    icon: Briefcase,
    megaMenu: {
      categories: [
        {
          category: 'Web Development',
          icon: Globe,
          description: 'Build fast, scalable web applications',
          items: [
            { name: 'Frontend Development', href: '/services/web/frontend', icon: Code, description: 'Responsive user interfaces' },
            { name: 'Backend Development', href: '/services/web/backend', icon: Server, description: 'Scalable server-side solutions' },
            { name: 'Full Stack Development', href: '/services/web/fullstack', icon: Layers, description: 'End-to-end web solutions' },
            { name: 'E-commerce Solutions', href: '/services/web/ecommerce', icon: ShoppingCart, description: 'High-converting online stores' },
          ]
        },
        {
          category: 'Mobile Development',
          icon: Smartphone,
          description: 'Native and cross-platform apps',
          items: [
            { name: 'iOS Development', href: '/services/mobile/ios', icon: Smartphone, description: 'Native iPhone and iPad apps' },
            { name: 'Android Development', href: '/services/mobile/android', icon: Smartphone, description: 'High-performance Android apps' },
            { name: 'Cross-Platform Apps', href: '/services/mobile/cross-platform', icon: Code, description: 'React Native and Flutter' },
          ]
        },
        {
          category: 'Cloud & DevOps',
          icon: Cloud,
          description: 'Scale your infrastructure efficiently',
          items: [
            { name: 'Cloud Solutions', href: '/services/cloud/solutions', icon: Cloud, description: 'AWS, Azure, and GCP infrastructure' },
            { name: 'DevOps & CI/CD', href: '/services/cloud/devops', icon: Repeat, description: 'Automated deployment pipelines' },
            { name: 'Container Solutions', href: '/services/cloud/containers', icon: Package, description: 'Docker and Kubernetes' },
          ]
        },
      ]
    }
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: Lightbulb,
    megaMenu: {
      categories: [
        {
          category: 'Business Solutions',
          icon: Target,
          description: 'Transform your business digitally',
          items: [
            { name: 'Digital Transformation', href: '/solutions/digital-transformation', icon: TrendingUp, description: 'Modernize your business processes' },
            { name: 'Enterprise Applications', href: '/solutions/enterprise', icon: Building2, description: 'Custom enterprise software' },
            { name: 'Legacy Modernization', href: '/solutions/legacy', icon: RefreshCw, description: 'Update and migrate legacy systems' },
          ]
        },
        {
          category: 'Technology Solutions',
          icon: Settings,
          description: 'Cutting-edge technology integration',
          items: [
            { name: 'AI & ML Integration', href: '/solutions/ai-ml', icon: Brain, description: 'Intelligent automation solutions' },
            { name: 'UI/UX Design Services', href: '/solutions/design', icon: Palette, description: 'User-centered design approach' },
            { name: 'API Development', href: '/solutions/api', icon: Code, description: 'Robust API architecture' },
          ]
        },
      ]
    }
  },
  {
    name: 'Portfolio',
    href: '/portfolio',
    icon: Briefcase
  },
  {
    name: 'About',
    href: '/about',
    icon: Info,
    megaMenu: {
      categories: [
        {
          category: 'Company',
          icon: Building2,
          description: 'Learn about our mission and values',
          items: [
            { name: 'About Us', href: '/about', icon: Info, description: 'Our story and mission' },
            { name: 'Our Team', href: '/about/team', icon: Users, description: 'Meet our expert team' },
            { name: 'Careers', href: '/about/careers', icon: Briefcase, description: 'Join our growing team' },
          ]
        },
        {
          category: 'Resources',
          icon: FileText,
          description: 'Explore our work and insights',
          items: [
            { name: 'Case Studies', href: '/resources/case-studies', icon: FileText, description: 'Client success stories' },
            { name: 'Testimonials', href: '/resources/testimonials', icon: MessageSquare, description: 'What clients say about us' },
            { name: 'FAQ', href: '/faq', icon: MessageSquare, description: 'Frequently asked questions' },
          ]
        },
      ]
    }
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: Mail
  },
]
