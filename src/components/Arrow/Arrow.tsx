import cx from 'classnames'
import type { FC } from 'react'
import { ChevronDownIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

export enum ArrowType {
  ExtraSmall,
  Small,
  Medium,
  Large,
  Pagination,
}

type Props = {
  className?: string
  withBackground?: boolean
  onClick: () => void
  arrowType: ArrowType
  disabled?: boolean
}

const ExtraSmallArrowIcon = () => (
  <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.13013 4.37044L0 0H8.26025L4.13013 4.37044Z" fill="currentColor" />
  </svg>
)

const PaginationArrowIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 9L5 5L9 1"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <line
      x1="1.25"
      y1="9.25"
      x2="1.25"
      y2="0.75"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </svg>
)

const getArrowIcon = (arrowType: ArrowType) => {
  switch (arrowType) {
    case ArrowType.ExtraSmall:
      return <ExtraSmallArrowIcon />
    case ArrowType.Small:
      return <ChevronDownIcon className={cx('transition h-4 w-4')} aria-hidden="true" />
    case ArrowType.Medium:
      return <ChevronDownIcon className={cx('transition h-6 w-6')} aria-hidden="true" />
    case ArrowType.Pagination:
      return <PaginationArrowIcon />
    case ArrowType.Large:
      return <ArrowRightIcon className={cx('transition h-4 w-4')} aria-hidden="true" />
    default:
      return <ChevronDownIcon className={cx('transition h-4 w-4')} aria-hidden="true" />
  }
}

const Arrow: FC<Props> = ({
  className = '',
  withBackground = false,
  onClick,
  disabled = false,
  arrowType = ArrowType.ExtraSmall,
}) => {
  return (
    <button
      className={cx(
        'transition-all h-[24px] w-[24px] hover:bg-light-4-tint flex items-center justify-center rounded-full',
        arrowType === ArrowType.Large && 'h-[40px] w-[40px]',
        withBackground && 'bg-light-4-tint hover:!bg-light-3-tint',
        disabled && 'bg-transparent hover:!bg-transparent opacity-30',
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      <span className="flex items-center text-dark">{getArrowIcon(arrowType)}</span>
    </button>
  )
}

export default Arrow
