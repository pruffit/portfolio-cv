import { GameCanvas } from './GameCanvas'
import { GameControls } from './GameControls'
import { GameOverlay } from './GameOverlay'
import { useGame } from '../lib/useGame'

export function FlappyBirdGame() {
  const { gameState, bird, pipes, score, highScore, startGame, jump, togglePause, resetGame } =
    useGame()

  const handleClick = () => {
    if (gameState === 'gameOver') {
      resetGame()
    } else {
      jump()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      if (gameState === 'gameOver') {
        resetGame()
      } else {
        jump()
      }
    }
  }

  const birdData = {
    x: bird.x,
    y: bird.y,
    velocity: bird.velocity,
    radius: bird.radius,
  }

  return (
    <div className="flex flex-col gap-4 sm:gap-6 lg:grid lg:grid-cols-[1fr_auto] lg:gap-8">
      <div className="order-1 flex items-center justify-center lg:order-1">
        <div
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          className="relative w-full cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-card"
          role="button"
          tabIndex={0}
          aria-label="Game canvas - Click or press Space to jump"
        >
          <GameCanvas bird={birdData} pipes={pipes} gameState={gameState} />
          <GameOverlay gameState={gameState} score={score} />
        </div>
      </div>

      <div className="order-2 flex items-start justify-center lg:order-2 lg:items-center">
        <div className="w-full lg:w-80">
          <GameControls
            gameState={gameState}
            score={score}
            highScore={highScore}
            onStart={startGame}
            onPause={togglePause}
            onReset={resetGame}
          />
        </div>
      </div>
    </div>
  )
}