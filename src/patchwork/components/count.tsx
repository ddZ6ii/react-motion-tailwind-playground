import {
  animate,
  motion,
  type SequenceOptions,
  useMotionValue,
  useTransform,
} from 'motion/react'
import { useEffect, useEffectEvent } from 'react'

import { Card } from '@/shared/components/ui'
import { cn } from '@/shared/utilities'

const DEFAULT_OPTIONS: SequenceOptions = {
  delay: 1,
  duration: 5,
  defaultTransition: {
    ease: 'easeInOut',
  },
}

type CountProps = React.ComponentProps<typeof motion.pre> & {
  from?: number
  to?: number
  options?: SequenceOptions
}

function Count({
  className,
  from = 0,
  to = 100,
  options = DEFAULT_OPTIONS,
}: CountProps) {
  const count = useMotionValue(from)
  const rounded = useTransform(() => Math.round(count.get()))

  const onMount = useEffectEvent(() => {
    return animate(count, to, { ...DEFAULT_OPTIONS, ...options })
  })

  useEffect(() => {
    const controls = onMount()
    return () => {
      controls.stop()
    }
  }, [])

  return (
    <Card>
      <Card.Title>Count</Card.Title>
      <Card.Content>
        <motion.pre className={cn('text-4xl text-cyan-300', className)}>
          {rounded}
        </motion.pre>
      </Card.Content>
    </Card>
  )
}

export default Count
