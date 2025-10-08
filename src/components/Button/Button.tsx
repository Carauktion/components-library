import cx from 'classnames'
import Spinner from '../Spinner/Spinner'

type Props = {
  className?: string
  iconClassName?: string
  label?: string
  onClick?: () => void
  isPrimary?: boolean
  isLoading?: boolean
  icon?: React.ReactNode
  isDisabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onMouseUp?: () => void
}

const Button: React.FC<Props> = ({
  className = '',
  iconClassName = '',
  label,
  isPrimary = false,
  isLoading,
  icon,
  onClick,
  isDisabled = false,
  type,
  onMouseUp,
}) => {
  return (
    <button
      type={type}
      title={label}
      disabled={isDisabled || isLoading}
      className={cx(
        'relative group transition-all flex items-center justify-center border-[2px] border-light-3-tint bg-light-3-tint py-[8px] px-[16px] gap-[10px] text-[14px] rounded-[6px] font-semibold',
        !isLoading && 'hover:border-primary hover:bg-background',
        !isDisabled &&
          isPrimary &&
          `!bg-primary !border-primary text-background ${
            !isLoading && 'hover:!border-primary-shade hover:!bg-primary-shade'
          }`,
        isDisabled &&
          '!border-light-3-tint !bg-light-3-tint !text-dark opacity-40 hover:!border-light-3-tint hover:!bg-light-3-tint cursor-not-allowed',
        isLoading && 'cursor-not-allowed',
        className
      )}
      onClick={onClick}
      onMouseUp={onMouseUp}
    >
      {icon && (
        <span
          className={cx(
            'flex items-center text-dark group-hover:text-primary',
            isDisabled && 'group-hover:!text-dark',
            iconClassName
          )}
        >
          {icon}
        </span>
      )}
      {label && (
        <span className={cx('truncate', isLoading && 'invisible')}>
          {label}
        </span>
      )}
      {isLoading && (
        <Spinner
          className="absolute scale-[0.4] -translate-y-[7px]"
          innerClassName={isPrimary ? '!text-background' : '!text-dark'}
        />
      )}
    </button>
  )
}

export default Button
