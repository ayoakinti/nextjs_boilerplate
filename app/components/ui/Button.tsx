import Link from 'next/link'
import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

type BtnVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'warning'
  | 'icon-secondary'
  | 'custom'

type BtnSize = 'small' | 'medium' | 'large' | 'custom'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BtnVariant
  size?: BtnSize
  className?: string
  children: React.ReactNode
  href?: string
}

export default function Button({
  variant = 'custom',
  size = 'medium',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const variants: Record<BtnVariant, string> = {
    'primary': 'bg-primary-500 hover:bg-primary-700 text-white',
    'secondary': 'bg-secondary-500 hover:bg-secondary-700 text-white',
    'danger': 'bg-danger-500 hover:bg-danger-700 text-white',
    'warning': 'bg-warning-500 hover:bg-warning-700 text-white',
    'icon-secondary': 'text-secondary-500 hover:text-secondary-700',
    'custom': ''
  }

  const sizes: Record<BtnSize, string> = {
    small: 'py-1 px-2 text-sm rounded-sm',
    medium: 'py-2 px-4 text-base rounded-md',
    large: 'py-3 px-6 text-lg rounded-lg',
    custom: ''
  }

  const defaultBtnClass =
    'inline-block disabled:bg-gray-300 transition duration-300'

  const finalClassName = cn(
    variants[variant],
    sizes[size],
    defaultBtnClass,
    className
  )

  props.type = props.type || 'button'

  if (href) {
    return (
      <Link
        href={href}
        className={finalClassName}
        aria-disabled={props.disabled}
        onClick={(e) => {
          if (props.disabled) e.preventDefault()
        }}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      {...props}
      className={finalClassName}
    >
      {children}
    </button>
  )
}
