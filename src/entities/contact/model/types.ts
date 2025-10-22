import { LucideIcon } from 'lucide-react'

export interface Contact {
  id: string
  icon: LucideIcon
  label: string
  value: string
  href: string
  copyable?: boolean
}
