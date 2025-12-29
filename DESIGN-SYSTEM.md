# 🎨 Srapsware Modern Design System

## Design Patterns, Animation Recipes, and Best Practices

This document provides detailed design specifications, animation recipes, and implementation patterns for the new Srapsware website.

---

## 🎯 Design Philosophy

### Core Principles
1. **Minimalism with Impact** - Clean interfaces with strategic use of bold elements
2. **Motion with Purpose** - Every animation serves a functional purpose
3. **Dark-First Design** - Optimized for dark mode, light mode as complement
4. **Performance-Conscious** - Beautiful but fast (< 3s load time)
5. **Accessibility Always** - WCAG AA compliance minimum

---

## 🎨 Design System Approach

### ✅ Official shadcn/ui Color System

**TL;DR:**
- ✔ ALL colors in `app/globals.css` (CSS variables)
- ✔ Tailwind config only maps variables → utilities
- ❌ NO raw colors directly in Tailwind
- ✔ Components use semantic classes only

---

### 📁 1. app/globals.css (THIS IS WHERE COLORS LIVE)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* ===============================
       Base surfaces
    =============================== */
    --background: 0 0% 100%;
    --foreground: 212 30% 15%;

    --card: 0 0% 100%;
    --card-foreground: 212 30% 15%;

    --popover: 0 0% 100%;
    --popover-foreground: 212 30% 15%;

    /* ===============================
       Brand (Srapsware Blue)
    =============================== */
    --brand: 212 66% 32%;        /* #1C5489 */
    --brand-light: 214 52% 53%;  /* #4780C7 */

    /* ===============================
       Semantic colors (shadcn)
    =============================== */
    --primary: var(--brand);
    --primary-foreground: 0 0% 100%;

    --secondary: 214 40% 92%;
    --secondary-foreground: 212 66% 32%;

    --muted: 214 32% 94%;
    --muted-foreground: 214 15% 45%;

    --accent: var(--brand-light);
    --accent-foreground: 0 0% 100%;

    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;

    --border: 214 32% 90%;
    --input: 214 32% 90%;
    --ring: var(--brand);
    
    --radius: 0.5rem;
  }

  /* ===============================
     Dark mode (auto-adjusts all components)
  =============================== */
  .dark {
    --background: 212 30% 8%;
    --foreground: 0 0% 98%;

    --card: 212 30% 10%;
    --card-foreground: 0 0% 98%;

    --popover: 212 30% 10%;
    --popover-foreground: 0 0% 98%;

    /* Logo becomes white in dark mode */
    --brand: 0 0% 100%;
    --brand-light: 214 85% 65%;

    --primary: var(--brand);
    --primary-foreground: 212 30% 10%;

    --secondary: 212 30% 16%;
    --secondary-foreground: 0 0% 98%;

    --muted: 212 30% 16%;
    --muted-foreground: 214 15% 65%;

    --accent: var(--brand-light);
    --accent-foreground: 212 30% 10%;

    --destructive: 0 62% 40%;
    --destructive-foreground: 0 0% 98%;

    --border: 212 30% 18%;
    --input: 212 30% 18%;
    --ring: var(--brand-light);
  }
}
```

---

### 📁 2. tailwind.config.ts (MINIMAL - ONLY MAPPING)

```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",

        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",

        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",

        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",

        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",

        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",

        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        /* Brand helpers */
        brand: "hsl(var(--brand))",
        "brand-light": "hsl(var(--brand-light))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

---

### ✅ How to Use in Components

```tsx
// ✅ Correct - Use semantic classes
<Button>Primary Button</Button>

<div className="bg-card text-card-foreground border border-border">
  Card content
</div>

<h1 className="text-brand">Srapsware Logo</h1>

<p className="text-muted-foreground">Secondary text</p>

<div className="bg-primary text-primary-foreground">
  Call to Action
</div>
```

**Everything auto-adjusts for dark mode!** 🎉

---

### ❌ What NOT to Do

```tsx
// ❌ Wrong - Don't use raw hex colors
<div className="bg-[#1C5489]">...</div>

// ❌ Wrong - Don't add colors directly in Tailwind
colors: {
  blue: "#1C5489",  // ❌ Never do this
}

// ❌ Wrong - Don't use separate dark variants manually
<div className="bg-white dark:bg-gray-900">  // ❌ Use bg-background instead
```

---

