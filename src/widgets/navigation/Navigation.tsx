import { useTranslation } from 'react-i18next'
import { cn } from '@/shared/lib/utils'

const navItems = [
  { key: 'about', href: '#about' },
  { key: 'skills', href: '#skills' },
  { key: 'experience', href: '#experience' },
  { key: 'projects', href: '#projects' },
  { key: 'hobbies', href: '#hobbies' },
  { key: 'achievements', href: '#achievements' },
  { key: 'game', href: '#game' },
  { key: 'contacts', href: '#contacts' },
]

interface NavigationProps {
  className?: string
}

export function Navigation({ className }: NavigationProps) {
  const { t } = useTranslation()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={cn('flex items-center gap-1', className)}>
      {navItems.map(item => (
        <a
          key={item.key}
          href={item.href}
          onClick={e => handleClick(e, item.href)}
          className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground cursor-pointer"
        >
          {t(`nav.${item.key}`)}
        </a>
      ))}
    </nav>
  )
}
