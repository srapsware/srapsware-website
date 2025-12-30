import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb" className="mb-6">
      <ol className={`flex items-center flex-wrap gap-2 text-sm text-muted-foreground ${className}`}>
        <li className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-brand transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4" />
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-brand transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
