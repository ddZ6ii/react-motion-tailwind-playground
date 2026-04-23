import { cn } from '@/shared/utilities'

export default function Container({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={cn(
        'relative min-h-screen bg-linear-to-b from-[#010102] via-[#055a81] to-[#010102] p-8 text-slate-100 lg:p-40',
        className,
      )}
    />
  )
}
