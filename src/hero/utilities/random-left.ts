import { GRID_SIZE } from '@/hero/constants'
import { getRandomIntInclusive } from '@/shared/utilities'

export default function randomLeft(windowWidth: number, gridSize = GRID_SIZE) {
  const minLeft = 1
  const maxLeft = Math.floor(windowWidth / gridSize)

  return getRandomIntInclusive(minLeft, maxLeft) * gridSize
}
