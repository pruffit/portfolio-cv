import { useTranslation } from 'react-i18next'
import { Container } from '@/shared/ui/container'
import { FlappyBirdGame } from '@/features/flappy-bird'
import { motion } from 'motion/react'

export function GameSection() {
  const { t } = useTranslation()

  return (
    <section id="game" className="bg-muted/50 py-16 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{t('nav.game')}</h2>
          <p className="mb-8 text-sm text-muted-foreground md:mb-12 md:text-base">
            {t('game.title')} - классическая аркадная игра. Попробуйте побить рекорд!
          </p>

          <div className="overflow-x-auto">
            <FlappyBirdGame />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
