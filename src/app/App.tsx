import { MainLayout } from '@/app/layouts'
import { Section } from '@/widgets/sections'
import { AboutSection } from '@/widgets/about-section'
import { SkillsSection } from '@/widgets/skills-section'
import { useTranslation } from 'react-i18next'

export function App() {
  const { t } = useTranslation()

  return (
    <MainLayout>
      <AboutSection />

      <SkillsSection />

      <Section id="experience" title={t('nav.experience')}>
        <p className="text-muted-foreground">Experience content will be here...</p>
      </Section>

      <Section id="projects" title={t('nav.projects')} className="bg-muted/50">
        <p className="text-muted-foreground">Projects content will be here...</p>
      </Section>

      <Section id="hobbies" title={t('nav.hobbies')}>
        <p className="text-muted-foreground">Hobbies content will be here...</p>
      </Section>

      <Section id="achievements" title={t('nav.achievements')} className="bg-muted/50">
        <p className="text-muted-foreground">Achievements content will be here...</p>
      </Section>

      <Section id="game" title={t('nav.game')}>
        <p className="text-muted-foreground">Game will be here...</p>
      </Section>

      <Section id="contacts" title={t('nav.contacts')} className="bg-muted/50">
        <p className="text-muted-foreground">Contacts content will be here...</p>
      </Section>
    </MainLayout>
  )
}
