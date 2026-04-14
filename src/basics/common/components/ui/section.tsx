import { motion } from 'motion/react'

import { cn } from '@/shared/utilities'

function Root({
  className,
  ...props
}: React.ComponentProps<typeof motion.section>) {
  return (
    <motion.section
      {...props}
      className={cn(
        '@container/section container mx-auto grid h-full grid-rows-[auto_1fr] gap-6',
        className,
      )}
    />
  )
}

function Title({
  className,
  ...props
}: React.ComponentProps<typeof motion.h2>) {
  return (
    <motion.h2
      {...props}
      className={cn(
        'mb-6 text-center text-2xl font-bold tracking-wide lg:mb-24 lg:text-5xl',
        className,
      )}
    />
  )
}

function Content({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={cn('font-sans text-base font-light lg:text-xl', className)}
    />
  )
}

const Section = Object.assign(Root, {
  Title,
  Content,
})

export default Section
