import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { DynamicContactForm } from '@/components/contact/dynamic-contact-form'
import { PremiumGoogleMap } from '@/components/contact/premium-google-map'
import { BusinessHours } from '@/components/contact/business-hours'
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
                    <a
                      href="https://wa.me/917982377273"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors font-medium"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      Available on WhatsApp
                    </a>
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

              {/* Map */}
              <div className="mt-12">
                <BusinessHours />
                <PremiumGoogleMap
                  latitude={28.6220226}
                  longitude={77.3866481}
                  zoom={15}
                  title="Srapsware Office - Noida"
                />
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
