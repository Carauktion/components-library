import { forwardRef } from 'react'
import cx from 'classnames'

type Props = {
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  indeterminate?: boolean
  className?: string
  label?: string
  id?: string
}

const Checkbox = forwardRef<HTMLInputElement, Props>(
  (
    {
      checked = false,
      onChange,
      disabled = false,
      indeterminate = false,
      className = '',
      label,
      id,
    },
    ref
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange && !disabled) {
        onChange(e.target.checked)
      }
    }

    return (
      <label
        className={cx(
          'inline-flex items-center gap-2 cursor-pointer',
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
      >
        <input
          ref={ref}
          id={id}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          className={cx(
            'w-[16px] h-[16px] cursor-pointer appearance-none border-2 rounded transition-all',
            'border-light-3 bg-white',
            'checked:bg-primary checked:border-primary hover:checked:bg-primary hover:checked:border-primary',
            'checked:bg-[url("data:image/svg+xml,%3csvg%20viewBox=%270%200%2016%2016%27%20fill=%27white%27%20xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath%20d=%27M12.207%204.793a1%201%200%20010%201.414l-5%205a1%201%200%2001-1.414%200l-2-2a1%201%200%20011.414-1.414L6.5%209.086l4.293-4.293a1%201%200%20011.414%200z%27/%3e%3c/svg%3e")]',
            'disabled:bg-light-3-tint disabled:border-light-3-tint disabled:cursor-not-allowed',
            'focus:outline-none',
            indeterminate &&
              'bg-[url("data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20fill=%27none%27%20viewBox=%270%200%2016%2016%27%3e%3cpath%20stroke=%27white%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%20stroke-width=%272%27%20d=%27M4%208h8%27/%3e%3c/svg%3e")] !bg-primary !border-primary',
            disabled && 'cursor-not-allowed'
          )}
        />
        {label && (
          <span className={cx('text-sm select-none', disabled && 'cursor-not-allowed')}>
            {label}
          </span>
        )}
      </label>
    )
  }
)

Checkbox.displayName = 'Checkbox'

export default Checkbox

