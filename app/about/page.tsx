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

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <Megaphone className="w-12 h-12 text-brand" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Who Are We?
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                We are a digital business and brand that believes in the power
                of creative strategy and with great design.
              </p>
              <p className="text-muted-foreground mb-8">
                Srapsware is the global market leader in offering services like
                web development, Cloud Computing, Big data, website design,
                ecommerce development, Web Application, Custom Development,
                flash, Hosting, Mobile apps and much more. We used to cover all
                types of industries like Hospitals, School, Inventory and
                Trading, Custom business and much more.
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
                    <span>
                      Reactive and super quick hybrid mobile application.
                    </span>
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
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that drive everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Innovation First */}
            <div className="group relative p-8 rounded-2xl bg-card border-2 border-border hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-7 h-7 text-brand" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
                <p className="text-muted-foreground">
                  We embrace cutting-edge technologies and creative solutions to
                  stay ahead of the curve.
                </p>
              </div>
            </div>

            {/* Quality Commitment */}
            <div className="group relative p-8 rounded-2xl bg-card border-2 border-border hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-7 h-7 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Quality Commitment
                </h3>
                <p className="text-muted-foreground">
                  Every line of code is crafted with precision and tested
                  rigorously for excellence.
                </p>
              </div>
            </div>

            {/* Client Success */}
            <div className="group relative p-8 rounded-2xl bg-card border-2 border-border hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-brand opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-7 h-7 text-cyan-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Client Success</h3>
                <p className="text-muted-foreground">
                  Your goals are our mission. We measure success by the results
                  we deliver for you.
                </p>
              </div>
            </div>

            {/* Timely Delivery */}
            <div className="group relative p-8 rounded-2xl bg-card border-2 border-border hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-primary to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-accent-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-7 h-7 text-accent-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Timely Delivery</h3>
                <p className="text-muted-foreground">
                  We respect deadlines and deliver projects on time, every time,
                  without compromising quality.
                </p>
              </div>
            </div>

            {/* Expert Team */}
            <div className="group relative p-8 rounded-2xl bg-card border-2 border-border hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-7 h-7 text-brand" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
                <p className="text-muted-foreground">
                  Our skilled developers bring years of experience and passion
                  to every project.
                </p>
              </div>
            </div>

            {/* Continuous Learning */}
            <div className="group relative p-8 rounded-2xl bg-card border-2 border-border hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-brand opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-7 h-7 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Continuous Learning
                </h3>
                <p className="text-muted-foreground">
                  We stay updated with the latest trends and technologies to
                  provide the best solutions.
                </p>
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
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Why Choose Srapsware?
            </h2>
            <p className="text-xl text-muted-foreground">
              Your success is our priority. Here's what sets us apart from the
              rest.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* 15+ Years Experience */}
            <div className="group relative p-6 rounded-2xl bg-card border-2 border-border hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  15+ Years Experience
                </h3>
                <p className="text-sm text-muted-foreground">
                  Over a decade of delivering excellence in software development
                  and digital solutions.
                </p>
              </div>
            </div>

            {/* 604+ Successful Projects */}
            <div className="group relative p-6 rounded-2xl bg-card border-2 border-border hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  604+ Successful Projects
                </h3>
                <p className="text-sm text-muted-foreground">
                  Proven track record with hundreds of successfully delivered
                  projects across industries.
                </p>
              </div>
            </div>

            {/* 24/7 Support */}
            <div className="group relative p-6 rounded-2xl bg-card border-2 border-border hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-brand opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Headphones className="w-6 h-6 text-cyan-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">
                  Round-the-clock technical support to keep your business
                  running smoothly.
                </p>
              </div>
            </div>

            {/* Agile Methodology */}
            <div className="group relative p-6 rounded-2xl bg-card border-2 border-border hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-primary to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-accent-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-accent-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Agile Methodology
                </h3>
                <p className="text-sm text-muted-foreground">
                  Flexible, iterative development process ensuring faster
                  delivery and better results.
                </p>
              </div>
            </div>

            {/* Latest Technologies */}
            <div className="group relative p-6 rounded-2xl bg-card border-2 border-border hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Latest Technologies
                </h3>
                <p className="text-sm text-muted-foreground">
                  We leverage cutting-edge tools and frameworks to build
                  future-proof solutions.
                </p>
              </div>
            </div>

            {/* Transparent Communication */}
            <div className="group relative p-6 rounded-2xl bg-card border-2 border-border hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-brand opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Transparent Communication
                </h3>
                <p className="text-sm text-muted-foreground">
                  Clear, honest communication at every stage keeping you
                  informed and in control.
                </p>
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
