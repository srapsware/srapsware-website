'use client'

/**
 * AnimatedBackground - Reusable modern gradient mesh background
 * 
 * Usage:
 * <AnimatedBackground variant="tech" /> - For technology sections
 * <AnimatedBackground variant="hero" /> - For hero sections
 * <AnimatedBackground variant="cta" /> - For call-to-action sections
 * <AnimatedBackground variant="subtle" /> - For content sections
 * 
 * Custom colors:
 * <AnimatedBackground 
 *   colors={['#4780C7', '#8B5CF6', '#14B8A6']} 
 *   opacity={0.15}
 * />
 */

interface AnimatedBackgroundProps {
  variant?: 'tech' | 'hero' | 'cta' | 'subtle' | 'dark' | 'custom'
  colors?: string[] // Custom colors array (requires 3 colors)
  opacity?: number // Opacity of blobs (0-1)
  speed?: 'slow' | 'normal' | 'fast'
  className?: string
}

export default function AnimatedBackground({
  variant = 'tech',
  colors,
  opacity = 0.2,
  speed = 'normal',
  className = ''
}: AnimatedBackgroundProps) {
  
  // Predefined color schemes
  const colorSchemes = {
    tech: ['rgba(71, 128, 199, 0.3)', 'rgba(139, 92, 246, 0.25)', 'rgba(20, 184, 166, 0.2)'], // Blue, Purple, Teal
    hero: ['rgba(71, 128, 199, 0.25)', 'rgba(20, 184, 166, 0.2)', 'rgba(139, 92, 246, 0.15)'], // Brand colors
    cta: ['rgba(236, 72, 153, 0.3)', 'rgba(168, 85, 247, 0.25)', 'rgba(59, 130, 246, 0.2)'], // Pink, Purple, Blue
    subtle: ['rgba(148, 163, 184, 0.1)', 'rgba(203, 213, 225, 0.08)', 'rgba(226, 232, 240, 0.06)'], // Gray tones
    dark: ['rgba(30, 41, 59, 0.5)', 'rgba(51, 65, 85, 0.4)', 'rgba(71, 85, 105, 0.3)'], // Dark slate
    custom: colors || ['rgba(71, 128, 199, 0.2)', 'rgba(139, 92, 246, 0.15)', 'rgba(20, 184, 166, 0.1)']
  }

  const selectedColors = colors ? colors.map(c => {
    // If custom colors provided, apply opacity
    return c.startsWith('rgba') ? c : `${c}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`
  }) : colorSchemes[variant]

  // Animation duration based on speed
  const durations = {
    slow: ['25s', '30s', '35s'],
    normal: ['20s', '25s', '30s'],
    fast: ['15s', '18s', '22s']
  }
  const [duration1, duration2, duration3] = durations[speed]

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Gradient Blob 1 */}
      <div 
        className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full blur-3xl animate-blob-1"
        style={{
          background: `radial-gradient(circle, ${selectedColors[0]} 0%, transparent 70%)`,
          animationDuration: duration1
        }}
      />

      {/* Gradient Blob 2 */}
      <div 
        className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full blur-3xl animate-blob-2"
        style={{
          background: `radial-gradient(circle, ${selectedColors[1]} 0%, transparent 70%)`,
          animationDuration: duration2,
          animationDelay: '2s'
        }}
      />

      {/* Gradient Blob 3 */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full blur-3xl animate-blob-3"
        style={{
          background: `radial-gradient(circle, ${selectedColors[2]} 0%, transparent 70%)`,
          animationDuration: duration3,
          animationDelay: '4s'
        }}
      />

      <style jsx>{`
        @keyframes blob-1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30%, 20%) scale(1.1);
          }
          66% {
            transform: translate(-20%, 30%) scale(0.9);
          }
        }

        @keyframes blob-2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-30%, -20%) scale(1.1);
          }
          66% {
            transform: translate(20%, -30%) scale(0.9);
          }
        }

        @keyframes blob-3 {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
          }
          33% {
            transform: translate(-40%, -60%) scale(1.2) rotate(120deg);
          }
          66% {
            transform: translate(-60%, -40%) scale(0.8) rotate(240deg);
          }
        }

        .animate-blob-1 {
          animation: blob-1 var(--duration, 20s) ease-in-out infinite;
        }

        .animate-blob-2 {
          animation: blob-2 var(--duration, 25s) ease-in-out infinite;
        }

        .animate-blob-3 {
          animation: blob-3 var(--duration, 30s) ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
