import { 
  Globe, Smartphone, Cloud, Brain, Palette, Building2,
  Code, ShoppingCart, Blocks, Database, Lock, Zap,
  Cpu, Search, MessageSquare, BarChart, Users,
  Repeat, Package, Server, Home, Briefcase, 
  Newspaper, Mail, Info, HeadphonesIcon, FileText, Award
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
          description: 'Modern web solutions',
          items: [
            { name: 'Custom Web Apps', href: '/services/web/custom', icon: Code, description: 'Tailored applications' },
            { name: 'E-commerce', href: '/services/web/ecommerce', icon: ShoppingCart, description: 'Online stores' },
            { name: 'WordPress', href: '/services/web/wordpress', icon: Blocks, description: 'CMS development' },
            { name: 'Progressive Web Apps', href: '/services/web/pwa', icon: Smartphone, description: 'App-like experiences' },
          ]
        },
        {
          category: 'Mobile Development',
          icon: Smartphone,
          description: 'Native & cross-platform',
          items: [
            { name: 'iOS Apps', href: '/services/mobile/ios', icon: Smartphone, description: 'iPhone & iPad apps' },
            { name: 'Android Apps', href: '/services/mobile/android', icon: Smartphone, description: 'Android experiences' },
            { name: 'React Native', href: '/services/mobile/react-native', icon: Code, description: 'Cross-platform' },
            { name: 'Flutter Apps', href: '/services/mobile/flutter', icon: Code, description: 'Beautiful UI' },
          ]
        },
        {
          category: 'Cloud & DevOps',
          icon: Cloud,
          description: 'Scalable infrastructure',
          items: [
            { name: 'AWS Solutions', href: '/services/cloud/aws', icon: Cloud, description: 'Amazon Web Services' },
            { name: 'Azure Cloud', href: '/services/cloud/azure', icon: Cloud, description: 'Microsoft Azure' },
            { name: 'CI/CD Pipeline', href: '/services/cloud/cicd', icon: Repeat, description: 'Automated deployment' },
            { name: 'Docker & Kubernetes', href: '/services/cloud/containers', icon: Package, description: 'Containers' },
          ]
        },
        {
          category: 'Design & AI',
          icon: Brain,
          description: 'Smart & beautiful',
          items: [
            { name: 'UI/UX Design', href: '/services/design/ui-ux', icon: Palette, description: 'User interfaces' },
            { name: 'AI Integration', href: '/services/ai/custom', icon: Brain, description: 'ChatGPT & AI' },
            { name: 'Branding', href: '/services/design/branding', icon: Palette, description: 'Brand identity' },
            { name: 'AI Chatbots', href: '/services/ai/chatbot', icon: MessageSquare, description: '24/7 support' },
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
    name: 'Blog',
    href: '/blog',
    icon: Newspaper
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
          description: 'Learn about our mission and team',
          items: [
            { name: 'About Us', href: '/about', icon: Info, description: 'Our story and values' },
            { name: 'Our Team', href: '/about/team', icon: Users, description: 'Meet the experts' },
            { name: 'Careers', href: '/about/careers', icon: Briefcase, description: 'Join our team' },
            { name: 'Culture', href: '/about/culture', icon: Award, description: 'How we work' },
          ]
        },
        {
          category: 'Resources',
          icon: FileText,
          description: 'Explore our work and expertise',
          items: [
            { name: 'Case Studies', href: '/resources/case-studies', icon: FileText, description: 'Success stories' },
            { name: 'Testimonials', href: '/resources/testimonials', icon: MessageSquare, description: 'Client reviews' },
            { name: 'Technologies', href: '/resources/technologies', icon: Cpu, description: 'Our tech stack' },
            { name: 'Certifications', href: '/resources/certifications', icon: Award, description: 'Industry recognition' },
          ]
        },
      ]
    }
  },
  {
    name: 'Support',
    href: '/support',
    icon: HeadphonesIcon,
    megaMenu: {
      categories: [
        {
          category: 'Help Center',
          icon: HeadphonesIcon,
          description: 'Get help and resources',
          items: [
            { name: 'FAQ', href: '/support/faq', icon: MessageSquare, description: 'Common questions answered' },
            { name: 'Documentation', href: '/support/docs', icon: FileText, description: 'Detailed guides & docs' },
            { name: 'Video Tutorials', href: '/support/tutorials', icon: Smartphone, description: 'Step-by-step videos' },
            { name: 'API Reference', href: '/support/api', icon: Code, description: 'Developer documentation' },
          ]
        },
        {
          category: 'Get in Touch',
          icon: Mail,
          description: 'We\'re here to help',
          items: [
            { name: 'Contact Support', href: '/support/contact', icon: Mail, description: 'Email our support team' },
            { name: 'Request Quote', href: '/contact', icon: FileText, description: 'Get a free estimate' },
            { name: 'Schedule Call', href: '/support/schedule', icon: MessageSquare, description: 'Book a consultation' },
            { name: 'Report Issue', href: '/support/report', icon: Info, description: 'Submit a bug report' },
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
