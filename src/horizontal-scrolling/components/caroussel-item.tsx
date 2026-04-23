import { CarousselImage } from '@/horizontal-scrolling/components'
import { type TCarousselItem } from '@/horizontal-scrolling/types'

type CarousselItemProps = {
  item: TCarousselItem
}

export default function CarousselItem({ item }: CarousselItemProps) {
  return (
    <div className="group relative aspect-video overflow-hidden rounded-lg border border-white/20 shadow-sm shadow-white/5 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className="transition-transform duration-300 group-hover:scale-102">
        <CarousselImage id={item.id} alt={item.title} />
      </div>

      {/* Overlay shown on hover */}
      <div className="absolute inset-0 z-10 grid place-content-center rounded-lg bg-white/10 text-center font-sans text-5xl font-bold tracking-tight text-white uppercase opacity-0 backdrop-blur-lg transition-all group-hover:opacity-100">
        <h2 className="rounded-md p-4">{item.title}</h2>
      </div>
    </div>
  )
}
