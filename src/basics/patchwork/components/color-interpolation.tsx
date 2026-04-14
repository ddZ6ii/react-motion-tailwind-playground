import { motion, useAnimate } from 'motion/react'
import { useEffect } from 'react'

import { Card } from '@/basics/common/components/ui'
import { cn } from '@/shared/utilities'

const FROM_COLOR = '#ff0088'
const TO_COLOR = '#0d63f8'

function ColorInterpolation({
  className,
  ...props
}: React.ComponentProps<typeof motion.div>) {
  const [motionRef, animate] = useAnimate<HTMLDivElement>()

  useEffect(() => {
    const motionElement = motionRef.current

    const motionAnimation = animate(
      motionElement,
      {
        borderTopColor: [FROM_COLOR, TO_COLOR],
        borderBottomColor: [FROM_COLOR, TO_COLOR],
        borderLeftColor: [FROM_COLOR, TO_COLOR],
      },
      {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'linear',
      },
    )
    return () => {
      motionAnimation.cancel()
    }
  }, [animate, motionRef]) // stable references (linter false positive exhaustive-deps)

  return (
    <Card>
      <Card.Title>Color Interpolation</Card.Title>
      <Card.Content>
        <motion.div
          {...props}
          ref={motionRef}
          className={cn(
            `h-0 w-0 rounded-full border-30 border-r-transparent`,
            className,
          )}
        />
      </Card.Content>
    </Card>
  )
}

export default ColorInterpolation
