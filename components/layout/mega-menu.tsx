'use client'

import Link from 'next/link'
import { 
  Globe, Smartphone, Cloud, Brain, Palette, Building2,
  Code, ShoppingCart, Blocks, Database, Lock, Zap,
  Cpu, Search, Mail, MessageSquare, BarChart, Users,
  Repeat, Package, FileText, Gauge, Server, Shield
} from 'lucide-react'

const services = [
  {
    category: 'Web Development',
    icon: Globe,
    items: [
      { name: 'Custom Web Application', href: '/services/web-development/custom-web-app', icon: Code },
      { name: 'E-commerce Development', href: '/services/web-development/ecommerce', icon: ShoppingCart },
      { name: 'CMS Development', href: '/services/web-development/cms', icon: Blocks },
      { name: 'Progressive Web Apps', href: '/services/web-development/pwa', icon: Smartphone },
      { name: 'API Development', href: '/services/web-development/api', icon: Database },
      { name: 'Web Security', href: '/services/web-development/security', icon: Lock },
      { name: 'Performance Optimization', href: '/services/web-development/performance', icon: Zap },
      { name: 'Microservices Architecture', href: '/services/web-development/microservices', icon: Server },
    ]
  },
  {
    category: 'Mobile Development',
    icon: Smartphone,
    items: [
      { name: 'iOS Development', href: '/services/mobile/ios', icon: Smartphone },
      { name: 'Android Development', href: '/services/mobile/android', icon: Smartphone },
      { name: 'React Native Apps', href: '/services/mobile/react-native', icon: Code },
      { name: 'Flutter Development', href: '/services/mobile/flutter', icon: Code },
      { name: 'Mobile App Design', href: '/services/mobile/design', icon: Palette },
      { name: 'App Store Optimization', href: '/services/mobile/aso', icon: Search },
      { name: 'Mobile Backend', href: '/services/mobile/backend', icon: Server },
      { name: 'Cross-Platform Apps', href: '/services/mobile/cross-platform', icon: Repeat },
    ]
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    items: [
      { name: 'AWS Solutions', href: '/services/cloud/aws', icon: Cloud },
      { name: 'Azure Cloud', href: '/services/cloud/azure', icon: Cloud },
      { name: 'Google Cloud Platform', href: '/services/cloud/gcp', icon: Cloud },
      { name: 'CI/CD Pipeline', href: '/services/cloud/cicd', icon: Repeat },
      { name: 'Docker & Kubernetes', href: '/services/cloud/containers', icon: Package },
      { name: 'Cloud Migration', href: '/services/cloud/migration', icon: Database },
      { name: 'Infrastructure as Code', href: '/services/cloud/iac', icon: FileText },
      { name: 'Cloud Security', href: '/services/cloud/security', icon: Shield },
    ]
  },
  {
    category: 'AI & Machine Learning',
    icon: Brain,
    items: [
      { name: 'Custom AI Solutions', href: '/services/ai/custom', icon: Brain },
      { name: 'Natural Language Processing', href: '/services/ai/nlp', icon: MessageSquare },
      { name: 'Computer Vision', href: '/services/ai/vision', icon: Search },
      { name: 'Chatbot Development', href: '/services/ai/chatbot', icon: MessageSquare },
      { name: 'Predictive Analytics', href: '/services/ai/analytics', icon: BarChart },
      { name: 'AI Integration', href: '/services/ai/integration', icon: Cpu },
      { name: 'Machine Learning Models', href: '/services/ai/ml-models', icon: Database },
      { name: 'AI Automation', href: '/services/ai/automation', icon: Zap },
    ]
  },
  {
    category: 'Design Services',
    icon: Palette,
    items: [
      { name: 'UI/UX Design', href: '/services/design/ui-ux', icon: Palette },
      { name: 'Brand Identity', href: '/services/design/branding', icon: Palette },
      { name: 'Graphic Design', href: '/services/design/graphic', icon: Palette },
      { name: 'Motion Graphics', href: '/services/design/motion', icon: Palette },
      { name: 'Design System', href: '/services/design/design-system', icon: Blocks },
      { name: 'Prototyping', href: '/services/design/prototyping', icon: Blocks },
      { name: 'User Research', href: '/services/design/research', icon: Users },
      { name: 'Accessibility Design', href: '/services/design/accessibility', icon: Users },
    ]
  },
  {
    category: 'Enterprise Solutions',
    icon: Building2,
    items: [
      { name: 'ERP Systems', href: '/services/enterprise/erp', icon: Building2 },
      { name: 'CRM Development', href: '/services/enterprise/crm', icon: Users },
      { name: 'Business Intelligence', href: '/services/enterprise/bi', icon: BarChart },
      { name: 'Enterprise Integration', href: '/services/enterprise/integration', icon: Repeat },
      { name: 'Workflow Automation', href: '/services/enterprise/automation', icon: Zap },
      { name: 'Data Analytics', href: '/services/enterprise/analytics', icon: BarChart },
      { name: 'Digital Transformation', href: '/services/enterprise/transformation', icon: Cpu },
      { name: 'Performance Monitoring', href: '/services/enterprise/monitoring', icon: Gauge },
    ]
  },
]

export function MegaMenu() {
  return (
    <div className="absolute top-full left-0 w-full bg-background border-t border-border shadow-2xl">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((category) => (
            <div key={category.category}>
              <div className="flex items-center gap-2 mb-4">
                <category.icon className="w-5 h-5 text-brand" />
                <h3 className="font-bold text-sm text-foreground">
                  {category.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-brand transition-colors group"
                    >
                      <item.icon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Can't find what you're looking for?
          </p>
          <Link
            href="/contact"
            className="inline-flex h-10 px-6 bg-brand text-white rounded-lg font-medium hover:bg-brand-light transition-colors"
          >
            Tell Us Your Requirement
          </Link>
        </div>
      </div>
    </div>
  )
}
