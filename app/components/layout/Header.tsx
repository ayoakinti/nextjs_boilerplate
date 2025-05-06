'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/cn'
import Logo from '@/components/ui/Logo'
import Button from '@/components/ui/Button'
import ThemeToggle from '@/components/ui/ThemeToggle'

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
]

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-colors duration-300',
        scrolled
          ? 'bg-secondary border-b border-secondary shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className='mx-auto max-w-7xl px-4 md:px-6 py-3'>
        <div className='flex items-center justify-between h-16'>
          <Logo className='text-xl font-bold text-primary' />

          {/* Desktop Nav */}
          <nav className='hidden md:flex items-center space-x-6'>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'transition-colors hover:text-primary',
                  pathname === item.href
                    ? 'text-primary font-medium'
                    : 'hover:text-primary'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Theme + CTA */}
          <div className='hidden md:flex items-center gap-4'>
            <ThemeToggle />
            <Link href='/contact'>
              <Button variant='primary'>Get in Touch</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            aria-label='Toggle Navigation'
            type='button'
            onClick={() => setIsNavOpen(!isNavOpen)}
            className='md:hidden rounded-md p-2 hover:bg-secondary'
          >
            <Menu className='h-6 w-6 text-primary' />
          </button>
        </div>

        {/* Mobile Nav */}
        {isNavOpen && (
          <nav className='md:hidden mt-2 space-y-2 pb-4'>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsNavOpen(false)}
                className={cn(
                  'block py-2 px-1 text-sm transition-colors',
                  pathname === item.href
                    ? 'text-primary font-medium'
                    : 'hover:text-primary'
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className='mt-4 flex flex-col gap-2'>
              <ThemeToggle />
              <Link
                href='/contact'
                onClick={() => setIsNavOpen(false)}
              >
                <Button
                  variant='primary'
                  className='w-full'
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
