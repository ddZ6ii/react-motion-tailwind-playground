import { afterEach, describe, expect, it, vi } from 'vitest'
import shuffle from './shuffle'

describe('shuffle', () => {
  afterEach(() => vi.restoreAllMocks())

  it('returns an array with the same length', () => {
    expect(shuffle([1, 2, 3])).toHaveLength(3)
  })

  it('returns an array with the same elements', () => {
    expect(shuffle([1, 2, 3]).sort()).toEqual([1, 2, 3])
  })

  it('does not mutate the original array', () => {
    const original = [1, 2, 3]
    shuffle(original)
    expect(original).toEqual([1, 2, 3])
  })

  it('produces deterministic order when Math.random is mocked', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0)
    // sort(() => 0 - 0.5) always returns -0.5 → V8 TimSort produces [3, 2, 1]
    expect(shuffle([1, 2, 3])).toEqual([3, 2, 1])
  })
})
