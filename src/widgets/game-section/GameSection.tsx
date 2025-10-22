import { useTranslation } from 'react-i18next'
import { Container } from '@/shared/ui/container'
import { FlappyBirdGame } from '@/features/flappy-bird'
import { motion } from 'motion/react'
import { Gamepad2, Trophy, Target } from 'lucide-react'

export function GameSection() {
  const { t } = useTranslation()

  return (
    <section id="game" className="bg-background py-16 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-primary/10 p-4">
                <Gamepad2 className="size-8 text-primary" />
              </div>
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              {t('nav.game')}
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {t('game.description')}
            </p>
          </div>

          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-lg border bg-card p-4 text-center"
            >
              <Target className="mx-auto mb-2 size-6 text-primary" />
              <p className="text-sm font-medium">{t('game.simpleControl')}</p>
              <p className="text-xs text-muted-foreground">{t('game.simpleControlDesc')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="rounded-lg border bg-card p-4 text-center"
            >
              <Trophy className="mx-auto mb-2 size-6 text-primary" />
              <p className="text-sm font-medium">{t('game.records')}</p>
              <p className="text-xs text-muted-foreground">{t('game.recordsDesc')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="rounded-lg border bg-card p-4 text-center"
            >
              <Gamepad2 className="mx-auto mb-2 size-6 text-primary" />
              <p className="text-sm font-medium">{t('game.classic')}</p>
              <p className="text-xs text-muted-foreground">{t('game.classicDesc')}</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-2xl border bg-card p-6 shadow-xl md:p-8"
          >
            <FlappyBirdGame />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-muted-foreground">
              💡 {t('game.tip')}
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}