import { Layout, Progress } from '@/basics/common/components'
import { KeepScrolling } from '@/basics/keep-scrolling'
import { Patchwork } from '@/basics/patchwork'

export function Basics() {
  return (
    <Layout>
      <Progress />
      <Patchwork />
      <KeepScrolling />
    </Layout>
  )
}
