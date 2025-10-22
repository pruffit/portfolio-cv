import { Contact } from '../model'
import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/ui/button'
import { Copy, Check } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'

interface ContactCardProps {
  contact: Contact
  index: number
}

export function ContactCard({ contact, index }: ContactCardProps) {
  const { t } = useTranslation()
  const Icon = contact.icon
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (!contact.copyable) return

    try {
      await navigator.clipboard.writeText(contact.value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <motion.a
      href={contact.href}
      target={contact.href.startsWith('http') ? '_blank' : undefined}
      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="group relative flex items-center gap-4 rounded-lg border bg-card p-6 transition-all hover:shadow-md"
    >
      <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-all group-hover:scale-110">
        <Icon className="size-6" />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-muted-foreground">{t(contact.label)}</p>
        <p className="truncate font-semibold">{contact.id === 'location' ? t(contact.value) : contact.value}</p>
      </div>

      {contact.copyable && (
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={e => {
            e.preventDefault()
            handleCopy()
          }}
          className="shrink-0"
        >
          {copied ? <Check className="size-4 text-green-500" /> : <Copy className="size-4" />}
        </Button>
      )}
    </motion.a>
  )
}
