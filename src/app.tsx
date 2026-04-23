import { Layout } from '@/shared/components'

import { AnimateOnScroll } from '@/animate-on-scroll'
import { HorizontalScrolling } from '@/horizontal-scrolling'
import { Patchwork } from '@/patchwork'
import { Progress } from '@/progress'

export default function App() {
  return (
    <Layout>
      <AnimateOnScroll />
      <HorizontalScrolling />
      <Patchwork />
      {/* Vertical scroll progress */}
      <Progress />
    </Layout>
  )
}
