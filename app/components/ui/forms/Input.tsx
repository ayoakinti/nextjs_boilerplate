import {
  ChangeEvent,
  InputHTMLAttributes,
  Ref,
  useEffect,
  useMemo,
  useState
} from 'react'
import _debounce from 'lodash.debounce'

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  label: string
  labelClass?: string
  inputClass?: string
  innerLabel?: boolean
  ref?: Ref<HTMLInputElement>
  value: string | number
  shouldDebounce?: boolean
  hasError?: boolean
  errorMessage?: string
  onChange?: (value: string) => void
  onBlur?: () => void
  onEnterKey?: (value: string | number) => void
  onEscapeKey?: () => void
}

export default function Input({
  label,
  labelClass = '',
  inputClass = '',
  ref,
  className = '',
  shouldDebounce = false,
  innerLabel = false,
  hasError = false,
  errorMessage = '',
  onChange,
  onBlur,
  onEnterKey,
  onEscapeKey,
  value,
  ...props
}: InputProps) {
  const [localValue, setLocalValue] = useState(value)

  const debouncedOnChange = useMemo(
    () =>
      _debounce((newValue: string) => {
        onChange?.(newValue)
      }, 500),
    [onChange]
  )

  useEffect(() => {
    setLocalValue((oldValue) => {
      if (oldValue !== value) {
        return value
      }
      return oldValue
    })
  }, [value])

  const handleChange = (newValue: string) => {
    if (onChange === undefined) return

    if (shouldDebounce) {
      debouncedOnChange(newValue)
    } else onChange(newValue)
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setLocalValue(newValue)

    handleChange(newValue)
  }

  const onInputBlur = () => {
    if (props.type === 'number') {
      const newValue = Number(localValue).toString()
      setLocalValue(newValue)

      if (newValue !== value) handleChange(newValue)
    }
    if (onBlur) onBlur()
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      if (onEscapeKey) onEscapeKey()
    }
    if (event.key === 'Enter') {
      if (onEnterKey) onEnterKey(localValue)
    }
  }

  labelClass = `${innerLabel ? 'absolute left-2 top-[6px] text-muted text-xs' : ''} ${labelClass}`

  className = `flex flex-col ${innerLabel ? 'relative' : ''} ${className}`

  const errorClass = hasError ? '!border-danger' : ''

  const defaultInputClass =
    'border border-gray-300 rounded-md focus:border-gray-700 dark:border-zinc-700 focus:dark:border-zinc-500 outline-none p-2 transition duration-300'

  inputClass = `${defaultInputClass} ${errorClass} ${innerLabel ? 'pt-5' : ''} ${inputClass}`

  props.type = props.type || 'text'

  return (
    <div className={className}>
      <label
        htmlFor={props.id}
        className={labelClass}
      >
        {label}
      </label>
      <div className='flex flex-1 flex-col w-full'>
        <input
          ref={ref}
          {...props}
          value={localValue}
          onChange={onInputChange}
          onBlur={onInputBlur}
          onKeyDown={handleKeyDown}
          step={props.type === 'number' ? 'any' : undefined}
          className={inputClass}
        />
        {hasError && errorMessage && (
          <span className='text-danger text-sm'>{errorMessage}</span>
        )}
      </div>
    </div>
  )
}
