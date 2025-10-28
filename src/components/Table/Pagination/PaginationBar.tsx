import type { FC } from 'react'
import cx from 'classnames'

import Tooltip from '../../Tooltip/Tooltip'
import Select from '../../Select/Select'
import type { Option } from '../../Select/Select'
import Pagination from './Pagination'
import { 
  ListBulletIcon, 
  DocumentIcon, 
  BookmarkIcon 
} from '@heroicons/react/24/outline'

export const defaultSizeOptions: Option[] = [
  { name: '25', value: 25 },
  { name: '50', value: 50 },
  { name: '75', value: 75 },
]

type Props = {
  className?: string
  pagesAmount?: number
  currentPage: number
  onPageChange: (page: number) => void
  onSizeChange: any
  onListClick?: () => void
  onDocumentClick?: () => void
  onSaveClick?: () => void
  currentSize: number
  dropdownClassName?: string
  optionClassName?: string
  sizeOptions?: Option[]
}

const PaginationBar: FC<Props> = ({
  className = '',
  pagesAmount,
  currentPage,
  onPageChange,
  onDocumentClick,
  onListClick,
  onSaveClick,
  onSizeChange,
  currentSize,
  dropdownClassName,
  sizeOptions,
}) => {
  return (
    <div
      className={cx(
        'bg-white flex items-center justify-between px-[14px] py-[12px]',
        className
      )}
    >
      <div className="flex items-center gap-[40px]">
        <Pagination
          pagesAmount={pagesAmount}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
        <Select
          className="w-[80px] shrink-0"
          inputClassName="text-[14px]"
          optionClassName="text-[14px]"
          dropdownClassName={dropdownClassName}
          selectedOption={
            sizeOptions
              ? sizeOptions.find((item) => item.value === currentSize) || null
              : defaultSizeOptions.find((item) => item.value === currentSize) ||
                null
          }
          options={sizeOptions || defaultSizeOptions}
          onChange={(option) => onSizeChange(parseInt(option.name))}
        />
      </div>
      <div className="flex items-center justify-center gap-[20px] mr-[30px]">
        {onListClick && (
          <span
            className="flex items-center text-dark cursor-pointer"
            onClick={onListClick}
          >
            <ListBulletIcon className="w-[16px] h-[16px]" />
          </span>
        )}
        {onDocumentClick && (
          <span
            className="flex items-center text-dark cursor-pointer"
            onClick={onDocumentClick}
          >
            <DocumentIcon className="w-4 h-4" />
          </span>
        )}
        {onSaveClick && (
          <Tooltip
            label="Save current preferences"
            style={{ wordBreak: 'break-word' }}
          >
            <BookmarkIcon
              className="p-1.5 transition-colors duration-100 w-9 h-9 cursor-pointer"
              onClick={onSaveClick}
            />
          </Tooltip>
        )}
      </div>
    </div>
  )
}

export default PaginationBar
