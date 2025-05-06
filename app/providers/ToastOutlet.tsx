import { Toaster } from 'sonner'

export function ToastOutlet() {
  return (
    <Toaster
      position='top-right'
      richColors
      closeButton
      expand
      duration={4000}
      toastOptions={{
        classNames: {
          toast:
            'rounded-xl shadow-lg border bg-white dark:bg-zinc-800 text-sm',
          title: 'font-semibold text-base',
          description: 'text-sm opacity-90'
        }
      }}
    />
  )
}
