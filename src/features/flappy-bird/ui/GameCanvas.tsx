import { useEffect, useRef } from 'react'
import { GameState } from '../model/types'
import { Bird, Pipe } from '../model/types'

interface GameCanvasProps {
  bird: Bird
  pipes: Pipe[]
  gameState: GameState
}

const getCanvasSize = () => {
  if (typeof window === 'undefined') return { width: 400, height: 600 }
  
  const width = window.innerWidth
  
  if (width < 640) {
    const canvasWidth = Math.min(width - 32, 400)
    const canvasHeight = Math.min(canvasWidth * 1.5, 600)
    return { width: canvasWidth, height: canvasHeight }
  }
  
  if (width < 1024) {
    return { width: 400, height: 600 }
  }
  
  return { width: 450, height: 600 }
}

export function GameCanvas({ bird, pipes, gameState }: GameCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>(0)
  const canvasSizeRef = useRef(getCanvasSize())

  useEffect(() => {
    const handleResize = () => {
      const newSize = getCanvasSize()
      canvasSizeRef.current = newSize
      
      if (canvasRef.current) {
        canvasRef.current.width = newSize.width
        canvasRef.current.height = newSize.height
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const { width, height } = canvasSizeRef.current
    canvas.width = width
    canvas.height = height

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      const gradient = ctx.createLinearGradient(0, 0, 0, height)
      gradient.addColorStop(0, '#87CEEB')
      gradient.addColorStop(1, '#E0F6FF')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      ctx.fillStyle = '#22C55E'
      ctx.strokeStyle = '#16A34A'
      ctx.lineWidth = 3

      pipes.forEach(pipe => {
        ctx.fillRect(pipe.x, 0, pipe.width, pipe.topHeight)
        ctx.strokeRect(pipe.x, 0, pipe.width, pipe.topHeight)

        ctx.fillRect(pipe.x, pipe.bottomY, pipe.width, height - pipe.bottomY)
        ctx.strokeRect(pipe.x, pipe.bottomY, pipe.width, height - pipe.bottomY)

        ctx.fillStyle = '#16A34A'
        ctx.fillRect(pipe.x - 5, pipe.bottomY - 10, pipe.width + 10, 10)
        ctx.fillStyle = '#22C55E'
      })

      ctx.save()
      ctx.translate(bird.x, bird.y)

      const rotation = Math.min(Math.max(bird.velocity * 0.05, -0.5), 0.5)
      ctx.rotate(rotation)

      ctx.fillStyle = '#FBBF24'
      ctx.strokeStyle = '#F59E0B'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.ellipse(0, 0, bird.radius * 1.2, bird.radius * 0.9, 0, 0, Math.PI * 2) // Овал: ширина больше высоты
      ctx.fill()
      ctx.stroke()

      ctx.fillStyle = 'white'
      ctx.beginPath()
      ctx.arc(bird.radius * 0.5, -bird.radius * 0.2, bird.radius * 0.3, 0, Math.PI * 2)
      ctx.fill()

      ctx.fillStyle = 'black'
      ctx.beginPath()
      ctx.arc(bird.radius * 0.6, -bird.radius * 0.2, bird.radius * 0.15, 0, Math.PI * 2)
      ctx.fill()

      ctx.fillStyle = '#F97316'
      ctx.beginPath()
      ctx.moveTo(bird.radius * 1.2, 0)
      ctx.lineTo(bird.radius * 1.6, -bird.radius * 0.15)
      ctx.lineTo(bird.radius * 1.2, bird.radius * 0.15)
      ctx.closePath()
      ctx.fill()

      ctx.restore()

      animationFrameRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [bird, pipes, gameState])

  const { width, height } = canvasSizeRef.current

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="mx-auto block rounded-lg border-2 border-border bg-sky-100 shadow-inner"
      style={{
        imageRendering: 'crisp-edges',
        maxWidth: '100%',
        height: 'auto',
      }}
    />
  )
}