import { 
  Globe, Smartphone, Cloud, Brain, Palette, Building2,
  Code, ShoppingCart, Blocks, Database, Lock, Zap,
  Cpu, Search, MessageSquare, BarChart, Users,
  Repeat, Package, Server, Home, Briefcase, 
  Newspaper, Mail, Info, HeadphonesIcon, FileText, Award,
  Lightbulb, Settings, Layers, Target, TrendingUp, RefreshCw,
  Monitor, TabletSmartphone, GitBranch, Workflow, Plug, HelpCircle, Radio,
  Sparkles, Rocket, Shield, Activity, LayoutTemplate, Wrench,
  ShoppingBag, Box, Factory, Gauge, LineChart, Link2, Hexagon,
  BookOpen, Video, GraduationCap
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
            { name: 'Frontend Development', href: '/services/web/frontend', icon: Monitor, description: 'React, Next.js, Vue.js' },
            { name: 'Backend Development', href: '/services/web/backend', icon: Server, description: 'Node.js, Python, PHP' },
            { name: 'Full Stack Development', href: '/services/web/fullstack', icon: Layers, description: 'End-to-end web solutions' },
            { name: 'WordPress Development', href: '/services/wordpress-website-development', icon: Code, description: 'Custom WP themes & plugins' },
            { name: 'Progressive Web Apps', href: '/services/web/pwa', icon: Zap, description: 'Fast, app-like experiences' },
          ]
        },
        {
          category: 'Mobile Development',
          icon: Smartphone,
          description: 'Native and cross-platform apps',
          items: [
            { name: 'iOS Development', href: '/services/ios-app-development', icon: TabletSmartphone, description: 'Native iPhone & iPad apps' },
            { name: 'Android Development', href: '/services/android-app-development', icon: Smartphone, description: 'High-performance Android' },
            { name: 'Cross-Platform Apps', href: '/services/mobile/cross-platform', icon: GitBranch, description: 'React Native & Flutter' },
            { name: 'Mobile App Design', href: '/services/mobile-site-design', icon: Palette, description: 'User-centered mobile UX' },
          ]
        },
        {
          category: 'Cloud & DevOps',
          icon: Cloud,
          description: 'Scale your infrastructure efficiently',
          items: [
            { name: 'Cloud Solutions', href: '/services/cloud/solutions', icon: Cloud, description: 'AWS, Azure, Google Cloud' },
            { name: 'DevOps & CI/CD', href: '/services/cloud/devops', icon: Workflow, description: 'Automated pipelines' },
            { name: 'Container Solutions', href: '/services/cloud/containers', icon: Package, description: 'Docker & Kubernetes' },
            { name: 'Microservices', href: '/services/cloud/microservices', icon: Blocks, description: 'Scalable architectures' },
            { name: 'Serverless Solutions', href: '/services/cloud/serverless', icon: Zap, description: 'Lambda, Azure Functions' },
          ]
        },
        {
          category: 'AI & Innovation',
          icon: Sparkles,
          description: 'Cutting-edge intelligent solutions',
          items: [
            { name: 'AI & Machine Learning', href: '/services/ai-ml', icon: Brain, description: 'Custom AI solutions' },
            { name: 'ChatGPT Integration', href: '/services/ai/chatgpt', icon: MessageSquare, description: 'LLM-powered features' },
            { name: 'Chatbot Development', href: '/services/ai/chatbots', icon: MessageSquare, description: 'AI customer service' },
            { name: 'Blockchain & Web3', href: '/services/blockchain', icon: Hexagon, description: 'Decentralized applications' },
            { name: 'IoT Solutions', href: '/services/iot', icon: Radio, description: 'Connected devices' },
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
          category: 'E-Commerce Solutions',
          icon: ShoppingCart,
          description: 'Complete online store solutions',
          items: [
            { name: 'Shopify Development', href: '/solutions/ecommerce/shopify', icon: ShoppingBag, description: 'Custom Shopify stores' },
            { name: 'WooCommerce Solutions', href: '/services/woocommerce-website-development', icon: ShoppingCart, description: 'WordPress e-commerce' },
            { name: 'Magento Development', href: '/services/magento-development', icon: Box, description: 'Enterprise e-commerce' },
            { name: 'Custom E-Commerce', href: '/services/e-commerce-website-design', icon: Code, description: 'Bespoke online stores' },
            { name: 'Payment Integration', href: '/solutions/ecommerce/payments', icon: Lock, description: 'Stripe, PayPal & more' },
          ]
        },
        {
          category: 'Enterprise Solutions',
          icon: Building2,
          description: 'Scalable business software',
          items: [
            { name: 'Custom Software Development', href: '/solutions/custom-software', icon: Code, description: 'Tailored applications' },
            { name: 'SaaS Development', href: '/solutions/saas', icon: Cloud, description: 'Subscription platforms' },
            { name: 'Legacy Modernization', href: '/solutions/legacy', icon: RefreshCw, description: 'Update legacy systems' },
            { name: 'Enterprise Applications', href: '/solutions/enterprise', icon: Factory, description: 'Large-scale solutions' },
            { name: 'API Development', href: '/solutions/api', icon: Plug, description: 'RESTful & GraphQL APIs' },
          ]
        },
        {
          category: 'Digital Transformation',
          icon: Rocket,
          description: 'Modernize your business',
          items: [
            { name: 'Business Automation', href: '/solutions/automation', icon: Workflow, description: 'RPA & process automation' },
            { name: 'Digital Strategy', href: '/solutions/digital-transformation', icon: Target, description: 'Technology roadmaps' },
            { name: 'Data Analytics & BI', href: '/solutions/analytics', icon: LineChart, description: 'Business intelligence' },
            { name: 'System Integration', href: '/solutions/integration', icon: Link2, description: 'Connect your systems' },
          ]
        },
        {
          category: 'Security & Support',
          icon: Shield,
          description: 'Protect and maintain your assets',
          items: [
            { name: 'Website Security', href: '/solutions/security', icon: Shield, description: 'Threat protection' },
            { name: 'Hacked Site Recovery', href: '/services/fix-your-hacked-website-immediately', icon: Wrench, description: 'Immediate fixes' },
            { name: 'Maintenance Packages', href: '/solutions/maintenance', icon: Settings, description: 'Ongoing support' },
            { name: 'Performance Monitoring', href: '/solutions/monitoring', icon: Activity, description: 'Uptime & alerts' },
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
          category: 'Insights',
          icon: Newspaper,
          description: 'Learn from our expertise',
          items: [
            { name: 'Blog', href: '/blog', icon: Newspaper, description: 'Latest articles & insights' },
            { name: 'Case Studies', href: '/resources/case-studies', icon: FileText, description: 'Client success stories' },
            { name: 'Tech Trends', href: '/resources/trends', icon: TrendingUp, description: 'Industry insights' },
            { name: 'Guides', href: '/resources/guides', icon: BookOpen, description: 'In-depth resources' },
          ]
        },
        {
          category: 'Learning',
          icon: GraduationCap,
          description: 'Expand your knowledge',
          items: [
            { name: 'Tutorials', href: '/resources/tutorials', icon: Video, description: 'Step-by-step guides' },
            { name: 'Documentation', href: '/docs', icon: FileText, description: 'Technical documentation' },
            { name: 'Webinars', href: '/resources/webinars', icon: Users, description: 'Live & recorded sessions' },
            { name: 'Glossary', href: '/resources/glossary', icon: BookOpen, description: 'Tech terms explained' },
          ]
        },
        {
          category: 'Support',
          icon: HeadphonesIcon,
          description: 'Get help when needed',
          items: [
            { name: 'FAQ', href: '/faq', icon: HelpCircle, description: 'Common questions' },
            { name: 'Testimonials', href: '/testimonials', icon: MessageSquare, description: 'Client reviews' },
            { name: 'Contact Support', href: '/contact', icon: Mail, description: 'Get in touch' },
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
            { name: 'FAQ', href: '/faq', icon: HelpCircle, description: 'Frequently asked questions' },
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
