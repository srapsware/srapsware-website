import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Route, Bell, Shield, ExternalLink } from 'lucide-react'

// TODO: Replace with the real Google Play package ID when available
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=PLACEHOLDER'

export const metadata: Metadata = {
  title: 'GPS Hunter | Srapsware',
  description:
    'GPS Hunter is a GPS simulation and route playback app for testing, development, and lawful use. Simulate locations, create routes, and play back movement.',
  openGraph: {
    title: 'GPS Hunter - GPS Simulation & Route Playback',
    description: 'Simulate GPS locations and play back saved routes on Android',
    type: 'website',
  },
}

const features = [
  {
    icon: MapPin,
    title: 'GPS Simulation',
    description:
      'Display your current location and simulate mock GPS positions for testing and development.',
  },
  {
    icon: Route,
    title: 'Route Playback',
    description:
      'Create, save, and play back routes with smooth navigation simulation.',
  },
  {
    icon: Bell,
    title: 'Background Playback',
    description:
      'Continue route playback in the background with notifications for Pause, Resume, and Stop.',
  },
  {
    icon: Shield,
    title: 'Local & Private',
    description:
      'Favorites, routes, and preferences are stored locally on your device - not on our servers.',
  },
]

export default function GpsHunterOverviewPage() {
  return (
    <main>
      <section className="relative py-16 md:py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-12 text-center">
              GPS Hunter is a GPS simulation and route playback application developed by SRA
              PSWARE. Use it to test location-based features, simulate movement along saved
              routes, and explore map-based workflows - all for lawful purposes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 rounded-xl border border-border bg-card"
                >
                  <feature.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
              >
                Get it on Google Play
                <ExternalLink className="w-5 h-5" />
              </Link>
              <p className="mt-6 text-sm text-muted-foreground">
                More product details coming soon.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
