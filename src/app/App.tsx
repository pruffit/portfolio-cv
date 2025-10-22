import { Button } from '@/shared/ui/button'
import { ThemeToggle } from '@/features/theme-toggle'
import { LanguageToggle } from '@/features/language-toggle'
import { useTranslation } from 'react-i18next'

export function App() {
  const { t } = useTranslation()

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4">
      <div className="flex gap-2">
        <ThemeToggle />
        <LanguageToggle />
      </div>
      <Button>Click me</Button>
      <div className="text-center">
        <h2 className="text-2xl font-bold">{t('test.title')}</h2>
        <p className="text-muted-foreground">{t('test.description')}</p>
      </div>
    </div>
  )
}
