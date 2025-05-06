'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/cn'
import { usePathname } from 'next/navigation'

interface NavLink {
  href: string
  label: string
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-colors duration-100',
        scrolled
          ? 'bg-white dark:bg-zinc-900 border-b dark:border-zinc-700'
          : 'bg-transparent border-none'
      )}
    >
      <nav className='mx-auto max-w-6xl px-6 py-4 flex items-center justify-between'>
        {/* Logo */}
        <Link
          href='/'
          className='text-xl font-bold text-primary-600'
        >
          MySite
        </Link>

        {/* Nav Links */}
        <ul className='flex space-x-6 text-sm'>
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'transition-colors',
                    isActive
                      ? 'text-primary-600 font-semibold'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-500'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
