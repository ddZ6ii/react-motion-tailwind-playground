import { motion, type TargetAndTransition, type Variants } from 'motion/react'
import { useState } from 'react'

import { Button, Card } from '@/basics/common/components/ui'
import { cn } from '@/shared/utilities'

const IMG_VARIANTS: Variants = {
  hidden: {
    clipPath: 'circle(0% at 50% 50%)',
  },
  visible: {
    clipPath: 'circle(200% at 50% 50%)',
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  },
}

const HOVER_TRANSITION: TargetAndTransition = {
  scale: 1.05,
  boxShadow: '0px 0px 20px 4px rgba(255, 255, 255, 0.5)',
}

const TAP_TRANSITION: TargetAndTransition = {
  scale: 0.9,
  boxShadow: '0px 0px 8px 4px rgba(255, 255, 255, 0.2)',
}

function ClipPath({
  className,
  ...props
}: React.ComponentProps<typeof motion.img>) {
  const [show, setShow] = useState(false)

  return (
    <Card className="p-0">
      <Card.Title className="p-4">Clip Path</Card.Title>
      <Card.Content className="relative">
        <Button
          whileTap={TAP_TRANSITION}
          whileHover={HOVER_TRANSITION}
          onClick={() => {
            setShow(!show)
          }}
          className="z-10 border border-white/10 bg-white/10 shadow-lg shadow-white/5 backdrop-blur-sm"
        >
          {show ? 'Hide' : 'Reveal'}
        </Button>
        <motion.img
          src="/background-color.jpg"
          alt=""
          variants={IMG_VARIANTS}
          initial={false}
          animate={show ? 'visible' : 'hidden'}
          {...props}
          className={cn(
            'absolute inset-0 h-full w-full object-cover',
            className,
          )}
        />
      </Card.Content>
    </Card>
  )
}

export default ClipPath
