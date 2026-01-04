import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { DynamicContactForm } from '@/components/contact/dynamic-contact-form'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | Get in Touch with Srapsware',
  description: 'Contact Srapsware for software development services. Reach us via phone, email, or visit our office. We\'re here to help bring your ideas to life.',
  openGraph: {
    title: 'Contact Us - Srapsware Software Solutions',
    description: 'Get in touch with our team for your next project',
    type: 'website',
  }
}

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <PageHero
        badge="Contact Us"
        title="Let's Build Something Amazing Together"
        description="Have a project in mind? We'd love to hear from you. Get in touch with our team and let's discuss how we can help."
      />

      {/* Contact Section */}
      <section className="relative py-32 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <DynamicContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-12">
                We're here to answer any questions you may have about our services.
              </p>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <a
                      href="mailto:contact@srapsware.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      contact@srapsware.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Call Us</h3>
                    <a
                      href="tel:+917982377273"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91-7982377273
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Monday - Friday: 9:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Visit Our Office</h3>
                    <address className="text-muted-foreground not-italic">
                      3rd Floor, E-160
                      <br />
                      Sector 63, Noida
                      <br />
                      Uttar Pradesh 201309, India
                    </address>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Business Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                      <p className="font-semibold text-foreground">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 rounded-xl overflow-hidden border border-border">
                <div className="w-full h-64 bg-muted flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p>Interactive Map</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground mb-12">
              Quick answers to common questions. Can't find what you're looking for?{' '}
              <a href="/faq" className="text-primary hover:underline">
                Visit our FAQ page
              </a>
              .
            </p>

            <div className="text-left space-y-6">
              <details className="group p-6 rounded-lg border border-border bg-card">
                <summary className="font-medium cursor-pointer list-none flex items-center justify-between">
                  What is your typical project timeline?
                  <span className="ml-4 text-primary">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground">
                  Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex applications
                  can take 3-6 months. We provide detailed timelines during the consultation phase.
                </p>
              </details>

              <details className="group p-6 rounded-lg border border-border bg-card">
                <summary className="font-medium cursor-pointer list-none flex items-center justify-between">
                  Do you offer maintenance and support?
                  <span className="ml-4 text-primary">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground">
                  Yes! We offer comprehensive maintenance packages including 24/7 monitoring, regular updates, bug fixes,
                  and technical support to keep your application running smoothly.
                </p>
              </details>

              <details className="group p-6 rounded-lg border border-border bg-card">
                <summary className="font-medium cursor-pointer list-none flex items-center justify-between">
                  What is your development process?
                  <span className="ml-4 text-primary">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground">
                  We follow an agile development methodology with regular sprints, daily standups, and continuous client
                  feedback. Check out our{' '}
                  <a href="/our-process" className="text-primary hover:underline">
                    process page
                  </a>{' '}
                  for more details.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
