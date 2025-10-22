import { useState, useEffect, useCallback, useRef } from 'react'
import { Bird, Pipe, GameState } from '../model/types'
import { GAME_CONFIG, CANVAS_WIDTH, CANVAS_HEIGHT } from '../model/constants'
import {
  updateBird,
  jumpBird,
  createPipe,
  updatePipes,
  checkCollision,
  updateScore,
  shouldAddNewPipe,
} from './gameLogic'

export function useGame() {
  const [gameState, setGameState] = useState<GameState>('idle')
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('flappyBirdHighScore')
    return saved ? parseInt(saved, 10) : 0
  })

  const [bird, setBird] = useState<Bird>({
    x: 100,
    y: CANVAS_HEIGHT / 2,
    velocity: 0,
    radius: GAME_CONFIG.birdRadius,
  })

  const [pipes, setPipes] = useState<Pipe[]>([])
  const gameLoopRef = useRef<number>(0)

  const startGame = useCallback(() => {
    setBird({
      x: 100,
      y: CANVAS_HEIGHT / 2,
      velocity: 0,
      radius: GAME_CONFIG.birdRadius,
    })
    setPipes([createPipe(CANVAS_WIDTH, GAME_CONFIG)])
    setScore(0)
    setGameState('playing')
  }, [])

  const jump = useCallback(() => {
    if (gameState === 'idle') {
      startGame()
    } else if (gameState === 'playing') {
      setBird(prev => jumpBird(prev, GAME_CONFIG))
    }
  }, [gameState, startGame])

  const togglePause = useCallback(() => {
    if (gameState === 'playing') {
      setGameState('paused')
    } else if (gameState === 'paused') {
      setGameState('playing')
    }
  }, [gameState])

  const resetGame = useCallback(() => {
    setGameState('idle')
    setBird({
      x: 100,
      y: CANVAS_HEIGHT / 2,
      velocity: 0,
      radius: GAME_CONFIG.birdRadius,
    })
    setPipes([])
    setScore(0)
  }, [])

  useEffect(() => {
    if (gameState !== 'playing') {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current)
      }
      return
    }

    const gameLoop = () => {
      setBird(prev => {
        const updated = updateBird(prev, GAME_CONFIG)
        return updated
      })

      setPipes(prev => {
        let updated = updatePipes(prev, GAME_CONFIG)

        updated = updated.filter(pipe => pipe.x + pipe.width > 0)

        if (shouldAddNewPipe(updated, GAME_CONFIG)) {
          updated.push(createPipe(CANVAS_WIDTH, GAME_CONFIG))
        }

        return updated
      })

      if (checkCollision(bird, pipes)) {
        setGameState('gameOver')

        if (score > highScore) {
          setHighScore(score)
          localStorage.setItem('flappyBirdHighScore', score.toString())
        }
        return
      }

      const { pipes: updatedPipes, scoreIncrement } = updateScore(bird, pipes)
      if (scoreIncrement > 0) {
        setPipes(updatedPipes)
        setScore(prev => prev + scoreIncrement)
      }

      gameLoopRef.current = requestAnimationFrame(gameLoop)
    }

    gameLoopRef.current = requestAnimationFrame(gameLoop)

    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current)
      }
    }
  }, [gameState, bird, pipes, score, highScore])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault()
        jump()
      } else if (e.code === 'KeyP' || e.code === 'Escape') {
        e.preventDefault()
        togglePause()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [jump, togglePause])

  return {
    gameState,
    bird,
    pipes,
    score,
    highScore,
    startGame,
    jump,
    togglePause,
    resetGame,
  }
}
