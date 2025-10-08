import cx from 'classnames'
import type { FC, ReactNode } from 'react'

type Props = {
  className?: string
  children: ReactNode
  isSelected?: boolean
  tableGrid?: any
  onClick?: () => void
}

const Row: FC<Props> = ({
  className = '',
  onClick,
  tableGrid,
  isSelected = false,
  children,
}) => {
  return (
    <div
      style={tableGrid}
      onClick={onClick}
      className={cx(
        'bg-light-2-tint grid items-stretch min-h-[61px] w-full px-[14px] py-2 border-t-[1px] border-light-3-tint hover:!bg-fo-accent-light',
        isSelected && '!bg-fo-accent-tint',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  )
}

export default Row
