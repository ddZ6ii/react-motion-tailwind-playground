import { motion } from 'motion/react'

import { OFFSET } from '@/patchwork/constants'
import { Card } from '@/shared/components/ui'

function Keyframes() {
  return (
    <Card>
      <Card.Title>Keyframes</Card.Title>
      <Card.Content>
        <motion.div
          className="size-15 bg-pink-500"
          // 4 keyframes
          animate={{
            scale: [1, 2, 2, 1],
            rotate: [0, 90, 90, 0],
            borderRadius: ['10%', '10%', '50%', '10%'],
            transition: {
              duration: 5,
              delay: OFFSET,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 1,
            },
          }}
        />
      </Card.Content>
    </Card>
  )
}

export default Keyframes
