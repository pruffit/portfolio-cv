import { ReactNode } from 'react'
import { cn } from '@/shared/lib/utils'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8', className)}>
      {children}
    </div>
  )
}
