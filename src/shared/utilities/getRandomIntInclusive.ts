export default function getRandomIntInclusive(min = 0, max = 10): number {
  const minCeiled = Math.ceil(min)
  const maxFloored = Math.floor(max)

  return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled
}
