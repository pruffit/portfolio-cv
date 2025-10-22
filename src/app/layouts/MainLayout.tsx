import { ReactNode } from 'react'
import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'
import { ScrollToTop } from '@/features/scroll-to-top'
import { ScrollProgress } from '@/features/scroll-progress'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
