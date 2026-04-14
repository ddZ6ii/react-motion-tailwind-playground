import { useScroll } from 'motion/react'
import { useRef } from 'react'

import { Container } from '@/basics/common/components'
import { Section } from '@/basics/common/components/ui'
import { TITLE_VARIANTS } from '@/basics/common/constants'
import type { Artwork } from '@/basics/keep-scrolling/types'
import { ArtworkList } from '@/basics/keep-scrolling/components'
import { useAnimateTitle } from '@/basics/common/hooks'

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

function KeepScrolling() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const sectionContentRef = useRef<HTMLDivElement>(null)

  const controls = useAnimateTitle(sectionRef)

  const { scrollYProgress } = useScroll({
    target: sectionContentRef,
    offset: ['center end', 'end end'],
  })

  return (
    <Container className="overflow-x-hidden bg-linear-to-b from-[#010102] via-[#055a81] to-[#010102] text-slate-100">
      <Section ref={sectionRef}>
        <Section.Title
          animate={controls}
          variants={TITLE_VARIANTS}
          initial="hidden"
        >
          Keep Scrolling
        </Section.Title>

        <Section.Content ref={sectionContentRef}>
          <ArtworkList artworks={ARTWORKS} scrollYProgress={scrollYProgress} />
        </Section.Content>
      </Section>
    </Container>
  )
}

export { KeepScrolling }
