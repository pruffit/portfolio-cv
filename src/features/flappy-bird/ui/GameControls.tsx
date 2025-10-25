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
    <div className="flex w-full flex-col gap-3 sm:gap-4 md:gap-6">
      <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
        <div className="rounded-lg border bg-background p-2.5 sm:p-3 md:p-4">
          <div className="mb-0.5 flex items-center gap-1 text-[10px] text-muted-foreground sm:mb-1 sm:gap-1.5 sm:text-xs md:text-sm">
            <Target className="size-2.5 sm:size-3 md:size-4" />
            <span>{t('game.score')}</span>
          </div>
          <p className="text-xl font-bold sm:text-2xl md:text-3xl">{score}</p>
        </div>
        <div className="rounded-lg border bg-background p-2.5 sm:p-3 md:p-4">
          <div className="mb-0.5 flex items-center gap-1 text-[10px] text-muted-foreground sm:mb-1 sm:gap-1.5 sm:text-xs md:text-sm">
            <Trophy className="size-2.5 sm:size-3 md:size-4" />
            <span className="truncate">{t('game.highScore')}</span>
          </div>
          <p className="text-xl font-bold text-primary sm:text-2xl md:text-3xl">{highScore}</p>
        </div>
      </div>

      <div className="flex gap-2">
        {gameState === 'idle' && (
          <Button onClick={onStart} size="lg" className="flex-1 text-xs sm:text-sm md:text-base">
            <Play className="size-3.5 sm:size-4" />
            <span className="hidden sm:inline">{t('game.start')}</span>
            <span className="sm:hidden">Start</span>
          </Button>
        )}

        {gameState === 'playing' && (
          <Button onClick={onPause} variant="outline" size="lg" className="flex-1 text-xs sm:text-sm md:text-base">
            <Pause className="size-3.5 sm:size-4" />
            <span className="hidden sm:inline">{t('game.pause')}</span>
            <span className="sm:hidden">Pause</span>
          </Button>
        )}

        {gameState === 'paused' && (
          <Button onClick={onPause} size="lg" className="flex-1 text-xs sm:text-sm md:text-base">
            <Play className="size-3.5 sm:size-4" />
            <span className="hidden sm:inline">{t('game.resume')}</span>
            <span className="sm:hidden">Resume</span>
          </Button>
        )}

        {(gameState === 'playing' || gameState === 'paused' || gameState === 'gameOver') && (
          <Button onClick={onReset} variant="outline" size="lg" className="shrink-0 px-3 sm:px-4">
            <RotateCcw className="size-3.5 sm:size-4" />
          </Button>
        )}
      </div>

      <div className="rounded-lg border bg-background p-2.5 sm:p-3 md:p-4">
        <p className="mb-1.5 text-[10px] font-semibold sm:mb-2 sm:text-xs md:text-sm">
          {t('game.instructions.title')}
        </p>
        <ul className="space-y-1 sm:space-y-1.5">
          <li className="flex items-start gap-1.5 text-[10px] text-muted-foreground sm:gap-2 sm:text-xs md:text-sm">
            <span className="text-primary">•</span>
            <span>{t('game.instructions.click')}</span>
          </li>
          <li className="flex items-start gap-1.5 text-[10px] text-muted-foreground sm:gap-2 sm:text-xs md:text-sm">
            <span className="text-primary">•</span>
            <span>{t('game.instructions.space')}</span>
          </li>
          <li className="flex items-start gap-1.5 text-[10px] text-muted-foreground sm:gap-2 sm:text-xs md:text-sm">
            <span className="text-primary">•</span>
            <span>{t('game.instructions.pause')}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}