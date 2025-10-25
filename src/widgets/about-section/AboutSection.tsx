import { useTranslation } from 'react-i18next'
import { Container } from '@/shared/ui/container'
import { Avatar } from '@/shared/ui/avatar'
import { Button } from '@/shared/ui/button'
import { MapPin, Calendar, Download, Mail, Github, Send } from 'lucide-react'
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

  const quickLinks = [
    { icon: Mail, href: 'mailto:kotlaevdanil@gmail.com', label: 'Email' },
    { icon: Github, href: 'https://github.com/pruffit', label: 'GitHub' },
    { icon: Send, href: 'https://t.me/userpruffit', label: 'Telegram' },
  ]

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border bg-card shadow-lg"
        >
          <div className="bg-linear-to-r from-primary/10 via-primary/5 to-transparent p-6 sm:p-8 md:p-12">
            <div className="flex flex-col items-center gap-4 sm:gap-6 md:flex-row">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="shrink-0"
              >
                <Avatar
                  src="/images/avatar.PNG"
                  alt={t('about.name')}
                  className="size-28 ring-4 ring-background sm:size-32 md:size-40"
                />
              </motion.div>

              <div className="flex-1 text-center md:text-left">
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mb-2 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
                >
                  {t('about.name')}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mb-3 text-lg text-primary sm:mb-4 sm:text-xl md:text-2xl"
                >
                  {t('about.position')}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground sm:gap-4 sm:text-sm md:justify-start"
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <MapPin className="size-3.5 sm:size-4" />
                    <span>{t('about.location')}</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Calendar className="size-3.5 sm:size-4" />
                    <span>{t('about.experience')}</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-6 space-y-3 text-sm leading-relaxed text-muted-foreground sm:mb-8 sm:space-y-4 sm:text-base"
            >
              <p>{t('about.description')}</p>
              <p>{t('about.description_2')}</p>
              <p>{t('about.description_3')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
            >
              <Button onClick={handleDownloadCV} size="lg" className="w-full gap-2 sm:w-auto">
                <Download className="size-4" />
                {t('common.download_cv')}
              </Button>

              <div className="flex gap-2">
                {quickLinks.map(link => (
                  <Button
                    key={link.label}
                    variant="outline"
                    size="icon-lg"
                    asChild
                    className="flex-1 transition-transform hover:scale-110 sm:flex-initial"
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      <link.icon className="size-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}