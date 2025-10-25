import { GameConfig } from './types'

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
) || window.innerWidth < 768

export const GAME_CONFIG: GameConfig = {
  gravity: isMobile ? 0.3 : 0.4,
  jumpForce: isMobile ? -8 : -7,
  pipeSpeed: isMobile ? 1.5 : 2,
  pipeGap: isMobile ? 200 : 180,
  pipeWidth: 60,
  pipeSpacing: isMobile ? 320 : 300,
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