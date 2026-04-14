import { cn } from '@/shared/utilities'

function LayoutRoot({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={cn('relative grid min-h-screen bg-slate-50', className)}
    />
  )
}

function Title({ className, children, ...props }: React.ComponentProps<'h1'>) {
  return (
    <h1
      {...props}
      className={cn('text-center text-4xl font-bold lg:text-8xl', className)}
    >
      {children}
    </h1>
  )
}

const Layout = Object.assign(LayoutRoot, { Title })

export default Layout
