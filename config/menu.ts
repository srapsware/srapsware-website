import {
  Globe, Smartphone, Cloud, Brain, Palette, Building2,
  Code, ShoppingCart, Zap,
  Package, Server, Home, Briefcase,
  Newspaper, Mail, Info, FileText, Award,
  Lightbulb, Settings, Layers, Target, RefreshCw,
  Monitor, TabletSmartphone, GitBranch, Workflow, Plug, HelpCircle, Radio,
  Sparkles, Rocket, Shield, Activity,
  ShoppingBag, Box, Gauge, LineChart, Link2, Hexagon,
  BookOpen, GraduationCap, MessageSquare
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
          description: 'Modern web applications',
          items: [
            { name: 'Frontend Development', href: '/services/web-development/frontend', icon: Monitor, description: 'React, Next.js, Vue.js' },
            { name: 'Backend Development', href: '/services/web-development/backend', icon: Server, description: 'Node.js, Python, PHP' },
            { name: 'Full Stack Development', href: '/services/web-development/fullstack', icon: Layers, description: 'Complete solutions' },
            { name: 'WordPress Development', href: '/services/web-development/wordpress', icon: Code, description: 'Custom WP solutions' },
            { name: 'Progressive Web Apps', href: '/services/web-development/pwa', icon: Zap, description: 'Fast PWA apps' },
          ]
        },
        {
          category: 'Mobile Development',
          icon: Smartphone,
          description: 'Native & cross-platform',
          items: [
            { name: 'iOS App Development', href: '/services/mobile-development/ios', icon: TabletSmartphone, description: 'Native iPhone apps' },
            { name: 'Android App Development', href: '/services/mobile-development/android', icon: Smartphone, description: 'Native Android apps' },
            { name: 'Cross-Platform Apps', href: '/services/mobile-development/cross-platform', icon: GitBranch, description: 'React Native, Flutter' },
            { name: 'Mobile App Design', href: '/services/mobile-development/design', icon: Palette, description: 'Mobile UI/UX design' },
          ]
        },
        {
          category: 'E-Commerce Development',
          icon: ShoppingCart,
          description: 'Online store solutions',
          items: [
            { name: 'WooCommerce Development', href: '/services/ecommerce-development/woocommerce', icon: ShoppingCart, description: 'WP e-commerce stores' },
            { name: 'Shopify Development', href: '/services/ecommerce-development/shopify', icon: ShoppingBag, description: 'Custom Shopify stores' },
            { name: 'Magento Development', href: '/services/ecommerce-development/magento', icon: Box, description: 'Enterprise e-commerce' },
            { name: 'Custom E-Commerce Development', href: '/services/ecommerce-development/custom', icon: Code, description: 'Bespoke online stores' },
          ]
        },
        {
          category: 'Cloud & DevOps',
          icon: Cloud,
          description: 'Infrastructure & deployment',
          items: [
            { name: 'Cloud Solutions', href: '/services/cloud-devops/cloud', icon: Cloud, description: 'AWS, Azure, GCP' },
            { name: 'DevOps & CI/CD', href: '/services/cloud-devops/devops', icon: Workflow, description: 'Automated pipelines' },
            { name: 'Cloud Migration', href: '/services/cloud-devops/migration', icon: RefreshCw, description: 'Move to cloud' },
            { name: 'Container Solutions', href: '/services/cloud-devops/containers', icon: Package, description: 'Docker & Kubernetes' },
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
          category: 'By Industry',
          icon: Building2,
          description: 'Industry solutions',
          items: [
            { name: 'E-Commerce Solutions', href: '/solutions/by-industry/ecommerce', icon: ShoppingCart, description: 'Online retail platforms' },
            { name: 'Healthcare Solutions', href: '/solutions/by-industry/healthcare', icon: Activity, description: 'Medical software' },
            { name: 'Finance & Banking', href: '/solutions/by-industry/finance', icon: LineChart, description: 'FinTech solutions' },
            { name: 'Education & LMS', href: '/solutions/by-industry/education', icon: GraduationCap, description: 'Learning platforms' },
            { name: 'Real Estate Tech', href: '/solutions/by-industry/real-estate', icon: Home, description: 'Property solutions' },
          ]
        },
        {
          category: 'By Technology',
          icon: Sparkles,
          description: 'Technology solutions',
          items: [
            { name: 'SaaS Development', href: '/solutions/by-technology/saas', icon: Cloud, description: 'Subscription platforms' },
            { name: 'AI & Machine Learning', href: '/solutions/by-technology/ai-ml', icon: Brain, description: 'Intelligent solutions' },
            { name: 'Blockchain & Web3', href: '/solutions/by-technology/blockchain', icon: Hexagon, description: 'Decentralized apps' },
            { name: 'IoT Solutions', href: '/solutions/by-technology/iot', icon: Radio, description: 'Connected devices' },
            { name: 'API Integration', href: '/solutions/by-technology/api-integration', icon: Plug, description: 'System connectivity' },
          ]
        },
        {
          category: 'Digital Transformation',
          icon: Rocket,
          description: 'Business modernization',
          items: [
            { name: 'Business Automation', href: '/solutions/digital-transformation/automation', icon: Workflow, description: 'Process automation' },
            { name: 'Legacy Modernization', href: '/solutions/digital-transformation/legacy-modernization', icon: RefreshCw, description: 'System upgrades' },
            { name: 'Digital Strategy', href: '/solutions/digital-transformation/digital-strategy', icon: Target, description: 'Tech roadmaps' },
            { name: 'System Integration', href: '/solutions/digital-transformation/integration', icon: Link2, description: 'Connect systems' },
            { name: 'Data Analytics & BI', href: '/solutions/digital-transformation/analytics', icon: LineChart, description: 'Business intelligence' },
          ]
        },
        {
          category: 'Support & Maintenance',
          icon: Shield,
          description: 'Ongoing services',
          items: [
            { name: 'Technical Support', href: '/solutions/support-maintenance/support', icon: Shield, description: '24/7 assistance' },
            { name: 'Maintenance Packages', href: '/solutions/support-maintenance/maintenance', icon: Settings, description: 'Regular updates' },
            { name: 'Security Services', href: '/solutions/support-maintenance/security', icon: Shield, description: 'Threat protection' },
            { name: 'Performance Optimization', href: '/solutions/support-maintenance/optimization', icon: Gauge, description: 'Speed improvements' },
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
    name: 'Resources',
    href: '/resources',
    icon: Newspaper,
    megaMenu: {
      categories: [
        {
          category: 'Content',
          icon: Newspaper,
          description: 'Learn from our expertise',
          items: [
            { name: 'Blog', href: '/blog', icon: Newspaper, description: 'Latest articles & insights' },
            { name: 'Case Studies', href: '/resources/case-studies', icon: FileText, description: 'Client success stories' },
            { name: 'Guides', href: '/resources/guides', icon: BookOpen, description: 'In-depth resources' },
            { name: 'Whitepapers', href: '/resources/whitepapers', icon: FileText, description: 'Technical whitepapers' },
          ]
        },
        {
          category: 'Documentation',
          icon: FileText,
          description: 'Technical resources',
          items: [
            { name: 'Documentation', href: '/docs', icon: FileText, description: 'Technical documentation' },
            { name: 'API Documentation', href: '/resources/api-documentation', icon: Code, description: 'API references' },
            { name: 'FAQ', href: '/faq', icon: HelpCircle, description: 'Common questions' },
          ]
        },
      ]
    }
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
            { name: 'Our Process', href: '/our-process', icon: Workflow, description: 'How we work' },
            { name: 'Careers', href: '/careers', icon: Briefcase, description: 'Join our growing team' },
          ]
        },
        {
          category: 'Showcase',
          icon: Award,
          description: 'Our work and client feedback',
          items: [
            { name: 'Portfolio', href: '/portfolio', icon: Briefcase, description: 'Our work showcase' },
            { name: 'Testimonials', href: '/testimonials', icon: MessageSquare, description: 'What clients say' },
            { name: 'Case Studies', href: '/resources/case-studies', icon: FileText, description: 'Client success stories' },
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