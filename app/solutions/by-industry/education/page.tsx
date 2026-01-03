import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { ProcessSteps } from '@/components/sections/process-steps'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { CTASection } from '@/components/sections/cta-section'
import TechShowcase from '@/components/animations/tech-showcase'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'
import { GraduationCap, BookOpen, Users, Video, Award, BarChart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Education & LMS Solutions | E-Learning Platforms | Srapsware',
  description: 'Custom Learning Management Systems (LMS) and e-learning platforms for schools, universities, and corporate training.',
  openGraph: {
    title: 'Education & LMS Solutions',
    description: 'Innovative e-learning and education technology solutions',
    type: 'website',
  }
}

export default function EducationSolutionsPage() {
  const portfolioProjects = getFeaturedPortfolio()
  const technologies = getTechnologies()
  const testimonials = getFeaturedTestimonials()

  const processSteps = [
    {
      number: 1,
      title: 'Educational Analysis',
      description: 'Understand learning objectives, student needs, curriculum, assessment methods.',
      duration: '1-2 weeks',
      icon: 'Target'
    },
    {
      number: 2,
      title: 'LMS Development',
      description: 'Build custom learning platform with courses, assessments, progress tracking.',
      duration: '6-12 weeks',
      icon: 'Code2'
    },
    {
      number: 3,
      title: 'Content Integration',
      description: 'Upload courses, videos, quizzes, integrate third-party learning tools.',
      duration: '2-3 weeks',
      icon: 'Upload'
    },
    {
      number: 4,
      title: 'Launch & Training',
      description: 'Teacher/admin training, student onboarding, and ongoing support.',
      duration: '2 weeks',
      icon: 'Rocket'
    },
  ]

  const features = [
    {
      icon: GraduationCap,
      title: 'Learning Management',
      description: 'Complete LMS with course management, enrollment, and student tracking.'
    },
    {
      icon: BookOpen,
      title: 'Course Creation',
      description: 'Easy-to-use course builder with multimedia support and assessments.'
    },
    {
      icon: Users,
      title: 'Student Portals',
      description: 'Student dashboards with course access, progress tracking, certificates.'
    },
    {
      icon: Video,
      title: 'Virtual Classrooms',
      description: 'Live video classes, screen sharing, breakout rooms, recording.'
    },
    {
      icon: Award,
      title: 'Assessments & Grading',
      description: 'Quizzes, assignments, automated grading, gradebook management.'
    },
    {
      icon: BarChart,
      title: 'Analytics & Reports',
      description: 'Student performance analytics, engagement tracking, completion reports.'
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHero
        title="Education & LMS Solutions"
        description="Build powerful learning management systems and e-learning platforms. Deliver engaging educational experiences online."
        breadcrumbItems={[
          { label: 'Solutions', href: '/solutions' },
          { label: 'By Industry' },
          { label: 'Education & LMS' }
        ]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">E-Learning Platform Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything needed for modern online education and training.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                <feature.icon className="w-12 h-12 text-brand mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechShowcase technologies={technologies} />
      <ProcessSteps steps={processSteps} />
      <PortfolioSlider projects={portfolioProjects} technologies={technologies} />
      <TestimonialsCarousel testimonials={testimonials} />
      <CTASection />
    </div>
  )
}