### Typography Scale
```css
/* Font Families */
--font-sans: 'Geist', 'Inter', system-ui, sans-serif;
--font-mono: 'Geist Mono', 'JetBrains Mono', monospace;

/* Font Sizes (fluid typography) */
--text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
--text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
--text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
--text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
--text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
--text-2xl: clamp(1.5rem, 1.3rem + 1vw, 1.875rem);
--text-3xl: clamp(1.875rem, 1.6rem + 1.375vw, 2.25rem);
--text-4xl: clamp(2.25rem, 1.9rem + 1.75vw, 3rem);
--text-5xl: clamp(3rem, 2.5rem + 2.5vw, 3.75rem);
--text-6xl: clamp(3.75rem, 3rem + 3.75vw, 4.5rem);

/* Font Weights */
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
--font-black: 900;

/* Line Heights */
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;

/* Letter Spacing */
--tracking-tighter: -0.05em;
--tracking-tight: -0.025em;
--tracking-normal: 0;
--tracking-wide: 0.025em;
--tracking-wider: 0.05em;
```

### Spacing System
```css
/* Consistent spacing scale (8px base) */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

### Elevation System (Shadows)
```css
/* Subtle shadows for depth */
--shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

/* Dark mode shadows (colored) */
.dark {
  --shadow-glow-orange: 0 0 20px rgb(255 107 0 / 0.3);
  --shadow-glow-blue: 0 0 20px rgb(99 102 241 / 0.3);
  --shadow-glow-pink: 0 0 20px rgb(236 72 153 / 0.3);
}
```

### Border Radius
```css
--radius-sm: 0.25rem;   /* 4px */
--radius-md: 0.5rem;    /* 8px */
--radius-lg: 0.75rem;   /* 12px */
--radius-xl: 1rem;      /* 16px */
--radius-2xl: 1.5rem;   /* 24px */
--radius-full: 9999px;  /* Fully rounded */
```

---

## � Icons System

### ✅ Lucide Icons (Official shadcn/ui Icons)

**Why Lucide?**
- ✅ **1000+ icons** covering all needs
- ✅ **Tree-shakeable** - only import what you use
- ✅ **React components** - works perfectly with Next.js
- ✅ **Consistent style** - matches modern design
- ✅ **Fully customizable** - size, color, stroke width
- ✅ **Built into shadcn/ui** - zero extra setup

### Installation
```bash
# Already installed with shadcn/ui
pnpm add lucide-react
```

### Usage Examples

```tsx
import { 
  Menu, X, Sun, Moon, 
  Search, ChevronDown, ArrowRight,
  Code, Smartphone, Cloud, Brain, Palette, Building,
  Github, Twitter, Linkedin, Mail, Phone,
  Check, AlertCircle, Info, XCircle
} from 'lucide-react';

// Basic usage
<Menu className="w-6 h-6" />

// With color
<Sun className="w-5 h-5 text-brand" />

// Animated (with GSAP or CSS)
<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />

// In buttons
<Button>
  Get Started
  <ArrowRight className="ml-2 w-4 h-4" />
