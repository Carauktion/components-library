import cx from 'classnames'
import type { FC } from 'react'

type Props = {
  className?: string
  inputClassName?: string
  id?: string
  placeholder?: string
  label?: string
  name?: string
  value?: string
  onChange?: (value: string) => void
  error?: string
  disabled?: boolean
  register?: any
  isRequired?: boolean
  actionLabel?: string
  actionPosition?: 'left' | 'right'
  onActionClick?: () => void
}

const Textarea: FC<Props> = ({
  className = '',
  inputClassName = '',
  id,
  name,
  placeholder,
  value,
  label,
  isRequired,
  onChange,
  register,
  error,
  disabled = false,
  actionLabel,
  actionPosition,
  onActionClick,
}) => {
  return (
    <div
      className={cx(
        'transition-all',
        className,
        disabled && 'pointer-events-none'
      )}
    >
      {label && (
        <label
          htmlFor={id}
          className={cx(
            'block text-light-dark text-sm pb-2',
            disabled && '!text-light-3'
          )}
        >
          {label}
          &nbsp;
          {isRequired && <span className="text-danger">*</span>}
        </label>
      )}
      <textarea
        className={cx(
          'min-h-[148px] bg-white border border-light-3 rounded py-[7px] px-[15px] text-base text-dark w-full transition-colors duration-100 !outline-offset-0',
          error && '!border-danger outline !outline-[0.5px] !outline-danger',
          'hover:bg-fo-accent-light hover:border-fo-accent hover:outline hover:!outline-[1px] hover:outline-fo-accent',
          'focus:border-fo-accent focus:outline focus:!outline-[1px] focus:outline-fo-accent',
          disabled &&
            '!bg-transparent !border !border-light-3-tint !text-light-3 cursor-not-allowed',
          inputClassName
        )}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        {...(register &&
          register(name, {
            required: {
              value: isRequired,
              message: `${label} is required`,
            },
          }))}
      />
      {(error || actionLabel) && (
        <div className="flex items-start justify-between mt-1">
          {error && (
            <p
              className={cx(
                'text-danger text-xs mt-1 w-full truncate',
                actionLabel ? 'max-w-[70%]' : 'max-w-full',
                actionPosition === 'left' && 'order-last'
              )}
            >
              {error}
            </p>
          )}
          <div
            className={cx(
              'flex w-full',
              actionPosition === 'right' ? 'justify-end' : 'justify-start'
            )}
          >
            {actionLabel && (
              <button
                onClick={onActionClick}
                className={cx(
                  'text-medium text-sm underline',
                  disabled && 'opacity-60 !text-grey-300 cursor-not-allowed'
                )}
                disabled={disabled}
              >
                {actionLabel}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Textarea
