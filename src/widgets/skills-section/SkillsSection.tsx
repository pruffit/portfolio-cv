import { useTranslation } from 'react-i18next'
import { Container } from '@/shared/ui/container'
import { skillsData } from '@/entities/skill'
import { motion } from 'motion/react'
import { useState } from 'react'
import { Button } from '@/shared/ui/button'

export function SkillsSection() {
  const { t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState<number>(0)

  return (
    <section id="skills" className="bg-muted/50 py-16 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            {t('skills.title')}
          </h2>

          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {skillsData.map((category, index) => (
              <Button
                key={category.title}
                variant={selectedCategory === index ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(index)}
                className="text-sm"
              >
                {t(category.title)}
              </Button>
            ))}
          </div>

          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-auto max-w-5xl"
          >
            <div className="rounded-xl border bg-card p-6 shadow-sm md:p-8">
              <h3 className="mb-6 text-xl font-semibold">
                {t(skillsData[selectedCategory].title)}
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {skillsData[selectedCategory].skills.map((skill, index) => {
                  const levelConfig = {
                    Beginner: {
                      dotColor: 'bg-yellow-500',
                      badgeColor: 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400',
                    },
                    Intermediate: {
                      dotColor: 'bg-blue-500',
                      badgeColor: 'bg-blue-500/10 text-blue-700 dark:text-blue-400',
                    },
                    Advanced: {
                      dotColor: 'bg-green-500',
                      badgeColor: 'bg-green-500/10 text-green-700 dark:text-green-400',
                    },
                  }[skill.level]

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: index * 0.03 }}
                      className="group relative flex items-center gap-3 rounded-lg border bg-background p-4 transition-all hover:border-primary/50 hover:shadow-md"
                    >
                      <div className="shrink-0">
                        <div className={`size-2 rounded-full ${levelConfig.dotColor}`} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="truncate font-medium">{skill.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {skill.years} {skill.years === 1 ? t('skills.year') : skill.years < 5 ? t('skills.years2') : t('skills.years5')}
                        </p>
                      </div>

                      <div className="shrink-0">
                        <span className={`rounded-full px-2 py-1 text-xs font-medium ${levelConfig.badgeColor}`}>
                          {t(`skills.levels.${skill.level}`)}
                        </span>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}