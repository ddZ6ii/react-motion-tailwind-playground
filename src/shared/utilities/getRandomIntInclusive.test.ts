import { afterEach, describe, expect, it, vi } from 'vitest'
import getRandomIntInclusive from './getRandomIntInclusive'

describe('getRandomIntInclusive', () => {
  afterEach(() => vi.restoreAllMocks())

  it('returns an integer', () => {
    expect(Number.isInteger(getRandomIntInclusive(1, 10))).toBe(true)
  })

  it('uses default range [0, 10] when called with no args', () => {
    for (let i = 0; i < 100; i++) {
      const result = getRandomIntInclusive()
      expect(result).toBeGreaterThanOrEqual(0)
      expect(result).toBeLessThanOrEqual(10)
    }
  })

  it('always returns a value within [min, max]', () => {
    for (let i = 0; i < 200; i++) {
      const result = getRandomIntInclusive(3, 7)
      expect(result).toBeGreaterThanOrEqual(3)
      expect(result).toBeLessThanOrEqual(7)
    }
  })

  it('returns min when Math.random() === 0', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0)
    expect(getRandomIntInclusive(3, 7)).toBe(3)
  })

  it('returns max when Math.random() approaches 1', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.9999999999)
    expect(getRandomIntInclusive(3, 7)).toBe(7)
  })

  it('returns the only possible value when min === max', () => {
    for (let i = 0; i < 20; i++) {
      expect(getRandomIntInclusive(5, 5)).toBe(5)
    }
  })

  it('works with negative range', () => {
    for (let i = 0; i < 100; i++) {
      const result = getRandomIntInclusive(-10, -3)
      expect(result).toBeGreaterThanOrEqual(-10)
      expect(result).toBeLessThanOrEqual(-3)
    }
  })

  it('works with a range spanning negative to positive', () => {
    for (let i = 0; i < 100; i++) {
      const result = getRandomIntInclusive(-5, 5)
      expect(result).toBeGreaterThanOrEqual(-5)
      expect(result).toBeLessThanOrEqual(5)
    }
  })

  it('ceils min and floors max for float inputs', () => {
    // min=1.2 → ceiled to 2, max=4.9 → floored to 4 → effective range [2, 4]
    for (let i = 0; i < 100; i++) {
      const result = getRandomIntInclusive(1.2, 4.9)
      expect(result).toBeGreaterThanOrEqual(2)
      expect(result).toBeLessThanOrEqual(4)
    }
  })
})
