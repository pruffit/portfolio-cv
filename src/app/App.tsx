import { Button } from '@/shared/ui/button'
import { ThemeToggle } from '@/features/theme-toggle'

export function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4">
      <ThemeToggle />
      <Button>Click me</Button>
      <p className="text-muted-foreground">Theme toggle is working! Try switching themes.</p>
    </div>
  )
}
