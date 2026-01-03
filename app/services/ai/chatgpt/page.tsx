import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Brain, 
  MessageSquare, 
  Sparkles, 
  Shield, 
  Zap, 
  Code,
  ArrowRight,
  CheckCircle2,
  Clock,
  TrendingUp,
  Database,
  Workflow,
  Search,
  BookOpen
} from 'lucide-react'
import { cn } from '@/lib/utils'
import TechShowcase from '@/components/animations/tech-showcase'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { CTASection } from '@/components/sections/cta-section'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'

export const metadata: Metadata = {
  title: 'ChatGPT & LLM Integration Services | OpenAI API Development',
  description: 'Professional ChatGPT and Large Language Model integration services. Build AI-powered chatbots, content generation, semantic search, and intelligent automation with OpenAI GPT-4.',
  keywords: 'ChatGPT integration, OpenAI API, GPT-4, LLM development, AI chatbot, RAG system, embeddings, fine-tuning, prompt engineering, AI automation',
  openGraph: {
    title: 'ChatGPT & LLM Integration Services | AI-Powered Applications',
    description: 'Integrate GPT-4 and other LLMs into your product. Build intelligent chatbots, automation, and AI-powered features.',
    type: 'website',
  }
}

export default function ChatGPTPage() {
  const projects = getFeaturedPortfolio(6)
  const technologies = getTechnologies()
  const testimonials = getFeaturedTestimonials(6)

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/ai" className="hover:text-foreground transition-colors">AI Services</Link>
            <span>/</span>
            <span className="text-foreground font-medium">ChatGPT & LLM Integration</span>
          </nav>
        </div>
      </section>

      {/* Hero Section - Modern Gradient Design */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950/20 dark:via-teal-950/20 dark:to-cyan-950/20" />
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] bg-[size:32px_32px]" />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium">
                🤖 AI & Machine Learning
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                ChatGPT & LLM Integration
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Harness the power of GPT-4 and other Large Language Models. Build intelligent chatbots, automate content creation, and add AI superpowers to your product.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-emerald-600">10x</div>
                  <div className="text-sm text-muted-foreground">Faster Support</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-teal-600">95%</div>
                  <div className="text-sm text-muted-foreground">Accuracy</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-cyan-600">24/7</div>
                  <div className="text-sm text-muted-foreground">Availability</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Add AI to Your Product
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="#use-cases"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 rounded-lg font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-all duration-200"
                >
                  View Use Cases
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
                <Image
                  src="https://picsum.photos/800/600?random=chatgpt"
                  alt="ChatGPT and OpenAI GPT-4 Integration"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-white/90 dark:bg-black/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg border border-white/20">
                  <div className="flex items-center space-x-2">
                    <Brain className="w-5 h-5 text-emerald-500 animate-pulse" />
                    <span className="font-semibold text-sm">GPT-4 Powered</span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-4 bg-white dark:bg-gray-900 px-6 py-3 rounded-full shadow-xl border border-gray-200 dark:border-gray-800">
                <Brain className="w-6 h-6 text-emerald-600" />
                <MessageSquare className="w-6 h-6 text-teal-600" />
                <Sparkles className="w-6 h-6 text-cyan-600" />
                <Search className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section - Magazine Layout */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          {/* Layout 1: Diagonal Split */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://picsum.photos/600/400?random=gpt4-api"
                  alt="OpenAI GPT-4 API Integration"
                  width={600}
                  height={400}
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">GPT-4 API</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:pl-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Build with GPT-4 and OpenAI Models</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                GPT-4 is the most capable AI model available, capable of understanding complex instructions, generating human-like text, analyzing images, and solving problems across domains. We integrate OpenAI APIs into your product for customer support, content creation, data analysis, and more.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From simple chatbots to sophisticated RAG (Retrieval-Augmented Generation) systems that query your data, we build custom AI solutions tailored to your business needs. Your AI assistant can answer questions, generate content, automate workflows, and provide insights 24/7.
              </p>
            </div>
          </div>

          {/* Layout 2: Reverse Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16 items-center">
            <div className="lg:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">RAG Systems: Chat with Your Data</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Retrieval-Augmented Generation (RAG) combines GPT with your company's knowledge base. Upload documents, connect databases, and let AI answer questions using your specific data - not just general knowledge.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We implement vector databases (Pinecone, Weaviate, Chroma), embeddings for semantic search, and prompt engineering for accurate responses. Perfect for internal knowledge bases, customer support, and research tools.
              </p>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://picsum.photos/600/400?random=rag-system"
                  alt="Retrieval-Augmented Generation System"
                  width={600}
                  height={400}
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">RAG Architecture</p>
                </div>
              </div>
            </div>
          </div>

          {/* Layout 3: Full-Width Stats */}
          <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-emerald-100">AI Integrations Built</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">90%</div>
                <div className="text-emerald-100">Support Queries Automated</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50ms</div>
                <div className="text-emerald-100">Average Response Time</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-emerald-100">AI Availability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - Asymmetric Bento Grid */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ChatGPT Integration Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete AI solutions from chatbots to complex RAG systems and workflow automation
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            {/* Large Feature - Spans 8 columns */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <MessageSquare className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Custom AI Chatbots & Assistants</h3>
                <p className="text-emerald-100 mb-4 text-lg leading-relaxed">
                  Build intelligent chatbots powered by GPT-4 for customer support, sales, onboarding, and internal tools. Fine-tune on your data, implement conversation memory, handle multi-turn dialogues, and integrate with your CRM, ticketing system, or knowledge base.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Conversation Memory</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Multi-Language</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">CRM Integration</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tall Feature - 4 columns, 2 rows */}
            <div className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-24 translate-y-24 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10 h-full flex flex-col">
                <Search className="w-12 h-12 mb-4 group-hover:rotate-12 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">RAG & Semantic Search</h3>
                <p className="text-teal-100 mb-4 leading-relaxed flex-grow">
                  Implement Retrieval-Augmented Generation to let AI answer questions using your documents, databases, and knowledge bases. Vector embeddings, semantic search with Pinecone/Weaviate, and accurate source citations.
                </p>
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Vector DB</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Embeddings</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Source Citations</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Sparkles className="w-10 h-10 mb-3 group-hover:rotate-180 transition-transform duration-500" />
              <h3 className="text-xl font-bold mb-2">Content Generation</h3>
              <p className="text-cyan-100 text-sm leading-relaxed">
                Automate blog posts, product descriptions, emails, and marketing copy
              </p>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Code className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Code Generation & Analysis</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Generate code, explain complex logic, and debug applications with AI
              </p>
            </div>

            {/* Large Feature - Spans 8 columns */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <Workflow className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">AI Workflow Automation</h3>
                <p className="text-purple-100 mb-4 text-lg leading-relaxed">
                  Automate business processes with AI agents that can read emails, extract data, classify documents, route tickets, generate responses, and make decisions. Chain multiple AI calls with LangChain for complex workflows.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Email Processing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Document Classification</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Multi-Step Agents</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 to-pink-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Database className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Data Analysis & Insights</h3>
              <p className="text-pink-100 text-sm leading-relaxed">
                Analyze data, generate reports, and extract insights with natural language
              </p>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-500 to-red-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <BookOpen className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Fine-Tuning & Customization</h3>
              <p className="text-red-100 text-sm leading-relaxed">
                Fine-tune GPT models on your data for domain-specific performance
              </p>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Shield className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Security & Compliance</h3>
              <p className="text-orange-100 text-sm leading-relaxed">
                GDPR-compliant, data encryption, and content moderation built-in
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <TechShowcase 
            technologies={technologies}
            title="AI & LLM Technology Stack"
            subtitle="OpenAI models, vector databases, and frameworks we use to build intelligent AI applications"
            filterSlugs={[
              'openai', 'python', 'typescript', 'nodejs', 'langchain',
              'pinecone', 'weaviate', 'postgresql', 'redis', 'react'
            ]}
            showStats={true}
          />
        </div>
      </section>

      {/* Use Cases - Card Deck Style */}
      <section id="use-cases" className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ChatGPT Integration Use Cases</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world applications where GPT-4 delivers transformative results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform opacity-40" />
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                <MessageSquare className="w-10 h-10 text-emerald-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Customer Support Automation</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  AI chatbots that answer 90% of customer questions instantly, escalate complex issues to humans, and learn from interactions.
                </p>
                <div className="flex items-center text-sm text-emerald-600 font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform opacity-40" />
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                <BookOpen className="w-10 h-10 text-teal-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Internal Knowledge Base</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  RAG system that lets employees ask questions and get instant answers from company docs, policies, and documentation.
                </p>
                <div className="flex items-center text-sm text-teal-600 font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform opacity-40" />
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                <Sparkles className="w-10 h-10 text-cyan-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Content Creation at Scale</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Generate blog posts, product descriptions, social media content, and marketing copy in seconds with your brand voice.
                </p>
                <div className="flex items-center text-sm text-cyan-600 font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform opacity-40" />
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                <Code className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Developer Productivity Tools</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  AI pair programming, code review automation, documentation generation, and bug detection powered by GPT-4.
                </p>
                <div className="flex items-center text-sm text-blue-600 font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process Timeline */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Integration Implementation Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to production AI assistant in 4-8 weeks
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Use Case Discovery & Data Assessment',
                description: 'Define AI objectives, identify data sources (docs, databases, APIs), evaluate data quality, and design conversation flows. Create prompts and test with real queries.',
                duration: '1 week',
                icon: Brain
              },
              {
                step: '02',
                title: 'RAG System & Vector Database Setup',
                description: 'Implement vector database (Pinecone, Weaviate), generate embeddings, build semantic search, and test retrieval accuracy with your data.',
                duration: '1-2 weeks',
                icon: Search
              },
              {
                step: '03',
                title: 'ChatGPT Integration & Prompt Engineering',
                description: 'Integrate OpenAI API, optimize prompts for accuracy, implement conversation memory, add guardrails for safety, and handle edge cases.',
                duration: '2-3 weeks',
                icon: MessageSquare
              },
              {
                step: '04',
                title: 'Fine-Tuning & Performance Optimization',
                description: 'Fine-tune models on your data if needed, optimize response times, reduce API costs with caching, and improve answer accuracy with feedback loops.',
                duration: '1-2 weeks',
                icon: TrendingUp
              },
              {
                step: '05',
                title: 'Integration & User Interface',
                description: 'Build chat UI (web, mobile, Slack, Teams), integrate with your CRM/ticketing system, add analytics tracking, and implement user feedback collection.',
                duration: '1-2 weeks',
                icon: Code
              },
              {
                step: '06',
                title: 'Testing, Launch & Continuous Improvement',
                description: 'Beta testing with real users, monitor AI responses for quality, analyze user feedback, retrain models, and continuously improve based on usage patterns.',
                duration: 'Ongoing',
                icon: Sparkles
              }
            ].map((item, index) => (
              <div key={index} className="relative pl-8 pb-12 border-l-2 border-emerald-600 last:border-0 last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 bg-emerald-600 rounded-full -translate-x-[9px]" />
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow ml-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl font-bold text-emerald-600">{item.step}</div>
                      <div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground flex items-center mt-1">
                          <Clock className="w-4 h-4 mr-1" />
                          {item.duration}
                        </p>
                      </div>
                    </div>
                    <item.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Slider */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Projects We've Built
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how we've integrated ChatGPT and LLMs to transform businesses
            </p>
          </div>
          
          <PortfolioSlider 
            projects={projects}
            technologies={technologies}
            autoplay={true}
            showNavigation={true}
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our AI Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from companies that integrated AI with our help
            </p>
          </div>
          
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {[
                {
                  question: 'How much does OpenAI API cost?',
                  answer: 'GPT-4 costs $0.03 per 1K input tokens and $0.06 per 1K output tokens. GPT-3.5-turbo is much cheaper at $0.0015 per 1K tokens. A typical chatbot conversation costs $0.01-0.05. Most small businesses spend $50-500/month on API costs.'
                },
                {
                  question: 'Can ChatGPT access my company data securely?',
                  answer: 'Yes! We implement RAG (Retrieval-Augmented Generation) where your data stays in your secure vector database. AI only accesses what you authorize. OpenAI does NOT use your API data for training. Enterprise plans include data residency and compliance certifications.'
                },
                {
                  question: 'What is RAG and why do I need it?',
                  answer: 'RAG (Retrieval-Augmented Generation) lets AI answer questions using YOUR specific data - not just general knowledge. It retrieves relevant documents from your knowledge base and uses them as context for GPT. Essential for accurate, source-cited answers about your business.'
                },
                {
                  question: 'How accurate is ChatGPT for customer support?',
                  answer: 'With proper RAG implementation and prompt engineering, accuracy is 90-95% for well-documented topics. The AI will say "I don\'t know" when uncertain instead of hallucinating. We implement human-in-the-loop escalation for complex or sensitive queries.'
                },
                {
                  question: 'Can I fine-tune GPT on my data?',
                  answer: 'Yes! Fine-tuning is available for GPT-3.5-turbo and GPT-4. Best for teaching writing style, domain terminology, or specific task formats. However, for most use cases, RAG with good prompts is faster, cheaper, and more flexible than fine-tuning.'
                },
                {
                  question: 'How long does ChatGPT integration take?',
                  answer: 'Simple chatbot: 2-4 weeks. RAG system with custom knowledge base: 4-8 weeks. Complex multi-agent automation: 8-12 weeks. Implementation time depends on data preparation, integration complexity, and testing requirements.'
                }
              ].map((faq, index) => (
                <details key={index} className="group bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-muted/50 transition-colors">
                    <span className="font-semibold text-lg">{faq.question}</span>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Add AI Intelligence to Your Product?"
        description="Let's integrate ChatGPT and GPT-4 to automate customer support, generate content, build intelligent search, and add AI superpowers to your application."
        primaryButtonText="Start AI Integration"
        primaryButtonLink="/contact"
        secondaryButtonText="View AI Case Studies"
        secondaryButtonLink="/resources/case-studies"
        showContactInfo={true}
      />
    </div>
  )
}
