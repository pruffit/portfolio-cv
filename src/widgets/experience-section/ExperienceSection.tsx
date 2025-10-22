import { useTranslation } from 'react-i18next'
import { Container } from '@/shared/ui/container'
import { experienceData } from '@/entities/experience'
import { ExperienceCard } from '@/entities/experience/ui'
import { motion } from 'motion/react'

export function ExperienceSection() {
  const { t } = useTranslation()

  return (
    <section id="experience" className="py-16 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-4xl">
            {t('experience.title')}
          </h2>

          <div className="space-y-6">
            {experienceData.map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
