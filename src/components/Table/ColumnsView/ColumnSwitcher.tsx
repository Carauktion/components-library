import type { FC } from 'react'
import cx from 'classnames'
import Switcher from '../../Switcher/Switcher'

type Props = {
  enabled: boolean
  disabled?: boolean
  onChange: () => void
  label: string
}

const ColumnSwitcher: FC<Props> = ({
  enabled,
  onChange,
  label,
  disabled = false,
}) => {
  return (
    <div className="flex items-center justify-start gap-[8px]">
      <Switcher isDisabled={disabled} enabled={enabled} onChange={onChange} />
      <p className={cx('text-[14px]', disabled && 'opacity-30')}>{label}</p>
    </div>
  )
}

export default ColumnSwitcher
