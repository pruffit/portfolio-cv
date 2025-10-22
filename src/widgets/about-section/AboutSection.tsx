import { useTranslation } from 'react-i18next'
import { Container } from '@/shared/ui/container'
import { Avatar } from '@/shared/ui/avatar'
import { Button } from '@/shared/ui/button'
import { MapPin, Calendar, Download } from 'lucide-react'
import { motion } from 'motion/react'

export function AboutSection() {
  const { t } = useTranslation()

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/cv/kotlaev_danil_cv.pdf'
    link.download = 'kotlaev_danil_cv.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="about" className="py-16 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16"
        >
          <div className="flex flex-col items-center md:items-start">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Avatar
                src="/images/avatar.PNG"
                alt={t('about.name')}
                className="size-48 md:size-64 lg:size-72"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 space-y-2 text-center md:text-left"
            >
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                {t('about.name')}
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl">{t('about.position')}</p>

              <div className="flex flex-col gap-2 pt-4 text-sm text-muted-foreground md:text-base">
                <div className="flex items-center justify-center gap-2 md:justify-start">
                  <MapPin className="size-4" />
                  <span>{t('about.location')}</span>
                </div>
                <div className="flex items-center justify-center gap-2 md:justify-start">
                  <Calendar className="size-4" />
                  <span>{t('about.experience')}</span>
                </div>
              </div>

              <div className="pt-6">
                <Button onClick={handleDownloadCV} size="lg" className="gap-2">
                  <Download className="size-4" />
                  {t('common.download_cv')}
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-4 text-muted-foreground"
          >
            <p className="text-base leading-relaxed md:text-lg">{t('about.description')}</p>
            <p className="text-base leading-relaxed md:text-lg">{t('about.description_2')}</p>
            <p className="text-base leading-relaxed md:text-lg">{t('about.description_3')}</p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
