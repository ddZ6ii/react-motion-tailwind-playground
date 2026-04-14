export type Artwork = {
  id: string
  title: {
    base: string
    highlight?: string
  }
  description: string
  image: {
    src: string
    alt?: string
    width?: number
    height: number
  }
}
