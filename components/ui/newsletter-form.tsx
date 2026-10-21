'use client'

import { Send } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useState } from 'react'
import Turnstile from 'react-turnstile'

export function NewsletterForm() {
  const { resolvedTheme } = useTheme()
  const [token, setToken] = useState('')
  const [captchaKey, setCaptchaKey] = useState(0)
  const [captchaError, setCaptchaError] = useState(false)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@') || !token) {
      setStatus('error')
      setMessage('Please enter a valid email and complete verification')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, turnstileToken: token }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage(data.message || 'Successfully subscribed!')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Failed to subscribe. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again later.')
    } finally {
      setToken('')
      setCaptchaKey(key => key + 1)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-3">
        <input
          aria-label="Email address"
          required
          maxLength={254}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          disabled={status === 'loading'}
          className="flex-1 px-4 py-2.5 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed text-sm"
        />
        <button
          type="submit"
          disabled={status === 'loading' || captchaError}
          className="px-6 py-2.5 bg-brand text-primary-foreground rounded-lg hover:bg-brand/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium text-sm flex items-center gap-2"
        >
          {status === 'loading' ? (
            'Subscribing...'
          ) : (
            <>
              Subscribe
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
      
      {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && !captchaError && <Turnstile key={captchaKey} sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} theme={resolvedTheme === 'dark' ? 'dark' : 'light'} onVerify={setToken} onExpire={() => setToken('')} onError={() => { setToken(''); setCaptchaError(true) }} />}
      {captchaError && <div className="my-3 text-sm leading-relaxed text-muted-foreground" role="alert"><p>Verification couldn’t load. Please try again.</p><button type="button" className="mr-5 min-h-11 font-medium text-brand underline underline-offset-4" onClick={() => { setCaptchaKey(key => key + 1); setCaptchaError(false) }}>Retry verification</button><Link href="/blog" className="inline-flex min-h-11 items-center font-medium text-brand underline underline-offset-4">Read our journal instead</Link></div>}
      <p className="my-3 text-xs text-muted-foreground">Confirm your subscription by email. Unsubscribe anytime. <Link href="/privacy-policy" className="underline">Privacy policy</Link></p>
      {message && (
        <p
          className={`text-sm ${
            status === 'success'
              ? 'text-green-600 dark:text-green-400'
              : 'text-red-600 dark:text-red-400'
          }`}
        >
          {message}
        </p>
      )}
    </div>
  )
}
