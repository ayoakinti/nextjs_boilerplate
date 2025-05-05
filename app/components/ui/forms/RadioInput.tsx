import { cn } from '@/lib/cn'

interface Option {
  label: string
  value: string | number
}

type RadioInputType = 'TRUE/FALSE'

export interface RadioInputProps {
  id: string
  title: string
  value: string | number
  onChange: (value: string | number) => void

  options?: Option[]
  type?: RadioInputType

  className?: string
  titleClass?: string
  optionClass?: string
  disabled?: boolean
  errorMessage?: string
}

export default function RadioInput({
  id,
  title,
  value,
  onChange,
  options = [],
  type,
  className = '',
  titleClass = '',
  optionClass = '',
  disabled = false,
  errorMessage
}: RadioInputProps) {
  const finalOptions: Option[] =
    type === 'TRUE/FALSE'
      ? [
          { label: 'Yes', value: 'true' },
          { label: 'No', value: 'false' }
        ]
      : options

  return (
    <div className={cn(className)}>
      <p className={cn('mb-1 text-sm font-medium', titleClass)}>{title}</p>

      <div className='flex flex-wrap items-center gap-6'>
        {finalOptions.map((opt) => {
          const inputId = `${id}-${opt.value}`
          return (
            <label
              key={opt.value}
              htmlFor={inputId}
              className={cn(
                'flex items-center gap-1 cursor-pointer',
                disabled && 'cursor-not-allowed opacity-60',
                optionClass
              )}
            >
              <input
                id={inputId}
                type='radio'
                name={id}
                value={opt.value}
                disabled={disabled}
                checked={value === opt.value}
                onChange={(e) =>
                  onChange(
                    typeof value === 'number'
                      ? Number(e.target.value)
                      : e.target.value
                  )
                }
                className='h-4 w-4 text-primary-600 focus:ring-primary-500'
              />
              <span className='text-sm'>{opt.label}</span>
            </label>
          )
        })}
      </div>

      {errorMessage && (
        <p className='mt-1 text-sm text-danger-500'>{errorMessage}</p>
      )}
    </div>
  )
}
