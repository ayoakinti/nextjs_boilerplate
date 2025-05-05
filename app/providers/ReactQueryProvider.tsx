'use client'

import { QueryClientProvider, HydrationBoundary } from '@tanstack/react-query'
import { queryClient } from '@/lib/react-query-client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

interface ReactQueryProviderProps {
  children: React.ReactNode
  state?: unknown // for future hydration use if needed
}

export function ReactQueryProvider({
  children,
  state
}: ReactQueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={state}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </HydrationBoundary>
    </QueryClientProvider>
  )
}
