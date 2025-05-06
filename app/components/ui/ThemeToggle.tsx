'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon, Laptop } from 'lucide-react'
import { cn } from '@/lib/cn'

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // avoid SSR mismatch
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  // Determine current effective theme
  const current = theme === 'system' ? systemTheme : theme

  // Map to icons
  const icon = {
    light: <Sun className='w-5 h-5 text-yellow-500' />,
    dark: <Moon className='w-5 h-5 text-indigo-500' />,
    system: <Laptop className='w-5 h-5 text-gray-500' />
  }[current || 'system']

  return (
    <div className='flex items-center gap-2'>
      {icon}

      <select
        aria-label='Theme selector'
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className={cn(
          'bg-transparent text-sm',
          'border border-gray-300 dark:border-zinc-600 rounded p-1',
          'text-gray-700 dark:text-gray-300',
          'focus:outline-none focus:ring-1 focus:ring-primary-500'
        )}
      >
        <option value='light'>Light mode</option>
        <option value='dark'>Dark mode</option>
        <option value='system'>System default</option>
      </select>
    </div>
  )
}
