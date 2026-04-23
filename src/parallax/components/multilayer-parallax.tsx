import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

import { cn } from '@/shared/utilities'

export default function MultilayerParallax({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%'])

  return (
    <div
      {...props}
      ref={ref}
      // Make sure the container is relative and has overflow hidden to contain the parallax layers
      className={cn(
        'relative grid h-screen place-items-center overflow-hidden',
        className,
      )}
    >
      {/* Add z-10 to make sure the title is between the 2 background layers of the
      parallax */}
      <motion.div className="z-10" style={{ y: textY }}>
        {children}
      </motion.div>
      {/* <motion.h2
        className="z-10 text-center text-6xl font-semibold uppercase sm:text-8xl lg:text-9xl"
        style={{ y: textY }}
      >
        Parallax
      </motion.h2> */}
      {/* Full image */}
      <motion.div
        className="absolute inset-0 z-0 bg-[url('/milky-way.png')] bg-cover bg-bottom"
        style={{ y: backgroundY }}
      />
      {/* Mountains layer (higher z-index so it will be on top the sky) */}
      <div className="absolute inset-0 z-20 bg-[url('/milky-way-mountains.png')] bg-cover bg-bottom" />
    </div>
  )
}
