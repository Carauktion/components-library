import type { Dispatch, FC, SetStateAction } from 'react'
import { motion } from 'framer-motion'
import { ExclamationCircleIcon, CheckIcon } from '@heroicons/react/24/solid'
import cx from 'classnames'

export enum TabStatus {
  success = 'success',
  warning = 'warning',
}

export type TabProps = {
  id: string
  name: string
  status?: TabStatus
  counter?: number
  multistep?: {
    stepsAmount: number
    currentStep: number
  }
  hidden?: boolean
  isSmall?: boolean
}

interface Props extends TabProps {
  isActive: string
  layoutId: string
  onClick: Dispatch<SetStateAction<string>>
}

const getStatusIcon = (status: TabStatus) => {
  switch (status) {
    case TabStatus.success:
      return (
        <span className="text-success">
          <CheckIcon className={cx('transition h-4 w-4')} aria-hidden="true" />
        </span>
      )
    case TabStatus.warning:
      return (
        <span className="text-warning">
          <ExclamationCircleIcon
            className={cx('transition h-5 w-5')}
            aria-hidden="true"
          />
        </span>
      )
    default:
      return (
        <span className="text-success">
          <CheckIcon className={cx('transition h-4 w-4')} aria-hidden="true" />
        </span>
      )
  }
}

const Tab: FC<Props> = ({
  id,
  name,
  layoutId,
  isActive = false,
  status,
  multistep,
  counter,
  onClick,
  isSmall = false,
}) => {
  const locale = 'en'

  return (
    <div
      className={cx(
        'relative group transition-all flex items-center justify-center gap-[4px] text-base text-light-dark px-[15px] py-[12px] border-transparent outline-none cursor-pointer',
        isSmall && '!p-2'
      )}
      onClick={() => onClick(id)}
    >
      {status && (
        <span className="flex items-center text-dark">
          {getStatusIcon(status)}
        </span>
      )}
      <span
        className={cx(
          'font-semibold group-hover:text-primary whitespace-nowrap',
          isSmall && 'text-sm',
          isActive === id && 'text-primary'
        )}
      >
        {name}
      </span>
      {!!counter && <span>({counter})</span>}
      {multistep && (
        <span>
          ({multistep.currentStep} of {multistep.stepsAmount})
        </span>
      )}
      {isActive === id && (
        <motion.span
          key={locale}
          layoutId={`${layoutId}_${locale}`}
          className="absolute -bottom-0 left-0 w-full h-[3px] z-[5] bg-primary"
          transition={{
            type: 'spring',
            bounce: 0.2,
            duration: 0.6,
          }}
        />
      )}
    </div>
  )
}

export default Tab
