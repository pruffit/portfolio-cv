import { Container } from '@/shared/ui/container'
import { ThemeToggle } from '@/features/theme-toggle'
import { LanguageToggle } from '@/features/language-toggle'
import { Navigation } from '@/widgets/navigation'
import { useTranslation } from 'react-i18next'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/shared/ui/button'

export function Header() {
  const { t } = useTranslation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold md:text-xl">{t('about.name')}</span>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-center">
            <Navigation />
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="size-5" />
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t py-4 lg:hidden">
            <Navigation className="flex-col items-start gap-2" />
          </div>
        )}
      </Container>
    </header>
  )
}
