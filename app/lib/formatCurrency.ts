export type FormatCurrencyOptions = {
  compact?: boolean
  minimumFractionDigits?: number
  maximumFractionDigits?: number
  currencyDisplay?: 'symbol' | 'code' | 'name'
}

export const formatCurrencyUtils = (
  amount: number,
  locale: string = 'en-US',
  currency: string = 'USD',
  options: FormatCurrencyOptions = {}
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    notation: options.compact ? 'compact' : 'standard',
    currencyDisplay: options.currencyDisplay ?? 'symbol',
    minimumFractionDigits: options.minimumFractionDigits ?? 2,
    maximumFractionDigits: options.maximumFractionDigits ?? 2
  }).format(amount)
}
