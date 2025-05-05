export type FormatNumberOptions = {
  minimumFractionDigits?: number
  maximumFractionDigits?: number
}

export const formatCompactNumber = (
  value: number,
  locale: string = 'en-US',
  options: FormatNumberOptions = {}
): string => {
  return new Intl.NumberFormat(locale, {
    notation: 'compact',
    compactDisplay: 'short',
    minimumFractionDigits: options.minimumFractionDigits ?? 0,
    maximumFractionDigits: options.maximumFractionDigits ?? 1
  }).format(value)
}

export const formatPercentage = (
  value: number, // Expect 0.75 for 75%
  locale: string = 'en-US',
  options: FormatNumberOptions = {}
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'percent',
    minimumFractionDigits: options.minimumFractionDigits ?? 0,
    maximumFractionDigits: options.maximumFractionDigits ?? 2
  }).format(value)
}

export const formatDecimal = (
  value: number,
  locale: string = 'en-US',
  options: FormatNumberOptions = {}
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'decimal',
    minimumFractionDigits: options.minimumFractionDigits ?? 0,
    maximumFractionDigits: options.maximumFractionDigits ?? 2
  }).format(value)
}
