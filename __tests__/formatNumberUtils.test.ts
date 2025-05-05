import {
  formatCompactNumber,
  formatPercentage,
  formatDecimal
} from '@/lib/formatNumberUtils.js'

describe('formatNumberUtils', () => {
  describe('formatCompactNumber', () => {
    it('formats numbers in compact notation', () => {
      expect(formatCompactNumber(1500, 'en-US')).toBe('1.5K')
      expect(formatCompactNumber(2000000, 'en-US')).toBe('2M')
    })
  })

  describe('formatPercentage', () => {
    it('formats numbers as percentages', () => {
      expect(formatPercentage(0.75, 'en-US')).toBe('75%')
      expect(formatPercentage(0.875, 'en-US')).toBe('87.5%')
    })
  })

  describe('formatDecimal', () => {
    it('formats decimal numbers correctly', () => {
      expect(formatDecimal(1234.56, 'en-US')).toBe('1,234.56')
      expect(
        formatDecimal(1234.5678, 'en-US', { maximumFractionDigits: 1 })
      ).toBe('1,234.6')
    })
  })
})
