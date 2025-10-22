import { Skill } from '../model'
import { useTranslation } from 'react-i18next'
import { cn } from '@/shared/lib/utils'

interface SkillCardProps {
  skill: Skill
}

const levelColors = {
  Beginner: 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-400',
  Intermediate: 'bg-blue-500/20 text-blue-700 dark:text-blue-400',
  Advanced: 'bg-green-500/20 text-green-700 dark:text-green-400',
}

export function SkillCard({ skill }: SkillCardProps) {
  const { t } = useTranslation()

  const getYearsText = (years: number) => {
    if (years === 1) return t('skills.years.one', { count: years })
    if (years >= 2 && years <= 4) return t('skills.years.few', { count: years })
    return t('skills.years.many', { count: years })
  }

  return (
    <div className="group relative overflow-hidden rounded-lg border bg-card p-4 transition-all hover:shadow-md">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <h4 className="font-semibold">{skill.name}</h4>
          <p className="text-sm text-muted-foreground">{getYearsText(skill.years)}</p>
        </div>
        <span
          className={cn('rounded-full px-2 py-1 text-xs font-medium', levelColors[skill.level])}
        >
          {t(`skills.levels.${skill.level}`)}
        </span>
      </div>
    </div>
  )
}
