'use client'

import { useState, FormEvent } from 'react'
import { Loader2, Upload, X, Send, AlertCircle, CheckCircle2 } from 'lucide-react'

type InquiryType = 'contact' | 'quote' | 'schedule' | 'support'

interface DynamicContactFormProps {
  defaultType?: InquiryType
}

interface ValidationErrors {
  [key: string]: string
}

export function DynamicContactForm({ defaultType = 'contact' }: DynamicContactFormProps) {
  const [inquiryType, setInquiryType] = useState<InquiryType>(defaultType)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'success' | 'error'>('success')
  const [files, setFiles] = useState<File[]>([])
  const [errors, setErrors] = useState<ValidationErrors>({})

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\d\s+()-]{10,}$/
    return phoneRegex.test(phone)
  }

  const validateForm = (formData: FormData): boolean => {
    const newErrors: ValidationErrors = {}
    
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const messageText = formData.get('message') as string
    
    if (!firstName || firstName.trim().length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters'
    }
    
    if (!lastName || lastName.trim().length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters'
    }
    
    if (!email || !validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!phone || !validatePhone(phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    
    if (!messageText || messageText.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    // Inquiry-specific validation
    if (inquiryType === 'quote') {
      const company = formData.get('company') as string
      if (!company || company.trim().length < 2) {
        newErrors.company = 'Company name is required for quotes'
      }
    }

    if (inquiryType === 'schedule') {
      const preferredDate = formData.get('preferredDate') as string
      const preferredTime = formData.get('preferredTime') as string
      
      if (!preferredDate) {
        newErrors.preferredDate = 'Please select a preferred date'
      }
      
      if (!preferredTime) {
        newErrors.preferredTime = 'Please select a preferred time'
      }
    }

    // File validation
    if (files.length > 0) {
      const maxSize = 3 * 1024 * 1024 // 3MB
      const invalidFiles = files.filter(file => file.size > maxSize)
      if (invalidFiles.length > 0) {
        newErrors.files = `${invalidFiles.length} file(s) exceed 3MB limit`
      }
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      const maxSize = 3 * 1024 * 1024 // 3MB
      const validFiles = newFiles.filter(file => {
        if (file.size > maxSize) {
          setErrors(prev => ({
            ...prev,
            files: `${file.name} exceeds 3MB limit`
          }))
          return false
        }
        return true
      })
      setFiles(prev => [...prev, ...validFiles])
      // Clear error if valid files added
      if (validFiles.length > 0 && errors.files) {
        setErrors(prev => {
          const { files, ...rest } = prev
          return rest
        })
      }
    }
  }

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
    if (errors.files) {
      setErrors(prev => {
        const { files, ...rest } = prev
        return rest
      })
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrors({})
    setMessage('')

    const formData = new FormData(e.currentTarget)
    
    // Validate form
    if (!validateForm(formData)) {
      setMessage('Please fix the errors below')
      setMessageType('error')
      return
    }

    setLoading(true)

    try {
      // Add inquiry type
      formData.append('inquiryType', inquiryType)
      
      // Add files
      files.forEach((file) => {
        formData.append('files', file)
      })

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (response.ok) {
        setMessage('Thank you! We\'ll get back to you within 24 hours.')
        setMessageType('success')
        e.currentTarget.reset()
        setFiles([])
        setErrors({})
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.')
        setMessageType('error')
      }
    } catch (error) {
      setMessage('Failed to send message. Please check your connection and try again.')
      setMessageType('error')
    } finally {
      setLoading(false)
    }
  }

  const getFormTitle = () => {
    switch (inquiryType) {
      case 'quote':
        return 'Get Your Free Quote'
      case 'schedule':
        return 'Schedule a Call with Our Team'
      case 'support':
        return 'Technical Support Request'
      default:
        return 'Send Us a Message'
    }
  }

  const getFormDescription = () => {
    switch (inquiryType) {
      case 'quote':
        return 'Tell us about your project and we\'ll provide a detailed quote within 24 hours.'
      case 'schedule':
        return 'Choose your preferred date and time, and we\'ll confirm your appointment.'
      case 'support':
        return 'Describe your issue and our support team will assist you promptly.'
      default:
        return 'Fill out the form below and we\'ll get back to you as soon as possible.'
    }
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{getFormTitle()}</h2>
        <p className="text-muted-foreground mb-6">{getFormDescription()}</p>

        {/* Inquiry Type Selector */}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setInquiryType('contact')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              inquiryType === 'contact'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted hover:bg-muted/80'
            }`}
          >
            General Inquiry
          </button>
          <button
            type="button"
            onClick={() => setInquiryType('quote')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              inquiryType === 'quote'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted hover:bg-muted/80'
            }`}
          >
            Get Quote
          </button>
          <button
            type="button"
            onClick={() => setInquiryType('schedule')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              inquiryType === 'schedule'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted hover:bg-muted/80'
            }`}
          >
            Schedule Call
          </button>
          <button
            type="button"
            onClick={() => setInquiryType('support')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              inquiryType === 'support'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted hover:bg-muted/80'
            }`}
          >
            Support
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Global Error/Success Message */}
        {message && (
          <div className={`flex items-start gap-3 p-4 rounded-lg ${
            messageType === 'success' 
              ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800' 
              : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800'
          }`}>
            {messageType === 'success' ? (
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            )}
            <p className="text-sm font-medium">{message}</p>
          </div>
        )}

        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.firstName ? 'border-red-500 focus:ring-red-500' : 'border-border focus:ring-primary'
              } bg-background text-foreground focus:outline-none focus:ring-2`}
              placeholder="John"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.firstName}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.lastName ? 'border-red-500 focus:ring-red-500' : 'border-border focus:ring-primary'
              } bg-background text-foreground focus:outline-none focus:ring-2`}
              placeholder="Doe"
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.lastName}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.email ? 'border-red-500 focus:ring-red-500' : 'border-border focus:ring-primary'
              } bg-background text-foreground focus:outline-none focus:ring-2`}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-border focus:ring-primary'
              } bg-background text-foreground focus:outline-none focus:ring-2`}
              placeholder="+1 (555) 000-0000"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Company Information (for Quote) */}
        {inquiryType === 'quote' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company Name *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.company ? 'border-red-500 focus:ring-red-500' : 'border-border focus:ring-primary'
                } bg-background text-foreground focus:outline-none focus:ring-2`}
                placeholder="Your Company"
              />
              {errors.company && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.company}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-medium mb-2">
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select budget</option>
                <option value="< $5,000">Less than $5,000</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                <option value="$50,000+">$50,000+</option>
              </select>
            </div>
          </div>
        )}

        {/* Schedule Information (for Call) */}
        {inquiryType === 'schedule' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="preferredDate" className="block text-sm font-medium mb-2">
                Preferred Date *
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                min={new Date().toISOString().split('T')[0]}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.preferredDate ? 'border-red-500 focus:ring-red-500' : 'border-border focus:ring-primary'
                } bg-background text-foreground focus:outline-none focus:ring-2`}
              />
              {errors.preferredDate && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.preferredDate}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="preferredTime" className="block text-sm font-medium mb-2">
                Preferred Time *
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.preferredTime ? 'border-red-500 focus:ring-red-500' : 'border-border focus:ring-primary'
                } bg-background text-foreground focus:outline-none focus:ring-2`}
              >
                <option value="">Select time</option>
                <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
                <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                <option value="12:00 PM - 1:00 PM">12:00 PM - 1:00 PM</option>
                <option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>
                <option value="3:00 PM - 4:00 PM">3:00 PM - 4:00 PM</option>
                <option value="4:00 PM - 5:00 PM">4:00 PM - 5:00 PM</option>
              </select>
              {errors.preferredTime && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.preferredTime}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Service/Issue Type */}
        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium mb-2">
            {inquiryType === 'support' ? 'Issue Type' : 'Service Interested In'}
          </label>
          <select
            id="serviceType"
            name="serviceType"
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select an option</option>
            {inquiryType === 'support' ? (
              <>
                <option value="Technical Issue">Technical Issue</option>
                <option value="Bug Report">Bug Report</option>
                <option value="Feature Request">Feature Request</option>
                <option value="Account Issue">Account Issue</option>
                <option value="Other">Other</option>
              </>
            ) : (
              <>
                <option value="Web Development">Web Development</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="E-Commerce Solutions">E-Commerce Solutions</option>
                <option value="Cloud & DevOps">Cloud & DevOps</option>
                <option value="AI & ML Solutions">AI & ML Solutions</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Consulting">Consulting</option>
                <option value="Other">Other</option>
              </>
            )}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            {inquiryType === 'quote' ? 'Project Description *' : 'Message *'}
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.message ? 'border-red-500 focus:ring-red-500' : 'border-border focus:ring-primary'
            } bg-background text-foreground focus:outline-none focus:ring-2 resize-none`}
            placeholder={
              inquiryType === 'quote'
                ? 'Tell us about your project requirements, goals, and timeline...'
                : inquiryType === 'support'
                ? 'Please describe the issue you\'re experiencing in detail...'
                : 'How can we help you?'
            }
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.message}
            </p>
          )}
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Attachments {inquiryType === 'quote' && '(RFP, Designs, Documents)'}
          </label>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 px-4 py-3 rounded-lg border-2 border-dashed border-border hover:border-primary transition-colors cursor-pointer">
              <Upload className="w-5 h-5" />
              <span>Upload Files</span>
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf,.jpg,.png,.doc,.docx"
              />
            </label>
            <span className="text-sm text-muted-foreground">
              Max 3MB per file
            </span>
          </div>

          {errors.files && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.files}
            </p>
          )}

          {/* File List */}
          {files.length > 0 && (
            <div className="mt-4 space-y-2">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted"
                >
                  <div className="flex-1 min-w-0">
                    <span className="text-sm truncate block">{file.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {(file.size / 1024).toFixed(2)} KB
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="ml-3 text-muted-foreground hover:text-destructive transition-colors"
                    aria-label="Remove file"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              {inquiryType === 'schedule' ? 'Request Call' : 'Send Message'}
            </>
          )}
        </button>
      </form>
    </div>
  )
}
