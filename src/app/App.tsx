import { useState } from 'react'
import { MainLayout } from '@/app/layouts'
import { AboutSection } from '@/widgets/about-section'
import { SkillsSection } from '@/widgets/skills-section'
import { ExperienceSection } from '@/widgets/experience-section'
import { ProjectsSection } from '@/widgets/projects-section'
import { HobbiesSection } from '@/widgets/hobbies-section'
import { AchievementsSection } from '@/widgets/achievements-section'
import { GameSection } from '@/widgets/game-section'
import { ContactsSection } from '@/widgets/contacts-section'
import { Preloader } from '@/shared/ui/preloader'

export function App() {
  const [isLoading, setIsLoading] = useState(true)

  if (isLoading) {
    return <Preloader onComplete={() => setIsLoading(false)} />
  }

  return (
    <MainLayout>
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <HobbiesSection />
      <AchievementsSection />
      <GameSection />
      <ContactsSection />
    </MainLayout>
  )
}