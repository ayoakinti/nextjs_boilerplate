'use client'

import {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  type ReactNode
} from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/cn'

interface ModalState {
  isOpen: boolean
  modalContent: ReactNode | null
  openModal: (content: ReactNode) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalState | undefined>(undefined)

/* ───────────────────────────────────────────── */

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [modalContent, setModalContent] = useState<ReactNode | null>(null)
  const lastFocusedEl = useRef<HTMLElement | null>(null)

  const openModal = (content: ReactNode) => {
    lastFocusedEl.current = document.activeElement as HTMLElement
    setModalContent(content)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setModalContent(null)
    lastFocusedEl.current?.focus()
  }

  return (
    <ModalContext.Provider
      value={{ isOpen, modalContent, openModal, closeModal }}
    >
      {children}
      {isOpen && modalContent && (
        <ModalRoot onClose={closeModal}>{modalContent}</ModalRoot>
      )}
    </ModalContext.Provider>
  )
}

/* ───────────────────────────────────────────── */
/* Helper hook                                   */
export const useModal = () => {
  const ctx = useContext(ModalContext)
  if (!ctx) throw new Error('useModal must be used within ModalProvider')
  return ctx
}

/* ───────────────────────────────────────────── */
/* Modal portal root                             */

function ModalRoot({
  children,
  onClose
}: {
  children: ReactNode
  onClose: () => void
}) {
  const backdropRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  /* close on ESC */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  /* rudimentary focus-trap */
  useEffect(() => {
    const first = contentRef.current?.querySelector<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    first?.focus()
  }, [])

  const modal = (
    <div
      ref={backdropRef}
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 dark:bg-black/60 backdrop-blur-sm'
      onMouseDown={(e) => {
        if (e.target === backdropRef.current) onClose()
      }}
    >
      <div
        ref={contentRef}
        role='dialog'
        aria-modal='true'
        className={cn(
          'w-full max-w-lg rounded-lg bg-white dark:bg-zinc-800 p-6 shadow-lg'
        )}
      >
        {children}
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}
