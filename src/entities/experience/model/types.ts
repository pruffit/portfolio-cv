export interface Experience {
  id: string
  company: string
  position: string
  period: string
  location?: string
  description: string
  responsibilities: string[]
  achievements: string[]
  technologies: string[]
  team?: {
    frontend?: number
    backend?: number
    designer?: number
    qa?: number
    seo?: number
    copy?: number
    project?: number
    product?: number
    lead?: number
  }
}
