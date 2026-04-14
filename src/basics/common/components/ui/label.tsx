import { cn } from '@/shared/utilities'

function Label({ className, ...props }: React.ComponentProps<'label'>) {
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  return <label className={cn('', className)} {...props} />
}

export default Label
