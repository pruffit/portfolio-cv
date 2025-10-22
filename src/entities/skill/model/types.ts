export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced'

export interface Skill {
  name: string
  level: SkillLevel
  years: number
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}
