import { AnimatedBeam } from '@/hero/components'
import { GRID_SIZE } from '@/hero/constants'
import { Container } from '@/shared/components'
import { Section } from '@/shared/components/ui'

export function Hero() {
  return (
    <Container
      className="relative overflow-clip bg-neutral-900 bg-[linear-gradient(to_right,#272727_1px,transparent_1px),linear-gradient(to_bottom,#272727_1px,transparent_1px)]"
      style={{
        backgroundSize: `${GRID_SIZE.toString()}px ${GRID_SIZE.toString()}px`,
      }}
    >
      {Array.from({ length: 10 }).map((_, index) => (
        <AnimatedBeam key={index} />
      ))}

      <Section>
        <Section.Content></Section.Content>
      </Section>
    </Container>
  )
}
