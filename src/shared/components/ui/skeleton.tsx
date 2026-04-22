import { motion } from 'motion/react'

import { cn } from '@/shared/lib/utils'

function Skeleton({
  className,
  ...props
}: React.ComponentProps<typeof motion.div>) {
  return (
    <motion.div
      {...props}
      className={cn(
        'animate-[pulse_1s_ease_infinite] bg-linear-135 from-transparent from-30% via-white/70 via-40% to-transparent to-50% bg-size-[300%_100%] bg-no-repeat shadow-lg',
        className,
      )}
      // 👇 Debug
      initial={{ backgroundPosition: '40% 0' }}
      animate={{
        backgroundPosition: ['-30% 0', '130% 0'],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'circIn',
      }}
    />
  )
}

export { Skeleton }
