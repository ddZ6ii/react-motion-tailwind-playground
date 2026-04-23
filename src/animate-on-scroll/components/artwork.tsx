import { motion, MotionValue, useTransform } from 'motion/react'

import type { Artwork as TArtwork } from '@/animate-on-scroll/types'
import { cn } from '@/shared/utilities'

type ArtworkProps = React.ComponentProps<typeof motion.div> & {
  artwork: TArtwork
  isEven: boolean
  smoothProgress: MotionValue<number>
}

export default function Artwork({
  artwork,
  className,
  isEven,
  smoothProgress,
}: ArtworkProps) {
  const {
    image: { alt = '', ...artworkImage },
  } = artwork

  const highlightText = useTransform(
    // Delay the highlight text reveal for odd items to create a staggered effect
    useTransform(smoothProgress, isEven ? [0, 1] : [0.3, 1], [0, 100]),
    (v) =>
      `linear-gradient(to right, white ${v.toString()}%, rgba(100,116,139,1) ${v.toString()}%)`,
  )
  const revealFromLeft = {
    opacity: useTransform(smoothProgress, isEven ? [0, 1] : [0.3, 1], [0, 1]),
    x: useTransform(smoothProgress, [0, 1], ['-10%', '0%']),
  }
  const revealFromRight = {
    opacity: useTransform(smoothProgress, isEven ? [0.3, 1] : [0, 1], [0, 1]),
    x: useTransform(smoothProgress, [0, 1], ['10%', '0%']),
  }

  return (
    <>
      <motion.div
        className={cn(
          'aspect-video h-full w-full overflow-hidden rounded-lg shadow-lg shadow-slate-50/20',
          className,
        )}
        style={isEven ? revealFromRight : revealFromLeft}
      >
        <img
          {...artworkImage}
          alt={alt}
          className="block h-full w-full object-cover"
        />
      </motion.div>

      <div className="space-y-1 lg:space-y-6">
        <h3 className="text-lg font-bold text-slate-500 lg:text-4xl">
          {artwork.title.base}{' '}
          {artwork.title.highlight && (
            <motion.span
              className="bg-clip-text text-transparent"
              style={{
                // Clip a linear gradient to text shape.
                // Progressively moves the hard stop position
                // with the Y scroll to reveal the text.
                backgroundImage: highlightText,
              }}
            >
              {artwork.title.highlight}
            </motion.span>
          )}
        </h3>

        <motion.p
          className="text-slate-300"
          style={isEven ? revealFromLeft : revealFromRight}
        >
          {artwork.description}
        </motion.p>
      </div>
    </>
  )
}
