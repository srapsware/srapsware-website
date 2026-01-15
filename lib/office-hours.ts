/**
 * Single source of truth for office business hours
 * Used by both map component and business hours display
 */

export interface OfficeStatus {
  isOpen: boolean
  status: string
  reason: string
  indicator: string
}

export function getOfficeStatus(): OfficeStatus {
  // Convert current time to IST (GMT+5:30)
  const now = new Date()
  const istTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }))
  const day = istTime.getDay() // 0 = Sunday, 1 = Monday, etc.
  const hours = istTime.getHours()
  const minutes = istTime.getMinutes()
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  // Check if it's Saturday (6) or Sunday (0)
  if (day === 0 || day === 6) {
    const nextDay = 'Monday'
    return {
      isOpen: false,
      status: 'Closed',
      reason: `Weekend • Opens ${nextDay} at 9:00 AM IST`,
      indicator: '#ef4444',
    }
  }

  // Check if it's within business hours (9 AM - 6 PM)
  const currentMinutes = hours * 60 + minutes
  const openTime = 9 * 60 // 9 AM
  const closeTime = 18 * 60 // 6 PM

  if (currentMinutes >= openTime && currentMinutes < closeTime) {
    return { isOpen: true, status: 'Open Now', reason: '', indicator: '#22c55e' }
  } else if (currentMinutes < openTime) {
    // Morning before opening - opens today
    return { isOpen: false, status: 'Closed', reason: `Opens Today at 9:00 AM IST`, indicator: '#ef4444' }
  } else {
    // After closing time (6 PM) - determine next working day
    let nextDayName = dayNames[(day + 1) % 7]

    // If it's Friday night, next day is Monday
    if (day === 5) {
      // Friday
      nextDayName = 'Monday'
    }

    return { isOpen: false, status: 'Closed', reason: `Opens ${nextDayName} at 9:00 AM IST`, indicator: '#ef4444' }
  }
}
