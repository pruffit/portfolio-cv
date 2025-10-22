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
    manager?: number
  }
}
