import type { Variants } from 'motion'

export const TITLE_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.25, duration: 0.8, ease: 'easeOut' },
  },
}
