import { Project } from '../model'
import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/ui/button'
import { ExternalLink, Github, Code2, Star, Gitlab } from 'lucide-react'
import { motion } from 'motion/react'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg"
    >
      {project.featured && (
        <div className="absolute right-4 top-4 z-10 flex items-center gap-1 rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-medium text-yellow-700 dark:text-yellow-400">
          <Star className="size-3 fill-current" />
          {t('projects.featured')}
        </div>
      )}

      {project.image ? (
        <div className="aspect-video overflow-hidden bg-muted">
          <img
            src={project.image}
            alt={t(project.title)}
            className="size-full object-cover transition-transform group-hover:scale-105"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="flex aspect-video items-center justify-center bg-muted">
          <Code2 className="size-12 text-muted-foreground" />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-bold">{t(project.title)}</h3>
        <p className="mb-4 flex-1 text-sm text-muted-foreground">{t(project.description)}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <span
              key={tech}
              className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.links.github && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                <Github className="size-4" />
                {t('projects.view_code')}
              </a>
            </Button>
          )}
          {project.links.gitlab && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.links.gitlab} target="_blank" rel="noopener noreferrer">
                <Gitlab className="size-4" />
                {t('projects.view_code')}
              </a>
            </Button>
          )}
          {project.links.demo && (
            <Button variant="default" size="sm" asChild>
              <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="size-4" />
                {t('projects.view_demo')}
              </a>
            </Button>
          )}
          {project.links.gist && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.links.gist} target="_blank" rel="noopener noreferrer">
                <Code2 className="size-4" />
                {t('projects.view_gist')}
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
