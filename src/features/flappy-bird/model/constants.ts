import { GameConfig } from './types'

export const GAME_CONFIG: GameConfig = {
  gravity: 0.4,
  jumpForce: -7.5,
  pipeSpeed: 2,
  pipeGap: 180,
  pipeWidth: 60,
  pipeSpacing: 300,
  birdRadius: 15,
}

export const getCanvasSize = () => {
  const maxWidth = Math.min(window.innerWidth - 32, 500)
  const maxHeight = Math.min(window.innerHeight * 0.6, 600)
  
  if (window.innerWidth < 640) {
    return {
      width: maxWidth,
      height: Math.min(maxHeight, maxWidth * 1.5),
    }
  }
  
  return {
    width: 400,
    height: 600,
  }
}

export const CANVAS_WIDTH = 400
export const CANVAS_HEIGHT = 600