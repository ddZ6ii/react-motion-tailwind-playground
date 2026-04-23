import { motion, useAnimationControls } from 'motion/react'
import { useEffect } from 'react'

import { randomLeft } from '@/hero/utilities'
import { delay, getRandomIntInclusive } from '@/shared/utilities'

export default function AnimatedBeam() {
  const controls = useAnimationControls()

  useEffect(() => {
    let run = true

    async function animateBeam() {
      while (run) {
        const left = `${randomLeft(window.innerWidth).toString()}px`

        // Reset value between each animation
        controls.set({ left, y: '-100%', opacity: 0 })

        // Ensure Motion register the reset before starting the new animation
        await new Promise<void>((r) => {
          requestAnimationFrame(() => {
            r()
          })
        })

        // Random delay before next animation
        await delay(Math.random() * 5000)

        await controls.start(
          // { opacity: [0, 1, 0], scaleX: [0, 1, 0], y: '100dvh' },
          {
            opacity: [0, 1, 0],
            scaleX: [0, 1, 0],
            y: [`-${getRandomIntInclusive(0, 150).toString()}dvh`, '100dvh'],
          },
          {
            // Randomize duration and delay for more natural effect
            duration: Math.max(3, Math.random() * 10 + 1), // 3 to 10 seconds
            ease: Math.random() < 0.5 ? 'easeIn' : 'linear',
            delay: Math.max(0.25, Math.random() * 10),
          },
        )
      }
    }

    void animateBeam()

    return () => {
      run = false
      controls.stop()
    }
  }, [controls])
  return (
    <motion.div
      className="absolute top-0 h-50 w-0.5 rounded-full bg-linear-to-b from-transparent via-white/10 via-30% to-white"
      animate={controls}
    />
  )
}
