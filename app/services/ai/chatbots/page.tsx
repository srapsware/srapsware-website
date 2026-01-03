import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  MessageCircle, 
  Bot, 
  Zap, 
  Shield, 
  Globe, 
  Clock,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Workflow,
  BarChart3,
  Languages,
  Phone
} from 'lucide-react'
import { cn } from '@/lib/utils'
import TechShowcase from '@/components/animations/tech-showcase'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { CTASection } from '@/components/sections/cta-section'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'

export const metadata: Metadata = {
  title: 'AI Chatbot Development Services | Custom Chatbot Solutions',
  description: 'Professional AI chatbot development for customer support, sales, and engagement. Build intelligent conversational AI with NLP, multi-language support, and 24/7 availability.',
  keywords: 'AI chatbot development, conversational AI, customer support bot, sales chatbot, NLP chatbot, voice bot, WhatsApp bot, Facebook Messenger bot, chatbot integration',
  openGraph: {
    title: 'AI Chatbot Development Services | Conversational AI Solutions',
    description: 'Build intelligent chatbots that understand context, speak multiple languages, and provide 24/7 customer support.',
    type: 'website',
  }
}

export default function ChatbotsPage() {
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
            <span className="text-foreground font-medium">AI Chatbot Development</span>
          </nav>
        </div>
      </section>

      {/* Hero Section - Modern Gradient Design */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 dark:from-violet-950/20 dark:via-purple-950/20 dark:to-fuchsia-950/20" />
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] bg-[size:32px_32px]" />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1.5 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full text-sm font-medium">
                🤖 AI & Automation
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                AI Chatbot Development
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Build intelligent conversational AI that understands intent, speaks 100+ languages, and provides instant 24/7 customer support at scale.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-violet-600">90%</div>
                  <div className="text-sm text-muted-foreground">Automated</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-purple-600">24/7</div>
                  <div className="text-sm text-muted-foreground">Available</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-fuchsia-600">100+</div>
                  <div className="text-sm text-muted-foreground">Languages</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Build Your Chatbot
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="#demo"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-violet-600 text-violet-600 dark:text-violet-400 rounded-lg font-semibold hover:bg-violet-50 dark:hover:bg-violet-950/30 transition-all duration-200"
                >
                  See Live Demo
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
                <Image
                  src="https://picsum.photos/800/600?random=chatbot"
                  alt="AI Chatbot Interface with Natural Language Processing"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-white/90 dark:bg-black/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg border border-white/20">
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5 text-violet-500 animate-pulse" />
                    <span className="font-semibold text-sm">AI-Powered</span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-4 bg-white dark:bg-gray-900 px-6 py-3 rounded-full shadow-xl border border-gray-200 dark:border-gray-800">
                <Bot className="w-6 h-6 text-violet-600" />
                <MessageCircle className="w-6 h-6 text-purple-600" />
                <Languages className="w-6 h-6 text-fuchsia-600" />
                <Globe className="w-6 h-6 text-pink-600" />
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
                  src="https://picsum.photos/600/400?random=conversational-ai"
                  alt="Conversational AI Chat Interface"
                  width={600}
                  height={400}
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Natural Conversations</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:pl-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Intelligent Conversational AI</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Modern AI chatbots go beyond scripted responses. Using natural language processing (NLP), machine learning, and large language models, they understand intent, context, and sentiment - providing human-like conversations at scale.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We build custom chatbots for websites, mobile apps, WhatsApp, Facebook Messenger, Slack, and voice assistants. Your bot learns from interactions, improves over time, and seamlessly escalates complex queries to human agents.
              </p>
            </div>
          </div>

          {/* Layout 2: Reverse Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16 items-center">
            <div className="lg:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">24/7 Customer Support Automation</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Reduce support costs by 80% while improving response times from hours to seconds. AI chatbots handle FAQs, troubleshooting, order tracking, account management, and appointment booking - never sleeping, never taking breaks.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Integrate with your CRM, ticketing system, and knowledge base. Track analytics, measure CSAT scores, and continuously improve chatbot performance based on real user conversations.
              </p>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://picsum.photos/600/400?random=customer-support"
                  alt="24/7 Customer Support Chatbot"
                  width={600}
                  height={400}
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Always Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Layout 3: Full-Width Stats */}
          <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">250+</div>
                <div className="text-violet-100">Chatbots Built</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5M+</div>
                <div className="text-violet-100">Conversations Handled</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">92%</div>
                <div className="text-violet-100">Customer Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">80%</div>
                <div className="text-violet-100">Cost Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - Asymmetric Bento Grid */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Chatbot Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade conversational AI with NLP, multi-channel deployment, and intelligent automation
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            {/* Large Feature - Spans 8 columns */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500 to-violet-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <Bot className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Natural Language Understanding (NLU)</h3>
                <p className="text-violet-100 mb-4 text-lg leading-relaxed">
                  Advanced NLP powered by transformers (BERT, GPT) understands user intent, entities, context, and sentiment. Handles typos, slang, multiple languages, and complex queries. Learns from conversations to improve accuracy over time.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Intent Recognition</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Entity Extraction</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Sentiment Analysis</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tall Feature - 4 columns, 2 rows */}
            <div className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-24 translate-y-24 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10 h-full flex flex-col">
                <Globe className="w-12 h-12 mb-4 group-hover:rotate-12 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Multi-Channel Deployment</h3>
                <p className="text-purple-100 mb-4 leading-relaxed flex-grow">
                  Deploy the same chatbot across web, mobile apps, WhatsApp, Facebook Messenger, Telegram, Slack, Microsoft Teams, SMS, and voice assistants (Alexa, Google Assistant). One bot, every platform.
                </p>
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Website Widget</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">WhatsApp/Messenger</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Voice Assistants</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-fuchsia-500 to-fuchsia-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Languages className="w-10 h-10 mb-3 group-hover:rotate-180 transition-transform duration-500" />
              <h3 className="text-xl font-bold mb-2">100+ Languages Supported</h3>
              <p className="text-fuchsia-100 text-sm leading-relaxed">
                Auto-translate conversations, detect language, and respond in user's native language
              </p>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 to-pink-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Workflow className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Smart Escalation to Humans</h3>
              <p className="text-pink-100 text-sm leading-relaxed">
                Seamless handoff to live agents with full conversation context
              </p>
            </div>

            {/* Large Feature - Spans 8 columns */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <BarChart3 className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Analytics & Continuous Improvement</h3>
                <p className="text-blue-100 mb-4 text-lg leading-relaxed">
                  Track conversation metrics, user satisfaction (CSAT), resolution rate, and escalation patterns. AI learns from every interaction, identifies knowledge gaps, and suggests improvements. A/B test different responses to optimize performance.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Real-time Dashboards</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">ML-Powered Insights</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Auto-Optimization</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 to-green-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Users className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Personalization & Context</h3>
              <p className="text-green-100 text-sm leading-relaxed">
                Remember user preferences, history, and provide personalized responses
              </p>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Phone className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Voice Chatbots (IVR)</h3>
              <p className="text-orange-100 text-sm leading-relaxed">
                Speech-to-text and text-to-speech for phone-based AI assistants
              </p>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-500 to-red-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Shield className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
              <p className="text-red-100 text-sm leading-relaxed">
                GDPR compliant, data encryption, PII detection, and access controls
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
            title="Chatbot Technology Stack"
            subtitle="NLP frameworks, conversational AI platforms, and integration tools we use"
            filterSlugs={[
              'python', 'nodejs', 'typescript', 'dialogflow', 'rasa',
              'openai', 'langchain', 'tensorflow', 'pytorch', 'react'
            ]}
            showStats={true}
          />
        </div>
      </section>

      {/* Use Cases - Card Deck Style */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Chatbot Use Cases Across Industries</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Intelligent automation for customer support, sales, HR, and more
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform opacity-40" />
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                <MessageCircle className="w-10 h-10 text-violet-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Customer Support</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Answer FAQs, troubleshoot issues, track orders, reset passwords, and resolve 90% of tier-1 support queries instantly.
                </p>
                <div className="flex items-center text-sm text-violet-600 font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-fuchsia-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-fuchsia-600 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform opacity-40" />
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                <TrendingUp className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Sales & Lead Generation</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Qualify leads, book demos, answer product questions, and guide prospects through the sales funnel 24/7.
                </p>
                <div className="flex items-center text-sm text-purple-600 font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600 to-pink-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600 to-pink-600 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform opacity-40" />
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                <Clock className="w-10 h-10 text-fuchsia-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Appointment Booking</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Schedule appointments, send reminders, handle cancellations, and sync with calendars automatically.
                </p>
                <div className="flex items-center text-sm text-fuchsia-600 font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-red-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-red-600 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform opacity-40" />
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                <Users className="w-10 h-10 text-pink-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">HR & Employee Assistance</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Answer HR policies, manage leave requests, onboard new employees, and provide IT support internally.
                </p>
                <div className="flex items-center text-sm text-pink-600 font-semibold">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Chatbot Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From conversation design to production deployment in 4-8 weeks
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Discovery & Conversation Design',
                description: 'Define use cases, map conversation flows, identify intents and entities, design personality/tone, and create decision trees for complex scenarios.',
                duration: '1 week',
                icon: Bot
              },
              {
                step: '02',
                title: 'NLP Training & Intent Recognition',
                description: 'Build training dataset with example phrases, train NLP model for intent classification, entity extraction, and test accuracy with real queries.',
                duration: '1-2 weeks',
                icon: MessageCircle
              },
              {
                step: '03',
                title: 'Integration & Backend Development',
                description: 'Connect to CRM, ticketing system, knowledge base, payment gateway, and APIs. Implement business logic for complex workflows and data retrieval.',
                duration: '1-2 weeks',
                icon: Workflow
              },
              {
                step: '04',
                title: 'Multi-Channel Deployment',
                description: 'Deploy chatbot to website widget, WhatsApp Business API, Facebook Messenger, Slack, or voice assistants. Customize UI for each platform.',
                duration: '1 week',
                icon: Globe
              },
              {
                step: '05',
                title: 'Testing & Quality Assurance',
                description: 'Test conversation flows, edge cases, escalation logic, and multi-language support. Conduct user acceptance testing (UAT) with beta users.',
                duration: '3-5 days',
                icon: Shield
              },
              {
                step: '06',
                title: 'Launch & Continuous Optimization',
                description: 'Production launch with gradual rollout, monitor analytics, collect user feedback, retrain NLP model, and add new intents based on real usage.',
                duration: 'Ongoing',
                icon: TrendingUp
              }
            ].map((item, index) => (
              <div key={index} className="relative pl-8 pb-12 border-l-2 border-violet-600 last:border-0 last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 bg-violet-600 rounded-full -translate-x-[9px]" />
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow ml-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl font-bold text-violet-600">{item.step}</div>
                      <div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground flex items-center mt-1">
                          <Clock className="w-4 h-4 mr-1" />
                          {item.duration}
                        </p>
                      </div>
                    </div>
                    <item.icon className="w-8 h-8 text-violet-600" />
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
              Chatbot Projects We've Built
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how we've helped businesses automate customer interactions with AI
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
              What Our Chatbot Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from businesses that automated support with our chatbots
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
                  question: 'How accurate are AI chatbots?',
                  answer: 'With proper training, modern NLP-powered chatbots achieve 85-95% accuracy for well-defined use cases. They improve over time by learning from conversations. When uncertain, they ask clarifying questions or escalate to humans rather than guessing.'
                },
                {
                  question: 'Can chatbots handle multiple languages?',
                  answer: 'Yes! We build multilingual chatbots that detect user language automatically and respond in 100+ languages. They can translate conversations in real-time or use language-specific NLP models for better accuracy in target markets.'
                },
                {
                  question: 'How do chatbots integrate with existing systems?',
                  answer: 'Chatbots connect to your CRM (Salesforce, HubSpot), ticketing systems (Zendesk, Freshdesk), knowledge bases, databases, and APIs via webhooks and REST/GraphQL APIs. We handle all integration work to ensure seamless data flow.'
                },
                {
                  question: 'What platforms can chatbots work on?',
                  answer: 'We deploy chatbots on websites (embedded widget), mobile apps (React Native, Flutter), messaging platforms (WhatsApp Business, Facebook Messenger, Telegram, Slack, Teams), SMS, voice assistants (Alexa, Google Assistant), and phone systems (IVR).'
                },
                {
                  question: 'How long does chatbot development take?',
                  answer: 'Simple FAQ bot: 2-4 weeks. Advanced conversational AI with integrations: 4-8 weeks. Complex enterprise bot with custom NLP: 8-12 weeks. Timeline depends on conversation complexity, integrations, and training data availability.'
                },
                {
                  question: 'How much does a chatbot cost?',
                  answer: 'Basic chatbot: $5,000-15,000. Advanced AI chatbot with NLP: $15,000-40,000. Enterprise solution with custom ML: $40,000-100,000+. Monthly hosting and maintenance: $200-2,000 depending on usage volume and infrastructure.'
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
        title="Ready to Automate Customer Support with AI?"
        description="Let's build an intelligent chatbot that understands context, speaks multiple languages, and provides 24/7 support - reducing costs by 80% while improving customer satisfaction."
        primaryButtonText="Build Your Chatbot"
        primaryButtonLink="/contact"
        secondaryButtonText="See Live Demo"
        secondaryButtonLink="#demo"
        showContactInfo={true}
      />
    </div>
  )
}
