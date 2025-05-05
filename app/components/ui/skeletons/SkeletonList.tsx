import { SkeletonTextBlock } from './SkeletonTextBlock'

export interface SkeletonListProps {
  count?: number
  item?: React.ElementType
  className?: string
}

export function SkeletonList({
  count = 5,
  item: Item = SkeletonTextBlock,
  className = ''
}: SkeletonListProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <Item key={i} />
      ))}
    </div>
  )
}