</Button>
```

### Icon Categories for Srapsware

#### Navigation & UI
```tsx
import { Menu, X, ChevronDown, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
```

#### Services Icons (Mega Menu)
```tsx
// Web Development
import { Globe, Code, Layout, FileCode, Blocks } from 'lucide-react';

// Mobile Apps
import { Smartphone, Tablet, TabletSmartphone } from 'lucide-react';

// Cloud & DevOps
import { Cloud, Server, Database, Container, Terminal } from 'lucide-react';

// AI & ML
import { Brain, Sparkles, Cpu, Network, Zap } from 'lucide-react';

// Design & Marketing
import { Palette, PenTool, Megaphone, TrendingUp, Target } from 'lucide-react';

// Enterprise
import { Building, Briefcase, Settings, Lock, Shield } from 'lucide-react';
```

#### Social Media
```tsx
import { 
  Facebook, Twitter, Linkedin, Github, 
  Youtube, Instagram, Mail 
} from 'lucide-react';
```

#### Common Actions
```tsx
import { 
  Search, Send, Download, Upload, 
  Share, Heart, Star, Bookmark,
  Check, X, Plus, Minus
} from 'lucide-react';
```

#### Status & Feedback
```tsx
import { 
  Check, CheckCircle, AlertCircle, 
  XCircle, Info, AlertTriangle 
} from 'lucide-react';
```

### Customization

```tsx
// Size variants
<Icon className="w-4 h-4" />   {/* 16px - small */}
<Icon className="w-5 h-5" />   {/* 20px - default */}
<Icon className="w-6 h-6" />   {/* 24px - medium */}
<Icon className="w-8 h-8" />   {/* 32px - large */}

// Colors
<Icon className="text-brand" />
<Icon className="text-primary" />
<Icon className="text-muted-foreground" />

// Stroke width
<Icon strokeWidth={1.5} />     {/* Thin */}
<Icon strokeWidth={2} />       {/* Default */}
<Icon strokeWidth={2.5} />     {/* Bold */}

// Animations
<Icon className="animate-spin" />                    {/* Spinning */}
<Icon className="group-hover:rotate-180 transition" /> {/* Rotate on hover */}
<Icon className="group-hover:scale-110 transition" /> {/* Scale on hover */}
```

### Reusable Icon Component

```tsx
// components/ui/icon.tsx
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IconProps {
  icon: LucideIcon;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeMap = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
};

export const Icon = ({ icon: LucideIcon, className, size = 'md' }: IconProps) => {
  return <LucideIcon className={cn(sizeMap[size], className)} />;
};

// Usage
import { Code } from 'lucide-react';
<Icon icon={Code} size="lg" className="text-brand" />
```

### Icon List for Srapsware Website

#### Header/Navigation (10 icons)
- `Menu` - Mobile hamburger
- `X` - Close menu
- `Sun` - Light mode
- `Moon` - Dark mode
- `Search` - Search button
- `ChevronDown` - Dropdowns
- `ChevronRight` - Submenu indicators
- `ArrowRight` - CTAs
- `ExternalLink` - External links
- `Home` - Home link

#### Services (30+ icons)
See examples above - Code, Smartphone, Cloud, Brain, Palette, Building, etc.

#### Social Media (7 icons)
- `Facebook`, `Twitter`, `Linkedin`, `Github`, `Youtube`, `Instagram`, `Mail`

#### Actions (15 icons)
- `Send` - Contact form
- `Download` - Downloads
- `Share` - Share buttons
- `Heart` - Favorites
- `Star` - Ratings
- `Bookmark` - Save
- `Filter` - Filtering
- `SortAsc/SortDesc` - Sorting
- `Eye` - Views
- `Calendar` - Dates
- `Clock` - Time

#### Status (8 icons)
- `Check` - Success
- `CheckCircle` - Completed
- `AlertCircle` - Warning
- `XCircle` - Error
- `Info` - Information
- `AlertTriangle` - Caution
- `Loader` - Loading
- `RefreshCw` - Refresh

### Alternative: Custom SVG Icons

If you need custom icons not in Lucide:

```tsx
// components/icons/custom-icon.tsx
export const CustomIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
};

// Usage - works just like Lucide icons
<CustomIcon className="w-6 h-6 text-brand" />
```

### Best Practices

✅ **Consistent sizing** - Use w-4, w-5, w-6, w-8 (don't use arbitrary sizes)
✅ **Semantic colors** - Use `text-brand`, `text-primary`, not hardcoded colors
✅ **Accessibility** - Add `aria-label` for icon-only buttons
✅ **Performance** - Tree-shaking means only imported icons are bundled
✅ **Animations** - Use Tailwind transitions or GSAP for smooth effects

❌ **Don't** - Mix multiple icon libraries
❌ **Don't** - Use arbitrary icon sizes (maintain consistency)
❌ **Don't** - Forget accessibility labels

### Quick Reference

```tsx
// Most common patterns for Srapsware

// Menu button
<Button variant="ghost" size="icon">
  <Menu className="w-6 h-6" />
  <span className="sr-only">Open menu</span>
</Button>

// Service card icon
<div className="p-4 rounded-lg bg-primary/10">
  <Code className="w-8 h-8 text-primary" />
</div>

// Social link
<a href="https://github.com/srapsware" className="hover:text-brand transition">
  <Github className="w-5 h-5" />
</a>

// Button with icon
<Button>
  Get Started
  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition" />
</Button>
```

---

## �🎬 GSAP Animation Recipes

### 1. Text Reveal Animation
```javascript
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

