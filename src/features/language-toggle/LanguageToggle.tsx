import { Languages } from 'lucide-react'
import { Button } from '@/shared/ui/button'
import { useTranslation } from 'react-i18next'

export function LanguageToggle() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ru' ? 'en' : 'ru'
    i18n.changeLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      aria-label="Toggle language"
      title={`Current: ${i18n.language?.toUpperCase() || 'RU'}`}
    >
      <Languages className="size-5" />
    </Button>
  )
}
