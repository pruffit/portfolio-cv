import { useTranslation } from 'react-i18next'
import { Container } from '@/shared/ui/container'
import { skillsData } from '@/entities/skill'
import { SkillCard } from '@/entities/skill/ui'
import { motion } from 'motion/react'

export function SkillsSection() {
  const { t } = useTranslation()

  return (
    <section id="skills" className="bg-muted/50 py-16 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-4xl">
            {t('skills.title')}
          </h2>

          <div className="space-y-12">
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h3 className="mb-6 text-xl font-semibold md:text-2xl">{t(category.title)}</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                    >
                      <SkillCard skill={skill} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
