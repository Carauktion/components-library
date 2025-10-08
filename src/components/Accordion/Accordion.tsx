import { useState, useEffect, createContext, useContext } from 'react'
import type { ReactNode, FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import cx from 'classnames'

const AccordionGroupContext = createContext<{
  activeAccordion: string
  setActiveAccordion: Function | null
}>({
  activeAccordion: '',
  setActiveAccordion: null,
})

export const Accordion: FC<{
  className?: string
  innerClassName?: string
  innerContentClassName?: string
  label: string
  labelClassName?: string
  labelHint?: string
  icon?: ReactNode
  value?: string
  isOpened?: boolean
  enableOverflow?: boolean
  children: ReactNode
  disableOpenHide?: boolean
  headerRightItem?: ReactNode
}> = ({
  className,
  innerClassName,
  innerContentClassName,
  icon,
  label,
  labelClassName,
  labelHint,
  value,
  isOpened = false,
  enableOverflow,
  children,
  disableOpenHide = false,
  headerRightItem = <></>,
}) => {
  const { activeAccordion, setActiveAccordion } = useContext(
    AccordionGroupContext
  )
  const [open, setOpen] = useState(
    activeAccordion ? activeAccordion === value : isOpened
  )

  useEffect(() => {
    if (activeAccordion) {
      setOpen(activeAccordion === value)
    }
  }, [activeAccordion])

  const onToggle = () => {
    if (disableOpenHide) {
      return
    }
    if (setActiveAccordion) {
      setActiveAccordion(!open ? value : '')
    }
    setOpen(!open)
  }

  return (
    <div className={className}>
      <div
        className={cx(
          'flex w-full justify-between items-center gap-[30px] rounded-[11px] bg-light-4-tint font-semibold border border-light-3-tint px-[20px] py-[12px] text-left text-[18px] text-dark focus:outline-none transition-all duration-[180ms] cursor-pointer',
          open && 'rounded-b-none',
          !disableOpenHide && 'hover:bg-light-3-tint',
          innerClassName
        )}
        onClick={onToggle}
      >
        <div className="flex flex-row items-center justify-between w-full h-[45px]">
          <div className="flex items-center gap-[10px]">
            {icon}
            <div className="flex items-center">
              <span className={labelClassName}>{label}</span>
              <div className="ml-1 text-sm text-light-dark">{labelHint}</div>
            </div>
          </div>
          {headerRightItem}
        </div>
        {!disableOpenHide && (
          <ChevronDownIcon
            className={cx(
              'h-6 w-6 transition-all duration-[280ms]',
              open && 'rotate-180 transform'
            )}
          />
        )}
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
            }}
            exit={{ height: 0, translateY: -16, opacity: 0 }}
            transition={{ duration: 0.28, type: 'tween' }}
            className={cx(!enableOverflow && 'overflow-hidden')}
          >
            <div
              className={cx(
                'p-[20px] border border-light-3-tint border-t-0 rounded-b-[11px]',
                innerContentClassName
              )}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export const AccordionGroup: FC<{
  className?: string
  initialValue?: string
  children: ReactNode
}> = ({ className, initialValue = '', children }) => {
  const [activeAccordion, setActiveAccordion] = useState(initialValue)

  return (
    <div className={className}>
      <AccordionGroupContext.Provider
        value={{ activeAccordion, setActiveAccordion }}
      >
        {children}
      </AccordionGroupContext.Provider>
    </div>
  )
}

export default Accordion
