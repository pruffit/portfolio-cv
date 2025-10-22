import { useTranslation } from 'react-i18next'
import { Container } from '@/shared/ui/container'
import { experienceData } from '@/entities/experience'
import { motion } from 'motion/react'
import { Building2, Calendar, Users, Award, ChevronRight, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

export function ExperienceSection() {
  const { t } = useTranslation()
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section id="experience" className="py-16 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            {t('experience.title')}
          </h2>

          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-border md:block" />

            <div className="space-y-8">
              {experienceData.map((exp, index) => {
                const isExpanded = expandedId === exp.id
                const visibleTechs = isExpanded ? exp.technologies : exp.technologies.slice(0, 5)
                const hiddenCount = exp.technologies.length - 5

                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute left-6 top-6 hidden size-5 rounded-full border-4 border-background bg-primary md:block" />

                    <div className="ml-0 md:ml-20">
                      <div className="overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:shadow-md">
                        <div
                          className="cursor-pointer bg-linear-to-r from-primary/5 to-transparent p-6"
                          onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                                <Building2 className="size-4" />
                                <span className="font-semibold">{exp.company}</span>
                              </div>
                              <h3 className="mb-2 text-xl font-bold">{t(exp.position)}</h3>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Calendar className="size-4" />
                                <span>{t(exp.period)}</span>
                              </div>
                            </div>
                            <ChevronRight
                              className={`size-5 shrink-0 transition-transform ${
                                isExpanded ? 'rotate-90' : ''
                              }`}
                            />
                          </div>

                          <p className="mt-4 text-sm text-muted-foreground">{t(exp.description)}</p>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {visibleTechs.map(tech => (
                              <span
                                key={tech}
                                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                              >
                                {tech}
                              </span>
                            ))}
                            {!isExpanded && hiddenCount > 0 && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setExpandedId(exp.id)
                                }}
                                className="rounded-full bg-muted px-3 py-1 text-xs font-medium hover:bg-muted/80"
                              >
                                +{hiddenCount} {t('experience.moreCount')}
                              </button>
                            )}
                          </div>
                        </div>

                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border-t"
                          >
                            <div className="p-6">
                              {exp.team && (
                                <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
                                  <Users className="size-4" />
                                  <span>
                                    {exp.team.frontend && `${exp.team.frontend} Frontend`}
                                    {exp.team.backend && `, ${exp.team.backend} Backend`}
                                    {exp.team.designer && `, ${exp.team.designer} Designer`}
                                    {exp.team.manager && `, ${exp.team.manager} PM`}
                                  </span>
                                </div>
                              )}

                              <div className="mb-6">
                                <div className="mb-3 flex items-center gap-2 font-semibold">
                                  <CheckCircle2 className="size-4 text-blue-500" />
                                  <span>{t('experience.responsibilities')}</span>
                                </div>
                                <ul className="space-y-2">
                                  {exp.responsibilities.map((resp, idx) => (
                                    <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                                      <span className="text-blue-500">•</span>
                                      <span>{t(resp)}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="mb-6">
                                <div className="mb-3 flex items-center gap-2 font-semibold">
                                  <Award className="size-4 text-green-500" />
                                  <span>{t('experience.achievements')}</span>
                                </div>
                                <ul className="space-y-2">
                                  {exp.achievements.map((ach, idx) => (
                                    <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                                      <span className="text-green-500">✓</span>
                                      <span>{t(ach)}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <p className="mb-2 text-sm font-semibold">
                                  {t('experience.technologies')}:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {exp.technologies.map(tech => (
                                    <span
                                      key={tech}
                                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}