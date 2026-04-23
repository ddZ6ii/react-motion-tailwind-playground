import { motion, useScroll } from 'motion/react'

import { Card } from '@/shared/components/ui'

function ScrollProgression() {
  const { scrollYProgress } = useScroll()

  return (
    <Card className="sticky top-0">
      <Card.Title>Scroll Progression</Card.Title>
      <Card.Content>
        <motion.div className="h-30 w-4 rounded-sm bg-blue-50">
          <motion.div
            initial={{ scaleY: 0 }}
            style={{
              scaleY: scrollYProgress,
              transformOrigin: 'bottom',
            }}
            className="h-30 w-4 cursor-grab rounded-sm bg-blue-500"
          />
        </motion.div>
      </Card.Content>
    </Card>
  )
}

export default ScrollProgression
