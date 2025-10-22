export type GameState = 'idle' | 'playing' | 'paused' | 'gameOver'

export interface Bird {
  x: number
  y: number
  velocity: number
  radius: number
}

export interface Pipe {
  x: number
  topHeight: number
  bottomY: number
  width: number
  gap: number
  passed: boolean
}

export interface GameConfig {
  gravity: number
  jumpForce: number
  pipeSpeed: number
  pipeGap: number
  pipeWidth: number
  pipeSpacing: number
  birdRadius: number
}
