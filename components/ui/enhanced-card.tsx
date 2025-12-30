'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface EnhancedCardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'brand' | 'purple' | 'success' | 'warning'
  hover?: boolean
}

export function EnhancedCard({ 
  children, 
  className,
  variant = 'default',
  hover = true 
}: EnhancedCardProps) {
  
  const variantStyles = {
    default: 'hover:border-brand/50 hover:shadow-brand/10',
    brand: 'hover:border-brand hover:shadow-brand/20',
    purple: 'hover:border-purple-500/50 hover:shadow-purple-500/10',
    success: 'hover:border-green-500/50 hover:shadow-green-500/10',
    warning: 'hover:border-yellow-500/50 hover:shadow-yellow-500/10'
  }

  return (
    <div 
      className={cn(
        // Base styles
        'relative rounded-2xl bg-card border border-border',
        'transition-all duration-300 ease-out',
        // Enhanced hover effects
        hover && [
          'hover:-translate-y-1',
          'hover:shadow-xl',
          variantStyles[variant],
          // Subtle glow effect
          'before:absolute before:inset-0 before:rounded-2xl',
          'before:opacity-0 before:transition-opacity before:duration-300',
          'hover:before:opacity-100',
          variant === 'default' && 'before:bg-gradient-to-br before:from-brand/5 before:to-transparent',
          variant === 'brand' && 'before:bg-gradient-to-br before:from-brand/10 before:to-transparent',
          variant === 'purple' && 'before:bg-gradient-to-br before:from-purple-500/10 before:to-transparent',
          variant === 'success' && 'before:bg-gradient-to-br before:from-green-500/10 before:to-transparent',
          variant === 'warning' && 'before:bg-gradient-to-br before:from-yellow-500/10 before:to-transparent',
        ],
        className
      )}
    >
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
