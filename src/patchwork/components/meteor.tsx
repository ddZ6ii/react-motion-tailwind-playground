import { motion, useAnimation } from 'motion/react'
import { useEffect } from 'react'

import { getRandomIntInclusive } from '@/shared/utilities'

function Meteor({ angle = 30 }: { angle?: number }) {
  const controls = useAnimation()

  useEffect(() => {
    let isMounted = true

    const animate = async () => {
      while (isMounted) {
        const vw = window.innerWidth
        const vh = window.innerHeight
        const tanA = Math.tan((angle * Math.PI) / 180)

        // Start: right side of viewport, near top
        const startX = vw * (0.6 + Math.random() * 0.35)
        const startY = vh * Math.random() * 0.1

        // Max leftward travel before hitting left edge; max downward before 50% vh
        const maxByX = startX - vw * 0.05
        const maxByY = (vh * 0.5 - startY) / tanA
        const maxTravel = Math.min(maxByX, maxByY)

        // Random fraction of available travel (30–100%)
        const travel = maxTravel * (0.3 + Math.random() * 0.7)

        const endX = startX - travel // always moves left
        const endY = startY + travel * tanA // always moves down

        const delay = getRandomIntInclusive(5, 50) / 10
        const duration = getRandomIntInclusive(5, 20) / 10

        // reset to new start position (only use transform for GPU acceleration, not left/top position)
        controls.set({
          x: startX,
          y: startY,
          opacity: 0,
          scale: 0.8,
        })

        // optional delay between meteors
        await new Promise((r) => setTimeout(r, delay * 1000))

        // run animation
        await controls.start({
          x: endX,
          y: endY,
          opacity: [0, 1, 0],
          scale: [0.6, 1, 0.6],
          transition: {
            duration,
            ease: 'easeIn',
          },
        })
      }
    }

    void animate()

    return () => {
      isMounted = false
    }
  }, [angle, controls])

  return (
    <motion.div
      animate={controls}
      className="absolute top-0 left-0"
      style={{
        rotateZ: `-${angle.toString()}deg`,
      }}
    >
      {/* Head */}
      <div className="size-1 translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_10px_4px_rgba(255,255,255,0.9)]" />

      {/* Tail */}
      <div className="absolute top-0 left-full h-px w-32 -translate-y-1/2 rounded-full bg-linear-to-r from-white via-white/70 to-transparent blur-[1px]" />
    </motion.div>
  )
}

function MeteorShower({ count = 10 }: { count?: number }) {
  return (
    <>
      {[...Array(count).keys()].map((v) => (
        <Meteor key={v} />
      ))}
    </>
  )
}

export { Meteor, MeteorShower }
