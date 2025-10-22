import { MainLayout } from '@/app/layouts'
import { Section } from '@/widgets/sections'
import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/ui/button'

export function App() {
  const { t } = useTranslation()

  return (
    <MainLayout>
      <Section id="about" title={t('nav.about')}>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">{t('about.name')}</h3>
          <p className="text-lg text-muted-foreground">{t('about.position')}</p>
          <p className="text-muted-foreground">{t('about.description')}</p>
          <Button>{t('common.download_cv')}</Button>
        </div>
      </Section>

      <Section id="skills" title={t('nav.skills')} className="bg-muted/50">
        <p className="text-muted-foreground">Skills content will be here...</p>
      </Section>

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
