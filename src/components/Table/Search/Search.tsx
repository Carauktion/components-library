import type { FC } from 'react'
import cx from 'classnames'

import TextInput from '../../TextInput/TextInput'
import { FilterType, SortState } from '../Sort/Sort'
import Select from '../../Select/Select'
import type { Option } from '../../Select/Select'

type Props = {
  item: {
    id: string
    name: string
    state?: SortState
    filterType?: FilterType
    options?: Option[]
    value?: string
  }
  withSeparator?: boolean
  onChange: (id: string) => void
  className?: string
  wrapperClassName?: string
}

const Search: FC<Props> = ({
  item,
  onChange,
  withSeparator = false,
  className = '',
  wrapperClassName = '',
}) => {
  if (item.value === undefined) return <div />

  const ClearIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )

  return (
    <div className={cx('flex items-center justify-between gap-[20px] px-[8px]', wrapperClassName)}>
      {item.filterType === FilterType.TextInput && (
        <TextInput
          name={item.name}
          value={item.value}
          onChange={(event) => onChange(event.target.value)}
          className={`max-w-none ${className}`}
          inputClassName={item.value ? 'pr-[25px]' : ''}
          icon={item.value ? ClearIcon : undefined}
          iconClassName="top-3 right-[7px] text-light-dark hover:text-medium"
          onIconClick={() => onChange('')}
        />
      )}
      {item.filterType === FilterType.Select && item.options && (
        <Select
          className={`w-[100%] ${className}`}
          selectedOption={item.options?.find((option) => option.value === item.value) || null}
          options={item.options}
          placeholder="Select an option"
          onChange={(option: any) => onChange(option.value)}
        />
      )}
      {withSeparator && <div className="w-[1px] h-full bg-light-3" />}
    </div>
  )
}

export default Search
