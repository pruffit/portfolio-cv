import { ReactNode } from 'react'
import { Container } from '@/shared/ui/container'
import { cn } from '@/shared/lib/utils'
import { SEO } from '@/shared/SEO'

interface SectionProps {
  id: string
  title: string
  children: ReactNode
  className?: string
}

export function Section({ id, title, children, className }: SectionProps) {
  return (
    <>
      <SEO title="Секция" titleEn="Section" path="/" />
      <section id={id} className={cn('py-16 md:py-24', className)}>
        <Container>
          <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
          {children}
        </Container>
      </section>
    </>
  )
}
