import { useTranslation } from 'react-i18next'
import { Container } from '@/shared/ui/container'
import { achievementsData } from '@/entities/achievement'
import { AchievementsCarousel } from './AchievementsCarousel'
import { motion } from 'motion/react'

export function AchievementsSection() {
  const { t } = useTranslation()

  return (
    <section id="achievements" className="bg-muted/50 py-12 sm:py-16 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8 text-center sm:mb-12">
            <h2 className="mb-3 text-2xl font-bold tracking-tight sm:mb-4 sm:text-3xl md:text-4xl">
              {t('achievements.title')}
            </h2>
            <p className="text-xs text-muted-foreground sm:text-sm">
              Сертификаты, курсы и профессиональные достижения
            </p>
          </div>

          <AchievementsCarousel achievements={achievementsData} />
        </motion.div>
      </Container>
    </section>
  )
}