import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/ui/button'
import { Play, Pause, RotateCcw, Trophy, Target } from 'lucide-react'
import { GameState } from '../model/types'

interface GameControlsProps {
  gameState: GameState
  score: number
  highScore: number
  onStart: () => void
  onPause: () => void
  onReset: () => void
}

export function GameControls({
  gameState,
  score,
  highScore,
  onStart,
  onPause,
  onReset,
}: GameControlsProps) {
  const { t } = useTranslation()

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-lg border bg-background p-4">
          <div className="mb-1 flex items-center gap-2 text-sm text-muted-foreground">
            <Target className="size-4" />
            <span>{t('game.score')}</span>
          </div>
          <p className="text-3xl font-bold">{score}</p>
        </div>
        <div className="rounded-lg border bg-background p-4">
          <div className="mb-1 flex items-center gap-2 text-sm text-muted-foreground">
            <Trophy className="size-4" />
            <span>{t('game.highScore')}</span>
          </div>
          <p className="text-3xl font-bold text-primary">{highScore}</p>
        </div>
      </div>

      <div className="flex gap-2">
        {gameState === 'idle' && (
          <Button onClick={onStart} size="lg" className="flex-1">
            <Play className="size-4" />
            {t('game.start')}
          </Button>
        )}

        {gameState === 'playing' && (
          <Button onClick={onPause} variant="outline" size="lg" className="flex-1">
            <Pause className="size-4" />
            {t('game.pause')}
          </Button>
        )}

        {gameState === 'paused' && (
          <Button onClick={onPause} size="lg" className="flex-1">
            <Play className="size-4" />
            {t('game.resume')}
          </Button>
        )}

        {(gameState === 'playing' || gameState === 'paused' || gameState === 'gameOver') && (
          <Button onClick={onReset} variant="outline" size="lg">
            <RotateCcw className="size-4" />
          </Button>
        )}
      </div>

      <div className="rounded-lg border bg-background p-4">
        <p className="mb-3 font-semibold">{t('game.instructions.title')}</p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span>{t('game.instructions.click')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span>{t('game.instructions.space')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span>{t('game.instructions.pause')}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}