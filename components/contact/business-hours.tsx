import { Clock } from 'lucide-react'
import { getOfficeStatus } from '@/lib/office-hours'

export function BusinessHours() {
  const officeStatus = getOfficeStatus()

  if (!officeStatus) return null

  const status = officeStatus
  
  return (
    <div className="rounded-lg border border-border bg-card p-6 mb-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/10">
          <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">Business Hours</h3>
      </div>

      <div className="space-y-3">
        {/* Status Indicator */}
        <div className="flex items-center gap-2">
          <span
            className="inline-block w-3 h-3 rounded-full"
            style={{ backgroundColor: status.indicator }}
          />
          <span
            className={`text-sm font-medium ${status.isOpen ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}
          >
            {status.status}
          </span>
        </div>

        {/* Hours */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-sm text-foreground">
            <span className="font-medium">Monday - Friday:</span>
            <span>9:00 AM - 6:00 PM IST</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground">
            <span className="font-medium">Saturday - Sunday:</span>
            <span className="text-muted-foreground">Closed</span>
          </div>
        </div>

        {/* Next Opening Message */}
        {status.reason && (
          <div className="pt-2 mt-3 border-t border-border">
            <p className="text-sm text-muted-foreground italic">{status.reason}</p>
          </div>
        )}
      </div>
    </div>
  )
}
