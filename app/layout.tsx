import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './assets/styles/main.css'
import { ReactQueryProvider } from './providers/ReactQueryProvider'
import { ToastOutlet } from './components/ToastOutlet'
import { ModalProvider } from './providers/ModalProvider'

const roboto = Roboto({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Next.js Boilerplate',
  description: 'This is a Next.js boilerplate with Tailwind CSS and TypeScript.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${roboto.className} antialiased`}>
        <ReactQueryProvider>
          <ModalProvider>
            {children}
            <ToastOutlet />
          </ModalProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
