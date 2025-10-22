import { useTranslation } from 'react-i18next'
import { Container } from '@/shared/ui/container'
import { achievementsData } from '@/entities/achievement'
import { AchievementCard } from '@/entities/achievement/ui'
import { motion } from 'motion/react'

export function AchievementsSection() {
  const { t } = useTranslation()

  return (
    <section id="achievements" className="bg-muted/50 py-16 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-4xl">
            {t('achievements.title')}
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {achievementsData.map((achievement, index) => (
              <AchievementCard key={achievement.id} achievement={achievement} index={index} />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
