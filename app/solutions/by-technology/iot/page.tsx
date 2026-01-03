import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Radio, 
  Wifi, 
  Database, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle2,
  Gauge,
  Bell,
  Lock,
  Cloud,
  Activity,
  Smartphone
} from 'lucide-react'
import { cn } from '@/lib/utils'
import TechShowcase from '@/components/animations/tech-showcase'
import { PortfolioSlider } from '@/components/sections/portfolio-slider'
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel'
import { CTASection } from '@/components/sections/cta-section'
import { getFeaturedPortfolio, getTechnologies, getFeaturedTestimonials } from '@/lib/content'

export const metadata: Metadata = {
  title: 'IoT Solutions & Smart Device Development | Connected Systems',
  description: 'Professional IoT development services for smart devices, sensors, wearables, and connected systems. Build scalable IoT platforms with real-time data, device management, and edge computing.',
  keywords: 'IoT development, Internet of Things, smart devices, IoT platform, sensor networks, MQTT, edge computing, device management, real-time monitoring, industrial IoT, smart home',
  openGraph: {
    title: 'IoT Solutions & Smart Device Development | Connected IoT Systems',
    description: 'Build connected IoT ecosystems with real-time monitoring, device management, and edge computing capabilities.',
    type: 'website',
  }
}

export default function IoTPage() {
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
            <Link href="/solutions" className="hover:text-foreground transition-colors">Solutions</Link>
            <span>/</span>
            <span className="text-muted-foreground">By Technology</span>
            <span>/</span>
            <span className="text-foreground font-medium">IoT Solutions</span>
          </nav>
        </div>
      </section>

      {/* Hero Section - Modern Gradient Design */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-blue-950/20 dark:via-cyan-950/20 dark:to-teal-950/20" />
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] bg-[size:32px_32px]" />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                🌐 IoT & Connected Devices
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                IoT Solutions & Smart Devices
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Build connected IoT ecosystems with real-time monitoring, device management, and edge computing. From smart homes to industrial IoT, we deliver scalable end-to-end solutions.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-blue-600">1M+</div>
                  <div className="text-sm text-muted-foreground">Devices</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-cyan-600">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-teal-600">&lt;100ms</div>
                  <div className="text-sm text-muted-foreground">Latency</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Start Your IoT Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="#solutions"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-200"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
                <Image
                  src="https://picsum.photos/800/600?random=iot"
                  alt="IoT Smart Device Network with Sensors and Real-Time Monitoring"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-white/90 dark:bg-black/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg border border-white/20">
                  <div className="flex items-center space-x-2">
                    <Radio className="w-5 h-5 text-blue-500 animate-pulse" />
                    <span className="font-semibold text-sm">Connected Devices</span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-4 bg-white dark:bg-gray-900 px-6 py-3 rounded-full shadow-xl border border-gray-200 dark:border-gray-800">
                <Radio className="w-6 h-6 text-blue-600" />
                <Wifi className="w-6 h-6 text-cyan-600" />
                <Cloud className="w-6 h-6 text-teal-600" />
                <Activity className="w-6 h-6 text-green-600" />
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
                  src="https://picsum.photos/600/400?random=sensors"
                  alt="IoT Sensor Network with Real-Time Data Collection"
                  width={600}
                  height={400}
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Real-Time Intelligence</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:pl-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">End-to-End IoT Platform Development</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                The Internet of Things connects physical devices to the digital world - sensors, actuators, wearables, machines, vehicles, and infrastructure. We build complete IoT solutions: device firmware, connectivity (Wi-Fi, Bluetooth, LoRaWAN, cellular), cloud platforms, and mobile/web dashboards.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Handle millions of devices with real-time data ingestion, edge computing, predictive analytics, and remote device management. Whether it's smart homes, industrial automation, or fleet tracking, we deliver scalable IoT infrastructure that grows with you.
              </p>
            </div>
          </div>

          {/* Layout 2: Reverse Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16 items-center">
            <div className="lg:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Device Connectivity & Edge Computing</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                IoT devices communicate using MQTT, CoAP, HTTP/REST, WebSockets, or custom protocols optimized for low bandwidth and power constraints. We implement secure device authentication (X.509 certificates, JWT), OTA firmware updates, and device provisioning workflows.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Edge computing processes data locally on gateways or devices, reducing cloud costs and latency. Run ML models on edge devices for real-time anomaly detection, computer vision, or predictive maintenance without constant internet connectivity.
              </p>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://picsum.photos/600/400?random=edge-computing"
                  alt="Edge Computing Infrastructure for IoT Devices"
                  width={600}
                  height={400}
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Edge Processing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Layout 3: Full-Width Stats */}
          <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-blue-100">IoT Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1M+</div>
                <div className="text-blue-100">Connected Devices</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-blue-100">Platform Uptime</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50ms</div>
                <div className="text-blue-100">Average Latency</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - Asymmetric Bento Grid */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive IoT Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From device firmware to cloud platforms and real-time analytics
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            {/* Large Feature - Spans 8 columns */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <Radio className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">Device Firmware & Embedded Systems</h3>
                <p className="text-blue-100 mb-4 text-lg leading-relaxed">
                  Develop firmware for microcontrollers (ESP32, STM32, Arduino, Raspberry Pi) and real-time operating systems (FreeRTOS, Zephyr). Implement sensor drivers, power management, sleep modes, and communication protocols (I2C, SPI, UART, CAN bus) for energy-efficient IoT devices.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">ESP32/STM32</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">FreeRTOS</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Low Power</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tall Feature - 4 columns, 2 rows */}
            <div className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-24 translate-y-24 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10 h-full flex flex-col">
                <Cloud className="w-12 h-12 mb-4 group-hover:rotate-12 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">IoT Cloud Platform</h3>
                <p className="text-cyan-100 mb-4 leading-relaxed flex-grow">
                  Build scalable cloud backend with AWS IoT Core, Azure IoT Hub, or Google Cloud IoT. Handle device provisioning, telemetry ingestion (millions of events/sec), time-series databases (InfluxDB, TimescaleDB), and real-time dashboards.
                </p>
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Device Management</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Data Pipeline</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <span className="text-sm">Analytics</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Wifi className="w-10 h-10 mb-3 group-hover:rotate-180 transition-transform duration-500" />
              <h3 className="text-xl font-bold mb-2">MQTT & Communication Protocols</h3>
              <p className="text-teal-100 text-sm leading-relaxed">
                Real-time pub/sub messaging, CoAP, WebSockets, and custom protocols for IoT
              </p>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 to-green-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Activity className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Real-Time Monitoring & Alerts</h3>
              <p className="text-green-100 text-sm leading-relaxed">
                Live dashboards, anomaly detection, and instant alerts via SMS/email/push
              </p>
            </div>

            {/* Large Feature - Spans 8 columns */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <Lock className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">IoT Security & Device Management</h3>
                <p className="text-indigo-100 mb-4 text-lg leading-relaxed">
                  Secure IoT deployments with TLS/SSL encryption, X.509 certificates, JWT authentication, and device identity management. Implement OTA firmware updates, remote configuration, fleet management, and device lifecycle tracking (provisioning to decommissioning).
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">End-to-End Encryption</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">OTA Updates</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm">Fleet Management</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Gauge className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Edge Computing & ML</h3>
              <p className="text-purple-100 text-sm leading-relaxed">
                Run machine learning models on edge devices for real-time predictions
              </p>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 to-pink-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Database className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Time-Series Data Storage</h3>
              <p className="text-pink-100 text-sm leading-relaxed">
                InfluxDB, TimescaleDB for high-frequency sensor data with compression
              </p>
            </div>

            {/* Medium Feature - 4 columns */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 p-6 text-white hover:shadow-2xl transition-all duration-300">
              <Smartphone className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Mobile & Web Dashboards</h3>
              <p className="text-orange-100 text-sm leading-relaxed">
                Real-time control interfaces for iOS, Android, and web with charts & maps
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
            title="IoT Technology Stack"
            subtitle="Microcontrollers, cloud platforms, and communication protocols we use"
            filterSlugs={[
              'python', 'nodejs', 'react', 'aws', 'azure',
              'mqtt', 'docker', 'kubernetes', 'mongodb', 'postgresql'
            ]}
            showStats={true}
          />
        </div>
      </section>

      {/* Use Cases - Card Deck Style */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">IoT Solutions Across Industries</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From smart homes to industrial automation and healthcare monitoring
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform opacity-40" />
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                <Radio className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Smart Home Automation</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Control lights, thermostats, locks, cameras, and appliances from mobile apps. Voice integration with Alexa/Google Home.
                </p>
                <div className="flex items-center text-sm text-blue-600 font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform opacity-40" />
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                <Gauge className="w-10 h-10 text-cyan-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Industrial IoT (IIoT)</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Predictive maintenance, asset tracking, production monitoring, and OEE optimization for manufacturing plants.
                </p>
                <div className="flex items-center text-sm text-cyan-600 font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-green-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-green-600 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform opacity-40" />
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                <Activity className="w-10 h-10 text-teal-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Healthcare & Wearables</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Fitness trackers, remote patient monitoring, medical sensors, and health data analytics for telemedicine.
                </p>
                <div className="flex items-center text-sm text-teal-600 font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform opacity-40" />
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
                <Wifi className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Fleet & Asset Tracking</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  GPS tracking, route optimization, fuel monitoring, and real-time vehicle diagnostics for logistics companies.
                </p>
                <div className="flex items-center text-sm text-green-600 font-semibold">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">IoT Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From hardware prototyping to cloud deployment in 8-12 weeks
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Requirements & Architecture',
                description: 'Define sensor requirements, connectivity options (Wi-Fi, LoRa, cellular), data models, and cloud architecture. Select hardware (ESP32, STM32, RPi) and communication protocols (MQTT, CoAP).',
                duration: '1 week',
                icon: Radio
              },
              {
                step: '02',
                title: 'Firmware Development & Testing',
                description: 'Write embedded C/C++ firmware for microcontrollers, implement sensor drivers, power management, and communication protocols. Test on hardware with unit tests and integration tests.',
                duration: '2-3 weeks',
                icon: Zap
              },
              {
                step: '03',
                title: 'Cloud Platform Setup',
                description: 'Set up AWS IoT Core/Azure IoT Hub, device provisioning, MQTT broker, data ingestion pipeline, time-series database (InfluxDB/TimescaleDB), and analytics services.',
                duration: '1-2 weeks',
                icon: Cloud
              },
              {
                step: '04',
                title: 'Device Management & Security',
                description: 'Implement X.509 certificate authentication, OTA firmware updates, device fleet management, remote configuration, and monitoring dashboards.',
                duration: '1-2 weeks',
                icon: Shield
              },
              {
                step: '05',
                title: 'Mobile/Web Dashboard Development',
                description: 'Build React/React Native dashboards with real-time charts (Chart.js/Recharts), maps (Google Maps/Mapbox), device controls, and alert notifications.',
                duration: '2-3 weeks',
                icon: Smartphone
              },
              {
                step: '06',
                title: 'Testing & Production Deployment',
                description: 'End-to-end testing with real devices, load testing for scalability, security audits, and production deployment with monitoring (Grafana, CloudWatch).',
                duration: '1-2 weeks',
                icon: CheckCircle2
              }
            ].map((item, index) => (
              <div key={index} className="relative pl-8 pb-12 border-l-2 border-blue-600 last:border-0 last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full -translate-x-[9px]" />
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow ml-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl font-bold text-blue-600">{item.step}</div>
                      <div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground flex items-center mt-1">
                          <Zap className="w-4 h-4 mr-1" />
                          {item.duration}
                        </p>
                      </div>
                    </div>
                    <item.icon className="w-8 h-8 text-blue-600" />
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
              IoT Projects We've Built
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how we've connected devices and built smart systems for clients
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
              What Our IoT Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from businesses that deployed our IoT solutions
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
                  question: 'What hardware platforms do you support?',
                  answer: 'We work with ESP32, ESP8266 (Wi-Fi), STM32 (ARM Cortex), Arduino, Raspberry Pi, Nordic nRF52 (Bluetooth), and custom PCBs. We also support LoRaWAN gateways for long-range communication and cellular modules (4G/5G) for mobile connectivity.'
                },
                {
                  question: 'Which cloud platforms do you use for IoT?',
                  answer: 'AWS IoT Core, Azure IoT Hub, Google Cloud IoT, and open-source MQTT brokers (Mosquitto, HiveMQ, EMQX). We design cloud architectures that scale to millions of devices with real-time data processing, analytics, and device management.'
                },
                {
                  question: 'How do you secure IoT devices?',
                  answer: 'We implement TLS/SSL encryption for data in transit, X.509 certificate-based authentication, secure boot, encrypted firmware storage, and regular OTA security updates. All communications use industry-standard protocols with end-to-end encryption.'
                },
                {
                  question: 'Can you handle large-scale IoT deployments?',
                  answer: 'Yes! We design horizontally scalable cloud architectures using serverless services (AWS Lambda), message queues (Kafka, RabbitMQ), time-series databases, and auto-scaling infrastructure. We\'ve managed deployments with 1M+ devices processing millions of events per second.'
                },
                {
                  question: 'What communication protocols do you support?',
                  answer: 'MQTT (standard IoT pub/sub), CoAP (lightweight HTTP alternative), HTTP/REST, WebSockets, LoRaWAN (long-range low-power), BLE (Bluetooth Low Energy), Zigbee, Z-Wave, and custom binary protocols optimized for bandwidth and power constraints.'
                },
                {
                  question: 'How much does IoT development cost?',
                  answer: 'Simple IoT prototype: $10,000-25,000. Production-ready IoT platform: $40,000-100,000. Enterprise IoT solution with custom hardware: $100,000-500,000+. Costs include firmware, cloud infrastructure, mobile/web dashboards, testing, and initial deployment.'
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
        title="Ready to Connect Your Devices?"
        description="Build a scalable IoT ecosystem with secure device connectivity, real-time monitoring, and intelligent automation. From smart homes to industrial IoT, we deliver end-to-end solutions."
        primaryButtonText="Start Your IoT Project"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Solutions"
        secondaryButtonLink="#solutions"
        showContactInfo={true}
      />
    </div>
  )
}
