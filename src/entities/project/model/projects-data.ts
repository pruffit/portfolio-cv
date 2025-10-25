import { Project } from './types'

export const projectsData: Project[] = [
  {
    id: 'portfolio-cv',
    title: 'projects.portfolio.title',
    description: 'projects.portfolio.description',
    image: '/images/projects/portfolio.png',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Motion', 'i18next'],
    links: {
      github: 'https://github.com/pruffit/portfolio-cv',
      demo: 'https://melodic-dieffenbachia-57416b.netlify.app/',
    },
    featured: true,
  },
  {
    id: 'creative-cluster',
    title: 'projects.cluster.title',
    description: 'projects.cluster.description',
    technologies: ['React', 'TypeScript', 'Custom Hooks', 'Vite', 'Tailwind CSS', 'Zustand', 'TanStack Query'],
    image: '/images/projects/creative.png',
    links: {
      gitlab: 'https://gitlab.com/pruffit/creative-cluster',
    },
    featured: true,
  },
  {
    id: 'weather',
    title: 'projects.weather.title',
    description: 'projects.weather.description',
    image: '/images/projects/weather.png',
    technologies: ['Vue 3', 'Tailwind CSS', 'TypeScript', 'Vite', ' Vitest + Vue Test Utils'],
    links: {
      github: 'https://github.com/pruffit/weather-app',
      demo: 'https://pruffit.github.io/weather-app/',
    },
  },
  {
    id: 'todo',
    title: 'projects.todo.title',
    description: 'projects.todo.description',
    image: '/images/projects/todo.png',
    technologies: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'React Router', 'Vitest + React Testing Library', 'ESLint + Prettier'],
    links: {
      github: 'https://github.com/pruffit/todo-app',
      demo: 'https://pruffit.github.io/todo-app/#/todo-list',
    },
  },
  {
    id: 'glam',
    title: 'projects.glam.title',
    description: 'projects.glam.description',
    image: '/images/projects/glam.png',
    technologies: ['React', 'Framer Motion', 'Next.js', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/pruffit/glam',
      demo: 'https://glam-58ksczn85-pruffits-projects.vercel.app/',
    },
  },
  {
    id: 'storage',
    title: 'projects.storage.title',
    description: 'projects.storage.description',
    image: '/images/projects/storage.png',
    technologies: ['axios', 'TypeScript', 'React'],
    links: {
      github: 'https://github.com/pruffit/cloud-storage-frontend/tree/main',
    },
  },
]
