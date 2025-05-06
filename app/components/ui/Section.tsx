import { cn } from '@/lib/cn'
import { HTMLAttributes } from 'react'

export default function Section({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn('mx-auto max-w-7xl p-6 space-y-6', className)}
      {...props}
    />
  )
}
