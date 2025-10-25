import { useTranslation } from 'react-i18next'
import { GameState } from '../model/types'

interface GameOverlayProps {
  gameState: GameState
  score: number
}

export function GameOverlay({ gameState, score }: GameOverlayProps) {
  const { t } = useTranslation()

  if (gameState === 'idle') {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
        <div className="px-4 text-center">
          <h3 className="mb-2 text-xl font-bold sm:text-2xl">{t('game.title')}</h3>
          <p className="text-xs text-muted-foreground sm:text-sm">{t('game.clickToStart')}</p>
        </div>
      </div>
    )
  }

  if (gameState === 'paused') {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
        <div className="px-4 text-center">
          <h3 className="mb-2 text-xl font-bold sm:text-2xl">{t('game.paused')}</h3>
          <p className="text-xs text-muted-foreground sm:text-sm">{t('game.clickToResume')}</p>
        </div>
      </div>
    )
  }

  if (gameState === 'gameOver') {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
        <div className="px-4 text-center">
          <h3 className="mb-3 text-2xl font-bold text-destructive sm:mb-4 sm:text-3xl">
            {t('game.gameOver')}
          </h3>
          <p className="mb-2 text-lg sm:text-xl">
            {t('game.finalScore')}: {score}
          </p>
          <p className="text-xs text-muted-foreground sm:text-sm">{t('game.clickToRestart')}</p>
        </div>
      </div>
    )
  }

  return null
}