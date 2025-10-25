import { useState, useEffect, useCallback, useRef } from 'react'
import { GameState } from '../model/types'
import { GAME_CONFIG, CANVAS_WIDTH, CANVAS_HEIGHT } from '../model/constants'
import {
  jumpBird,
  createPipe,
  checkCollision,
  shouldAddNewPipe,
} from './gameLogic'

const TARGET_FPS = 60
const FRAME_TIME = 1000 / TARGET_FPS

export function useGame() {
  const [gameState, setGameState] = useState<GameState>('idle')
  const [displayScore, setDisplayScore] = useState(0)
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('flappyBirdHighScore')
    return saved ? parseInt(saved, 10) : 0
  })

  const birdRef = useRef({
    x: 100,
    y: CANVAS_HEIGHT / 2,
    velocity: 0,
    radius: GAME_CONFIG.birdRadius,
  })

  const pipesRef = useRef<Array<{
    x: number
    topHeight: number
    bottomY: number
    width: number
    gap: number
    passed: boolean
  }>>([])

  const scoreRef = useRef(0)
  const animationRef = useRef<number>(0)
  const gameStateRef = useRef<GameState>('idle')
  const lastTimeRef = useRef<number>(0)

  const [renderTrigger, setRenderTrigger] = useState(0)

  useEffect(() => {
    gameStateRef.current = gameState
  }, [gameState])

  const startGame = useCallback(() => {
    birdRef.current = {
      x: 100,
      y: CANVAS_HEIGHT / 2,
      velocity: 0,
      radius: GAME_CONFIG.birdRadius,
    }
    pipesRef.current = [createPipe(CANVAS_WIDTH, GAME_CONFIG)]
    scoreRef.current = 0
    setDisplayScore(0)
    lastTimeRef.current = performance.now()
    setGameState('playing')
  }, [])

  const jump = useCallback(() => {
    const currentState = gameStateRef.current
    
    if (currentState === 'idle') {
      startGame()
      setTimeout(() => {
        birdRef.current = jumpBird(birdRef.current, GAME_CONFIG)
      }, 0)
    } else if (currentState === 'playing') {
      birdRef.current = jumpBird(birdRef.current, GAME_CONFIG)
    }
  }, [startGame])

  const togglePause = useCallback(() => {
    setGameState(prev => {
      if (prev === 'playing') {
        return 'paused'
      }
      if (prev === 'paused') {
        lastTimeRef.current = performance.now()
        return 'playing'
      }
      return prev
    })
  }, [])

  const resetGame = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }
    birdRef.current = {
      x: 100,
      y: CANVAS_HEIGHT / 2,
      velocity: 0,
      radius: GAME_CONFIG.birdRadius,
    }
    pipesRef.current = []
    scoreRef.current = 0
    setDisplayScore(0)
    setGameState('idle')
    setRenderTrigger(prev => prev + 1)
  }, [])

  useEffect(() => {
    if (gameState !== 'playing') {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      return
    }

    const gameLoop = (currentTime: number) => {
      const deltaTime = (currentTime - lastTimeRef.current) / FRAME_TIME
      lastTimeRef.current = currentTime

      const clampedDelta = Math.min(deltaTime, 3)

      birdRef.current = {
        ...birdRef.current,
        velocity: birdRef.current.velocity + GAME_CONFIG.gravity * clampedDelta,
        y: birdRef.current.y + birdRef.current.velocity * clampedDelta,
      }

      pipesRef.current = pipesRef.current.map(pipe => ({
        ...pipe,
        x: pipe.x - GAME_CONFIG.pipeSpeed * clampedDelta,
      }))

      pipesRef.current = pipesRef.current.filter(pipe => pipe.x + pipe.width > 0)

      if (shouldAddNewPipe(pipesRef.current, GAME_CONFIG)) {
        pipesRef.current.push(createPipe(CANVAS_WIDTH, GAME_CONFIG))
      }

      if (checkCollision(birdRef.current, pipesRef.current)) {
        setGameState('gameOver')
        
        if (scoreRef.current > highScore) {
          setHighScore(scoreRef.current)
          localStorage.setItem('flappyBirdHighScore', scoreRef.current.toString())
        }
        
        setRenderTrigger(prev => prev + 1)
        return
      }

      pipesRef.current.forEach(pipe => {
        if (!pipe.passed && birdRef.current.x > pipe.x + pipe.width) {
          pipe.passed = true
          scoreRef.current += 1
          setDisplayScore(scoreRef.current)
        }
      })

      setRenderTrigger(prev => prev + 1)

      animationRef.current = requestAnimationFrame(gameLoop)
    }

    lastTimeRef.current = performance.now()
    animationRef.current = requestAnimationFrame(gameLoop)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [gameState, highScore])

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
    bird: { ...birdRef.current, _trigger: renderTrigger },
    pipes: [...pipesRef.current],
    score: displayScore,
    highScore,
    startGame,
    jump,
    togglePause,
    resetGame,
  }
}