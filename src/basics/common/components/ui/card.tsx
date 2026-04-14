import { motion, type Variants } from 'motion/react'
import type { ComponentProps } from 'react'

import { cn } from '@/shared/utilities/index.ts'

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

function Root({ className, ...props }: ComponentProps<typeof motion.div>) {
  return (
    <motion.div
      {...props}
      variants={itemVariants}
      layout
      className={cn(
        'grid aspect-square basis-60 grid-rows-[auto_1fr] rounded-lg border border-white/10 bg-white/10 p-4 text-slate-100 shadow-lg shadow-white/5 backdrop-blur-sm lg:gap-4',
        className,
      )}
    />
  )
}

function Title({ className, children, ...props }: React.ComponentProps<'h2'>) {
  return (
    <h2
      {...props}
      className={cn(
        'text-md text-center font-mono font-bold lg:text-xl',
        className,
      )}
    >
      {children}
    </h2>
  )
}

function Content({
  className,
  ...props
}: React.ComponentProps<typeof motion.div>) {
  return (
    <motion.div
      {...props}
      className={cn('flex items-center justify-center gap-10', className)}
    />
  )
}

const Card = Object.assign(Root, {
  Title,
  Content,
})

export default Card
