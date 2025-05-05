import { cn } from '@/lib/cn'
import type { HTMLAttributes } from 'react'

type Variant = 'rounded' | 'square' | 'circle'

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: Variant
}

export default function Skeleton({
  className,
  variant = 'rounded',
  ...props
}: SkeletonProps) {
  const shapeClass = {
    rounded: 'rounded-md',
    square: 'rounded-none',
    circle: 'rounded-full'
  }[variant]

  return (
    <div
      className={cn(
        'relative isolate overflow-hidden bg-gray-200 dark:bg-zinc-700',
        'before:absolute before:inset-0 before:-translate-x-full',
        'before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r',
        'before:from-transparent before:via-white/40 before:to-transparent',
        'before:z-10',
        shapeClass,
        className
      )}
      {...props}
    />
  )
}
