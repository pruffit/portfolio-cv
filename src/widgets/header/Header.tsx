import { Container } from '@/shared/ui/container'
import { ThemeToggle } from '@/features/theme-toggle'
import { LanguageToggle } from '@/features/language-toggle'
import { Navigation } from '@/widgets/navigation'
import { useTranslation } from 'react-i18next'

export function Header() {
  const { t } = useTranslation()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">{t('about.name')}</span>
          </div>

          <div className="hidden md:flex md:flex-1 md:justify-center">
            <Navigation />
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>

        <div className="md:hidden pb-4">
          <Navigation className="flex-wrap justify-center" />
        </div>
      </Container>
    </header>
  )
}
