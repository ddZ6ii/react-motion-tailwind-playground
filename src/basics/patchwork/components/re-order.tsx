import { motion, type Transition } from 'motion/react'
import { useEffect, useState } from 'react'

import { Card } from '@/basics/common/components/ui'
import { cn } from '@/shared/utilities'
import { shuffle } from '@/basics/utilities'

const initialColors = ['#0044ff', '#f6339a', '#ac46ff', '#fe9900']

const springTransition: Transition = {
  type: 'spring',
  damping: 20,
  stiffness: 300,
}

type ReorderProps = React.ComponentProps<typeof motion.div> & {
  delayInMs?: number
}

function Reorder({ className, delayInMs = 3000, ...props }: ReorderProps) {
  const [colors, setColors] = useState(initialColors)

  useEffect(() => {
    const id = setInterval(() => {
      setColors((prev) => shuffle(prev))
    }, delayInMs)

    return () => {
      clearInterval(id)
    }
  }, [delayInMs])

  return (
    <Card>
      <Card.Title>Reorder</Card.Title>
      <Card.Content
        {...props}
        className={cn(
          'grid grid-cols-2 grid-rows-2 place-items-center gap-2 self-center justify-self-center',
          className,
        )}
      >
        {colors.map((color) => (
          <motion.div
            key={color}
            className={cn('size-15 rounded-sm')}
            style={{ backgroundColor: color }}
            layout
            transition={springTransition}
          />
        ))}
      </Card.Content>
    </Card>
  )
}

export default Reorder
