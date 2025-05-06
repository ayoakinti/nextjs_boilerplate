import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '@/assets/styles/main.css'
import { ReactQueryProvider } from '@/providers/ReactQueryProvider'
import { ToastOutlet } from '@/providers/ToastOutlet'
import { ModalProvider } from '@/providers/ModalProvider'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { cn } from '@/lib/cn'
import { ThemeProvider } from '@/providers/ThemeProvider'

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
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body
        className={cn(
          roboto.className,
          'antialiased h-dvh flex flex-col bg-background text-foreground'
        )}
      >
        <ReactQueryProvider>
          <ModalProvider>
            <ThemeProvider>
              <Header />

              <main className='flex-grow'>{children}</main>

              <Footer />
              <ToastOutlet />
            </ThemeProvider>
          </ModalProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
