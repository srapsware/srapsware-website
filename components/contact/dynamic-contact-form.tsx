'use client'
import { site } from '@/config/site'
import { inquiryTypes,parseContact,uploadLimits,type InquiryType } from '@/lib/contact-schema'
import { ArrowUpRight,Loader2 } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useEffect,useRef,useState,type FormEvent } from 'react'
import Turnstile from 'react-turnstile'

export function DynamicContactForm({ defaultType = 'contact' }: { defaultType?: InquiryType }) {
  const [type, setType] = useState<InquiryType>(defaultType)
  const [context,setContext] = useState({serviceType:'',projectContext:'',productContext:'',sourcePage:''})
  const [token, setToken] = useState('')
  const [captchaKey, setCaptchaKey] = useState(0)
  const [busy, setBusy] = useState(false)
  const [status, setStatus] = useState('')
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string,string>>({})
  const statusRef = useRef<HTMLDivElement>(null)
  const started = useRef(false)
  const { resolvedTheme } = useTheme()
  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get('type') as InquiryType
    if (inquiryTypes.includes(query)) setType(query)
    const params=new URLSearchParams(window.location.search)
    setContext({serviceType:(params.get('service')||'').slice(0,120),projectContext:(params.get('project')||'').slice(0,160),productContext:(params.get('product')||'').slice(0,160),sourcePage:(params.get('source')||'').split(/[?#]/)[0].slice(0,250)})
  }, [])
  const track = (name: string) => window.dispatchEvent(new CustomEvent('srapsware:lead', { detail: { event: name, inquiryType: type } }))
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (busy) return
    const form = event.currentTarget
    const data = new FormData(form)
    data.set('inquiryType', type)
    Object.entries(context).forEach(([key,value])=>data.set(key,value))
    data.set('turnstileToken', token)
    const { errors: nextErrors } = parseContact(data)
    if (!token) nextErrors.turnstileToken = 'Complete the verification before sending.'
    const files = data.getAll('files').filter(file => typeof file !== 'string' && file.size > 0) as File[]
    if (files.length > uploadLimits.count || files.some(file => file.size > uploadLimits.fileBytes) || files.reduce((sum, file) => sum + file.size, 0) > uploadLimits.totalBytes - 65536) nextErrors.files = 'Attach up to three files, each under 3 MB and under 4 MB combined.'
    setErrors(nextErrors); setSuccess(false)
    if (Object.keys(nextErrors).length) {
      setStatus('Please check the highlighted fields.'); track('validation_failed')
      const first = form.elements.namedItem(Object.keys(nextErrors)[0]) as HTMLElement | null
      first?.focus(); return
    }
    setBusy(true); setStatus('Sending your inquiry…')
    try {
      const response = await fetch('/api/contact', { method: 'POST', body: data, signal: AbortSignal.timeout(45000) })
      const result = await response.json()
      if (!response.ok) { setErrors(result.errors || {}); throw new Error(result.error || 'Unable to send your inquiry.') }
      setSuccess(true); setStatus(result.message); form.reset(); track('inquiry_sent')
    } catch (error) {
      setStatus(error instanceof Error && error.name !== 'TimeoutError' ? error.message : 'The request timed out. Please email us if you need to confirm delivery.'); track('delivery_failed')
    } finally {
      setBusy(false); setToken(''); setCaptchaKey(key => key + 1)
      requestAnimationFrame(() => statusRef.current?.focus())
    }
  }
  const field = (name: string, label: string, inputType = 'text', required = false) => <div>
    <label htmlFor={`contact-${name}`} className="mb-2 block text-sm font-medium">{label}{required ? ' *' : ' (optional)'}</label>
    <input id={`contact-${name}`} name={name} type={inputType} required={required} maxLength={name === 'email' ? 254 : 160} autoComplete={name === 'email' ? 'email' : name === 'firstName' ? 'given-name' : name === 'lastName' ? 'family-name' : name === 'company' ? 'organization' : name === 'phone' ? 'tel' : undefined} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `error-${name}` : undefined} className="w-full rounded-lg border border-input bg-background p-3 text-base" />
    {errors[name] && <p id={`error-${name}`} className="mt-2 text-sm text-red-700 dark:text-red-300">{errors[name]}</p>}
  </div>
  return <div className="rounded-2xl border border-border bg-card p-5 sm:p-8">
    <h2 className="text-2xl font-semibold tracking-tight">Let’s talk about what’s next.</h2>
    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Share a little context. Our team will review your inquiry and get back to you.</p>
    <form className="mt-8 space-y-6" onSubmit={submit} onFocus={() => { if (!started.current) { started.current = true; track('form_started') } }}>
      <fieldset disabled={busy} className="space-y-6">
        {Object.values(context).some(Boolean)&&<details className="rounded-xl border border-border bg-muted/30 p-4"><summary className="cursor-pointer text-sm font-medium">About: {context.productContext||context.projectContext||context.serviceType||'your project'} (edit)</summary><div className="mt-4 space-y-3">{Object.entries(context).filter(([,value])=>value).map(([key,value])=><div key={key}><label htmlFor={`context-${key}`} className="mb-1 block text-xs text-muted-foreground">{({serviceType:'Service',projectContext:'Project',productContext:'Product',sourcePage:'Source page'} as Record<string,string>)[key]}</label><input id={`context-${key}`} value={value} maxLength={key==='sourcePage'?250:160} onChange={event=>setContext(current=>({...current,[key]:event.target.value}))} className="w-full rounded-lg border border-input bg-background p-2 text-sm"/>{errors[key]&&<p className="mt-1 text-sm text-red-700 dark:text-red-300">{errors[key]}</p>}</div>)}</div></details>}
        <div><label htmlFor="inquiry-type" className="mb-2 block text-sm font-medium">How can we help?</label><select id="inquiry-type" value={type} onChange={e => setType(e.target.value as InquiryType)} className="w-full rounded-lg border border-input bg-background p-3"><option value="contact">General inquiry</option><option value="quote">Discuss a project</option><option value="schedule">Request a call</option><option value="support">Existing project support</option></select></div>
        <div className="grid gap-5 sm:grid-cols-2">{field('firstName','First name','text',true)}{field('lastName','Last name')}{field('email','Email','email',true)}{field('company','Company')}{field('phone','Phone','tel')}</div>
        {type === 'schedule' && <div className="grid gap-5 sm:grid-cols-2">{field('preferredDate','Preferred date','date',true)}{field('preferredTime','Preferred time and timezone','text',true)}<p className="text-xs text-muted-foreground sm:col-span-2">This is a request, not a confirmed booking. We’ll confirm a time with you.</p></div>}
        <div><label htmlFor="contact-message" className="mb-2 block text-sm font-medium">What would you like to build or improve? *</label><textarea id="contact-message" name="message" required minLength={10} maxLength={10000} rows={5} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'error-message' : undefined} className="w-full rounded-lg border border-input bg-background p-3" />{errors.message && <p id="error-message" className="mt-2 text-sm text-red-700 dark:text-red-300">{errors.message}</p>}</div>
        <div><label htmlFor="contact-files" className="mb-2 block text-sm font-medium">Project files (optional)</label><input id="contact-files" name="files" type="file" multiple accept=".pdf,.png,.jpg,.jpeg" aria-describedby="file-help" className="max-w-full text-sm" /><p id="file-help" className="mt-2 text-xs text-muted-foreground">Up to 3 PDF, PNG or JPEG files, 3 MB each and under 4 MB combined. Please don’t include passwords or sensitive personal data.</p>{errors.files && <p className="mt-2 text-sm text-red-700 dark:text-red-300">{errors.files}</p>}</div>
        <div className="hidden" aria-hidden="true"><label htmlFor="contact-website">Website<input id="contact-website" name="website" tabIndex={-1} autoComplete="off" /></label></div>
        {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ? <Turnstile key={`${captchaKey}-${resolvedTheme}`} sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} theme={resolvedTheme === 'dark' ? 'dark' : 'light'} onVerify={setToken} onExpire={() => setToken('')} onError={() => setToken('')} /> : <p className="text-sm text-muted-foreground">Online verification is unavailable. Please email <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.</p>}
        {errors.turnstileToken && <p className="text-sm text-red-700 dark:text-red-300">{errors.turnstileToken}</p>}
        <p className="text-xs leading-relaxed text-muted-foreground">We use your details to respond to this inquiry. Read our <Link href="/privacy-policy" className="underline">privacy policy</Link>. Sending a message does not subscribe you to marketing.</p>
        <button disabled={busy || !process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} className="button-primary w-full disabled:opacity-50">{busy ? <><Loader2 size={18} className="animate-spin" />Sending…</> : <>Send inquiry<ArrowUpRight size={18} /></>}</button>
      </fieldset>
      <div ref={statusRef} tabIndex={-1} role="status" aria-live="polite" className={`text-sm ${success ? 'text-green-700 dark:text-green-300' : 'text-muted-foreground'}`}>{status}</div>
    </form>
  </div>
}
