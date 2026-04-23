import { Layout } from '@/shared/components'

import { AnimateOnScroll } from '@/animate-on-scroll'
import { Hero } from '@/hero'
import { HorizontalScrolling } from '@/horizontal-scrolling'
import { Parallax } from '@/parallax'
import { Patchwork } from '@/patchwork'
import { Progress } from '@/progress'

export default function App() {
  return (
    <Layout>
      <Hero />
      <Parallax />
      <AnimateOnScroll />
      <HorizontalScrolling />
      <Patchwork />
      {/* Vertical scroll progress */}
      <Progress />
    </Layout>
  )
}
