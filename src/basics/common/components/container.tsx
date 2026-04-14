import { cn } from '@/shared/utilities'

function Container({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={cn('relative min-h-screen p-8 lg:p-40', className)}
    />
  )
}

export default Container
