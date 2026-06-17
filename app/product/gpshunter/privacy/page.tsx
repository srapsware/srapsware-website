import { Metadata } from 'next'
import { MapPin, Database, Bell } from 'lucide-react'

export const metadata: Metadata = {
  title: 'GPS Hunter Privacy Policy | Srapsware',
  description:
    'Read the GPS Hunter privacy policy to understand what information the app accesses and how your data is handled.',
  openGraph: {
    title: 'GPS Hunter Privacy Policy - Srapsware',
    description: 'How GPS Hunter handles location data and device information',
    type: 'website',
  },
}

export default function GpsHunterPrivacyPage() {
  return (
    <main>
      <section className="relative py-16 md:py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <div className="not-prose mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-border bg-card text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Location Access</h3>
                <p className="text-sm text-muted-foreground">Core app functionality only</p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card text-center">
                <Database className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Local Storage</h3>
                <p className="text-sm text-muted-foreground">Data stays on your device</p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card text-center">
                <Bell className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold mb-2">Notifications</h3>
                <p className="text-sm text-muted-foreground">Route playback status</p>
              </div>
            </div>

            <p className="text-muted-foreground not-prose mb-8">
              <strong>Last Updated:</strong> June 2026
            </p>

            <p>
              GPS Hunter (&quot;the App&quot;) is a GPS simulation and route playback application
              developed by SRA PSWARE (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
            </p>
            <p>
              This Privacy Policy explains what information the App accesses, how it is used, and
              your rights regarding that information.
            </p>

            <h2>Information We Access</h2>

            <h3>Location Information</h3>
            <p>GPS Hunter requires access to device location in order to:</p>
            <ul>
              <li>Display your current location on the map.</li>
              <li>Simulate mock GPS locations.</li>
              <li>Play back saved routes.</li>
              <li>Allow route creation and navigation simulation.</li>
              <li>Continue route playback while the app is running in the background.</li>
            </ul>
            <p>Location information is used solely to provide the core functionality of the App.</p>

            <h3>Saved Data</h3>
            <p>The App may store the following information locally on your device:</p>
            <ul>
              <li>Favorite locations</li>
              <li>Saved routes</li>
              <li>Route history</li>
              <li>Recent searches</li>
              <li>App preferences and settings</li>
            </ul>
            <p>This information is stored locally and is not transmitted to our servers.</p>

            <h3>Notifications</h3>
            <p>GPS Hunter uses notifications to:</p>
            <ul>
              <li>Show active route playback status.</li>
              <li>Display simulation progress.</li>
              <li>Allow quick actions such as Pause, Resume, and Stop.</li>
            </ul>

            <h2>Information We Do Not Collect</h2>
            <p>Unless otherwise stated in the App:</p>
            <ul>
              <li>We do not sell your data.</li>
              <li>We do not collect personal information such as your name or address.</li>
              <li>We do not collect contacts.</li>
              <li>We do not collect messages.</li>
              <li>We do not collect photos or videos.</li>
              <li>We do not collect payment information directly.</li>
            </ul>

            <h2>Third-Party Services</h2>
            <p>GPS Hunter may use third-party services such as:</p>
            <ul>
              <li>Google Maps Platform</li>
              <li>Google Play Billing</li>
              <li>Android system services</li>
            </ul>
            <p>These services are governed by their own privacy policies.</p>

            <h2>Background Location</h2>
            <p>
              GPS Hunter may request background location access so that route playback and GPS
              simulation can continue while other applications are open. This permission is used
              only when required by the App&apos;s core functionality.
            </p>

            <h2>Data Security</h2>
            <p>
              We take reasonable measures to protect information stored by the App. However, no
              method of storage or transmission is completely secure.
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>GPS Hunter is not intended for children under the age of 13.</p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Updated versions will be posted
              on this page with a revised &quot;Last Updated&quot; date.
            </p>

            <h2>Contact Us</h2>
            <p>If you have questions regarding this Privacy Policy, please contact:</p>
            <p>
              <a href="mailto:support@srapsware.com">support@srapsware.com</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
