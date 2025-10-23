import { useTranslation } from 'react-i18next'
import { Container } from '@/shared/ui/container'
import { Button } from '@/shared/ui/button'
import { Home, ArrowLeft } from 'lucide-react'
import { motion } from 'motion/react'

export function NotFoundPage() {
  const { t } = useTranslation()

  const handleGoHome = () => {
    window.location.href = '/'
  }

  const handleGoBack = () => {
    window.history.back()
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-9xl font-bold text-primary">404</h1>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-4 text-3xl font-bold"
          >
            {t('notFound.title', 'Page Not Found')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-8 text-lg text-muted-foreground"
          >
            {t(
              'notFound.description',
              'Sorry, the page you are looking for does not exist or has been moved.'
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button onClick={handleGoHome} size="lg" className="gap-2">
              <Home className="size-4" />
              {t('notFound.goHome', 'Go to Home')}
            </Button>
            <Button onClick={handleGoBack} variant="outline" size="lg" className="gap-2">
              <ArrowLeft className="size-4" />
              {t('notFound.goBack', 'Go Back')}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12"
          >
            <p className="text-sm text-muted-foreground">
              {t(
                'notFound.help',
                'If you think this is a mistake, please contact the site administrator.'
              )}
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  )
}