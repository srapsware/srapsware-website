import Image from "next/image";
import Link from "next/link";
import "./journey-timeline-styles.css";
import {
  Check,
  Megaphone,
  ListChecks,
  Users,
  Award,
  Rocket,
  Target,
  Clock,
  Shield,
  Zap,
  BookOpen,
  Headphones,
  TrendingUp,
  Code2,
  Globe,
} from "lucide-react";
import AnimatedCounter from "@/components/animations/animated-counter";
import TechShowcase from "@/components/animations/tech-showcase";
import JourneyTimeline from "@/components/animations/journey-timeline/journey-timeline";
import { CTASection } from "@/components/sections/cta-section";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { getSiteSettings, getTechnologies } from "@/lib/content";

export const metadata = {
  title: "About Our Company - Srapsware",
  description:
    "We are more than 15 years old IT company successfully dealing with thousands of clients. Our aim is to deliver powerful result with the desired time.",
};

export default function AboutPage() {
  const settings = getSiteSettings();
  const stats = settings?.stats || {
    projects: "604+",
    clients: "400+",
    team: "30+",
    years: "15+",
  };
  const technologies = getTechnologies();
  
  // Get featured technologies for logo display
  const featuredTechs = technologies
    .filter(tech => tech.featured && tech.active)
    .slice(0, 12);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient relative py-20 md:py-28 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-background to-purple-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.08),transparent_50%)]" />

        {/* Dot Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(71, 128, 199, 0.5) 2px, transparent 2px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Grid Lines */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(71, 128, 199, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(71, 128, 199, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <Breadcrumb items={[{ label: "About Us" }]} className="justify-center" />
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Hello! This is Srapsware
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in-delay">
              A firm that turns ideas into beautiful things.
            </p>
          </div>
        </div>
      </section>

      {/* Who Are We Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Hexagonal Pattern Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-background to-brand/5" />
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='rgba(59,130,246,0.3)' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-brand/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Images */}
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="pt-12">
                  <div className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-2 border-border hover:border-brand/50 transition-all duration-300">
                    <Image
                      src="/assets/img/photos/about2.jpg"
                      alt="About Srapsware"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
                <div>
                  <div className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-2 border-border hover:border-brand/50 transition-all duration-300">
                    <Image
                      src="/assets/img/photos/about3.jpg"
                      alt="About Srapsware"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>

              {/* Decorative floating element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-brand/10 to-purple-500/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-brand/10 rounded-full blur-3xl -z-10" />
            </div>

            {/* Content - Creative Card Layout */}
            <div className="order-1 lg:order-2 space-y-6">
              {/* Header Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                <div className="relative bg-card/50 backdrop-blur-sm border border-brand/20 rounded-2xl p-8 group-hover:border-brand/40 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Megaphone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-brand font-semibold mb-1">ABOUT US</div>
                      <h2 className="text-3xl md:text-4xl font-bold">
                        Who Are We?
                      </h2>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-lg text-foreground leading-relaxed">
                      We are a digital business and brand that believes in the <span className="text-brand font-semibold">power
                      of creative strategy</span> and with great design.
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Srapsware is the global market leader in offering services like
                      web development, Cloud Computing, Big data, website design,
                      ecommerce development, Web Application, Custom Development,
                      flash, Hosting, Mobile apps and much more. We used to cover all
                      types of industries like Hospitals, School, Inventory and
                      Trading, Custom business and much more.
                    </p>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>
                </div>
              </div>

              {/* Features - Clean Diagonal Flow */}
              <div className="space-y-4">
                {/* Feature 1 */}
                <div className="group relative animate-in fade-in slide-in-from-left duration-700" style={{animationDelay: '100ms'}}>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  
                  <div className="relative bg-card/80 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 group-hover:border-cyan-500/50 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shadow-lg">
                    <div className="flex items-center gap-5">
                      <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Check className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground text-lg mb-1">Quick UI/UX</h4>
                        <p className="text-sm text-muted-foreground">Simple and quick user interface.</p>
                      </div>
                      <div className="hidden sm:block w-12 h-12 rounded-xl bg-cyan-500/10 flex-shrink-0"></div>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="group relative animate-in fade-in slide-in-from-right duration-700 md:ml-12" style={{animationDelay: '200ms'}}>
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  
                  <div className="relative bg-card/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 group-hover:border-purple-500/50 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shadow-lg">
                    <div className="flex items-center gap-5">
                      <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Check className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground text-lg mb-1">Hybrid Apps</h4>
                        <p className="text-sm text-muted-foreground">Reactive and super quick hybrid mobile application.</p>
                      </div>
                      <div className="hidden sm:block w-12 h-12 rounded-xl bg-purple-500/10 flex-shrink-0"></div>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="group relative animate-in fade-in slide-in-from-left duration-700 md:ml-6" style={{animationDelay: '300ms'}}>
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  
                  <div className="relative bg-card/80 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-6 group-hover:border-orange-500/50 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shadow-lg">
                    <div className="flex items-center gap-5">
                      <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Check className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground text-lg mb-1">Future Tech</h4>
                        <p className="text-sm text-muted-foreground">Concentrate on future technologies.</p>
                      </div>
                      <div className="hidden sm:block w-12 h-12 rounded-xl bg-orange-500/10 flex-shrink-0"></div>
                    </div>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="group relative animate-in fade-in slide-in-from-right duration-700 md:ml-20" style={{animationDelay: '400ms'}}>
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  
                  <div className="relative bg-card/80 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 group-hover:border-green-500/50 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shadow-lg">
                    <div className="flex items-center gap-5">
                      <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Check className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground text-lg mb-1">Modern CMS</h4>
                        <p className="text-sm text-muted-foreground">Working with serverless and headless CMS.</p>
                      </div>
                      <div className="hidden sm:block w-12 h-12 rounded-xl bg-green-500/10 flex-shrink-0"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Circuit Board Pattern Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-background to-pink-500/5" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='rgba(147,51,234,0.3)' stroke-width='1'%3E%3Cpath d='M0 40h20M60 40h20M40 0v20M40 60v20'/%3E%3Ccircle cx='40' cy='40' r='15'/%3E%3Ccircle cx='40' cy='40' r='8'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Enhanced Section Header */}
          <div className="max-w-3xl mx-auto mb-20">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-brand to-transparent"></div>
              <span className="px-4 py-2 bg-brand/10 border border-brand/20 rounded-full text-sm font-semibold text-brand">
                What We Believe
              </span>
              <div className="h-px w-20 bg-gradient-to-l from-transparent via-brand to-transparent"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 leading-tight">
              Our Core{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-gradient-to-r from-brand via-purple-500 to-pink-500 bg-clip-text">
                  Values
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                  <path d="M0 4C50 1 150 7 200 4" stroke="url(#values-gradient)" strokeWidth="2"/>
                  <defs>
                    <linearGradient id="values-gradient" x1="0" y1="0" x2="200" y2="0">
                      <stop offset="0%" stopColor="rgb(71, 128, 199)" />
                      <stop offset="50%" stopColor="rgb(147, 51, 234)" />
                      <stop offset="100%" stopColor="rgb(236, 72, 153)" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground text-center leading-relaxed">
              The principles that drive everything we do
            </p>
          </div>

          {/* Creative Interactive Values Layout */}
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* Row 1: Innovation as Hero with Floating Cards */}
            <div className="relative">
              {/* Main Innovation Card - Large Hero */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-purple-500/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                
                <div className="relative bg-gradient-to-br from-brand/5 to-purple-500/5 backdrop-blur-xl border border-brand/20 rounded-3xl overflow-hidden group-hover:border-brand/40 transition-all duration-300 min-h-[320px]">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Left: Content */}
                    <div className="p-10 lg:p-12 flex flex-col justify-center relative z-10">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand/10 border border-brand/20 rounded-full text-xs font-semibold text-brand mb-6 w-fit">
                        <span className="w-2 h-2 bg-brand rounded-full animate-pulse"></span>
                        Primary Value
                      </div>
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                        <Rocket className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                        Innovation First
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        We embrace cutting-edge technologies and creative solutions to stay ahead of the curve. Our team constantly explores new possibilities.
                      </p>
                      
                      {/* Innovation Stats */}
                      <div className="flex items-center gap-6">
                        <div>
                          <div className="text-2xl font-bold text-brand">50+</div>
                          <div className="text-xs text-muted-foreground">New Tech/Year</div>
                        </div>
                        <div className="w-px h-10 bg-border"></div>
                        <div>
                          <div className="text-2xl font-bold text-brand">100%</div>
                          <div className="text-xs text-muted-foreground">R&D Focus</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right: Visual Element */}
                    <div className="relative h-64 md:h-auto">
                      <img 
                        src="https://picsum.photos/seed/innovation-lab/700/500" 
                        alt="Innovation"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-brand/10"></div>
                      
                      {/* Floating Badge */}
                      <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white">
                        <div className="text-xs opacity-80 mb-1">Innovation Score</div>
                        <div className="text-3xl font-bold">9.8<span className="text-sm">/10</span></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            {/* Row 2: Grid of 4 Values with Unique Layouts */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Quality Commitment - Vertical with Progress */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                <div className="relative h-full bg-card border border-purple-500/20 rounded-3xl p-6 overflow-hidden group-hover:border-purple-500/40 transition-all duration-300 min-h-[280px]">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Quality Commitment</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Every line of code is crafted with precision and tested rigorously
                  </p>
                  
                  {/* Quality Metrics */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-muted-foreground">Code Quality</span>
                        <span className="text-purple-500 font-semibold">98%</span>
                      </div>
                      <div className="h-2 bg-purple-500/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-[98%] group-hover:w-full transition-all duration-700"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-muted-foreground">Test Coverage</span>
                        <span className="text-purple-500 font-semibold">95%</span>
                      </div>
                      <div className="h-2 bg-purple-500/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-[95%] group-hover:w-full transition-all duration-700"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Client Success - With Icon Grid */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                <div className="relative h-full bg-card border border-cyan-500/20 rounded-3xl p-6 overflow-hidden group-hover:border-cyan-500/40 transition-all duration-300 min-h-[280px]">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Client Success</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Your goals are our mission. We measure success by results
                  </p>
                  
                  {/* Success Icons Grid */}
                  <div className="grid grid-cols-3 gap-2">
                    {['🎯', '🚀', '⭐', '💼', '🏆', '📈'].map((icon, i) => (
                      <div 
                        key={i}
                        className="aspect-square bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center text-lg group-hover:scale-110 transition-all duration-300"
                        style={{transitionDelay: `${i * 50}ms`}}
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Timely Delivery - With Countdown */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                <div className="relative h-full bg-card border border-orange-500/20 rounded-3xl p-6 overflow-hidden group-hover:border-orange-500/40 transition-all duration-300 min-h-[280px]">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Timely Delivery</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    We respect deadlines and deliver on time, every time
                  </p>
                  
                  {/* Time Stats */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-orange-500/5 rounded-lg">
                      <span className="text-xs text-muted-foreground">On-Time Rate</span>
                      <span className="text-sm font-bold text-orange-500">99.2%</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-orange-500/5 rounded-lg">
                      <span className="text-xs text-muted-foreground">Avg Delivery</span>
                      <span className="text-sm font-bold text-orange-500">-2 Days</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-orange-500/5 rounded-lg">
                      <span className="text-xs text-muted-foreground">Sprint Success</span>
                      <span className="text-sm font-bold text-orange-500">97%</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Expert Team - With Team Preview */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                <div className="relative h-full bg-card border border-green-500/20 rounded-3xl p-6 overflow-hidden group-hover:border-green-500/40 transition-all duration-300 min-h-[280px]">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Expert Team</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Skilled developers with years of experience
                  </p>
                  
                  {/* Team Members Preview */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {[1,2,3,4].map((i) => (
                          <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 border-2 border-card flex items-center justify-center text-white text-xs font-bold">
                            {i}
                          </div>
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">30+ Experts</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="px-2 py-1 bg-green-500/10 border border-green-500/20 rounded-md text-green-600">Full Stack</span>
                      <span className="px-2 py-1 bg-green-500/10 border border-green-500/20 rounded-md text-green-600">DevOps</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="px-2 py-1 bg-green-500/10 border border-green-500/20 rounded-md text-green-600">Mobile</span>
                      <span className="px-2 py-1 bg-green-500/10 border border-green-500/20 rounded-md text-green-600">AI/ML</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

            </div>

            {/* Row 3: Continuous Learning - Wide Feature Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              <div className="relative bg-card border border-indigo-500/20 rounded-3xl overflow-hidden group-hover:border-indigo-500/40 transition-all duration-300">
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Main Content */}
                  <div className="md:col-span-2 p-8 lg:p-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                        <BookOpen className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2 text-foreground">Continuous Learning</h3>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          We stay updated with the latest trends and technologies to provide cutting-edge solutions
                        </p>
                      </div>
                    </div>
                    
                    {/* Learning Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="p-4 bg-indigo-500/5 rounded-xl border border-indigo-500/10">
                        <div className="text-2xl font-bold text-indigo-500 mb-1">240h</div>
                        <div className="text-xs text-muted-foreground">Training/Year</div>
                      </div>
                      <div className="p-4 bg-indigo-500/5 rounded-xl border border-indigo-500/10">
                        <div className="text-2xl font-bold text-indigo-500 mb-1">12+</div>
                        <div className="text-xs text-muted-foreground">Certifications</div>
                      </div>
                      <div className="p-4 bg-indigo-500/5 rounded-xl border border-indigo-500/10">
                        <div className="text-2xl font-bold text-indigo-500 mb-1">100%</div>
                        <div className="text-xs text-muted-foreground">Team Trained</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Side Image */}
                  <div className="relative h-64 md:h-auto">
                    <img 
                      src="https://picsum.photos/seed/learning-dev/500/400" 
                      alt="Learning"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-card/50"></div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Wave Pattern Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-cyan-500/5 to-background" />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 50%, rgba(6, 182, 212, 0.2) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)`,
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex justify-center mb-6">
              <ListChecks className="w-12 h-12 text-brand" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Here are 3 working steps to organize our business projects.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Steps */}
            <div className="relative space-y-6 order-2 lg:order-1">
              {/* Connecting Lines */}
              <svg
                className="absolute left-6 top-16 h-[calc(100%-8rem)] w-1 hidden lg:block"
                style={{ zIndex: 0 }}
              >
                <defs>
                  <linearGradient
                    id="stepLineGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor="hsl(var(--brand))"
                      stopOpacity="0.5"
                    />
                    <stop
                      offset="50%"
                      stopColor="hsl(var(--accent-primary))"
                      stopOpacity="0.5"
                    />
                    <stop
                      offset="100%"
                      stopColor="hsl(var(--brand))"
                      stopOpacity="0.5"
                    />
                  </linearGradient>
                </defs>
                <line
                  x1="0.5"
                  y1="0"
                  x2="0.5"
                  y2="100%"
                  stroke="url(#stepLineGradient)"
                  strokeWidth="2"
                  strokeDasharray="8,8"
                />
              </svg>

              <div
                className="relative group bg-card border-2 border-border hover:border-brand/50 rounded-2xl p-6 hover:shadow-xl hover:shadow-brand/10 hover:-translate-x-1 transition-all duration-300 overflow-hidden"
                style={{ zIndex: 1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand to-accent-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex gap-4 relative z-10">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand to-accent-primary flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                      01
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Collect Ideas
                    </h4>
                    <p className="text-muted-foreground">
                      We gather your ideas and initiatives.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="relative group bg-card border-2 border-border hover:border-brand/50 rounded-2xl p-6 hover:shadow-xl hover:shadow-brand/10 hover:-translate-x-1 transition-all duration-300 overflow-hidden lg:ml-16"
                style={{ zIndex: 1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex gap-4 relative z-10">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                      02
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Data Analysis
                    </h4>
                    <p className="text-muted-foreground">
                      Analyse the demands of your project.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="relative group bg-card border-2 border-border hover:border-brand/50 rounded-2xl p-6 hover:shadow-xl hover:shadow-brand/10 hover:-translate-x-1 transition-all duration-300 overflow-hidden lg:ml-8"
                style={{ zIndex: 1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-brand opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex gap-4 relative z-10">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-brand flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                      03
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Finalize Product
                    </h4>
                    <p className="text-muted-foreground">
                      Design your ideas for reality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How It Works?
              </h2>
              <p className="text-xl text-muted-foreground mb-4">
                We are known for offering the most user-friendly and easy-to-use
                web development concepts to our clients and that is considered
                our greatest asset.
              </p>
              <p className="text-muted-foreground mb-8">
                We develop and provide easy solutions for your hard online
                models.
              </p>
              <Link
                href="/our-process"
                className="inline-flex items-center justify-center rounded-md bg-accent-primary text-white hover:bg-accent-hover px-8 py-3 font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Dotted Grid Background */}
        <div className="absolute inset-0 bg-gradient-to-bl from-accent-primary/5 via-background to-brand/5" />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(71, 128, 199, 0.3) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Enhanced Section Header */}
          <div className="max-w-3xl mx-auto mb-20">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-brand to-transparent"></div>
              <span className="px-4 py-2 bg-brand/10 border border-brand/20 rounded-full text-sm font-semibold text-brand">
                Your Success Partner
              </span>
              <div className="h-px w-20 bg-gradient-to-l from-transparent via-brand to-transparent"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 leading-tight">
              Why Choose{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-gradient-to-r from-brand via-purple-500 to-pink-500 bg-clip-text">
                  Srapsware?
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                  <path d="M0 4C50 1 150 7 200 4" stroke="url(#choose-gradient)" strokeWidth="2"/>
                  <defs>
                    <linearGradient id="choose-gradient" x1="0" y1="0" x2="200" y2="0">
                      <stop offset="0%" stopColor="rgb(71, 128, 199)" />
                      <stop offset="50%" stopColor="rgb(147, 51, 234)" />
                      <stop offset="100%" stopColor="rgb(236, 72, 153)" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground text-center leading-relaxed">
              Your success is our priority. Here's what sets us apart from the rest.
            </p>
          </div>

          {/* Creative Mixed Layout with Cards, Stats & Visual Elements */}
          <div className="max-w-7xl mx-auto space-y-8">
            
            {/* Row 1: Large Feature Card + Stats Grid */}
            <div className="grid lg:grid-cols-12 gap-6">
              
              {/* 15+ Years Experience - Large Featured Card with Split Design */}
              <div className="lg:col-span-7 group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                <div className="relative h-full bg-card border border-brand/20 rounded-3xl overflow-hidden group-hover:border-brand/40 transition-all duration-300">
                  <div className="grid md:grid-cols-5 gap-0 h-full min-h-[280px]">
                    {/* Left: Content */}
                    <div className="md:col-span-3 p-8 lg:p-10 flex flex-col justify-center">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand/10 border border-brand/20 rounded-full text-sm font-semibold text-brand mb-5 w-fit">
                        <Award className="w-4 h-4" />
                        Established 2010
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                        15+ Years Experience
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed mb-6">
                        Over a decade of delivering excellence in software development and digital solutions. We've helped businesses transform their ideas into reality.
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="flex -space-x-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand to-purple-500 border-2 border-background flex items-center justify-center text-white text-sm font-bold">
                            M
                          </div>
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-background flex items-center justify-center text-white text-sm font-bold">
                            A
                          </div>
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-brand border-2 border-background flex items-center justify-center text-white text-sm font-bold">
                            R
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">Expert Team</span>
                      </div>
                    </div>
                    
                    {/* Right: Image with Overlay Stats */}
                    <div className="md:col-span-2 relative">
                      <img 
                        src="https://picsum.photos/seed/experience-team/500/400" 
                        alt="Experience"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-card/90"></div>
                      <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white">
                        <div className="text-3xl font-bold">2010</div>
                        <div className="text-xs opacity-80">Since</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Stats Grid: Projects & Support */}
              <div className="lg:col-span-5 grid grid-rows-2 gap-6">
                {/* 604+ Projects - Counter Card */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  
                  <div className="relative h-full bg-card border border-purple-500/20 rounded-3xl p-6 lg:p-8 overflow-hidden group-hover:border-purple-500/40 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <TrendingUp className="w-7 h-7 text-white" />
                      </div>
                      <div className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs font-semibold text-purple-500">
                        Growing Daily
                      </div>
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-bold mb-2 text-foreground bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                      604+
                    </h3>
                    <p className="text-lg font-semibold mb-2 text-foreground">Successful Projects</p>
                    <p className="text-sm text-muted-foreground">
                      Proven track record across industries and technologies
                    </p>
                    
                    {/* Progress Bar Animation */}
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Web Development</span>
                        <span>92%</span>
                      </div>
                      <div className="h-2 bg-purple-500/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-[92%] group-hover:w-full transition-all duration-700"></div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* 24/7 Support - Service Card */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  
                  <div className="relative h-full bg-card border border-cyan-500/20 rounded-3xl p-6 lg:p-8 overflow-hidden group-hover:border-cyan-500/40 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Headphones className="w-7 h-7 text-white" />
                      </div>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-foreground">24/7 Support</h3>
                    <p className="text-base text-muted-foreground mb-4">
                      Round-the-clock technical support to keep your business running smoothly
                    </p>
                    
                    {/* Support Stats */}
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex-1">
                        <div className="text-2xl font-bold text-cyan-500">
                          &lt;2min
                        </div>
                        <div className="text-xs text-muted-foreground">Avg Response</div>
                      </div>
                      <div className="w-px h-10 bg-border"></div>
                      <div className="flex-1">
                        <div className="text-2xl font-bold text-cyan-500">99.9%</div>
                        <div className="text-xs text-muted-foreground">Satisfaction</div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Tech Stack + Agile + Communication */}
            <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-6">
              
              {/* Latest Technologies - Wide Card with Tech Badges */}
              <div className="lg:col-span-6 group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                <div className="relative h-full bg-card border border-green-500/20 rounded-3xl p-8 overflow-hidden group-hover:border-green-500/40 transition-all duration-300 min-h-[260px]">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg flex-shrink-0">
                      <Code2 className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-foreground">Latest Technologies</h3>
                      <p className="text-sm text-muted-foreground">
                        We leverage cutting-edge tools and frameworks to build future-proof solutions
                      </p>
                    </div>
                  </div>
                  
                  {/* Tech Stack Grid with Logos */}
                  <div className="grid grid-cols-6 gap-3">
                    {featuredTechs.map((tech, i) => (
                      <div 
                        key={tech.slug}
                        className="aspect-square bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg flex items-center justify-center p-2 group-hover:scale-110 group-hover:border-green-500/40 transition-all duration-300 relative overflow-hidden"
                        style={{transitionDelay: `${i * 30}ms`}}
                        title={tech.title}
                      >
                        <Image 
                          src={tech.logo} 
                          alt={tech.title}
                          width={32}
                          height={32}
                          className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                    ))}
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Agile Methodology - Process Card */}
              <div className="lg:col-span-3 group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                <div className="relative h-full bg-card border border-orange-500/20 rounded-3xl p-6 overflow-hidden group-hover:border-orange-500/40 transition-all duration-300 min-h-[260px]">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Agile Methodology</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Flexible, iterative development process ensuring faster delivery and better results
                  </p>
                  
                  {/* Sprint Cycle Visualization */}
                  <div className="space-y-2">
                    {['Plan', 'Build', 'Test', 'Deploy'].map((phase, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500"></div>
                        <span className="text-xs text-muted-foreground">{phase}</span>
                        <div className="flex-1 h-px bg-orange-500/20"></div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Transparent Communication - Contact Card */}
              <div className="lg:col-span-3 group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                <div className="relative h-full bg-card border border-indigo-500/20 rounded-3xl p-6 overflow-hidden group-hover:border-indigo-500/40 transition-all duration-300 min-h-[260px]">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Transparent Communication</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Clear, honest communication at every stage keeping you informed and in control
                  </p>
                  
                  {/* Communication Channels */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-6 h-6 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-muted-foreground">Email Updates</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-6 h-6 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <span className="text-muted-foreground">Real-time Chat</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-6 h-6 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <span className="text-muted-foreground">Progress Reports</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-muted via-background to-muted py-20 md:py-28 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05),transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Completed Projects */}
              <div
                className="group stats-card relative p-6 rounded-2xl bg-card border-2 border-border hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                style={{ zIndex: 1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand to-accent-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <AnimatedCounter
                  value={`${stats.projects}+`}
                  duration={2.5}
                  className="relative z-10 text-5xl font-bold text-brand mb-2"
                />
                <div className="relative z-10 text-sm text-muted-foreground font-medium">
                  Projects Delivered
                </div>
              </div>

              {/* Satisfied Customers */}
              <div
                className="group stats-card relative p-6 rounded-2xl bg-card border-2 border-border hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                style={{ zIndex: 1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-primary to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <AnimatedCounter
                  value={`${stats.clients}+`}
                  duration={2.5}
                  className="relative z-10 text-5xl font-bold text-brand mb-2"
                />
                <div className="relative z-10 text-sm text-muted-foreground font-medium">
                  Happy Clients
                </div>
              </div>

              {/* Expert Employees */}
              <div
                className="group stats-card relative p-6 rounded-2xl bg-card border-2 border-border hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                style={{ zIndex: 1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <AnimatedCounter
                  value={`${stats.team}+`}
                  duration={2}
                  className="relative z-10 text-5xl font-bold text-brand mb-2"
                />
                <div className="relative z-10 text-sm text-muted-foreground font-medium">
                  Expert Team
                </div>
              </div>

              {/* Years Experience */}
              <div
                className="group stats-card relative p-6 rounded-2xl bg-card border-2 border-border hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                style={{ zIndex: 1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-brand opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <AnimatedCounter
                  value={`${stats.years}+`}
                  duration={2}
                  className="relative z-10 text-5xl font-bold text-brand mb-2"
                />
                <div className="relative z-10 text-sm text-muted-foreground font-medium">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline - Animated with GSAP */}
      <JourneyTimeline />

      {/* Technologies We Use */}
      <TechShowcase technologies={technologies} />

      {/* Contact CTA Section */}
      <CTASection />
    </div>
  );
}
