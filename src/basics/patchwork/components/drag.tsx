import { motion } from 'motion/react'
import { useRef } from 'react'

import { Card } from '@/basics/common/components/ui'

function Drag() {
  const dragContainerRef = useRef<HTMLDivElement>(null)

  return (
    <Card ref={dragContainerRef}>
      <Card.Title>Drag</Card.Title>
      <Card.Content>
        <motion.div
          drag
          // OPTION 1: manual constraints
          // dragConstraints={{
          //   left: -100,
          //   right: 100,
          //   top: -100,
          //   bottom: 100,
          // }}

          // OPTION 2: constraint within its parent
          dragConstraints={dragContainerRef}
          // OPTIONAL: physics-based spring transition on release for natural feel
          dragTransition={{
            bounceStiffness: 600,
            bounceDamping: 10,
          }}
          className="size-15 cursor-grab rounded-sm bg-emerald-500"
        />
      </Card.Content>
    </Card>
  )
}

export default Drag
