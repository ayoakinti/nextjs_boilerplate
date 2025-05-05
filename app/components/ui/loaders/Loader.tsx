import { cn } from '@/lib/cn'
import type { LoaderBaseProps } from './types'

export default function Loader({
  size = 'md',
  spinnerClassName
}: LoaderBaseProps) {
  const sizeMap = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-10 w-10'
  }

  return (
    <div
      role='status'
      className={cn(
        'animate-spin rounded-full border-2 border-gray-300 border-t-primary-500',
        sizeMap[size],
        spinnerClassName
      )}
    />
  )
}
