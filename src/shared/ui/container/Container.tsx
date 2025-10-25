import { ReactNode } from 'react'
import { cn } from '@/shared/lib/utils'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-8', className)}>
      {children}
    </div>
  )
}