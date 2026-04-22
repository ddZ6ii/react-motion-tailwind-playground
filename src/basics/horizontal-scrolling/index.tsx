import { useRef } from 'react'

import { TITLE_VARIANTS } from '@/basics/common/constants'
import { Container } from '@/basics/common/components'
import { Section } from '@/basics/common/components/ui'
import { useAnimateTitle } from '@/basics/common/hooks'
import { Caroussel } from '@/basics/horizontal-scrolling/components'

function HorizontalScrolling() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const controls = useAnimateTitle(sectionRef)
  return (
    <Container className="bg-linear-to-b from-[#010102] via-[#055a81] to-[#010102] px-0! text-slate-100">
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

export { HorizontalScrolling }
