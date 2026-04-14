import { motion } from 'motion/react'

import { Card } from '@/basics/common/components/ui'

function SVGAnimation() {
  return (
    <Card>
      <Card.Title>SVG Animation</Card.Title>
      <Card.Content>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-1/2 stroke-amber-500 stroke-[0.5]"
        >
          <motion.path
            d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
            variants={{
              hidden: {
                opacity: 0,
                pathLength: 0,
                fill: 'rgba(252, 211, 77, 0)',
              },
              visible: {
                opacity: 1,
                pathLength: 1,
                fill: '#fe9900',
              },
            }}
            initial="hidden"
            animate="visible"
            transition={{
              // Path animation
              default: {
                duration: 2,
                ease: 'easeInOut',
                delay: 1,
                // repeat: Infinity,
                // repeatType: 'reverse',
                // repeatDelay: 1,
              },
              // Fill animation with different timing
              fill: {
                duration: 2,
                ease: 'easeIn',
                delay: 2,
                // repeat: Infinity,
                // repeatType: 'reverse',
                // repeatDelay: 1,
              },
            }}
          />
        </motion.svg>
      </Card.Content>
    </Card>
  )
}

export default SVGAnimation
