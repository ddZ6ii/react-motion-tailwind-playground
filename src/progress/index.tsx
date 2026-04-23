import { motion, useScroll, useSpring } from 'motion/react'

import { cn } from '@/shared/utilities'

export function Progress({
  className,
  ...props
}: React.ComponentProps<typeof motion.div>) {
  const { scrollYProgress } = useScroll()

  // Optional spring animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      initial={{ scaleX: 0 }}
      style={{
        scaleX,
        transformOrigin: 'left',
      }}
      className={cn(
        'fixed bottom-4 left-8 z-20 h-1 w-[calc(100%-4rem)] -translate-y-1/2 rounded-full bg-linear-to-r from-slate-50/0 to-slate-50 lg:left-24 lg:w-[calc(100%-12rem)]',
        className,
      )}
      {...props}
    />
  )
}
