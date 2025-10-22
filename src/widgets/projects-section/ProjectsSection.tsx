import { useTranslation } from 'react-i18next'
import { Container } from '@/shared/ui/container'
import { projectsData } from '@/entities/project'
import { ProjectCard } from '@/entities/project/ui'
import { ProjectsCarousel } from './ProjectsCarousel'
import { motion } from 'motion/react'

export function ProjectsSection() {
  const { t } = useTranslation()

  const featuredProjects = projectsData.filter(p => p.featured)
  const otherProjects = projectsData.filter(p => !p.featured)

  return (
    <section id="projects" className="bg-muted/50 py-16 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            {t('projects.title')}
          </h2>

          {featuredProjects.length > 0 && (
            <div className="mb-12">
              <div className="grid gap-6 md:grid-cols-2">
                {featuredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </div>
          )}

          {otherProjects.length > 0 && (
            <div>
              <h3 className="mb-6 text-xl font-semibold">{t('projects.otherProjects')}</h3>
              <ProjectsCarousel projects={otherProjects} />
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  )
}