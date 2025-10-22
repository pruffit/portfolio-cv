import { Experience } from '../model'
import { useTranslation } from 'react-i18next'
import { Calendar, Users } from 'lucide-react'
import { motion } from 'motion/react'

interface ExperienceCardProps {
  experience: Experience
  index: number
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-all hover:shadow-lg"
    >
      <div className="mb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold">{experience.company}</h3>
            <p className="text-lg text-muted-foreground">{t(experience.position)}</p>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="size-4" />
          <span>{t(experience.period)}</span>
        </div>
      </div>

      <p className="mb-4 text-muted-foreground">{t(experience.description)}</p>

      <div className="mb-4">
        <h4 className="mb-2 text-sm font-semibold">{t('experience.technologies')}</h4>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map(tech => (
            <span
              key={tech}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {experience.team && (
        <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="size-4" />
          <span>{t('experience.team')}:</span>
          <span>
            {experience.team.frontend && `${experience.team.frontend} Frontend`}
            {experience.team.backend && `, ${experience.team.backend} Backend`}
            {experience.team.designer && `, ${experience.team.designer} Designer`}
            {experience.team.manager && `, ${experience.team.manager} PM`}
          </span>
        </div>
      )}

      <details className="mb-4">
        <summary className="cursor-pointer font-semibold text-sm hover:text-primary">
          {t('experience.responsibilities')} ({experience.responsibilities.length})
        </summary>
        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
          {experience.responsibilities.map((resp, idx) => (
            <li key={idx} className="flex gap-2">
              <span className="text-primary">•</span>
              <span>{t(resp)}</span>
            </li>
          ))}
        </ul>
      </details>

      <details>
        <summary className="cursor-pointer font-semibold text-sm hover:text-primary">
          {t('experience.achievements')} ({experience.achievements.length})
        </summary>
        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
          {experience.achievements.map((ach, idx) => (
            <li key={idx} className="flex gap-2">
              <span className="text-green-500">✓</span>
              <span>{t(ach)}</span>
            </li>
          ))}
        </ul>
      </details>
    </motion.div>
  )
}
