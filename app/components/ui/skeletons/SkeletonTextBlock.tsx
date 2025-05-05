import Skeleton from './Skeleton'
import { cn } from '@/lib/cn'

export interface SkeletonTextBlockProps {
  lines?: number
  className?: string
}

export function SkeletonTextBlock({
  lines = 3,
  className = ''
}: SkeletonTextBlockProps) {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn(
            'h-4',
            i === 0 ? 'w-2/3' : i === lines - 1 ? 'w-3/4' : 'w-full'
          )}
        />
      ))}
    </div>
  )
}
