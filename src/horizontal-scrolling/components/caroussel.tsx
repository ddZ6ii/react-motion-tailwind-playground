import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

import { CarousselItem } from '@/horizontal-scrolling/components'
import { type TCarousselItem } from '@/horizontal-scrolling/types'

const CAROUSSEL_ITEMS: TCarousselItem[] = [
  {
    id: '959',
    title: 'Fireworks',
  },
  {
    id: '564',
    title: 'Canyons',
  },
  {
    id: '903',
    title: 'Milky Way',
  },
  {
    id: '631',
    title: 'Life',
  },
  {
    id: '679',
    title: 'Golden Ratio',
  },
  {
    id: '855',
    title: 'Balance',
  },
  {
    id: '524',
    title: 'Perspective',
  },
  {
    id: '553',
    title: 'Fall',
  },
  {
    id: '893',
    title: 'Dynamism',
  },
] as const

export default function Caroussel() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: targetRef })
  //👇 Adjust output range based on caroussel scroll
  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-82%'])

  return (
    //👇 The section is 300vh to ensure we have enough scroll space for the animation to play out
    <div ref={targetRef} className="relative h-[300dvh]">
      {/*👇 The sticky div is 100dvh to ensure it takes the entire viewport height */}
      <div className="sticky top-0 grid h-screen w-full items-center">
        <motion.ul className="flex justify-between gap-8" style={{ x }}>
          {CAROUSSEL_ITEMS.map((item) => (
            <li
              key={item.title}
              className="flex-1 shrink-0 basis-80 sm:basis-120 lg:basis-200"
            >
              <CarousselItem item={item} />
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  )
}
