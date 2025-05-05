interface CheckboxProps {
  id: string
  label: string
  value: boolean
  onChange: (value: boolean) => void
  className?: string
  description?: string
  disabled?: boolean
}

export default function Checkbox({
  id,
  label,
  value,
  onChange,
  className = '',
  description,
  disabled = false
}: CheckboxProps) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className='flex items-start gap-2 cursor-pointer w-fit'
      >
        <input
          id={id}
          type='checkbox'
          checked={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.checked)}
          className='mt-0.5 h-4 w-4 cursor-pointer rounded border-gray-300 text-primary-600 focus:ring-primary-500 disabled:opacity-50'
        />
        <div>
          <span className='text-sm font-medium text-gray-900 dark:text-gray-100'>
            {label}
          </span>
          {description && (
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              {description}
            </p>
          )}
        </div>
      </label>
    </div>
  )
}
