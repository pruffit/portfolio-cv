import { GameCanvas } from './GameCanvas'
import { GameControls } from './GameControls'
import { GameOverlay } from './GameOverlay'
import { useGame } from '../lib/useGame'

export function FlappyBirdGame() {
  const { gameState, bird, pipes, score, highScore, startGame, jump, togglePause, resetGame } =
    useGame()

  return (
    <div className="grid gap-6 lg:grid-cols-[400px_1fr]">
      <div className="relative mx-auto">
        <div
          onClick={jump}
          className="cursor-pointer"
          role="button"
          tabIndex={0}
          onKeyDown={e => {
            if (e.key === 'Enter') jump()
          }}
        >
          <GameCanvas bird={bird} pipes={pipes} gameState={gameState} />
          <GameOverlay gameState={gameState} score={score} />
        </div>
      </div>

      <GameControls
        gameState={gameState}
        score={score}
        highScore={highScore}
        onStart={startGame}
        onPause={togglePause}
        onReset={resetGame}
      />
    </div>
  )
}
