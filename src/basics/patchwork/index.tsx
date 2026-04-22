import { type Variants } from 'motion/react'
import { useRef } from 'react'

import { Container } from '@/basics/common/components'
import { Section } from '@/basics/common/components/ui'
import { useAnimateTitle } from '@/basics/common/hooks'
import {
  ClipPath,
  ColorInterpolation,
  Count,
  Drag,
  FadeUpDown,
  FollowPointerWithSpring,
  Gestures,
  Keyframes,
  MeteorShower,
  Reorder,
  ScrollProgression,
  SVGAnimation,
} from '@/basics/patchwork/components'
import { OFFSET, STEP } from '@/basics/patchwork/constants'
import { TITLE_VARIANTS } from '@/basics/common/constants'

const CONTAINER_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
}

const ITEM_POSITION = 6

function Patchwork() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const controls = useAnimateTitle(sectionRef)
  return (
    <Container className="relative overflow-x-hidden bg-[url('/background-dark.jpg')] bg-cover bg-center bg-no-repeat text-slate-100">
      <Section
        ref={sectionRef}
        className="container mx-auto"
        variants={CONTAINER_VARIANTS}
        initial="hidden"
        animate="visible"
      >
        <MeteorShower />

        <Section.Title
          variants={TITLE_VARIANTS}
          initial="hidden"
          animate={controls}
        >
          Basics
        </Section.Title>

        <Section.Content className="mx-auto flex flex-wrap content-center items-center justify-center gap-4">
          <FadeUpDown />
          <Keyframes />
          <Gestures />
          <Drag />
          <SVGAnimation />
          <Count
            options={{
              delay: OFFSET + ITEM_POSITION * STEP,
            }}
          />
          <ClipPath />
          <ColorInterpolation />
          <FollowPointerWithSpring />
          <Reorder />
          <ScrollProgression />
        </Section.Content>
      </Section>
    </Container>
  )
}

export { Patchwork }
