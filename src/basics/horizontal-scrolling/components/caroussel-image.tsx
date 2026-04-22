import { useState } from 'react'

import {
  BASE_URL,
  HEIGHT,
  WIDTH,
} from '@/basics/horizontal-scrolling/constants'
import type { TCarousselItem } from '@/basics/horizontal-scrolling/types'
import { Skeleton } from '@/shared/components/ui/skeleton'
import { cn } from '@/shared/utilities'

type CarousselImageProps = Omit<React.ComponentProps<'img'>, 'src'> & {
  id: TCarousselItem['id']
}

function CarousselImage({ className, id, ...props }: CarousselImageProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded && <CarousselImageSkeleton />}

      <img
        width={WIDTH}
        height={HEIGHT}
        {...props}
        alt={props.alt ?? ''}
        src={`${BASE_URL}/${id}/${WIDTH.toString()}/${HEIGHT.toString()}`}
        className={cn('block bg-no-repeat object-contain', className)}
        onLoad={() => {
          setLoaded(true)
        }}
      />
    </>
  )
}

function CarousselImageSkeleton() {
  return <Skeleton className="h-180 w-180" />
}

export default CarousselImage
