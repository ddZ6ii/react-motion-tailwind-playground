import { useScroll } from 'motion/react'
import { useRef } from 'react'

import { ArtworkList } from '@/animate-on-scroll/components'
import type { Artwork } from '@/animate-on-scroll/types'
import { Container } from '@/shared/components'
import { Section } from '@/shared/components/ui'
import { TITLE_VARIANTS } from '@/shared/constants'
import { useAnimateTitle } from '@/shared/hooks'

const ARTWORKS: Artwork[] = [
  {
    id: crypto.randomUUID(),
    title: {
      base: 'Moody',
      highlight: 'Clouds.',
    },
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ex exercitationem, nobis cum nostrum corrupti quidem earum molestiae aperiam sit fugiat. Sint totam consequatur illum saepe tempore veniam, eum eius unde quae libero facilis explicabo a excepturi omnis eligendi harum? Nihil, ratione enim accusamus explicabo numquam sed fugiat quaerat vero.',
    image: {
      src: '/clouds.jpg',
      alt: 'Dark moody clouds',
      width: 640,
      height: 512,
    },
  },
  {
    id: crypto.randomUUID(),
    title: {
      base: 'Into the',
      highlight: 'Wilderness',
    },
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta porro eos recusandae temporibus! Voluptatem eos autem omnis! Reprehenderit, doloremque minima tempora odio quod ratione consectetur esse perspiciatis eaque, sit deserunt nobis dolore error et! Sapiente, excepturi! Rem beatae velit accusantium.',
    image: {
      src: '/mountains.jpg',
      alt: 'Man silhouette in front of moody mountains',
      width: 640,
      height: 853,
    },
  },
] as const

export function AnimateOnScroll() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const sectionContentRef = useRef<HTMLDivElement>(null)

  const controls = useAnimateTitle(sectionRef)

  const { scrollYProgress } = useScroll({
    target: sectionContentRef,
    offset: ['center end', 'end end'],
  })

  return (
    <Container className="overflow-x-hidden">
      <Section ref={sectionRef} className="container mx-auto">
        <Section.Title
          animate={controls}
          variants={TITLE_VARIANTS}
          initial="hidden"
        >
          Animate on scroll
        </Section.Title>

        <Section.Content
          ref={sectionContentRef}
          className="place-content-center"
        >
          <ArtworkList artworks={ARTWORKS} scrollYProgress={scrollYProgress} />
        </Section.Content>
      </Section>
    </Container>
  )
}
