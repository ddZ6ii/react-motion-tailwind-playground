import { MotionValue, useSpring } from 'motion/react'

import { Artwork } from '@/basics/keep-scrolling/components'
import type { Artwork as TArtwork } from '@/basics/keep-scrolling/types'

type ArtworkListProps = React.ComponentProps<'ul'> & {
  artworks: TArtwork[]
  scrollYProgress: MotionValue<number>
}

function ArtworkList({ artworks, scrollYProgress }: ArtworkListProps) {
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <ul className="content-center space-y-12 @2xl/section:space-y-24">
      {artworks.map((artwork, index) => (
        <li
          key={artwork.id}
          className="grid gap-6 lg:gap-24 @2xl/section:grid-cols-2"
        >
          <Artwork
            artwork={artwork}
            smoothProgress={smoothProgress}
            isEven={index % 2 === 0}
            className={
              index % 2 === 0
                ? 'lg:self-end @2xl/section:order-2'
                : '@2xl/section:text-right'
            }
          />
        </li>
      ))}
    </ul>
  )
}

export default ArtworkList
