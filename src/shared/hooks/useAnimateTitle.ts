import { useAnimation, useInView } from 'motion/react'
import { useEffect } from 'react'

export default function useAnimateTitle(
  ref: React.RefObject<HTMLDivElement | null>,
) {
  const controls = useAnimation()
  const isInView = useInView(ref, {
    once: true, // run animation only once when it enters the viewport
  })

  useEffect(() => {
    if (isInView) {
      void controls.start('visible')
    }
  }, [controls, isInView])

  return controls
}
