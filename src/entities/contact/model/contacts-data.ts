import { Contact } from './types'
import { Mail, Send, Github, FileText, MapPin, Phone } from 'lucide-react'

export const contactsData: Contact[] = [
  {
    id: 'email',
    icon: Mail,
    label: 'contacts.email',
    value: 'kotlaevdanil@gmail.com',
    href: 'mailto:kotlaevdanil@gmail.com',
    copyable: true,
  },
  {
    id: 'phone',
    icon: Phone,
    label: 'contacts.phone',
    value: '+7 917 016 77 35',
    href: 'tel:+79170167735',
    copyable: true,
  },
  {
    id: 'telegram',
    icon: Send,
    label: 'Telegram',
    value: '@userpruffit',
    href: 'https://t.me/userpruffit',
  },
  {
    id: 'github',
    icon: Github,
    label: 'GitHub',
    value: '@pruffit',
    href: 'https://github.com/pruffit',
  },
  {
    id: 'habr',
    icon: FileText,
    label: 'Habr',
    value: '@pruffit',
    href: 'https://habr.com/ru/users/pruffit',
  },
  {
    id: 'location',
    icon: MapPin,
    label: 'contacts.location',
    value: 'contacts.locationValue',
    href: 'https://www.google.com/maps/place/Samara',
  },
]