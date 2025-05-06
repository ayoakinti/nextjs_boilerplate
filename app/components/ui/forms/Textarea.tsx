import { cn } from '@/lib/cn'
import type { TextareaHTMLAttributes, Ref } from 'react'

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  errorMessage?: string
  textareaClassName?: string
  labelClassName?: string
  ref?: Ref<HTMLTextAreaElement>
}

export default function Textarea({
  id,
  name,
  label,
  errorMessage,
  textareaClassName = '',
  labelClassName = '',
  ref,
  className = '',
  rows = 4,
  ...props
}: TextareaProps) {
  const textareaId = id ?? name

  return (
    <div className={cn('flex flex-col', className)}>
      {label && (
        <label
          htmlFor={textareaId}
          className={cn('mb-1 text-sm font-medium', labelClassName)}
        >
          {label}
        </label>
      )}

      <textarea
        id={textareaId}
        name={name}
        ref={ref}
        rows={rows}
        className={cn(
          'w-full resize-y rounded-md border bg-white dark:bg-zinc-800',
          'px-3 py-2 text-sm placeholder-muted',
          'border-gray-300 dark:border-zinc-600',
          'focus:ring-1 focus:ring-primary focus:border-primary',
          errorMessage && 'border-danger focus:border-danger focus:ring-danger',
          textareaClassName
        )}
        {...props}
      />

      {errorMessage && (
        <p className='mt-1 text-sm text-danger'>{errorMessage}</p>
      )}
    </div>
  )
}
