export interface Project {
  id: string
  title: string
  description: string
  image?: string
  technologies: string[]
  links: {
    github?: string
    demo?: string
    gist?: string
    gitlab?: string
  }
  featured?: boolean
}
