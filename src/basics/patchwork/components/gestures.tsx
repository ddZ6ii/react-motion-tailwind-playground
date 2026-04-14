import { ThumbsUp } from 'lucide-react'

import { Button, Card } from '@/basics/common/components/ui'
import type { TargetAndTransition } from 'motion'

const HOVER_TRANSITION: TargetAndTransition = {
  scale: 1.05,
  boxShadow: '0px 0px 20px 4px rgba(125, 166, 255, 0.5)',
}

const TAP_TRANSITION: TargetAndTransition = {
  scale: 0.9,
  boxShadow: '0px 0px 8px 4px rgba(21, 44, 88, 0.5)',
}

function Gestures() {
  return (
    <Card>
      <Card.Title>Gestures</Card.Title>
      <Card.Content>
        <Button
          whileTap={TAP_TRANSITION}
          whileHover={HOVER_TRANSITION}
          // OPTIONAL: physics-based spring transition for more natural feel
          // transition={{
          //   type: 'spring',
          //   mass: 0.5,
          //   bounceDamping: 0,
          //   bounceStiffness: 500,
          // }}
          className="bg-blue-600"
        >
          Like <ThumbsUp size={16} />
        </Button>
      </Card.Content>
    </Card>
  )
}

export default Gestures
