import { useRef } from 'react'

import { Caroussel } from '@/horizontal-scrolling/components'
import { Container } from '@/shared/components'
import { Section } from '@/shared/components/ui'
import { TITLE_VARIANTS } from '@/shared/constants'
import { useAnimateTitle } from '@/shared/hooks'

export function HorizontalScrolling() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const controls = useAnimateTitle(sectionRef)
  return (
    <Container className="px-0!">
      <Section
        ref={sectionRef}
        className="max-w-unset w-unset block w-full! overflow-x-clip"
      >
        <Section.Title
          animate={controls}
          variants={TITLE_VARIANTS}
          initial="hidden"
        >
          Horizontal Scrolling
        </Section.Title>

        <Section.Content>
          <Caroussel />
        </Section.Content>
      </Section>
    </Container>
  )
}
