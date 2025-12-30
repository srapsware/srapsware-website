'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/animations/gsap-setup'

interface CodeSnippet {
  code: string
  language: string
  color: string
}

const CODE_SNIPPETS: CodeSnippet[] = [
  {
    language: 'TypeScript',
    color: 'text-blue-400',
    code: `interface User {
  id: string
  name: string
  role: 'admin' | 'user'
}`
  },
  {
    language: 'React',
    color: 'text-cyan-400',
    code: `const App = () => {
  const [data, setData] = useState()
  return <Dashboard />
}`
  },
  {
    language: 'Python',
    color: 'text-yellow-400',
    code: `def process_data(items):
    return [x * 2 for x in items
            if x > 0]`
  },
  {
    language: 'Node.js',
    color: 'text-green-400',
    code: `app.get('/api/users', async (req, res) => {
  const users = await db.find()
  res.json(users)
})`
  },
  {
    language: 'SQL',
    color: 'text-purple-400',
    code: `SELECT u.name, COUNT(o.id) 
FROM users u 
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id`
  },
  {
    language: 'CSS',
    color: 'text-pink-400',
    code: `.container {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}`
  }
]

interface FloatingCodeProps {
  className?: string
  snippetCount?: number
}

export default function FloatingCode({ 
  className = '',
  snippetCount = 6 
}: FloatingCodeProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const snippets = containerRef.current.querySelectorAll('.code-snippet')
    
    snippets.forEach((snippet, index) => {
      // Random position
      const randomX = Math.random() * 80 + 10 // 10-90%
      const randomY = Math.random() * 80 + 10
      
      gsap.set(snippet, {
        left: `${randomX}%`,
        top: `${randomY}%`,
        opacity: 0
      })

      // Staggered fade in
      gsap.to(snippet, {
        opacity: 0.6,
        duration: 1.5,
        delay: index * 0.3,
        ease: 'power2.out'
      })

      // Floating animation
      gsap.to(snippet, {
        y: '+=30',
        x: '+=20',
        duration: 8 + Math.random() * 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: Math.random() * 2
      })

      // Subtle rotation
      gsap.to(snippet, {
        rotation: Math.random() * 6 - 3,
        duration: 6 + Math.random() * 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
    })

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY
      snippets.forEach((snippet, index) => {
        const speed = 0.2 + (index * 0.1)
        gsap.to(snippet, {
          y: scrollY * speed,
          duration: 0.5,
          overwrite: 'auto'
        })
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [snippetCount])

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    >
      {CODE_SNIPPETS.slice(0, snippetCount).map((snippet, index) => (
        <div
          key={index}
          className="code-snippet absolute"
          style={{
            filter: 'blur(1px)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="bg-slate-900/40 backdrop-blur-md rounded-lg p-4 border border-slate-700/30 shadow-2xl max-w-xs">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <span className={`text-xs font-mono ${snippet.color}`}>
                {snippet.language}
              </span>
            </div>
            <pre className="text-xs font-mono text-slate-300 leading-relaxed overflow-hidden">
              {snippet.code}
            </pre>
          </div>
        </div>
      ))}
    </div>
  )
}
