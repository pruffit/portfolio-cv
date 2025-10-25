import { useTranslation } from 'react-i18next'
import { Container } from '@/shared/ui/container'
import { contactsData } from '@/entities/contact'
import { ContactCard } from '@/entities/contact/ui'
import { motion } from 'motion/react'

export function ContactsSection() {
  const { t } = useTranslation()

  return (
    <section id="contacts" className="bg-muted/50 py-12 sm:py-16 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <div className="mb-8 text-center sm:mb-12">
            <h2 className="mb-3 text-2xl font-bold tracking-tight sm:mb-4 sm:text-3xl md:text-4xl">
              {t('contacts.title')}
            </h2>
            <p className="text-base text-muted-foreground sm:text-lg">
              {t('contacts.subtitle')}
            </p>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              {t('contacts.description')}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {contactsData.map((contact, index) => (
              <ContactCard key={contact.id} contact={contact} index={index} />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}