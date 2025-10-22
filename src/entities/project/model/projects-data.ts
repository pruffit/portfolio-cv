import { Project } from './types'

export const projectsData: Project[] = [
  {
    id: 'portfolio-cv',
    title: 'projects.portfolio.title',
    description: 'projects.portfolio.description',
    image: '/images/projects/portfolio.svg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Motion', 'i18next'],
    links: {
      github: 'https://github.com/pruffit/portfolio-cv',
      demo: 'https://pruffit.github.io/portfolio-cv/',
    },
    featured: true,
  },
  {
    id: 'react-hooks',
    title: 'projects.hooks.title',
    description: 'projects.hooks.description',
    technologies: ['React', 'TypeScript', 'Custom Hooks'],
    links: {
      github: 'https://github.com/pruffit',
      gist: 'https://gist.github.com/pruffit',
    },
    featured: true,
  },
  {
    id: 'ui-components',
    title: 'projects.components.title',
    description: 'projects.components.description',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    links: {
      github: 'https://github.com/pruffit',
    },
  },
  {
    id: 'state-management',
    title: 'projects.state.title',
    description: 'projects.state.description',
    technologies: ['React', 'Redux Toolkit', 'Zustand', 'TypeScript'],
    links: {
      github: 'https://github.com/pruffit',
    },
  },
  {
    id: 'animations',
    title: 'projects.animations.title',
    description: 'projects.animations.description',
    technologies: ['React', 'Framer Motion', 'CSS Animations', 'GSAP'],
    links: {
      github: 'https://github.com/pruffit',
    },
  },
  {
    id: 'form-validation',
    title: 'projects.forms.title',
    description: 'projects.forms.description',
    technologies: ['React Hook Form', 'Zod', 'TypeScript', 'React'],
    links: {
      github: 'https://github.com/pruffit',
    },
  },
]