// Hero headline reveal
const textReveal = (element) => {
  const split = new SplitText(element, { type: 'lines, words' });
  
  gsap.fromTo(split.words, 
    {
      y: 100,
      opacity: 0,
      rotateX: -90,
    },
    {
      y: 0,
      opacity: 1,
      rotateX: 0,
      duration: 1,
      stagger: 0.05,
      ease: 'power4.out',
    }
  );
};
```

### 2. Scroll-Triggered Stagger
```javascript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Portfolio grid reveal
const portfolioReveal = () => {
  gsap.fromTo('.portfolio-card',
    {
      y: 60,
      opacity: 0,
      scale: 0.95,
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.portfolio-grid',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      }
    }
  );
};
```

### 3. Magnetic Button Effect
```javascript
const magneticButton = (button) => {
  const handleMouseMove = (e) => {
    const { left, top, width, height } = button.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const deltaX = (e.clientX - centerX) * 0.3;
    const deltaY = (e.clientY - centerY) * 0.3;
    
    gsap.to(button, {
      x: deltaX,
      y: deltaY,
      duration: 0.3,
      ease: 'power2.out',
    });
  };
  
  const handleMouseLeave = () => {
    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)',
    });
  };
  
  button.addEventListener('mousemove', handleMouseMove);
  button.addEventListener('mouseleave', handleMouseLeave);
};
```

### 4. Smooth Scroll with Lenis
```javascript
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const smoothScroll = () => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
  });
  
  lenis.on('scroll', ScrollTrigger.update);
  
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  
  gsap.ticker.lagSmoothing(0);
};
```

### 5. Parallax Background
```javascript
const parallaxBackground = () => {
  gsap.to('.parallax-bg', {
    y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
    ease: 'none',
    scrollTrigger: {
      start: 0,
      end: 'max',
      invalidateOnRefresh: true,
      scrub: 0.5,
    }
  });
};
```

### 6. Counter Animation
```javascript
const animateCounter = (element, target) => {
  gsap.to(element, {
    textContent: target,
    duration: 2,
    ease: 'power1.out',
    snap: { textContent: 1 },
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      once: true,
    },
    onUpdate: function() {
      element.textContent = Math.ceil(this.targets()[0].textContent);
    }
  });
};
```

### 7. Page Transition
```javascript
const pageTransition = () => {
  const tl = gsap.timeline();
  
  // Exit animation
  tl.to('.page-content', {
    opacity: 0,
    y: -50,
    duration: 0.3,
    ease: 'power2.in',
  })
  // Overlay
  .to('.transition-overlay', {
    scaleY: 1,
    duration: 0.4,
    ease: 'power2.inOut',
    transformOrigin: 'top',
  })
  // Remove overlay
  .to('.transition-overlay', {
    scaleY: 0,
    duration: 0.4,
    ease: 'power2.inOut',
    transformOrigin: 'bottom',
  })
  // Enter animation
  .from('.page-content', {
    opacity: 0,
    y: 50,
    duration: 0.3,
    ease: 'power2.out',
  });
};
```

### 8. Hover Card Tilt
```javascript
const cardTilt = (card) => {
  card.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    gsap.to(card, {
      rotateY: (x - 0.5) * 20,
      rotateX: (0.5 - y) * 20,
      duration: 0.3,
      ease: 'power2.out',
      transformPerspective: 1000,
    });
  });
  
  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)',
    });
  });
};
```

---

## 🧩 Component Patterns

### Hero Section (Homepage)
```tsx
// components/hero-section.tsx
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 particles-container" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">15+ Years of Code Baking</span>
          </div>
          
          {/* Headline with reveal animation */}
          <h1 className="hero-headline text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Build Software That
            <span className="block text-primary">Drives Results</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We create cutting-edge web and mobile applications with AI, cloud, 
            and modern frameworks for ambitious businesses.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="group">
              Get Your Free Quote
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition" />
            </Button>
            <Button size="lg" variant="outline">
              View Our Work
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <StatCard value="604+" label="Projects Delivered" />
            <StatCard value="400+" label="Happy Clients" />
            <StatCard value="30+" label="Expert Team" />
            <StatCard value="18+" label="Awards Won" />
          </div>
        </div>
      </div>
    </section>
  );
};
```

### Portfolio Card
```tsx
// components/portfolio-card.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  url: string;
  slug: string;
}

