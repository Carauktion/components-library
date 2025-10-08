import cx from 'classnames'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid'

export enum SortState {
  'None' = 'none',
  'Asc' = 'asc',
  'Desc' = 'desc',
  'Empty' = 'empty',
}

export enum FilterType {
  'TextInput' = 'TextInput',
  'Select' = 'Select',
}

type Props = {
  item: {
    id: string
    name: string
    state?: SortState
  }
  withSeparator?: boolean
  className?: string
  onClick?: () => void
}

const Sort: React.FC<Props> = ({
  item,
  onClick,
  withSeparator = false,
  className,
}) => {
  return (
    <div
      className={cx(
        'flex items-center justify-between gap-2 pl-2 pr-1',
        className
      )}
    >
      <div
        className={cx(
          'flex items-center justify-start gap-[7px] truncate min-w-0',
          onClick && 'cursor-pointer'
        )}
        onClick={onClick}
        title={item.name}
      >
        <p className="text-[14px] font-semibold truncate min-w-0">
          {item.name}
        </p>
        {item.state && item.state !== SortState.Empty && (
          <div className="flex flex-col">
            <ChevronUpIcon
              className={cx(
                'h-3 w-3 text-light-3',
                item.state === SortState.Asc && '!text-dark'
              )}
            />
            <ChevronDownIcon
              className={cx(
                'h-3 w-3 text-light-3 -mt-1',
                item.state === SortState.Desc && '!text-dark'
              )}
            />
          </div>
        )}
      </div>
      {withSeparator && <div className="w-[1px] h-full bg-light-3" />}
    </div>
  )
}

export default Sort
