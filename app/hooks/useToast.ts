import { useCallback } from 'react'
import { toast } from 'sonner'

type ToastOptions = Parameters<typeof toast.success>[1]

export const useToast = () => {
  const showSuccessToast = useCallback(
    (message: string, options?: ToastOptions) => {
      toast.success(message, options)
    },
    []
  )

  const showErrorToast = useCallback(
    (message: string, options?: ToastOptions) => {
      toast.error(message, options)
    },
    []
  )

  const showInfoToast = useCallback(
    (message: string, options?: ToastOptions) => {
      toast.info(message, options)
    },
    []
  )

  return {
    showSuccessToast,
    showErrorToast,
    showInfoToast
  }
}
