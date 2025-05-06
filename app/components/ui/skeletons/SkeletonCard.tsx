import Skeleton from './Skeleton'
import { SkeletonTextBlock } from './SkeletonTextBlock'

export interface SkeletonCardProps {
  className?: string
}

export function SkeletonCard({ className = '' }: SkeletonCardProps) {
  return (
    <div
      className={`space-y-4 p-4 border border-gray-300 dark:border-zinc-500 rounded-lg shadow ${className}`}
    >
      <Skeleton className='h-6 w-2/3' />
      <Skeleton className='h-4 w-1/3' />
      <SkeletonTextBlock lines={3} />
    </div>
  )
}
