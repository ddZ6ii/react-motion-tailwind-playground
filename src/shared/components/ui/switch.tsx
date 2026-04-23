import { motion } from 'motion/react'
import { useState } from 'react'

import { cn } from '@/shared/utilities'

export default function Switch({
  className,
  checked,
  defaultChecked,
  onChange,
  ...props
}: React.ComponentProps<'input'>) {
  const isControlled = checked !== undefined
  const [internalChecked, setInternalChecked] = useState(
    defaultChecked ?? false,
  )
  const isChecked = isControlled ? checked : internalChecked

  return (
    <label>
      <input
        {...props}
        type="checkbox"
        className="sr-only"
        checked={isChecked}
        onChange={(e) => {
          if (!isControlled) setInternalChecked(e.target.checked)
          onChange?.(e)
        }}
      />
      {/* Track */}
      <div
        aria-hidden="true"
        className={cn(
          'flex h-5 w-9 cursor-pointer items-center justify-start rounded-full bg-transparent px-0.5 outline',
          isChecked && 'justify-end bg-white/10',
          className,
        )}
      >
        {/* Handle */}
        <motion.div
          aria-hidden="true"
          className={cn(
            'h-4 w-4 rounded-full backdrop-blur-sm',
            isChecked ? 'bg-white' : 'bg-white/50',
          )}
          layout
          transition={{
            type: 'spring',
            visualDuration: 0.2,
            bounce: 0.2,
          }}
        />
      </div>
    </label>
  )
}
