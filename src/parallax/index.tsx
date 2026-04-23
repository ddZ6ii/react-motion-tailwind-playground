import { MultilayerParallax } from '@/parallax/components'
import { Container } from '@/shared/components'
import { Section } from '@/shared/components/ui'

export function Parallax() {
  return (
    <Container className="px-0! pt-0!">
      <Section>
        <MultilayerParallax>
          <Section.Title className="text-6xl uppercase sm:text-8xl lg:text-9xl">
            Parallax
          </Section.Title>
        </MultilayerParallax>

        <Section.Content className="space-y-8 px-8 lg:px-40">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            aspernatur numquam ipsum fugiat modi? Quia omnis nulla nesciunt
            quaerat, possimus sit harum doloribus iste repellat sunt ipsum
            aspernatur voluptatibus ipsam similique sint id exercitationem
            repudiandae sed eaque accusantium ullam? Optio fugit atque
            reprehenderit dignissimos amet, quos obcaecati dolorem. Odio, non!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
            fugiat corrupti cupiditate quibusdam velit, sequi sint ratione
            libero explicabo possimus minus incidunt voluptates in minima
            repellat iste quo? Quod cupiditate dolorum quos! Animi, nesciunt
            voluptate enim explicabo cum maxime? Suscipit debitis soluta
            voluptatum officia nam dolor architecto harum nisi, illum cum
            reiciendis excepturi odio quisquam esse veritatis earum nulla
            delectus deleniti dolore labore et. Beatae magni ullam, et ipsum
            dolores minus perferendis alias cum perspiciatis voluptates maiores
            temporibus deleniti aliquam quisquam, soluta laboriosam. Molestias
            ex, mollitia fugiat pariatur sit enim culpa voluptatibus ipsum
            doloribus dolores sunt ab? Et, possimus ea!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            nihil cumque eveniet impedit dolore reprehenderit minima, autem at
            deserunt iusto dolores nobis nesciunt. Ea minima voluptatem odit
            voluptatibus fugiat soluta.
          </p>
        </Section.Content>
      </Section>
    </Container>
  )
}
