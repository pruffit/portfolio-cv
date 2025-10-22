import { cn } from '@/shared/lib/utils'

interface AvatarProps {
  src: string
  alt: string
  className?: string
}

export function Avatar({ src, alt, className }: AvatarProps) {
  return (
    <div className={cn('relative overflow-hidden rounded-full bg-muted', className)}>
      <img src={src} alt={alt} className="size-full object-cover" loading="lazy" />
    </div>
  )
}
