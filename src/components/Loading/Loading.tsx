import Skeleton from 'react-loading-skeleton'
import { twMerge } from 'tailwind-merge'

import 'react-loading-skeleton/dist/skeleton.css'

type Props = {
  className?: string
}

const Loading: React.FC<Props> = ({ className }) => {
  return (
    <div className={twMerge('w-[218px]', className)}>
      <Skeleton height={22} borderRadius={30} />
      <Skeleton className="mt-4" width="60%" height={14} borderRadius={30} />
      <Skeleton className="mt-2.5" width="72%" height={14} borderRadius={30} />
    </div>
  )
}

export default Loading
