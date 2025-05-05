import Loader from './Loader'
import LoaderText, { LoaderTextProps } from './LoaderText'
import { cn } from '@/lib/cn'
import type { LoaderBaseProps } from './types'

export interface FullscreenLoaderProps
  extends LoaderTextProps,
    LoaderBaseProps {
  showText?: boolean
  wrapperClassName?: string
}

export default function FullscreenLoader({
  showText = true,
  wrapperClassName,
  ...loaderProps
}: FullscreenLoaderProps) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-white/70 dark:bg-black/40',
        wrapperClassName
      )}
    >
      {showText ? (
        <LoaderText {...loaderProps} />
      ) : (
        <Loader
          size={loaderProps.size ?? 'lg'}
          spinnerClassName={loaderProps.spinnerClassName}
        />
      )}
    </div>
  )
}
