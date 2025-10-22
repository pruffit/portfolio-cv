import { useTranslation } from 'react-i18next'
import { Container } from '@/shared/ui/container'
import { hobbiesData } from '@/entities/hobby'
import { HobbyCard } from '@/entities/hobby/ui'
import { motion } from 'motion/react'

export function HobbiesSection() {
  const { t } = useTranslation()

  return (
    <section id="hobbies" className="py-16 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-4xl">
            {t('hobbies.title')}
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {hobbiesData.map((hobby, index) => (
              <HobbyCard key={hobby.id} hobby={hobby} index={index} />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
