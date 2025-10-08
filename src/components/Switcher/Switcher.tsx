import cx from 'classnames'
import type { FC } from 'react'
import { Switch } from '@headlessui/react'

type Props = {
  className?: string
  enabled: boolean
  isDisabled?: boolean
  onChange: () => void
  label?: string
}

const Switcher: FC<Props> = ({
  className = '',
  enabled = false,
  onChange,
  isDisabled = false,
  label,
}) => {
  return (
    <div
      className={cx(
        'flex items-center',
        className,
        isDisabled && 'pointer-events-none !cursor-not-allowed'
      )}
    >
      <Switch
        checked={enabled}
        onChange={onChange}
        disabled={isDisabled}
        className={cx(
          'group relative bg-light-3-tint inline-flex h-[16px] w-[28px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out',
          'hover:bg-light-3',
          'focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75',
          enabled && '!bg-fo-accent hover:!bg-fo-accent',
          isDisabled && 'opacity-50 hover:!bg-light-3-tint',
          enabled && isDisabled && 'hover:!bg-fo-accent'
        )}
      >
        <span
          aria-hidden="true"
          className={cx(
            'pointer-events-none translate-x-0 inline-block h-[12px] w-[12px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out',
            'group-hover:bg-fo-accent-light',
            enabled && 'translate-x-3'
          )}
        />
      </Switch>
      <label
        className={cx(
          'ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer truncate',
          isDisabled && '!cursor-not-allowed'
        )}
        onClick={onChange}
      >
        {label}
      </label>
    </div>
  )
}

export default Switcher
