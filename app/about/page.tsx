import Image from 'next/image'
import Link from 'next/link'
import { Check, Megaphone, ListChecks, PhoneCall, MapPin, Mail } from 'lucide-react'

export const metadata = {
  title: 'About Our Company - Srapsware',
  description: 'We are more than 15 years old IT company successfully dealing with thousands of clients. Our aim is to deliver powerful result with the desired time.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted py-20 md:py-28 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hello! This is Srapsware
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              A firm that turns ideas into beautiful things.
            </p>
          </div>
        </div>
      </section>

      {/* Who Are We Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Images */}
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="pt-12">
                  <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/assets/img/photos/about2.jpg"
                      alt="About Srapsware"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/assets/img/photos/about3.jpg"
                      alt="About Srapsware"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <Megaphone className="w-12 h-12 text-brand" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Who Are We?
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                We are a digital business and brand that believes in the power of creative strategy and with great design.
              </p>
              <p className="text-muted-foreground mb-8">
                Srapsware is the global market leader in offering services like web development, Cloud Computing, Big data, website design, ecommerce development, Web Application, Custom Development, flash, Hosting, Mobile apps and much more. We used to cover all types of industries like Hospitals, School, Inventory and Trading, Custom business and much more.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-brand" />
                    </div>
                    <span>Simple and quick user interface.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-brand" />
                    </div>
                    <span>Reactive and super quick hybrid mobile application.</span>
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-brand" />
                    </div>
                    <span>Concentrate on future technologies.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-brand" />
                    </div>
                    <span>Working with serverless and headless CMS.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="mb-16">
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
              <div className="space-y-6 order-2 lg:order-1">
                <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center text-brand font-bold text-lg">
                        01
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Collect Ideas</h4>
                      <p className="text-muted-foreground">
                        We gather your ideas and initiatives.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow lg:ml-16">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center text-brand font-bold text-lg">
                        02
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Data Analysis</h4>
                      <p className="text-muted-foreground">
                        Analyse the demands of your project.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow lg:ml-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center text-brand font-bold text-lg">
                        03
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Finalize Product</h4>
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
                  We are known for offering the most user-friendly and easy-to-use web development concepts to our clients and that is considered our greatest asset.
                </p>
                <p className="text-muted-foreground mb-8">
                  We develop and provide easy solutions for your hard online models.
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
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="flex justify-center mb-4">
                  <Check className="w-12 h-12 text-brand" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-brand mb-2">604+</div>
                <p className="text-muted-foreground">Completed Projects</p>
              </div>

              <div>
                <div className="flex justify-center mb-4">
                  <svg className="w-12 h-12 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-brand mb-2">400+</div>
                <p className="text-muted-foreground">Satisfied Customers</p>
              </div>

              <div>
                <div className="flex justify-center mb-4">
                  <svg className="w-12 h-12 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-brand mb-2">30+</div>
                <p className="text-muted-foreground">Expert Employees</p>
              </div>

              <div>
                <div className="flex justify-center mb-4">
                  <svg className="w-12 h-12 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-brand mb-2">15+</div>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/assets/img/photos/about4.jpg"
                  alt="Contact Srapsware"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <PhoneCall className="w-12 h-12 text-brand" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                Believe it? Let&apos;s do something big together.
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <MapPin className="w-7 h-7 text-brand" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Address</h5>
                    <address className="not-italic text-muted-foreground">
                      E-160, 3rd Floor, Sector 63,<br />
                      Noida, UP – 201301
                    </address>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <PhoneCall className="w-7 h-7 text-brand" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Phone</h5>
                    <p className="text-muted-foreground">
                      <a href="tel:+917982377273" className="hover:text-brand transition-colors">
                        +91-7982377273
                      </a>
                      {' '}(Not toll free)
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Mail className="w-7 h-7 text-brand" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">E-mail</h5>
                    <p className="text-muted-foreground">
                      <a href="mailto:sales@srapsware.com" className="hover:text-brand transition-colors">
                        sales@srapsware.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
