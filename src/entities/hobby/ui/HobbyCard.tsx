import { Hobby } from '../model'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'

interface HobbyCardProps {
  hobby: Hobby
  index: number
}

export function HobbyCard({ hobby, index }: HobbyCardProps) {
  const { t } = useTranslation()
  const Icon = hobby.icon

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-all hover:shadow-md"
    >
      <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-all group-hover:scale-110">
        <Icon className="size-6" />
      </div>
      <h3 className="mb-2 font-semibold">{t(hobby.title)}</h3>
      <p className="text-sm text-muted-foreground">{t(hobby.description)}</p>
    </motion.div>
  )
}
