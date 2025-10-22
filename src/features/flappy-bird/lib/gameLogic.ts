import { Bird, Pipe, GameConfig } from '../model/types'
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../model/constants'

export function updateBird(bird: Bird, config: GameConfig): Bird {
  return {
    ...bird,
    velocity: bird.velocity + config.gravity,
    y: bird.y + bird.velocity,
  }
}

export function jumpBird(bird: Bird, config: GameConfig): Bird {
  return {
    ...bird,
    velocity: config.jumpForce,
  }
}

export function createPipe(x: number, config: GameConfig): Pipe {
  const minTopHeight = 50
  const maxTopHeight = CANVAS_HEIGHT - config.pipeGap - 50
  const topHeight = Math.random() * (maxTopHeight - minTopHeight) + minTopHeight

  return {
    x,
    topHeight,
    bottomY: topHeight + config.pipeGap,
    width: config.pipeWidth,
    gap: config.pipeGap,
    passed: false,
  }
}

export function updatePipes(pipes: Pipe[], config: GameConfig): Pipe[] {
  return pipes.map(pipe => ({
    ...pipe,
    x: pipe.x - config.pipeSpeed,
  }))
}

export function checkCollision(bird: Bird, pipes: Pipe[]): boolean {
  if (bird.y + bird.radius >= CANVAS_HEIGHT || bird.y - bird.radius <= 0) {
    return true
  }

  for (const pipe of pipes) {
    const birdLeft = bird.x - bird.radius
    const birdRight = bird.x + bird.radius
    const birdTop = bird.y - bird.radius
    const birdBottom = bird.y + bird.radius

    const pipeLeft = pipe.x
    const pipeRight = pipe.x + pipe.width

    if (birdRight > pipeLeft && birdLeft < pipeRight) {
      if (birdTop < pipe.topHeight || birdBottom > pipe.bottomY) {
        return true
      }
    }
  }

  return false
}

export function updateScore(bird: Bird, pipes: Pipe[]): { pipes: Pipe[]; scoreIncrement: number } {
  let scoreIncrement = 0
  const updatedPipes = pipes.map(pipe => {
    if (!pipe.passed && bird.x > pipe.x + pipe.width) {
      scoreIncrement += 1
      return { ...pipe, passed: true }
    }
    return pipe
  })

  return { pipes: updatedPipes, scoreIncrement }
}

export function shouldAddNewPipe(pipes: Pipe[], config: GameConfig): boolean {
  if (pipes.length === 0) return true
  const lastPipe = pipes[pipes.length - 1]
  return CANVAS_WIDTH - lastPipe.x >= config.pipeSpacing
}
