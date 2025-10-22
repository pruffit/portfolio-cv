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
    <div className="grid gap-8 lg:grid-cols-[auto_1fr]">
      <div className="mx-auto">
        <div
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          className="relative cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-card"
          role="button"
          tabIndex={0}
          aria-label="Game canvas - Click or press Space to jump"
        >
          <GameCanvas bird={birdData} pipes={pipes} gameState={gameState} />
          <GameOverlay gameState={gameState} score={score} />
        </div>
      </div>

      <div className="flex items-center">
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
  )
}