import cx from 'classnames'
import type { FC } from 'react'
import {
  Disclosure,
  Transition,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { motion } from 'framer-motion'
import useMeasure from 'react-use-measure'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

type Props = {
  className?: string
  children: React.ReactNode
  rowContent: React.ReactNode
  isOpened?: boolean
  buttonClassName?: string
  hiddenIcon?: boolean
}

const AccordionRow: FC<Props> = ({
  className = '',
  buttonClassName = '',
  hiddenIcon = false,
  isOpened = false,
  children,
  rowContent,
}) => {
  const [ref, { height: innerContentHeight }] = useMeasure()

  return (
    <div className={className}>
      <Disclosure key={isOpened.toString()} defaultOpen={isOpened}>
        {({ open }) => (
          <>
            <DisclosureButton
              className={cx(
                'flex w-full justify-start items-center gap-[22px] bg-light-4 border-t-[1px] border-light-3-tint px-[14px] py-[12px] text-left text-[14px] text-dark hover:bg-light-3-tint focus:outline-none transition-colors',
                buttonClassName
              )}
            >
              <ChevronDownIcon
                className={cx(
                  'h-[28px] w-[28px] transition-all duration-200',
                  open && 'rotate-180 transform',
                  hiddenIcon && 'hidden'
                )}
              />
              {rowContent}
            </DisclosureButton>
            <Transition
              leave="transition-all duration-300 ease-out overflow-hidden"
              leaveFrom={`h-[${innerContentHeight}px] opacity-100`}
              leaveTo="h-0 opacity-0"
            >
              <motion.div
                ref={ref}
                className="overflow-hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
              >
                <DisclosurePanel>{children}</DisclosurePanel>
              </motion.div>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  )
}

export default AccordionRow
