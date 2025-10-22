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
        <div className="aspect-4/3 overflow-hidden bg-muted">
          <img
            src={achievement.image}
            alt={t(achievement.title)}
            className="size-full object-cover transition-transform group-hover:scale-105"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="flex aspect-4/3 items-center justify-center bg-muted">
          <Award className="size-12 text-muted-foreground" />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-lg font-bold">{t(achievement.title)}</h3>

        <div className="mb-2 text-sm text-muted-foreground">
          <p className="font-medium">{t(achievement.issuer)}</p>
          <div className="mt-1 flex items-center gap-1">
            <Calendar className="size-3" />
            <span>{achievement.date}</span>
          </div>
        </div>

        {achievement.description && (
          <p className="mb-4 flex-1 text-sm text-muted-foreground">{t(achievement.description)}</p>
        )}

        {achievement.skills && achievement.skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {achievement.skills.map(skill => (
              <span
                key={skill}
                className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
