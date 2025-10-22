import { Container } from '@/shared/ui/container'
import { Github, Send, Mail } from 'lucide-react'
import { Button } from '@/shared/ui/button'

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/pruffit',
  },
  {
    name: 'Telegram',
    icon: Send,
    href: 'https://t.me/userpruffit',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:kotlaevdanil@gmail.com',
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Kotlaev Danil. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            {socialLinks.map(link => (
              <Button key={link.name} variant="ghost" size="icon" asChild>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <link.icon className="size-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
