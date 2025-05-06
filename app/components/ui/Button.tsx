import Link from 'next/link'
import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

type BtnVariant = 'primary' | 'secondary' | 'danger' | 'warning' | 'custom'

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
    primary: 'bg-primary hover:bg-primary-700 text-white',
    secondary: 'bg-secondary hover:bg-secondary-700 text-white',
    danger: 'bg-danger hover:bg-danger-700 text-white',
    warning: 'bg-warning hover:bg-warning-700 text-white',
    custom: ''
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
