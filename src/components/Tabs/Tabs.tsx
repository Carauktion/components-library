import type { Dispatch, FC, SetStateAction } from 'react'
import cx from 'classnames'

import Tab from './Tab/Tab'
import type { TabProps } from './Tab/Tab'

type Props = {
  className?: string
  isSmall?: boolean
  layoutId: string
  items: TabProps[]
  isActive: string
  onClick: Dispatch<SetStateAction<string>>
}

const Tabs: FC<Props> = ({
  className = '',
  layoutId,
  items,
  isActive,
  onClick,
  isSmall,
}) => {
  return (
    <div
      className={cx(
        'transition-all flex items-end gap-[7px] border-b border-b-light-3-tint px-[26px] w-full overflow-x-auto',
        isSmall && '!px-4',
        className
      )}
    >
      {items
        .filter((item) => !item.hidden && item.id)
        .map((item, i) => (
          <Tab
            key={i}
            id={item.id}
            layoutId={layoutId}
            name={item.name}
            isSmall={isSmall}
            onClick={onClick}
            isActive={isActive}
            multistep={item.multistep}
            counter={item.counter}
            status={item.status}
          />
        ))}
    </div>
  )
}

export default Tabs
