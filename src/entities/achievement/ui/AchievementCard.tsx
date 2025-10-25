import { Achievement } from '../model'
import { useTranslation } from 'react-i18next'
import { Calendar, Award, ExternalLink } from 'lucide-react'
import { motion } from 'motion/react'

interface AchievementCardProps {
  achievement: Achievement
  index: number
}

export function AchievementCard({ achievement, index }: AchievementCardProps) {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border bg-card transition-all hover:shadow-xl"
    >
      {achievement.image ? (
        <div className="relative w-full overflow-hidden bg-linear-to-br from-primary/5 via-background to-muted/30">
          <div className="flex aspect-video items-center justify-center p-6 sm:p-8">
            <img
              src={achievement.image}
              alt={t(achievement.title)}
              className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
        </div>
      ) : (
        <div className="flex aspect-video items-center justify-center bg-muted">
          <Award className="size-16 text-muted-foreground opacity-20 sm:size-20" />
        </div>
      )}

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <h3 className="mb-2 line-clamp-2 text-base font-bold leading-tight sm:mb-3 sm:text-xl">
          {t(achievement.title)}
        </h3>

        <div className="mb-3 space-y-1.5 text-xs text-muted-foreground sm:mb-4 sm:space-y-2 sm:text-sm">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Award className="size-3 shrink-0 sm:size-4" />
            <span className="truncate font-medium">{t(achievement.issuer)}</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Calendar className="size-3 shrink-0 sm:size-4" />
            <span>{achievement.date}</span>
          </div>
        </div>

        {achievement.description && (
          <p className="mb-3 line-clamp-3 flex-1 text-xs leading-relaxed text-muted-foreground sm:mb-4 sm:text-sm">
            {t(achievement.description)}
          </p>
        )}

        {achievement.skills && achievement.skills.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-1.5 sm:mb-4 sm:gap-2">
            {achievement.skills.slice(0, 3).map(skill => (
              <span
                key={skill}
                className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary transition-colors hover:bg-primary/20 sm:px-3 sm:py-1 sm:text-xs"
              >
                {skill}
              </span>
            ))}
            {achievement.skills.length > 3 && (
              <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground sm:px-3 sm:py-1 sm:text-xs">
                +{achievement.skills.length - 3}
              </span>
            )}
          </div>
        )}

        {achievement.link && (
          <a
            href={achievement.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto flex items-center gap-1.5 text-xs font-medium text-primary transition-colors hover:text-primary/80 sm:gap-2 sm:text-sm"
          >
            <span>Подробнее</span>
            <ExternalLink className="size-3 sm:size-4" />
          </a>
        )}
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-primary/50 via-primary to-primary/50 opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.div>
  )
}