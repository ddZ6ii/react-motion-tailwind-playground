import { motion } from 'motion/react'

import { cn } from '@/shared/utilities'

function Button({
  className,
  ...props
}: React.ComponentProps<typeof motion.button>) {
  return (
    <motion.button
      {...props}
      className={cn(
        'text-md flex h-15 min-w-40 items-center justify-center gap-2 rounded-md px-4 py-2 font-semibold transition-colors',
        className,
      )}
    />
  )
}

export default Button
