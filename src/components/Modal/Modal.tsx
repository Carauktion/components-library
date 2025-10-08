import React, { Fragment, forwardRef, useRef, useEffect, useCallback } from 'react'
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  Portal,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import cx from 'classnames'
import { twMerge } from 'tailwind-merge'

type Props = {
  title: string | React.ReactNode
  onClose?: () => void
  afterLeave?: () => void
  isOpen: boolean
  innerClassName?: string
  overlayClassName?: string
  wrapperClassName?: string
  children: React.ReactNode
  headless?: boolean
}

const SCROLL_EDGE_TOLERANCE_PX = 38

type ClickArea = 'backdrop' | 'overlay' | 'panel' | null

type LastClick = {
  area: ClickArea
  nearEdge: boolean
}

const Modal = forwardRef<HTMLDivElement, Props>(
  (
    {
      title,
      onClose,
      isOpen,
      afterLeave,
      innerClassName,
      overlayClassName,
      wrapperClassName,
      children,
      headless = false,
    },
    ref
  ) => {
    const lastClickRef = useRef<LastClick>({ area: null, nearEdge: false })
    const escTriggeredRef = useRef(false)
    const panelRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      if (!isOpen) return
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          escTriggeredRef.current = true
        }
      }
      window.addEventListener('keydown', onKey, { capture: true })
      return () => window.removeEventListener('keydown', onKey, { capture: true } as any)
    }, [isOpen])

    const onBackdropMouseDownCapture = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      const nearRightEdge = (window.innerWidth - e.clientX) <= SCROLL_EDGE_TOLERANCE_PX
      lastClickRef.current = { area: 'backdrop', nearEdge: nearRightEdge }
    }, [])

    const handleDialogClose = useCallback(() => {
      if (!onClose) return

      if (escTriggeredRef.current) {
        escTriggeredRef.current = false
        onClose()
        return
      }

      const { area, nearEdge } = lastClickRef.current

      if (area === 'backdrop' && !nearEdge) {
        onClose()
        return
      }

      if (area === 'overlay' && !nearEdge) {
        onClose()
        return
      }

    }, [onClose])

    const handleScrollAreaMouseDownCapture = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      const el = e.currentTarget
      const rect = el.getBoundingClientRect()
      const scrollbarWidth = el.offsetWidth - el.clientWidth
      const rightGap = rect.right - e.clientX
      const nearRightEdge = rightGap <= Math.max(scrollbarWidth, 8) || (window.innerWidth - e.clientX) <= SCROLL_EDGE_TOLERANCE_PX
      const insidePanel = panelRef.current ? panelRef.current.contains(e.target as Node) : false

      lastClickRef.current = { area: insidePanel ? 'panel' : 'overlay', nearEdge: nearRightEdge }
    }, [])
    return (
      <Transition appear show={isOpen} as={Fragment}>
        <Portal>
        <Dialog
          as="div"
          className="relative z-[99999]"
          onClose={handleDialogClose}
        >
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={afterLeave}
          >
            <div className="fixed inset-0 bg-black bg-opacity-40" onMouseDownCapture={onBackdropMouseDownCapture} />
          </TransitionChild>

            <div
              ref={ref}
              className="fixed inset-0 overflow-y-auto z-[99999]"
            onMouseDownCapture={handleScrollAreaMouseDownCapture}
          >
            <div
              className={cx(
                'flex min-h-full items-center justify-center p-4 text-center',
                overlayClassName
              )}
            >
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel
                  ref={panelRef}
                  className={twMerge(
                    'w-full max-w-[600px] transform rounded-[20px] bg-white text-left align-middle shadow-xl transition-all min-h-[100px]',
                    innerClassName
                  )}
                >
                  {headless ? (
                    <button
                      className="hover:bg-light-3-tint rounded-full p-[7px] text-dark transition-all duration-100 outline-0 absolute right-[20px] top-[22px] z-50"
                      hidden={!onClose}
                      onClick={onClose}
                    >
                      <XMarkIcon className="h-7 w-7" aria-hidden="true" />
                    </button>
                  ) : (
                    <div className="min-h-[62px] bg-light-4-tint py-[10px] px-[20px] rounded-t-[20px] flex items-center justify-between">
                      <div className="font-bold text-lg md:text-xl text-dark truncate">
                        {title}
                      </div>
                      <button
                        className="hover:bg-light-3-tint rounded-full p-[7px] text-dark transition-all duration-100 outline-0"
                        hidden={!onClose}
                        onClick={onClose}
                      >
                        <XMarkIcon className="h-7 w-7" aria-hidden="true" />
                      </button>
                    </div>
                  )}
                  <div className={cx('p-6', wrapperClassName)}>{children}</div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
        </Portal>
      </Transition>
    )
  }
)

export default Modal
