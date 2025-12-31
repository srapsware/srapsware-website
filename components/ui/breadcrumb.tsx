'use client'

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { usePathname } from 'next/navigation'

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  const pathname = usePathname()
  
  // Auto-generate breadcrumbs from pathname if not provided
  const breadcrumbItems = items || generateBreadcrumbs(pathname || '/')
  
  return (
    <nav 
      aria-label="breadcrumb" 
      className="mb-8 flex justify-center"
      itemScope
      itemType="https://schema.org/BreadcrumbList"
    >
      <ol className={`flex items-center flex-wrap gap-2 px-6 py-3 rounded-full backdrop-blur-md bg-background/10 border border-white/10 text-sm text-foreground/80 shadow-lg ${className}`}>
        <li 
          className="flex items-center"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link
            href="/"
            className="flex items-center gap-1.5 hover:text-brand transition-colors font-medium"
            itemProp="item"
          >
            <Home className="w-4 h-4" />
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        {breadcrumbItems.map((item, index) => {
          const position = index + 2 // +2 because home is position 1
          const isLast = !item.href
          
          return (
            <li 
              key={index} 
              className="flex items-center gap-2"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <ChevronRight className="w-4 h-4 text-foreground/40" />
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-brand transition-colors font-medium"
                  itemProp="item"
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span className="text-brand font-semibold" itemProp="name">
                  {item.label}
                </span>
              )}
              <meta itemProp="position" content={position.toString()} />
            </li>
          )
        })}
      </ol>
    </nav>
  );
}

// Helper function to generate breadcrumbs from pathname
function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  if (pathname === '/') return []
  
  const paths = pathname.split('/').filter(Boolean)
  
  return paths.map((path, index) => {
    const isLast = index === paths.length - 1
    const href = isLast ? undefined : '/' + paths.slice(0, index + 1).join('/')
    const label = formatLabel(path)
    
    return { label, href }
  })
}

// Format path segment to readable label
function formatLabel(segment: string): string {
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
