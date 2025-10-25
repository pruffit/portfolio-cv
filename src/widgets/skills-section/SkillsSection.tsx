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
    <section id="skills" className="bg-muted/50 py-8 sm:py-12 md:py-16 lg:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-6 text-center text-xl font-bold tracking-tight sm:mb-8 sm:text-2xl md:mb-12 md:text-3xl lg:text-4xl">
            {t('skills.title')}
          </h2>

          <div className="mb-4 flex flex-wrap justify-center gap-1.5 sm:mb-6 sm:gap-2 md:mb-8">
            {skillsData.map((category, index) => (
              <Button
                key={category.title}
                variant={selectedCategory === index ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(index)}
                size="sm"
                className="h-7 px-2 text-[10px] sm:h-8 sm:px-3 sm:text-xs md:text-sm"
              >
                <span className="truncate">{t(category.title)}</span>
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
            <div className="rounded-lg border bg-card p-3 shadow-sm sm:rounded-xl sm:p-4 md:p-6 lg:p-8">
              <h3 className="mb-3 text-sm font-semibold sm:mb-4 sm:text-base md:mb-6 md:text-lg lg:text-xl">
                {t(skillsData[selectedCategory].title)}
              </h3>
              <div className="grid gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
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
                      className="group relative flex items-center gap-2 rounded-lg border bg-background p-2.5 transition-all hover:border-primary/50 hover:shadow-md sm:gap-3 sm:p-3 md:p-4"
                    >
                      <div className="shrink-0">
                        <div className={`size-1.5 rounded-full sm:size-2 ${levelConfig.dotColor}`} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-medium sm:text-sm md:text-base">{skill.name}</p>
                        <p className="text-[10px] text-muted-foreground sm:text-xs">
                          {skill.years} {skill.years === 1 ? t('skills.year') : skill.years < 5 ? t('skills.years2') : t('skills.years5')}
                        </p>
                      </div>

                      <div className="shrink-0">
                        <span className={`rounded-full px-1.5 py-0.5 text-[9px] font-medium sm:px-2 sm:py-1 sm:text-[10px] md:text-xs ${levelConfig.badgeColor}`}>
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