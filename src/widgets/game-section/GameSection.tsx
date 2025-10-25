import { useTranslation } from 'react-i18next'
import { Container } from '@/shared/ui/container'
import { FlappyBirdGame } from '@/features/flappy-bird'
import { motion } from 'motion/react'
import { Gamepad2 } from 'lucide-react'

export function GameSection() {
  const { t } = useTranslation()

  return (
    <section id="game" className="bg-background py-12 sm:py-16 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 text-center sm:mb-8">
            <div className="mb-2 flex justify-center sm:mb-3">
              <div className="rounded-full bg-primary/10 p-2.5 sm:p-3 md:p-4">
                <Gamepad2 className="size-5 text-primary sm:size-6 md:size-8" />
              </div>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight sm:mb-3 sm:text-3xl md:text-4xl">
              {t('nav.game')}
            </h2>
            <p className="mx-auto max-w-2xl px-2 text-xs text-muted-foreground sm:px-0 sm:text-sm md:text-base">
              {t('game.description')}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl border bg-card p-3 shadow-xl sm:rounded-2xl sm:p-4 md:p-6 lg:p-8"
          >
            <FlappyBirdGame />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 text-center sm:mt-6"
          >
            <p className="text-[10px] text-muted-foreground sm:text-xs md:text-sm">
              💡 {t('game.tip')}
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}