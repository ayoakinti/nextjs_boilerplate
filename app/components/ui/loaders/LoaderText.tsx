import Loader from './Loader'
import { cn } from '@/lib/cn'
import type { LoaderBaseProps } from './types'

export interface LoaderTextProps extends LoaderBaseProps {
  label?: string
  className?: string
}

export default function LoaderText({
  label = 'Loading...',
  size = 'md',
  className,
  spinnerClassName
}: LoaderTextProps) {
  return (
    <div className={cn('inline-flex items-center gap-2', className)}>
      <Loader
        size={size}
        spinnerClassName={spinnerClassName}
      />
      <span className='text-sm font-medium'>{label}</span>
    </div>
  )
}
