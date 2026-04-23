import { type Variants } from 'motion/react'
import { useRef } from 'react'

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
} from '@/patchwork/components'
import { OFFSET, STEP } from '@/patchwork/constants'
import { Container } from '@/shared/components'
import { Section } from '@/shared/components/ui'
import { TITLE_VARIANTS } from '@/shared/constants'
import { useAnimateTitle } from '@/shared/hooks'

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
    <Container className="relative overflow-x-hidden bg-[url('/background-dark.jpg')] bg-cover bg-center bg-no-repeat">
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
          Patchwork
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
