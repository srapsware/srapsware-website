import { Metadata } from 'next'
import { PageHero } from '@/components/sections/page-hero'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

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

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-development">Mobile Development</option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="ai-ml">AI & Machine Learning</option>
                    <option value="enterprise">Enterprise Solutions</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">
                    Project Budget (Optional)
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a range</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us about your project, goals, and timeline..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>

                <p className="text-sm text-muted-foreground">
                  By submitting this form, you agree to our{' '}
                  <a href="/privacy-policy" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
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
                      href="mailto:info@srapsware.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@srapsware.com
                    </a>
                    <br />
                    <a
                      href="mailto:sales@srapsware.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      sales@srapsware.com
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
                      href="tel:+1234567890"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Monday - Friday: 9:00 AM - 6:00 PM
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
                      123 Tech Street
                      <br />
                      Innovation District
                      <br />
                      San Francisco, CA 94105
                      <br />
                      United States
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
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
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
