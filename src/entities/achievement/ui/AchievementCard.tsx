import { Achievement } from '../model'
import { useTranslation } from 'react-i18next'
import { Calendar, Award } from 'lucide-react'
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
      className="group relative flex h-full flex-col overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg"
    >
      {achievement.image ? (
        <div className="relative w-full overflow-hidden bg-linear-to-br from-background to-muted/30">
          <div className="flex aspect-3/2 items-center justify-center p-8">
            <img
              src={achievement.image}
              alt={t(achievement.title)}
              className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      ) : (
        <div className="flex aspect-3/2 items-center justify-center bg-muted">
          <Award className="size-16 text-muted-foreground opacity-30" />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 line-clamp-2 text-lg font-bold leading-tight">
          {t(achievement.title)}
        </h3>

        <div className="mb-3 text-sm text-muted-foreground">
          <p className="font-medium">{t(achievement.issuer)}</p>
          <div className="mt-1 flex items-center gap-1.5">
            <Calendar className="size-3.5" />
            <span>{achievement.date}</span>
          </div>
        </div>

        {achievement.description && (
          <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {t(achievement.description)}
          </p>
        )}

        {achievement.skills && achievement.skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {achievement.skills.slice(0, 4).map(skill => (
              <span
                key={skill}
                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
              >
                {skill}
              </span>
            ))}
            {achievement.skills.length > 4 && (
              <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                +{achievement.skills.length - 4}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}