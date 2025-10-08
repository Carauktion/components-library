import type { FC, ReactNode } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import cx from 'classnames'

import Button from '../../Button/Button'

type Props = {
  className?: string
  children: ReactNode
  onShowAllClick: () => void
  onCloseClick: () => void
  label?: string
  buttonLabel?: string
}

const ColumnsView: FC<Props> = ({
  className = '',
  onShowAllClick,
  onCloseClick,
  children,
  label,
  buttonLabel,
}) => {
  return (
    <div
      className={cx(
        'z-10 fixed right-0 top-0 bg-white w-[286px] shadow-md cursor-pointer h-screen overflow-y-auto',
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-light-3-tint px-[20px] py-[24px]">
        <p className="text-[20px] font-semibold truncate">
          {label || 'Columns'}
        </p>
        <button
          onClick={onCloseClick}
          className="hover:bg-light-4-tint rounded-full p-[6px] text-dark transition-all duration-100 outline-0"
        >
          <XMarkIcon className="h-7 w-7" aria-hidden="true" />
        </button>
      </div>
      <div className=" flex flex-col px-[20px] py-[18px] gap-[10px]">
        {children}
        <Button
          className="mt-[35px] !bg-light-4-tint !border-light-4-tint hover:!bg-light-3-tint hover:!border-light-3-tint"
          label={buttonLabel || 'Show All'}
          onClick={onShowAllClick}
        />
      </div>
    </div>
  )
}

export default ColumnsView
