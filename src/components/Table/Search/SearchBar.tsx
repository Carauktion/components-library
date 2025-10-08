import cx from 'classnames'
import type { FC, ReactNode } from 'react'

type Props = {
  className?: string
  tableGrid?: any
  children: ReactNode
}

const SearchBar: FC<Props> = ({ className = '', tableGrid, children }) => {
  return (
    <div
      style={tableGrid}
      className={cx(
        'bg-white grid items-stretch grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] w-full px-[14px] py-[12px]',
        className
      )}
    >
      {children}
    </div>
  )
}

export default SearchBar
