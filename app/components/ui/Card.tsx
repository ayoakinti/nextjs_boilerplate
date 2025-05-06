'use client'

import { useRouter } from 'next/navigation'
import { type HTMLAttributes, useCallback, KeyboardEvent } from 'react'
import { cn } from '@/lib/cn'

interface BaseProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
  ref?: React.Ref<HTMLDivElement>
}

type Clickable = { isClickable: true; clickUrl: string }
type Static = { isClickable?: false; clickUrl?: never }

type CardProps = BaseProps & (Clickable | Static)

export default function Card({
  children,
  className,
  isClickable = false,
  clickUrl,
  ref,
  ...divProps
}: CardProps) {
  const router = useRouter()

  const prefetch = useCallback(() => {
    if (isClickable && clickUrl) router.prefetch(clickUrl)
  }, [isClickable, clickUrl, router])

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!isClickable) return
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick()
    }
  }

  const handleClick = () => {
    if (isClickable && clickUrl) router.push(clickUrl)
  }

  const cardClasses = cn(
    'rounded-lg bg-white dark:bg-zinc-800 shadow p-4',
    isClickable &&
      'cursor-pointer transition-shadow duration-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
    className
  )

  return (
    <div
      ref={ref}
      className={cardClasses}
      onMouseEnter={prefetch}
      onFocus={prefetch}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      {...(isClickable && { role: 'button', tabIndex: 0 })}
      {...divProps}
    >
      {children}
    </div>
  )
}