export const PortfolioCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  url, 
  slug 
}: PortfolioCardProps) => {
  return (
    <Card className="group relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image with parallax */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Hover overlay with link */}
        <Link 
          href={url} 
          target="_blank"
          className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ExternalLink className="w-5 h-5" />
        </Link>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <Link href={`/portfolio/${slug}`}>
          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};
```

### Service Tab Component
```tsx
// components/service-tabs.tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Globe, Smartphone, Cloud, Brain, Palette, Building } from 'lucide-react';

const services = [
  { icon: Globe, label: 'Web Development', value: 'web' },
  { icon: Smartphone, label: 'Mobile Apps', value: 'mobile' },
  { icon: Cloud, label: 'Cloud & DevOps', value: 'cloud' },
  { icon: Brain, label: 'AI & ML', value: 'ai' },
  { icon: Palette, label: 'Design', value: 'design' },
  { icon: Building, label: 'Enterprise', value: 'enterprise' },
];

export const ServiceTabs = () => {
  return (
    <Tabs defaultValue="web" className="w-full">
      <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2 bg-transparent">
        {services.map(({ icon: Icon, label, value }) => (
          <TabsTrigger 
            key={value} 
            value={value}
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <Icon className="w-4 h-4 mr-2" />
            <span className="hidden md:inline">{label}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      
      {services.map(({ value }) => (
        <TabsContent key={value} value={value} className="mt-8">
          <ServiceContent service={value} />
        </TabsContent>
      ))}
    </Tabs>
  );
};
```

### Testimonial Carousel
```tsx
// components/testimonial-carousel.tsx
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

export const TestimonialCarousel = ({ testimonials }) => {
  return (
    <div className="relative overflow-hidden py-12">
      <div className="flex gap-6 animate-scroll">
        {testimonials.map((testimonial, idx) => (
          <Card key={idx} className="min-w-[400px] p-8 relative">
            <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/20" />
            
            <p className="text-lg mb-6 relative z-10">
              "{testimonial.body}"
            </p>
            
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
              </Avatar>
              
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.position} • {testimonial.country}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
```

---

## 📱 Responsive Breakpoints

```javascript
// tailwind.config.ts
export default {
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
  },
};
```

### Mobile-First Approach
```tsx
// Always design for mobile first, then enhance
<div className="
  p-4           /* Mobile: 16px padding */
  md:p-6        /* Tablet: 24px padding */
  lg:p-8        /* Desktop: 32px padding */
  text-base     /* Mobile: 16px text */
  lg:text-lg    /* Desktop: 18px text */
">
```

---

## 🎭 Micro-interactions Library

### Button Shine Effect
```css
.button-shine {
  position: relative;
  overflow: hidden;
}

.button-shine::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.5s;
}

.button-shine:hover::before {
  left: 100%;
}
```

### Gradient Text
```css
.gradient-text {
  background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Glassmorphism Card
```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}
```

### Floating Animation
```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.float {
  animation: float 3s ease-in-out infinite;
}
```

---

## ♿ Accessibility Checklist

### WCAG AA Compliance
- [ ] Color contrast ratio >= 4.5:1 for text
- [ ] Color contrast ratio >= 3:1 for UI components
- [ ] All interactive elements keyboard accessible
- [ ] Focus indicators clearly visible
- [ ] ARIA labels on all icons/buttons
- [ ] Alt text on all images
- [ ] Skip to content link
- [ ] Semantic HTML structure
- [ ] Screen reader friendly
- [ ] No flashing content (seizure risk)

### Keyboard Navigation
```tsx
// Example: Keyboard-accessible component
const handleKeyDown = (e: React.KeyboardEvent) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    handleClick();
  }
};

<div 
  role="button" 
  tabIndex={0}
  onKeyDown={handleKeyDown}
  onClick={handleClick}
>
```

---

## 🚀 Performance Best Practices

### Image Optimization
```tsx
import Image from 'next/image';

// Always use next/image with optimization
<Image
  src="/hero.jpg"
  alt="Description"
  width={1920}
  height={1080}
  priority // For above-fold images
  placeholder="blur" // Blur placeholder
  blurDataURL="data:image/..." // Base64 blur
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

### Code Splitting
```tsx
// Lazy load heavy components
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Skeleton />,
  ssr: false, // Client-side only if needed
});
```

### Font Loading
```tsx
// app/layout.tsx
import { GeistSans, GeistMono } from 'geist/font';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

---

**Last Updated:** 2024-12-29
**Status:** Design Reference Guide ✏️
**Usage:** Reference this document during development phases

