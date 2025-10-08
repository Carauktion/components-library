import { useState } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import cx from 'classnames'
import Spinner from '../Spinner/Spinner'

type Props = {
  className?: string
  dropdownClassName?: string
  buttonClassName?: string
  label: string | React.ReactNode
  items: {
    name: string
    onClick?: () => void
    items?: Props['items']
  }[]
  isDisabled?: boolean
  isLoading?: boolean
  noArrow?: boolean
  align?: 'start' | 'center' | 'end'
}

const variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
}

const Dropdown: React.FC<Props> = ({
  className = '',
  dropdownClassName = '',
  buttonClassName = '',
  label = 'Back',
  items,
  isDisabled = false,
  isLoading = false,
  noArrow = false,
  align = 'start',
}) => {
  const [open, setOpen] = useState(false)

  const renderItems = (items: Props['items']) =>
    items.map((item, i) =>
      item.items ? (
        <DropdownMenu.Sub key={i}>
          <DropdownMenu.SubTrigger className="py-[10px] px-[16px] hover:bg-light-4-tint w-full text-left truncate flex flex-row items-center justify-between cursor-pointer focus:outline-none data-[state=open]:bg-light-4-tint">
            <span className="block w-full truncate" title={item.name}>
              {item.name}
            </span>
            <ChevronRightIcon
              className="h-5 w-5 text-dark group-hover:text-primary"
              aria-hidden="true"
            />
          </DropdownMenu.SubTrigger>
          <DropdownMenu.Portal>
            <DropdownMenu.SubContent
              alignOffset={-10}
              sideOffset={-8}
              className={cx(
                'z-10 overflow-auto max-h-[290px] rounded-md shadow-lg border-[1px] border-light-2',
                dropdownClassName
              )}
            >
              <motion.div
                className="w-full bg-white rounded-md shadow-lg focus:outline-none"
                variants={variants}
                initial="hidden"
                animate="visible"
              >
                {renderItems(item.items)}
              </motion.div>
            </DropdownMenu.SubContent>
          </DropdownMenu.Portal>
        </DropdownMenu.Sub>
      ) : (
        <DropdownMenu.Item
          key={i}
          className="py-[10px] px-[16px] hover:bg-light-4-tint w-full text-left flex flex-row items-center justify-between cursor-pointer focus:outline-none"
          title={item.name}
          onClick={item.onClick}
        >
          <span className="block w-full truncate"> {item.name}</span>
        </DropdownMenu.Item>
      )
    )

  return (
    <div className={cx('relative text-left w-min', className)}>
      <DropdownMenu.Root open={open} onOpenChange={setOpen}>
        <DropdownMenu.Trigger asChild disabled={isDisabled || isLoading}>
          <div>
            <button
              className={cx(
                'group flex w-full whitespace-nowrap justify-center items-center gap-[5px] bg-light-3-tint border-[2px] border-light-3-tint text-[14px] rounded-[6px] font-semibold py-[8px] pl-[16px] pr-[8px] text-dark focus:outline-none transition-all',
                'hover:bg-white hover:border-primary',
                open && '!bg-white !border-primary',
                isDisabled &&
                  '!bg-light-3-tint !border-light-3-tint opacity-40',
                buttonClassName
              )}
              disabled={isDisabled || isLoading}
            >
              <span className={cx(isLoading && 'invisible')}>{label}</span>
              {!noArrow && (
                <ChevronDownIcon
                  className={cx(
                    'h-5 w-5 text-dark group-hover:text-primary transition-all',
                    open && 'text-primary',
                    isDisabled && '!text-dark'
                  )}
                  aria-hidden="true"
                />
              )}
              {isLoading && (
                <Spinner
                  className="absolute scale-[0.4] -translate-y-[7px]"
                  innerClassName="!text-dark"
                />
              )}
            </button>
          </div>
        </DropdownMenu.Trigger>

        <AnimatePresence>
          {open && (
            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className={cx(
                  'z-10 overflow-auto rounded-md',
                  dropdownClassName
                )}
                sideOffset={8}
                style={{
                  minWidth: 'var(--radix-dropdown-menu-trigger-width)',
                }}
                align={align}
              >
                <motion.div
                  className="w-full bg-white rounded-md shadow-lg border-[1px] border-light-2 focus:outline-none"
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                >
                  {renderItems(items)}
                </motion.div>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          )}
        </AnimatePresence>
      </DropdownMenu.Root>
    </div>
  )
}

export default Dropdown
