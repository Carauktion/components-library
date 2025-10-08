import type { FC, ReactNode } from 'react'
import cx from 'classnames'

type Props = {
  children?: ReactNode
  onMouseEnter?: (e: any) => any
  onClick?: any
  title?: string
  className?: string
  cellClassName?: string
  noTruncate?: boolean
}

const Cell: FC<Props> = ({
  children,
  onClick,
  onMouseEnter,
  title,
  className,
  cellClassName,
  noTruncate = false,
}) => {
  return (
    <div
      className={cx(
        'flex items-center justify-between text-[14px] gap-[20px] px-[8px]',
        className
      )}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      <div
        className={cx('w-auto', cellClassName, !noTruncate && 'truncate')}
        title={
          title ??
          (typeof children === 'string' || typeof children === 'number'
            ? children?.toString()
            : '')
        }
      >
        {children || '-'}
      </div>
    </div>
  )
}

export default Cell
