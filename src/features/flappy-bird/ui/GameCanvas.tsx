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

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    const gradient = ctx.createLinearGradient(0, 0, 0, CANVAS_HEIGHT)
    gradient.addColorStop(0, '#87CEEB')
    gradient.addColorStop(1, '#E0F6FF')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    pipes.forEach(pipe => {
      ctx.fillStyle = '#2d8659'
      ctx.fillRect(pipe.x, 0, pipe.width, pipe.topHeight)
      
      ctx.fillStyle = '#1a5c3a'
      ctx.fillRect(pipe.x, 0, 3, pipe.topHeight)
      ctx.fillRect(pipe.x + pipe.width - 3, 0, 3, pipe.topHeight)
      
      ctx.fillStyle = '#2d8659'
      ctx.fillRect(pipe.x, pipe.bottomY, pipe.width, CANVAS_HEIGHT - pipe.bottomY)
      
      ctx.fillStyle = '#1a5c3a'
      ctx.fillRect(pipe.x, pipe.bottomY, 3, CANVAS_HEIGHT - pipe.bottomY)
      ctx.fillRect(pipe.x + pipe.width - 3, pipe.bottomY, 3, CANVAS_HEIGHT - pipe.bottomY)
      
      ctx.fillStyle = '#3aa86e'
      ctx.fillRect(pipe.x - 2, pipe.topHeight - 25, pipe.width + 4, 25)
      ctx.fillRect(pipe.x - 2, pipe.bottomY, pipe.width + 4, 25)
    })

    ctx.save()
    
    const maxUpAngle = -0.4
    const maxDownAngle = 0.6
    const angle = Math.min(Math.max(bird.velocity * 0.06, maxUpAngle), maxDownAngle)
    
    ctx.translate(bird.x, bird.y)
    ctx.rotate(angle)
    
    ctx.beginPath()
    ctx.ellipse(0, 0, bird.radius * 1.2, bird.radius * 0.9, 0, 0, Math.PI * 2)
    
    const birdGradient = ctx.createRadialGradient(
      -5, -5, 0,
      0, 0, bird.radius
    )
    birdGradient.addColorStop(0, '#FFD700')
    birdGradient.addColorStop(1, '#FFA500')
    
    ctx.fillStyle = birdGradient
    ctx.fill()
    
    ctx.strokeStyle = '#CC8400'
    ctx.lineWidth = 2
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(bird.radius * 0.3, -bird.radius * 0.2, 3, 0, Math.PI * 2)
    ctx.fillStyle = '#000'
    ctx.fill()
    
    ctx.beginPath()
    ctx.arc(bird.radius * 0.3 + 1, -bird.radius * 0.2 - 1, 1, 0, Math.PI * 2)
    ctx.fillStyle = '#fff'
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(bird.radius, 0)
    ctx.lineTo(bird.radius + 10, -2)
    ctx.lineTo(bird.radius + 10, 2)
    ctx.closePath()
    ctx.fillStyle = '#FF6347'
    ctx.fill()
    
    ctx.beginPath()
    ctx.ellipse(-bird.radius * 0.2, bird.radius * 0.3, bird.radius * 0.6, bird.radius * 0.4, 0.3, 0, Math.PI * 2)
    ctx.fillStyle = '#FFB347'
    ctx.fill()
    ctx.strokeStyle = '#CC8400'
    ctx.lineWidth = 1
    ctx.stroke()
    
    ctx.restore()

    ctx.fillStyle = '#8B7355'
    ctx.fillRect(0, CANVAS_HEIGHT - 20, CANVAS_WIDTH, 20)
    
    ctx.fillStyle = '#90EE90'
    ctx.fillRect(0, CANVAS_HEIGHT - 25, CANVAS_WIDTH, 5)

  }, [bird, pipes, gameState])

  return (
    <canvas
      ref={canvasRef}
      width={CANVAS_WIDTH}
      height={CANVAS_HEIGHT}
      className="rounded-lg border-4 border-border shadow-lg"
    />
  )
}