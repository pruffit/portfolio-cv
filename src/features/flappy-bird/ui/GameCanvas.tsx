import { useEffect, useRef } from 'react'
import { Bird, Pipe } from '../model/types'
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../model/constants'

interface GameCanvasProps {
  bird: Bird
  pipes: Pipe[]
  gameState: 'idle' | 'playing' | 'paused' | 'gameOver'
}

export function GameCanvas({ bird, pipes, gameState }: GameCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.fillStyle = '#87CEEB'
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    ctx.fillStyle = '#228B22'
    pipes.forEach(pipe => {
      ctx.fillRect(pipe.x, 0, pipe.width, pipe.topHeight)
      ctx.fillRect(pipe.x, pipe.bottomY, pipe.width, CANVAS_HEIGHT - pipe.bottomY)

      ctx.strokeStyle = '#1a6b1a'
      ctx.lineWidth = 3
      ctx.strokeRect(pipe.x, 0, pipe.width, pipe.topHeight)
      ctx.strokeRect(pipe.x, pipe.bottomY, pipe.width, CANVAS_HEIGHT - pipe.bottomY)
    })

    ctx.beginPath()
    ctx.arc(bird.x, bird.y, bird.radius, 0, Math.PI * 2)
    ctx.fillStyle = '#FFD700'
    ctx.fill()
    ctx.strokeStyle = '#FF8C00'
    ctx.lineWidth = 2
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(bird.x + 5, bird.y - 3, 3, 0, Math.PI * 2)
    ctx.fillStyle = '#000'
    ctx.fill()

    ctx.fillStyle = '#8B4513'
    ctx.fillRect(0, CANVAS_HEIGHT - 20, CANVAS_WIDTH, 20)
  }, [bird, pipes, gameState])

  return (
    <canvas
      ref={canvasRef}
      width={CANVAS_WIDTH}
      height={CANVAS_HEIGHT}
      className="rounded-lg border-4 border-border"
    />
  )
}
