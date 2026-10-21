export const inquiryTypes = ['contact', 'quote', 'schedule', 'support'] as const
export type InquiryType = typeof inquiryTypes[number]
export const emailValid = (value: string) => value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
export const uploadLimits = { count: 3, fileBytes: 3 * 1024 * 1024, totalBytes: 4 * 1024 * 1024 }

export function parseContact(form: FormData) {
  const limits: Record<string, number> = { firstName: 80, lastName: 80, email: 254, phone: 40, company: 160, message: 10000, serviceType: 120, budget: 80, preferredDate: 10, preferredTime: 30, inquiryType: 20, turnstileToken: 2048 }
  const values: Record<string, string> = {}
  const errors: Record<string, string> = {}
  for (const [key, max] of Object.entries(limits)) {
    const value = form.get(key)
    if (value !== null && typeof value !== 'string') { errors[key] = 'Invalid field.'; continue }
    values[key] = (value || '').trim()
    if (values[key].length > max || (key !== 'message' && /[\r\n]/.test(values[key]))) errors[key] = 'Please shorten this field and remove line breaks.'
  }
  if (!values.firstName) errors.firstName = 'Please enter your name.'
  if (!emailValid(values.email || '')) errors.email = 'Please enter a valid email.'
  if ((values.message || '').length < 10) errors.message = 'Please tell us a little more (at least 10 characters).'
  values.inquiryType ||= 'contact'
  if (!inquiryTypes.includes(values.inquiryType as InquiryType)) errors.inquiryType = 'Choose a valid inquiry type.'
  if (values.inquiryType === 'schedule' && (!/^\d{4}-\d{2}-\d{2}$/.test(values.preferredDate) || !values.preferredTime)) errors.preferredDate = 'Choose a preferred date and time.'
  if (form.get('website')) errors.website = 'Unable to submit.'
  return { values, errors }
}
