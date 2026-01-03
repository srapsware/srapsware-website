import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { ProcessSteps } from '@/components/sections/process-steps'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { CTASection } from '@/components/sections/cta-section'
import TechShowcase from '@/components/animations/tech-showcase'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'
import { Brain, Cpu, TrendingUp, Eye, Database, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI & Machine Learning Development | ML Models & AI Solutions | Srapsware',
  description: 'Expert AI and machine learning development services. Build intelligent applications with neural networks, NLP, computer vision, and predictive analytics.',
  openGraph: {
    title: 'AI & Machine Learning Development Services',
    description: 'Intelligent solutions powered by machine learning and AI',
    type: 'website',
  }
}

export default function AIMachineLearningPage() {
  const portfolioProjects = getFeaturedPortfolio()
  const technologies = getTechnologies()
  const testimonials = getFeaturedTestimonials()

  const processSteps = [
    {
      number: 1,
      title: 'Problem Discovery',
      description: 'Define business problem, identify ML opportunities, assess data availability, and determine success metrics.',
      duration: '1-2 weeks',
      icon: 'Search'
    },
    {
      number: 2,
      title: 'Data Collection & Analysis',
      description: 'Gather datasets, perform exploratory data analysis, identify patterns, handle missing data, and feature engineering.',
      duration: '2-3 weeks',
      icon: 'Database'
    },
    {
      number: 3,
      title: 'Model Development',
      description: 'Select algorithms, train models, hyperparameter tuning, cross-validation, and performance optimization.',
      duration: '4-6 weeks',
      icon: 'Brain'
    },
    {
      number: 4,
      title: 'Model Evaluation',
      description: 'Test accuracy, precision, recall, F1 score. Validate on unseen data, check for bias, and performance metrics.',
      duration: '1-2 weeks',
      icon: 'Activity'
    },
    {
      number: 5,
      title: 'Deployment & Integration',
      description: 'Deploy to production, API integration, model serving with TensorFlow Serving or TorchServe, monitoring setup.',
      duration: '2-3 weeks',
      icon: 'Upload'
    },
    {
      number: 6,
      title: 'Monitoring & Retraining',
      description: 'Track model performance, detect drift, retrain with new data, A/B testing, continuous improvement.',
      duration: 'Ongoing',
      icon: 'RefreshCw'
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <PageHero
        badge="AI & Machine Learning"
        title="Intelligent AI & ML Solutions"
        description="Build next-generation applications powered by artificial intelligence and machine learning. From predictive analytics to computer vision, we turn data into intelligent decisions."
        ctaPrimary={{
          text: 'Start AI Project',
          href: '/contact'
        }}
        ctaSecondary={{
          text: 'Explore AI Solutions',
          href: '/portfolio'
        }}
      />

      {/* Overview Section - Creative Magazine Layout */}
      <section className="relative py-32 border-t border-border overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          {/* Dynamic Title */}
          <div className="relative mb-20">
            <div className="absolute -top-10 -right-10 w-32 h-32 border-4 border-purple-500/20 rounded-full hidden lg:block"></div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-foreground">Intelligence That Learns,</span>
              <span className="block mt-2 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                Adapts, and Evolves
              </span>
            </h2>
          </div>

          {/* First Section - Diagonal Split */}
          <div className="relative mb-32">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Large Image - Diagonal Cut */}
              <div className="lg:col-span-7 relative">
                <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-50" 
                       style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}></div>
                  <img 
                    src="https://picsum.photos/seed/ai-neural-network/900/600" 
                    alt="AI & Machine Learning"
                    className="w-full h-full object-cover"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
                  />
                  {/* Floating Badge */}
                  <div className="absolute top-8 right-8 bg-background/90 backdrop-blur-md border border-purple-500/30 rounded-full px-6 py-3 shadow-xl">
                    <span className="text-sm font-bold text-purple-500">AI/ML Specialists</span>
                  </div>
                </div>
              </div>
              
              {/* Text Content - Overlapping */}
              <div className="lg:col-span-5 lg:-ml-20 relative z-10">
                <div className="bg-background/95 backdrop-blur-xl border border-border rounded-3xl p-8 lg:p-10 shadow-2xl">
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mb-6"></div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Turn Data Into Intelligence</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Machine learning and AI transform raw data into actionable insights. We build intelligent systems that predict outcomes, automate decisions, recognize patterns, and learn from experience - helping you stay ahead of the competition.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Section - Reverse Layout */}
          <div className="relative mb-32">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Text Content - Left Side */}
              <div className="lg:col-span-5 relative z-10 order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-pink-500/10 rounded-lg -z-10"></div>
                  <div className="bg-gradient-to-br from-background via-background to-pink-900/5 backdrop-blur-xl border border-border rounded-3xl p-8 lg:p-10 shadow-2xl">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></div>
                      <div className="w-3 h-3 rounded-full bg-pink-500 animate-pulse delay-100"></div>
                      <div className="w-3 h-3 rounded-full bg-rose-500 animate-pulse delay-200"></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">From Theory to Production</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      We don't just train models - we deploy production-ready AI systems. TensorFlow, PyTorch, scikit-learn, and modern MLOps practices ensure your models scale, perform, and continuously improve.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Image Grid - Right Side */}
              <div className="lg:col-span-7 lg:-mr-20 relative order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4 h-[500px]">
                  <div className="row-span-2 rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/deep-learning/400/650" 
                      alt="Deep Learning"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/computer-vision/400/320" 
                      alt="Computer Vision"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/80 to-transparent"></div>
                  </div>
                  <div className="rounded-2xl overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/seed/nlp-ai/400/320" 
                      alt="Natural Language Processing"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tl from-rose-500/80 to-transparent"></div>
                    <div className="absolute bottom-4 right-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-full">
                      NLP Powered
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Section - Full Width Stats */}
          <div className="relative">
            <div className="bg-gradient-to-br from-background via-purple-500/5 to-pink-900/10 rounded-[3rem] overflow-hidden border border-border shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left - Text with Stats */}
                <div className="p-12 lg:p-16 flex flex-col justify-center relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500"></div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                    Accuracy That{' '}
                    <span className="text-purple-500">Drives Results</span>
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Our ML models achieve industry-leading accuracy through careful feature engineering, ensemble methods, and continuous training. From 95%+ classification accuracy to sub-second inference times.
                  </p>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-500 mb-2">95%+</div>
                      <div className="text-sm text-muted-foreground">Model Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-500 mb-2">&lt;100ms</div>
                      <div className="text-sm text-muted-foreground">Inference Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-rose-500 mb-2">24/7</div>
                      <div className="text-sm text-muted-foreground">Model Monitoring</div>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm font-medium">
                      TensorFlow
                    </span>
                    <span className="px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-sm font-medium">
                      PyTorch
                    </span>
                    <span className="px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-full text-sm font-medium">
                      Scikit-learn
                    </span>
                  </div>
                </div>
                
                {/* Right - Large Hero Image */}
                <div className="relative h-[400px] lg:h-auto min-h-[500px]">
                  <img 
                    src="https://picsum.photos/seed/ml-training/700/700" 
                    alt="ML Training"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent lg:from-background/50"></div>
                  
                  {/* Floating Card */}
                  <div className="absolute bottom-8 right-8 bg-background/95 backdrop-blur-xl border border-border rounded-2xl p-6 shadow-2xl max-w-xs hidden lg:block">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                        <Brain className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground mb-1">Production Ready</div>
                        <div className="text-sm text-muted-foreground">Scalable ML infrastructure</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - Bento Grid Layout */}
      <section className="relative py-28 border-t border-border overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(236,72,153,0.05),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm font-semibold text-purple-500 mb-6">
              AI Capabilities
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              What We Build With
              <span className="block text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
                AI & Machine Learning
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Cutting-edge AI solutions for modern business challenges
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Predictive Analytics - Large Featured */}
            <div className="lg:col-span-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-purple-950/40 to-pink-950/40 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 lg:p-12 overflow-hidden group-hover:border-purple-500/40 transition-all duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground">Predictive Analytics</h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    Forecast sales, predict customer churn, anticipate equipment failures. Time series analysis, regression models, and ensemble methods for accurate predictions.
                  </p>
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <img 
                      src="https://picsum.photos/seed/predictive-analytics/700/300" 
                      alt="Predictive Analytics"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-4">
                      <div className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">Time Series</div>
                      <div className="bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">Regression</div>
                      <div className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">Forecasting</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Computer Vision - Tall Card */}
            <div className="lg:col-span-4 lg:row-span-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-blue-950/40 to-cyan-950/40 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 overflow-hidden group-hover:border-blue-500/40 transition-all duration-300">
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Computer Vision</h3>
                  <p className="text-base text-muted-foreground mb-6">
                    Image classification, object detection, facial recognition, OCR. CNNs and transfer learning for visual intelligence.
                  </p>
                  <div className="mt-auto space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-blue-500/5 rounded-lg border border-blue-500/10">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Object Detection</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-500/5 rounded-lg border border-blue-500/10">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span className="text-sm">Image Segmentation</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-500/5 rounded-lg border border-blue-500/10">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-sm">Facial Recognition</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Natural Language Processing */}
            <div className="lg:col-span-4 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-green-950/40 to-emerald-950/40 backdrop-blur-xl border border-green-500/20 rounded-3xl p-6 overflow-hidden group-hover:border-green-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">NLP & Text Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Sentiment analysis, chatbots, text classification, named entity recognition. BERT, GPT, and transformer models for language understanding.
                </p>
              </div>
            </div>

            {/* Recommendation Systems */}
            <div className="lg:col-span-4 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-br from-orange-950/40 to-amber-950/40 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-6 overflow-hidden group-hover:border-orange-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Recommendation Engines</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Personalized recommendations using collaborative filtering, content-based filtering, and hybrid approaches. E-commerce, streaming, content platforms.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-orange-500/10 border border-orange-500/30 rounded text-xs">Collaborative</span>
                  <span className="px-2 py-1 bg-orange-500/10 border border-orange-500/30 rounded text-xs">Content-Based</span>
                  <span className="px-2 py-1 bg-orange-500/10 border border-orange-500/30 rounded text-xs">Hybrid</span>
                </div>
              </div>
            </div>

            {/* Deep Learning & Neural Networks - Wide Card */}
            <div className="lg:col-span-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full bg-gradient-to-r from-indigo-950/40 via-violet-950/40 to-purple-950/40 backdrop-blur-xl border border-indigo-500/20 rounded-3xl overflow-hidden group-hover:border-indigo-500/40 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0 h-full">
                  {/* Deep Learning Side */}
                  <div className="p-8 flex flex-col justify-center border-r border-indigo-500/10">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-2xl flex items-center justify-center mb-6">
                      <Brain className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">Deep Learning</h3>
                    <p className="text-base text-muted-foreground">
                      Neural networks with multiple layers for complex pattern recognition. CNNs, RNNs, GANs, and transformer architectures.
                    </p>
                  </div>
                  
                  {/* AutoML Side */}
                  <div className="relative p-8 flex flex-col justify-center">
                    <div className="absolute inset-0">
                      <img 
                        src="https://picsum.photos/seed/neural-networks/500/400" 
                        alt="Neural Networks"
                        className="w-full h-full object-cover opacity-20"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-950/80 to-purple-950/40"></div>
                    </div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                        <Cpu className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground">AutoML & MLOps</h3>
                      <p className="text-base text-muted-foreground">
                        Automated model selection, hyperparameter tuning, CI/CD for ML models, monitoring, and retraining pipelines.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <TechShowcase 
        technologies={technologies}
        title="AI & ML Technology Stack"
        subtitle="Cutting-edge frameworks and tools for intelligent applications"
        filterSlugs={[
          // ML/AI Frameworks
          'python', 'typescript',
          // Backend
          'nodejs', 'postgresql', 'mongodb', 'redis',
          // Cloud
          'aws', 'docker', 'kubernetes',
          // Frontend for dashboards
          'react', 'nextjs'
        ]}
        showStats={true}
      />

      {/* Process */}
      <ProcessSteps
        title="Our AI Development Process"
        description="From data to deployment"
        steps={processSteps}
      />

      {/* Use Cases - Card Deck Layout */}
      <section className="relative py-32 border-t border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
              <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm font-semibold text-purple-500">
                AI Use Cases
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-purple-500 to-transparent"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              AI Solutions For{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text">
                  Every Industry
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                  <path d="M0 6C50 0 150 12 200 6" stroke="url(#gradient-ai)" strokeWidth="2"/>
                  <defs>
                    <linearGradient id="gradient-ai" x1="0" y1="0" x2="200" y2="0">
                      <stop offset="0%" stopColor="rgb(168, 85, 247)" />
                      <stop offset="50%" stopColor="rgb(236, 72, 153)" />
                      <stop offset="100%" stopColor="rgb(244, 63, 94)" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From healthcare to finance, retail to manufacturing
            </p>
          </div>

          {/* Card Deck */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Predictive Maintenance */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 backdrop-blur-sm border border-purple-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-purple-500/40 transition-all duration-300">
                  <div className="absolute top-4 right-4 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Predictive Maintenance</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Predict equipment failures before they happen. Sensor data analysis, anomaly detection, and time series forecasting reduce downtime by 40%.
                    </p>
                    
                    <div className="relative h-40 rounded-xl overflow-hidden mb-6">
                      <img 
                        src="https://picsum.photos/seed/predictive-maintenance/600/300" 
                        alt="Predictive Maintenance"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/80 to-transparent"></div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs font-medium text-purple-400">
                        IoT Sensors
                      </span>
                      <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs font-medium text-purple-400">
                        Anomaly Detection
                      </span>
                      <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs font-medium text-purple-400">
                        Time Series
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Churn Prediction */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 backdrop-blur-sm border border-blue-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-blue-500/40 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Churn Prediction</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Identify customers at risk of leaving. Classification models analyze behavior patterns to enable proactive retention strategies.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      <div className="relative h-20 rounded-lg overflow-hidden bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-blue-400">Risk Score</span>
                      </div>
                      <div className="relative h-20 rounded-lg overflow-hidden bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-blue-400">Retention</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs font-medium text-blue-400">
                        Classification
                      </span>
                      <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs font-medium text-blue-400">
                        Feature Engineering
                      </span>
                      <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs font-medium text-blue-400">
                        Ensemble Models
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fraud Detection */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 backdrop-blur-sm border border-red-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-red-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-red-500/40 transition-all duration-300">
                  <div className="absolute top-4 left-4 w-32 h-32 bg-red-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Fraud Detection</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      Real-time fraud detection for financial transactions. Anomaly detection algorithms identify suspicious patterns instantly.
                    </p>
                    
                    <div className="relative h-32 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-xl p-4 mb-6 border border-red-500/20">
                      <div className="space-y-2">
                        <div className="h-4 bg-red-500/20 rounded w-3/4"></div>
                        <div className="h-4 bg-red-500/20 rounded w-full"></div>
                        <div className="h-4 bg-red-500/20 rounded w-5/6"></div>
                        <div className="h-4 bg-red-500/20 rounded w-2/3"></div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full text-xs font-medium text-red-400">
                        Real-time Detection
                      </span>
                      <span className="px-3 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full text-xs font-medium text-red-400">
                        Anomaly Detection
                      </span>
                      <span className="px-3 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full text-xs font-medium text-red-400">
                        Pattern Recognition
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Smart Chatbots */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 backdrop-blur-sm border border-green-500/10 rounded-3xl transform translate-x-2 translate-y-2"></div>
                
                <div className="relative bg-background/95 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 lg:p-10 overflow-hidden group-hover:border-green-500/40 transition-all duration-300">
                  <div className="absolute bottom-4 right-4 w-40 h-40 bg-green-500/5 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">Intelligent Chatbots</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      NLP-powered conversational AI for customer support. Understanding intent, context, and sentiment for human-like interactions.
                    </p>
                    
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="aspect-square bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="aspect-square bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-xs font-medium text-green-400">
                        NLP
                      </span>
                      <span className="px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-xs font-medium text-green-400">
                        Intent Recognition
                      </span>
                      <span className="px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-xs font-medium text-green-400">
                        Sentiment Analysis
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      {portfolioProjects.length > 0 && (
        <section className="py-20 border-t border-border bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                AI & ML Projects We've Built
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See our intelligent applications and ML models in action
              </p>
            </div>
            
            <div className="px-8">
              <PortfolioSlider 
                projects={portfolioProjects.slice(0, 6)}
                technologies={technologies}
                autoplay={true}
                showNavigation={true}
              />
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="relative py-28 border-t border-border overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Trusted by businesses for innovative AI solutions
              </p>
            </div>
            
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </section>
      )}

      {/* Final CTA */}
      <CTASection 
        title="Ready to Build AI-Powered Solutions?"
        description="Transform your business with machine learning and artificial intelligence. Get started with a free AI consultation and discover how ML can solve your challenges."
        primaryButtonText="Start AI Project"
        primaryButtonLink="/contact"
        secondaryButtonText="Get Free AI Consultation"
        secondaryButtonLink="/contact"
        showContactInfo={true}
      />
    </main>
  )
}
