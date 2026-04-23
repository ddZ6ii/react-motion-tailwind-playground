import { motion, type Variants } from 'motion/react'

import { OFFSET, STEP } from '@/patchwork/constants'
import { Card } from '@/shared/components/ui'

const RECT_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: OFFSET, ease: 'easeOut' },
  },
}

const CIRCLE_VARIANTS: Variants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: OFFSET + STEP,
      ease: 'easeOut',
    },
  },
}
function FadeUpDown() {
  return (
    <Card>
      <Card.Title>Fade Up / Down</Card.Title>
      <Card.Content>
        <motion.div
          variants={RECT_VARIANTS}
          initial="hidden"
          animate="visible"
          className="size-15 rounded-sm bg-purple-500"
        />
        <motion.div
          variants={CIRCLE_VARIANTS}
          initial="hidden"
          animate="visible"
          className="size-15 rounded-full bg-purple-500"
        />
      </Card.Content>
    </Card>
  )
}

export default FadeUpDown
