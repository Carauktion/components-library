import { forwardRef } from 'react'
import type { HTMLInputTypeAttribute, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import cx from 'classnames'

type Props = {
  className?: string
  inputClassName?: string
  label?: string
  subLabel?: string
  id?: string
  placeholder?: string
  name?: string
  type?: HTMLInputTypeAttribute
  isRequired?: boolean
  value?: string | number
  onChange?: (e: any) => void
  onInput?: (e: any) => void
  onKeyDown?: (e: any) => void
  onKeyUp?: (e: any) => void
  onFocus?: (e: any) => void
  onBlur?: (e: any) => void
  onBeforeInput?: (e: any) => void
  supportingText?: string
  supportingTextWidth?: number
  error?: any
  actionLabel?: string
  actionPosition?: 'left' | 'right'
  onActionClick?: () => void
  disabled?: boolean
  withoutErrorMessage?: boolean
  icon?: ReactNode
  iconClassName?: string
  onIconClick?: () => void
  readOnly?: boolean
  warning?: string
}

const TextInput = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      inputClassName,
      iconClassName,
      label,
      subLabel,
      id,
      name,
      type = 'text',
      placeholder,
      isRequired = false,
      value,
      onChange,
      onInput,
      onFocus,
      onBlur,
      onBeforeInput,
      supportingText,
      supportingTextWidth = 38,
      onKeyDown,
      onKeyUp,
      error,
      actionLabel,
      actionPosition,
      onActionClick,
      disabled = false,
      withoutErrorMessage = false,
      icon,
      onIconClick,
      readOnly,
      warning,
    },
    ref
  ) => {
    return (
      <div className={twMerge('transition-all max-w-[257px] w-full', className)}>
        {label && (
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <label
              htmlFor={id}
              className={cx('block text-light-dark text-sm', disabled && '!text-light-3')}
            >
              {label}
              {isRequired && <span className="text-danger"> *</span>}
            </label>
            {subLabel && (
              <span
                className={cx('block text-light text-sm truncate', disabled && '!text-light-3')}
              >
                {subLabel}
              </span>
            )}
          </div>
        )}
        <div className="relative">
          <input
            ref={ref}
            className={cx(
              'peer h-[40px] bg-white border text-[16px] border-light-3 rounded py-[7px] px-[15px] text-dark w-full transition-colors duration-100 !outline-0 !outline-offset-0',
              error && 'border-danger outline !outline-[1px] outline-danger',
              'hover:bg-fo-accent-tint hover:border-fo-accent hover:outline hover:!outline-[1px] hover:outline-fo-accent',
              'focus:border-fo-accent focus:outline focus:!outline-[1px] focus:outline-fo-accent',
              disabled &&
                '!bg-transparent !border !border-light-3-tint !text-light-3 !py-[7px] !px-[15px] cursor-not-allowed !outline-none',
              inputClassName
            )}
            id={id}
            type={type}
            name={name}
            placeholder={placeholder}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            onInput={onInput}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onBeforeInput={onBeforeInput}
            disabled={disabled}
            readOnly={readOnly}
            style={supportingText ? { paddingLeft: supportingTextWidth + 7 } : {}}
          />
          {supportingText && (
            <div
              className={cx(
                `flex items-center justify-center text-light-dark text-sm absolute top-px left-px h-[38px] bg-light-4-tint rounded-l pointer-events-none transition-all duration-100 overflow-hidden peer-hover:bg-fo-accent-light peer-hover:w-[${
                  supportingTextWidth - 2
                }px] peer-focus:w-[${supportingTextWidth - 2}px]`,
                error && `w-[${supportingTextWidth - 2}px]`,
                disabled && '!bg-transparent opacity-60'
              )}
              style={{ width: supportingTextWidth }}
            >
              {supportingText}
            </div>
          )}
          {icon && (
            <div
              className={cx('absolute z-10 top-2 right-4 cursor-pointer', iconClassName)}
              onClick={onIconClick}
            >
              {icon}
            </div>
          )}
        </div>
        {((!withoutErrorMessage && error) || actionLabel) && (
          <div className="flex items-start justify-between mt-1">
            {!withoutErrorMessage && error && (
              <div
                className={cx(
                  actionLabel ? 'max-w-[70%]' : 'max-w-full',
                  actionPosition === 'left' && 'order-last'
                )}
              >
                <p className="text-danger text-xs mt-1 break-all">{error}</p>
              </div>
            )}
            {actionLabel && (
              <div
                className={cx(
                  'flex w-full',
                  actionPosition === 'right' ? 'justify-end' : 'justify-start'
                )}
              >
                <button
                  onClick={onActionClick}
                  className={cx('text-medium text-sm underline', disabled && '!text-light-3')}
                  disabled={disabled}
                >
                  {actionLabel}
                </button>
              </div>
            )}
          </div>
        )}
        {warning && <p className="text-warning text-xs mt-1 break-all">{warning}</p>}
      </div>
    )
  }
)

export default TextInput
