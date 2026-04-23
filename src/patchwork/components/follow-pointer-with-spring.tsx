import { motion } from 'motion/react'
import { useRef, useState } from 'react'

import { useFollowPointer } from '@/patchwork/hooks'
import { Card, Label, Switch } from '@/shared/components/ui'
import { cn } from '@/shared/utilities'

function FollowPointerWithSpring() {
  const ballRef = useRef<HTMLDivElement>(null)
  const [isClamped, setIsClamped] = useState(true)
  const { x, y } = useFollowPointer(ballRef, { clampToParent: isClamped })

  return (
    <Card className="space-y-4">
      <Card.Title>Follow Pointer</Card.Title>
      <Card.Content className="group flex-col gap-4">
        {/* Toggle switch */}
        <div className="flex w-full items-center justify-center gap-2 text-center text-sm text-gray-500">
          <Label
            htmlFor="clamp-toggle"
            className={cn('font-mono', !isClamped && 'text-white')}
          >
            Unclamped
          </Label>
          <Switch
            id="clamp-toggle"
            aria-label={`${isClamped ? 'Clamp' : 'Unclamp'} cursor tracker`}
            checked={isClamped}
            onChange={(e) => {
              setIsClamped(e.target.checked)
            }}
          />
          <Label
            htmlFor="clamp-toggle"
            className={cn('font-mono', isClamped && 'text-white')}
          >
            Clamped
          </Label>
        </div>

        <div className="relative w-full flex-1 rounded-md border border-dashed border-white/60">
          {/* Pointer tracking ball */}
          <motion.div
            style={{
              x,
              y,
            }}
            ref={ballRef}
            className="pointer-events-none size-10 rounded-full border border-lime-500/20 bg-radial-[at_50%_50%] from-lime-100/90 to-lime-500/60 shadow-[0_0_20px_8px] ring inset-ring shadow-lime-300/80 inset-ring-lime-500/50 backdrop-blur-sm"
          />

          {/* Crosshairs */}
          <div className="absolute top-1/2 left-1/2 w-4 -translate-x-1/2 -translate-y-1/2 border-b border-b-white/60" />
          <div className="absolute top-1/2 left-1/2 w-4 -translate-x-1/2 -translate-y-1/2 rotate-90 border-b border-b-white/60" />
        </div>
      </Card.Content>
    </Card>
  )
}

export default FollowPointerWithSpring
