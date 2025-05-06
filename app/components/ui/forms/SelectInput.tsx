import { cn } from '@/lib/cn'
import { ChevronDown } from 'lucide-react'
import type { SelectHTMLAttributes } from 'react'

type Option = string | { value: string; label: string }
type OptionMap = Record<string, string>

interface SelectInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[] | OptionMap
  isNullable?: boolean
  nullLabel?: string
  label?: string
  errorMessage?: string
  selectClassName?: string
  labelClassName?: string
}

function normalizeOptions(opts: Option[] | OptionMap): Option[] {
  if (Array.isArray(opts)) return opts
  return Object.entries(opts).map(([label, value]) => ({ label, value }))
}

export default function SelectInput({
  id,
  name,
  options,
  label,
  isNullable = true,
  nullLabel = '--- Select ---',
  errorMessage,
  selectClassName = '',
  labelClassName = '',
  className = '',
  ...props
}: SelectInputProps) {
  const opts = normalizeOptions(options)

  const computedId = id ?? name

  return (
    <div className={cn('flex flex-col', className)}>
      {label && (
        <label
          htmlFor={computedId}
          className={cn('mb-1 text-sm', labelClassName)}
        >
          {label}
        </label>
      )}

      <div className='relative'>
        <select
          id={computedId}
          name={name}
          className={cn(
            'w-full appearance-none rounded-md border bg-white dark:bg-zinc-800',
            'py-2 pl-2 pr-8 text-sm',
            'border-gray-300 dark:border-zinc-600',
            'focus:ring-1 focus:ring-primary focus:border-primary',
            errorMessage &&
              'border-danger focus:border-danger focus:ring-danger',
            selectClassName
          )}
          {...props}
        >
          {isNullable && <option value=''>{nullLabel}</option>}
          {opts.map((o) => {
            const value = typeof o === 'string' ? o : o.value
            const labelText = typeof o === 'string' ? o : o.label
            return (
              <option
                key={value}
                value={value}
              >
                {labelText}
              </option>
            )
          })}
        </select>

        <ChevronDown
          size={16}
          className='pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-500'
        />
      </div>

      {errorMessage && (
        <p className='mt-1 text-sm text-danger'>{errorMessage}</p>
      )}
    </div>
  )
}
