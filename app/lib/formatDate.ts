export type DateFormatType =
  | 'fullDate'
  | 'fullDateTime'
  | 'monthYear'
  | 'dateMonth'
  | 'year'
  | 'monthDigit'
  | 'dayDigit'
  | 'fullDay'
  | 'iso'
  | 'time'

export const formatDateUtils = (
  isoString: string,
  locale: string = 'en-US',
  formatType: DateFormatType = 'fullDate'
) => {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

  const date = new Date(isoString)

  let options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone
  }

  switch (formatType) {
    case 'fullDateTime':
      options = {
        ...options,
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }
      break
    case 'monthYear':
      options = { month: 'long', year: 'numeric', timeZone }
      break
    case 'dateMonth':
      options = { day: 'numeric', month: 'long', timeZone }
      break
    case 'year':
      options = { year: 'numeric', timeZone }
      break
    case 'monthDigit':
      options = { month: 'numeric', timeZone }
      break
    case 'dayDigit':
      options = { day: 'numeric', timeZone }
      break
    case 'iso':
      options = { year: 'numeric', month: '2-digit', day: '2-digit', timeZone }
      break
  }

  return new Intl.DateTimeFormat(locale, options).format(date)
}
