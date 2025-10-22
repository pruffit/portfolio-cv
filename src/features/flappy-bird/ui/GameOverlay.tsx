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
        <div className="text-center">
          <h3 className="mb-2 text-2xl font-bold">{t('game.title')}</h3>
          <p className="text-muted-foreground">{t('game.clickToStart')}</p>
        </div>
      </div>
    )
  }

  if (gameState === 'paused') {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
        <div className="text-center">
          <h3 className="mb-2 text-2xl font-bold">{t('game.paused')}</h3>
          <p className="text-muted-foreground">{t('game.clickToResume')}</p>
        </div>
      </div>
    )
  }

  if (gameState === 'gameOver') {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
        <div className="text-center">
          <h3 className="mb-4 text-3xl font-bold text-destructive">{t('game.gameOver')}</h3>
          <p className="mb-2 text-xl">
            {t('game.finalScore')}: {score}
          </p>
          <p className="text-muted-foreground">{t('game.clickToRestart')}</p>
        </div>
      </div>
    )
  }

  return null
}
