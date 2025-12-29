import Image from 'next/image'

interface ClientLogo {
  name: string
  logo: string
  website?: string
}

interface ClientLogosProps {
  title?: string
  subtitle?: string
  description?: string
  logos: ClientLogo[]
  columns?: 4 | 5 | 6 | 8
  grayscale?: boolean
  animated?: boolean
}

export function ClientLogos({ 
  title = "TRUSTED BY THE BRANDS YOU TRUST",
  subtitle = "Trusted by over 400+ clients",
  description = "We bring solutions to simplify the lives of our customers.",
  logos,
  columns = 4,
  grayscale = true,
  animated = true
}: ClientLogosProps) {
  if (logos.length === 0) return null

  const gridCols = {
    4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
    5: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
    6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
    8: 'grid-cols-2 md:grid-cols-4 lg:grid-cols-8'
  }[columns]

  return (
    <section className="py-24 bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            {/* Left Side - Text Content */}
            <div className="flex-1">
              {title && (
                <div className="text-sm font-semibold text-muted-foreground tracking-wider uppercase mb-4">
                  {title}
                </div>
              )}
              
              {subtitle && (
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {subtitle}
                </h2>
              )}
              
              {description && (
                <p className="text-lg text-muted-foreground max-w-md">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Logos Grid */}
        <div className={`grid ${gridCols} gap-8 md:gap-12`}>
          {logos.map((client, index) => (
            <div
              key={index}
              className={`
                group relative flex items-center justify-center p-6 rounded-xl 
                bg-background border border-border
                transition-all duration-300
                hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5
                ${animated ? 'hover:scale-105' : ''}
              `}
            >
              {client.website ? (
                <a
                  href={client.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-20 flex items-center justify-center"
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={160}
                    height={80}
                    className={`
                      object-contain max-w-full max-h-full
                      transition-all duration-300
                      ${grayscale ? 'grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100' : ''}
                    `}
                  />
                </a>
              ) : (
                <div className="relative w-full h-20 flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={160}
                    height={80}
                    className={`
                      object-contain max-w-full max-h-full
                      transition-all duration-300
                      ${grayscale ? 'grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100' : ''}
                    `}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Optional Trust Badge */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Trusted by leading brands worldwide
          </p>
        </div>
      </div>
      </div>
    </section>
  )
}
