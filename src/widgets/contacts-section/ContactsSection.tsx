import { useTranslation } from 'react-i18next'
import { Container } from '@/shared/ui/container'
import { contactsData } from '@/entities/contact'
import { ContactCard } from '@/entities/contact/ui'
import { motion } from 'motion/react'

export function ContactsSection() {
  const { t } = useTranslation()

  return (
    <section id="contacts" className="py-16 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              {t('contacts.title')}
            </h2>
            <p className="text-lg text-muted-foreground">{t('contacts.subtitle')}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactsData.map((contact, index) => (
              <ContactCard key={contact.id} contact={contact} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground">{t('contacts.description')}</p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
