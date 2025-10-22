import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/ui/button'
import { Play, Pause, RotateCcw } from 'lucide-react'
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
    <div className="flex flex-col gap-4">
      <div className="flex justify-between rounded-lg border bg-card p-4">
        <div>
          <p className="text-sm text-muted-foreground">{t('game.score')}</p>
          <p className="text-2xl font-bold">{score}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">{t('game.highScore')}</p>
          <p className="text-2xl font-bold">{highScore}</p>
        </div>
      </div>

      <div className="flex gap-2">
        {gameState === 'idle' && (
          <Button onClick={onStart} className="flex-1">
            <Play className="size-4" />
            {t('game.start')}
          </Button>
        )}

        {gameState === 'playing' && (
          <Button onClick={onPause} variant="outline" className="flex-1">
            <Pause className="size-4" />
            {t('game.pause')}
          </Button>
        )}

        {gameState === 'paused' && (
          <Button onClick={onPause} className="flex-1">
            <Play className="size-4" />
            {t('game.resume')}
          </Button>
        )}

        {(gameState === 'playing' || gameState === 'paused' || gameState === 'gameOver') && (
          <Button onClick={onReset} variant="outline">
            <RotateCcw className="size-4" />
            {t('game.reset')}
          </Button>
        )}
      </div>

      <div className="rounded-lg border bg-muted p-4 text-sm text-muted-foreground">
        <p className="mb-2 font-semibold">{t('game.instructions.title')}</p>
        <ul className="space-y-1">
          <li>• {t('game.instructions.click')}</li>
          <li>• {t('game.instructions.space')}</li>
          <li>• {t('game.instructions.pause')}</li>
        </ul>
      </div>
    </div>
  )
}
